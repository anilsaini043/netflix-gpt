export const checkValideData = (name="", email, password) => {
    const isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isName = name.length > 3;

    if(email && !isEmail) return "Email is not valid.";
    if(password && !isPassword) return "Password is not valid.";
    if(name && !isName) return "Full name is not valid.";

    return null;
}