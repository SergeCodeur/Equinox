import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { Dialog, DialogContent } from "../ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const FormSchema = z.object({
  folderName: z.string().min(2, {
    message: "Chat name is requeried",
  }),
});

interface CreateFolderPopupProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  className?: string;
}

const CreateFolderPopup = ({
  open,
  setOpen,
  className,
}: CreateFolderPopupProps) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[664px] w-full space-y-3 bg-gray-900 shadow-popup border border-white/10">
          <Form {...form}>
            <form className={`w-full ${className}`}>
              <FormField
                control={form.control}
                name="folderName"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center gap-3">
                      <FormControl>
                        <Input
                          className="w-full h-12 py-3.5 text-base bg-secondary rounded-lg border border-white/10 text-white focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-white/75 placeholder:text-neutral-400/45"
                          type="text"
                          placeholder="Enter folder name"
                          {...field}
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className="text-xsl-500 mt-8 w-full text-white rounded-lg h-12"
                type="submit"
              >
                Create
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateFolderPopup;

/* Frame 940 */

// box-sizing: border-box;

// /* Auto layout */
// display: flex;
// flex-direction: column;
// align-items: flex-start;
// padding: 40px 48px;
// gap: 33px;

// position: absolute;
// width: 667px;
// height: 499px;
// left: calc(50% - 667px/2 + 0.5px);
// top: calc(50% - 499px/2);

// background: #0C0F21;
// border: 1px solid rgba(255, 255, 255, 0.1);
// box-shadow: );
// border-radius: 15px;
