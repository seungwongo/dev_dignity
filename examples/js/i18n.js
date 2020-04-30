var text = "My name is {fullName}. I am from {city}.";

var data = {
  id: "1",
  fullName: "Seungwon Go",
  city: "Jeju",
  company: "ReturnValues"
};

const i18n = {
  en: {
    "My name is {fullName}. I am from {city}.": "My name is {fullName}. I am from {city}."
  },
  ko: {
    "My name is {fullName}. I am from {city}.": "제 이름은 {fullName} 입니다. 저는 {city} 출신입니다."
  }
};

const userLanguage = "en";

function t(form, params = {}) {
  return form.replace(/{[^}]*}/g, match => {
    return params[match.slice(1, -1)];
  });
}

const translation = t(i18n[userLanguage]["My name is {fullName}. I am from {city}."], data);
console.log(translation);