import React from 'react';
import { Link } from 'react-router-dom';
import Rectangle5 from '../../../assets/images/Rectangle 3977.png';

const Footer = () => {
    return (
        <footer className="footer p-16 mt-14  text-base-content" style={{
            background: `url(${Rectangle5})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '20vw',

        }}>
            <div className='ml-14 mt-20'>
                <span className=" text-xl font-bold text-black">Section</span>
                <Link className="link link-hover mt-4"> Home</Link>
                <Link className="link link-hover">Features</Link>
                <Link className="link link-hover">Pricing</Link>
                <Link className="link link-hover">FAQs</Link>
                <Link className="link link-hover">About</Link>
            </div>
            <div className='mt-20'>
                <span className=" text-xl font-bold text-black">Section</span>
                <Link className="link link-hover mt-4">UIUX Design</Link>
                <Link className="link link-hover">Product Design</Link>
                <Link className="link link-hover">Back End Developer</Link>
                <Link className="link link-hover">Front End Developer</Link>
            </div>
            <div className='mt-20'>
                <span className=" text-xl font-bold text-black">Resource</span>
                <Link className="link link-hover mt-4">FAQ</Link>
                <Link className="link link-hover">Support</Link>
                <Link className="link link-hover">Privacy Policy</Link>
                <Link className="link link-hover">Terms of Service</Link>
            </div>
            <div className='mt-20'>
                <span className=" text-xl font-bold text-black">Subscribe to our newsletter</span>
                <div className="form-control ">
                    <label className="label">
                        <span className="footer-title normal-case text-sm font-normal">There are many variations of passages of available, <br /> but the majority have suffered</span>
                    </label>
                    <div className=" flex w-[450px] h-16">
                        <input type="text" placeholder="Email address" className="input input-bordered pr-16" />
                        <button className="btn btn-primary ml-4 normal-case font-bold rounded-md">Subscribe</button>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;