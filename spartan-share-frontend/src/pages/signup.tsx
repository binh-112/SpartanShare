import React from "react";
import { useState } from "react";

export default function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        console.log("First Name:", firstName);
        console.log("Last Name:", lastName);
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <div className="flex h-screen bg-blue-100">
            <div className="w-2/3 flex items-center justify-center">
                <img src="/logo.jpg" alt="Logo" className="w-500 h-500" />
            </div>
            <div className="w-1/5 p-8 ml-auto mr-auto my-auto">
                <h1 className="text-4xl font-bold text-center mb-6">Create your account</h1>
                <form onSubmit={handleSubmit}>
                    <div className="flex gap-3 mb-3">
                        <input type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="w-1/2 p-2 border border-gray-400 rounded-md"
                        />
                        <input type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="w-1/2 p-2 border border-gray-400 rounded-md"
                        />
                    </div>
                    <input type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 mb-3 border border-gray-400 rounded-md"
                    />
                    <input type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 mb-3 border border-gray-400 rounded-md"
                    />
                    <input type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full p-2 mb-3 border border-gray-400 rounded-md"
                    />
                    <button type="submit"
                        className="w-full p-2 bg-blue-600 border text-white border-gray-100 rounded hover:bg-blue-700 font-semibold"
                    >Create Account</button>
                </form>
                <div className="flex items-center my-4">
                    <hr className="flex-grow border-gray-500"></hr>
                    <span className="px-2 bg-white text-black">Or</span>
                    <hr className="flex-grow border-gray-500"></hr>
                </div>
                <p className="text-center mt-4">Already have an account?{" "}
                    <a href="/login" className="text-blue-600 underline">Log in here</a>
                </p>
            </div>
            </div>
    );

}