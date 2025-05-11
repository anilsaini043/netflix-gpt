export const checkValideData = (email, password) => {
    const isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(email && !isEmail) return "Email is not valid.";
    if(password && !isPassword) return "Password is not valid.";

    return null;
}