"use client";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import NavItems from "./NavItems";

const UserDropdown = () => {
  const router = useRouter();
  const handleSignOut = async () => {
    // Perform sign-out logic here (e.g., clear auth tokens, update state)
    // After sign-out, redirect to the homepage
    router.push("/sign-in");
  };
  const user = { name: "John Doe", email: "john.doe@example.com" }; // Replace with actual user data or null if not logged in
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex outline-none cursor-pointer rounded-full hover:border-yellow-200 items-center gap-3 p-0 focus:shadow-none text-gray-400 hover:text-yellow-500">
          <Avatar>
            <AvatarImage
              src="https://via.placeholder.com/150"
              alt="User Avatar"
            />
            <AvatarFallback className="bg-yellow-500 text-yellow-900 font-bold">
              {user.name[0]}
            </AvatarFallback>
          </Avatar>
          <div className="hidden md:flex flex-col items-start">
            <span className="text-base font-medium text-gray-400">
              {user.name}
            </span>
            {/* <span className="text-sm text-gray-500">{user.email}</span> */}
          </div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-gray-400">
        <DropdownMenuLabel className="text-gray-400">
          <div className="flex relative items-center gap-3 py-2">
            <Avatar className="size-10">
              <AvatarImage
                src="https://via.placeholder.com/150"
                alt="User Avatar"
              />
              <AvatarFallback className="bg-yellow-500 text-yellow-900 font-bold">
                {user.name[0]}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start">
              <span className="text-base font-medium text-gray-400">
                {user.name}
              </span>
              <span className="text-sm text-gray-500">{user.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator className="md:hidden bg-gray-600" />

        <nav className="md:hidden">
          <NavItems />
        </nav>

        <DropdownMenuSeparator className="bg-gray-600" />

        <DropdownMenuItem
          onClick={() => router.push("/logout")}
          className="text-gray-500 text-md font-medium focus:bg-transparent focus:text-yellow-500 transition-color cursor-pointer"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
