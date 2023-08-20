import Link from "next/link";
import React from "react";
import { MdShoppingCart } from "react-icons/md";
import { signIn, useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import { selectItems } from "../../redux/slices/basketSlice";
import { BsChevronBarDown } from "react-icons/bs";
function Header() {
    const cartItems = useSelector(selectItems);
    const { data: session } = useSession();
    return (
        <div className="w-screen py-1 px-6 flex justify-between items-center font-poppins bg-white z-10 sticky top-0">
            <div className="flex-[0.4] flex items-center justify-center py-2">
                <Link href={"/"}>
                    <img
                        src="/assets/images/Outfitopia.png"
                        alt="Outfitopia"
                        className="h-28 object-contain cursor-pointer"
                    />
                </Link>
            </div>

            <ul className="flex-[0.3]  flex justify-start items-center space-x-12 py-2 px-12">
                <li className="cursor-pointer hover:underline transition underline-offset-4">
                    <Link href={"/"}>Home</Link>
                </li>
                <li className="cursor-pointer hover:underline transition underline-offset-4">
                    <Link href={"/orders"}>Orders</Link>
                </li>
                <li className="cursor-pointer hover:underline transition underline-offset-4 text-outfitopia-primary font-bold">
                    <Link href={"/closet"}>Closet</Link>
                </li>
                <li className="cursor-pointer hover:underline transition underline-offset-4 text-outfitopia-primary font-bold">
                    <Link href={"/genie"}>Genie</Link>
                </li>
                <li className="cursor-pointer hover:underline transition underline-offset-4">
                    <Link href={"/genie"}>Wishlist</Link>
                </li>
                <li className="cursor-pointer hover:underline transition underline-offset-4">
                    <Link href={"/genie"}>Deals</Link>
                </li>
            </ul>

            <ul className="flex-[0.3]  flex items-center justify-end space-x-12 py-2 px-12">
                <li className="cursor-pointer hover:underline transition underline-offset-4">
                    {session ? (
                        <Link href={"/account"} className="text-sm">
                            <p className="flex items-center">
                                {`${session.user?.name}`}
                                <BsChevronBarDown />
                            </p>
                        </Link>
                    ) : (
                        <p className="" onClick={() => signIn()}>
                            Sign In
                        </p>
                    )}
                </li>
                <li className="cursor-pointer text-3xl relative">
                    <Link href={"/cart"}>
                        <p>
                            <span className="absolute -top-2 -right-2 text-xs  bg-outfitopia-primary h-5 w-5 rounded-full flex items-center justify-center">
                                {cartItems.length}
                            </span>
                            <MdShoppingCart className="hover:text-outfitopia-primary" />
                        </p>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;
