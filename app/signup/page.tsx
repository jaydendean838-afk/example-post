'use client';

export default function Signup() {
    async function Signup(e: any) {
        e.preventDefault();
        const firstName = document.getElementById('firstName') as HTMLInputElement;
        const lastName = document.getElementById('lastName') as HTMLInputElement;
        const userName = document.getElementById('username') as HTMLInputElement;
        const email = document.getElementById('email') as HTMLInputElement;
        const password = document.getElementById('password') as HTMLInputElement;

        const UserData = {
            firstName: firstName.value,
            lastName: lastName.value,
            userName: userName.value,
            email: email.value,
            password: password.value
        }
        try {
            const signResponse = await fetch('https://api-post-feed.onrender.com/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(UserData)
            })

            if (signResponse.ok) {
                throw new Error('Failed to create user');
            }
            // window.location.href = "./login"

            const data = signResponse.json();
            return data;

        } catch (error) {
            console.error("error", error)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">Or <a className="font-medium text-blue-600 hover:text-blue-500" href="/login">sign in to your existing account</a></p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={Signup}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="firstName" className="sr-only">First Name</label><input id="firstName" autoComplete="given-name" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="First Name" type="text" name="firstName" />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="sr-only">Last Name</label><input id="lastName" autoComplete="family-name" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Last Name" type="text" name="lastName" />
                        </div>
                        <div>
                            <label htmlFor="username" className="sr-only">Username</label><input id="username" autoComplete="username" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Username" type="text" name="username" />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">Email address</label><input id="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Email address" type="email" name="email" />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label><input id="password" autoComplete="new-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Password" type="password" name="password" />
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed">Create account</button>
                    </div>
                </form>
            </div>
        </div>
    );
}