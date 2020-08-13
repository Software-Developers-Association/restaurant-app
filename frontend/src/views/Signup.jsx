import React from 'react';
import {ReactComponent as Camera} from '../icons/icon-add-photo.svg';
import InputField from '../components/InputField';
import Button from '../components/Button';

const backgroundURL = "https://images.unsplash.com/photo-1568197260846-5e4e2aa3e9af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";

export default function Signup(props) {
    return (
        <div className="absolute left-0 bottom-0 w-full h-full bg-black bg-opacity-50 md:bg-white md:bg-opacity-100 flex flex-col justify-end">
            <div
                style={{
                    minHeight: '300px',
                    borderTopLeftRadius: '25px',
                    borderTopRightRadius: '25px'
                }}
                className="signup-form overflow-auto md:flex md:flex-col md:justify-center bg-white max-w-xs w-full h-3/4 md:h-full mx-auto md:my-auto py-8 px-8 space-y-5">
                    {/* Title section. */}
                    <div className="flex justify-between items-end">
                        <span className="text-xl font-bold">
                            New<br />Account
                        </span>
                        <div className="flex flex-col">
                            <div className="inline-block mx-auto border border-orange-500 rounded-full p-3">
                                <Camera className="h-6 w-6" />
                            </div>
                            <span className="text-xs font-hairline">
                                Upload picture
                            </span>
                        </div>
                    </div>

                    {/* Form section. */}
                    <div className="flex flex-col space-y-2">
                        <InputField label="First Name" />
                        <InputField label="Last Name" />
                        <InputField label="Username" />
                        <InputField label="Email" />
                        <InputField label="Password" isPassword={true} />
                    </div>
                    <Button className="mx-auto w-full text-center" buttonStyle={`${Button.styles.contained}`} text="Create Account" />
            </div>
        </div>
    );
}

        // <div className="relative flex flex-col md:flex-row justify-end md:justify-between h-screen">
        //     <div
        //         style={{
        //             backgroundImage: `url("${backgroundURL}")`,
        //             backgroundRepeat: 'no-repeat',
        //             backgroundSize: 'cover',
        //             zIndex: -1
        //         }}
        //         className="absolute md:static w-full md:w-1/2 h-full">
        //         <div className="bg-black bg-opacity-50 w-full h-full"></div>
        //     </div>

        //     <div
        //         style={{
        //             minHeight: '300px',
        //             borderTopLeftRadius: '25px',
        //             borderTopRightRadius: '25px'
        //         }}
        //         className="signup-form overflow-auto md:flex md:flex-col md:justify-center bg-white max-w-xs w-full h-3/4 md:h-full md:w-1/2 mx-auto md:my-auto py-8 px-8 space-y-5">

        //             <div className="flex justify-between items-end">
        //                 <span className="text-xl font-bold">
        //                     New<br />Account
        //                 </span>
        //                 <div className="flex flex-col">
        //                     <div className="inline-block mx-auto border border-orange-500 rounded-full p-3">
        //                         <Camera className="h-6 w-6" />
        //                     </div>
        //                     <span className="text-xs font-hairline">
        //                         Upload picture
        //                     </span>
        //                 </div>
        //             </div>


        //             <div className="flex flex-col space-y-2">
        //                 <InputField label="First Name" />
        //                 <InputField label="Last Name" />
        //                 <InputField label="Username" />
        //                 <InputField label="Email" />
        //                 <InputField label="Password" isPassword={true} />
        //             </div>
        //             <Button className="mx-auto w-full text-center" buttonStyle={`${Button.styles.contained}`} text="Create Account" />
        //     </div>
        // </div>