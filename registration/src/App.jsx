import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [submittedUser, setSubmittedUser] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedUser(null);

    const newErrors = {};


    // name validation
    if(name.trim()===""){
      newErrors.name="name is required";
    }
// Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!emailPattern.test(email)) {
      newErrors.email = "Enter a valid email";
    }

    if(password===""){
      newErrors.password="Password is required";
    }else if(password.length<6){
      newErrors.password="Password must be at least 6 characters";
    }

    // Confirm password validation
    if (confirmPassword === "") {
      newErrors.confirmPassword =
        "Please confirm your password";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword =
        "Passwords do not match";
    }
setErrors(newErrors);



    if (Object.keys(newErrors).length === 0) {
      setSubmittedUser({
        name,
        email,
        password,
      });
      // optional: clear fields after success
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name :</label>
          <input
            type="text"
            value={name}
            placeholder="enter your name"
            onChange={(event) => setName(event.target.value)}
          />
          {errors.name && (
            <p>{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email">Email :</label>
          <input
            type="text"
            value={email}
            placeholder="enter your email"
            onChange={(event) => setEmail(event.target.value)}
          />
          {errors.email && (
            <p>{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="password">Password :</label>
          <input
            type="password"
            value={password}
            placeholder="enter your password"
            onChange={(event) => setPassword(event.target.value)}
            
          />
          {errors.password && (
            <p>{errors.password}</p>
          )}
        </div>

        <div>
          <label htmlFor="confirmPassword">Password :</label>
          <input
            type="password"
            value={confirmPassword}
            placeholder="enter your confirmPassword"
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          {errors.confirmPassword && (
            <p>{errors.confirmPassword}</p>
            
          )}
        </div>

        <button type="submit">Submit</button>
      </form>

      {submittedUser && (
        <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "12px" }}>
          <h2>Registration Details</h2>
          <p><strong>Name:</strong> {submittedUser.name}</p>
          <p><strong>Email:</strong> {submittedUser.email}</p>
          <p><strong>Password:</strong> {submittedUser.password}</p>
        </div>
      )}
    </div>
  );
};

export default App;
