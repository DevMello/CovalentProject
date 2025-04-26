
import {Atom} from "lucide-react";
import {SignUpForm} from "@/components/signup-form";


export default function SignUpPage() {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10 bg-gradient-to-br from-background via-background to-primary/10">
            <div className="flex w-full max-w-sm flex-col gap-6">
                <a href="#" className="flex items-center gap-2 self-center font-medium mt-20">
                    <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                        <Atom className="size-4" />
                    </div>
                    The Covalent Project
                </a>
                <SignUpForm />
            </div>
        </div>
    );
}
