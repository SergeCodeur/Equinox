import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "../ui/button";

const FormSchema = z.object({
  prompt: z.string().min(1, {
    message: "Prompt required",
  }),
});

const onSubmit = () => {
  console.log("Form submit good");
};

const ChatInputBox = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  return (
    <div className="w-full max-w-[743px] mx-auto">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex items-center gap-4 w-full p-1 max-h-56"
        >
          <FormField
            control={form.control}
            name="prompt"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Textarea
                    className="bg-secondary border w-full h-[34px] rounded-lg min-h-[54px] max-h-36 resize-none px-[14px] pt-[13px] pb-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-white border-white/10 text-base text-white"
                    placeholder="Écrivez votre message"
                    {...field}
                    onInput={(e) => {
                      const target = e.target as HTMLTextAreaElement;
                      target.style.height = "auto";
                      target.style.height = target.scrollHeight + "px";
                    }}
                  />
                </FormControl>
                <FormMessage className="absolute" />
              </FormItem>
            )}
          />
          <Button
            className="text-base-500 px-[15px] py-2 hover:bg-accent h-[53px] w-[133px] text-white rounded-lg"
            type="submit"
          >
            Envoyer
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ChatInputBox;
