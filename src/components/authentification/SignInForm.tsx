"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "L'email est requis" })
    .email({ message: "L'email n'est pas valide" }),
  password: z.string().min(1, { message: "Le mot de passe est requis" }),
});

const SignInForm = ({ className }: { className?: string }) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    router.push("/dashboard/1");
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`space-y-4 ${className}`}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="space-y-[6px]">
              <FormLabel className="text-zinc-400">Email</FormLabel>
              <FormControl>
                <Input
                  className="bg-slate-800 py-2.5 px-[14px] text-base leading-6 h-[44px] placeholder:text-slate-600 text-white border-transparent"
                  placeholder="Entrez votre email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="space-y-[6px]">
              <FormLabel className="text-zinc-400">Mot de passe</FormLabel>
              <FormControl>
                <Input
                  className="bg-slate-800 py-2.5 px-[14px] text-base leading-6 h-[44px] placeholder:text-slate-600 text-white border-transparent"
                  type="password"
                  placeholder="Entrez votre mot de passe"
                  {...field}
                />
              </FormControl>
              <FormDescription className="text-gray-500 text-xs">
                Mot de passe d&apos;au moins{" "}
                <span className="text-primary">8 caractères</span>
              </FormDescription>
              <FormMessage className="text-white" />
            </FormItem>
          )}
        />
        <div className="space-y-2">
          <Button className="w-full h-9 rounded-lg py-2 text-sm" type="submit">
            Se connecter
          </Button>
          <Button
            className="text-sm w-full h-9 py-2 rounded-lg bg-slate-800 text-gray-500 hover:bg-slate-800 hover:text-white hover:border-white border-[1.75px]"
            type="submit"
          >
            Se connecter avec Google
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SignInForm;
