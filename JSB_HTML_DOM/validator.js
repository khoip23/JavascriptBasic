//hàm validator (constructor function)
function Validator(option) {

    //fn tìm parent selector ngoài cùng có đối số là selector
    function getParent(e, selector) {
        while (e.parentElement) {
            if (e.parentElement.matches(selector)) {
                return e.parentElement;
            }
            e = e.parentElement
        }
    }

    var selectorRules = {}
    function validate(inputElement, rule) {
        var errorMessage;
        var errorElement = getParent(inputElement, '.form-group').querySelector(option.errorSelector)
        //lấy ra các rule của selector
        var rules = selectorRules[rule.selector]

        //lặp qua từng rule & kiểm tra
        //nếu có lỗi thì dừng việc kiểm tra
        for (var i = 0; i < rules.length; ++i) {
            switch (inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    )
                    break
                default:
                    errorMessage = rules[i](inputElement.value)
            }
            if (errorMessage) break;
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            getParent(inputElement, '.form-group').classList.add('invalid')
        }
        else {
            errorElement.innerText = '';
            getParent(inputElement, '.form-group').classList.remove('invalid');
        }

        return !errorMessage;
    }


    var formElement = document.querySelector(option.form)

    if (formElement) {
        formElement.onsubmit = function (e) {
            e.preventDefault();

            var isFormValid = true;
            //lặp qua từ rule và validate luôn
            option.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector)

                var isValid = validate(inputElement, rule)
                if (!isValid) {
                    isFormValid = false
                }
            })

            if (isFormValid) {
                if (typeof option.onSubmit === 'function') {
                    var enableInputs = formElement.querySelectorAll('[name]')
                    var formValues = Array.from(enableInputs).reduce(function (values, input) {
                        switch(input.type){
                            case 'radio':
                            case 'checkbox':
                                values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value
                                break;
                            default:
                                values[input.name] = input.value
                        }
                        return values
                    }, {})
                    option.onSubmit(formValues)
                }
            }
        }
        //xử lý lặp qua mỗi rule và xử lý (lắng nghe sự kiện)
        option.rules.forEach(function (rule) {

            //lưu tất cả các rule cho mỗi input
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test)
            } else {
                selectorRules[rule.selector] = [rule.test]
            }

            var inputElements = formElement.querySelectorAll(rule.selector)
            Array.from(inputElements).forEach(function (inputElements) {
                inputElements.onblur = function () {
                    validate(inputElements, rule)
                }

                inputElements.oninput = function () {
                    var errorElement = getParent(inputElements, '.form-group').querySelector(option.errorSelector)
                    errorElement.innerText = '';
                    getParent(inputElements, '.form-group').classList.remove('invalid');
                }
            })
        });
    }
}

//định nghĩa rules
Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return value ? undefined : message || "this field cannot be blank!"
        }
    };
}

Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\S+@\S+\.\S+$/;
            return regex.test(value) ? undefined : message || "This field must be email!"
        }
    };
}

Validator.isPassword = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^.{6,}$/;
            return regex.test(value) ? undefined : message || "The password must have at least 6 characters."
        }
    };
}

Validator.isConfirmed = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue() ? undefined : message || "Incorrect input value"
        }
    }
}
