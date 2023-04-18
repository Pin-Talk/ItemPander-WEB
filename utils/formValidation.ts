class ValidateForm {
  invalidNumberCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.notBlank(e);
    const regex = /[a-z|A-Z|ㄱ-ㅎ|가-힣]/g;
    const value = e.target.value;
    if (!regex.test(value)) {
      return '숫자는 불가능합니다.';
    }
  };

  validNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.notBlank(e);
    return (e.target.value = e.target.value.replace(/\D/g, ''));
  };

  validEnglishWithNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.notBlank(e);
    const regex = /^[a-zA-Z0-9]+$/;
    const value = e.target.value;
    if (!regex.test(value)) {
      return '영문과 숫자만 가능합니다.';
    }
  };

  validSpecialString = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.notBlank(e);
    const regex = /[ `~!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/g;
    const value = e.target.value;
    if (!regex.test(value)) {
      return '특수문자를 포함해야 합니다.';
    }
  };

  notBlank = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checkBlank = /\s/g;
    return (e.target.value = e.target.value.replace(checkBlank, ''));
  };
}

export const validateForm = new ValidateForm();
