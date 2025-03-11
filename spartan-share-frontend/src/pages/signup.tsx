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
        <div className="flex items-center justify-center h-screen bg-blue-100">
            <div className="w-full max-w-xl p-8 bg-white shadow-lg rounded-lg">
                <h1 className="text-4xl font-bold text-center text-blue-500 mb-2">SpartanShare</h1>
                <h2 className="text-2xl font-semibold text-center mb-6">Create a new account</h2>
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
                        className="w-full p-2 bg-blue-200 border border-gray-100 rounded hover:bg-blue-300 font-semibold"
                    >Sign Up</button>
                </form>
                <p className="text-center mt-4">Already have an account?{" "}
                    <a href="/login" className="text-blue-600 underline">Log in</a>
                </p>
            </div>
        </div>
    );

}