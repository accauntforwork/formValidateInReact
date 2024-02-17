const validateForm = ({
  companyNameRef,
  emailRef,
  countryRef,
  phoneRef,
  setErrors,
}) => {
  let isValid = true;
  const newErrors = {
    companyName: "",
    email: "",
    country: "",
    phone: "",
  };

  if (!companyNameRef.current.value.trim()) {
    newErrors.companyName = "Kompaniya nomi kiritilishi shart";
    console.log(newErrors.companyName);
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (
    !emailRef.current.value.trim() ||
    !emailRegex.test(emailRef.current.value)
  ) {
    newErrors.email = "Email ni to'g'ri kiriting";
    isValid = false;
  }

  if (countryRef.current.value === "") {
    newErrors.country = "Mamlakatni kiritish shart";
    isValid = false;
  }

  const phoneRegex = /^\+?[0-9]*$/;
  if (
    !phoneRef.current.value.trim() ||
    !phoneRegex.test(phoneRef.current.value)
  ) {
    newErrors.phone = "Telefon raqamni to'g'ri kiriting";
    isValid = false;
  }

  setErrors(newErrors);
  return isValid;
};

export { validateForm };
