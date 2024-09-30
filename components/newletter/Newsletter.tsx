
"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


 
const FormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address."
  }),
})



const Newsletter = () => {

  
  const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        email: "",
      },
  })


  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }



  return (
    <div className="bg-[#f7f7f7] container mx-auto py-20 px-6 mt-14">
        <div className='flex justify-between items-center flex-col md:flex-row gap-4'>
            <h2 className='max-w-[350px] text-2xl text-center mb-5 md:mb-0 md:text-left basis-[45%]'>Subscribe to our newsletter and stay updated.</h2>
            <form onSubmit={form.handleSubmit(onSubmit)}  className="flex items-center md:h-14 flex-col md:flex-row w-full md:w-fit basis-[45%] md:basis-[50%]">
                <div className="h-14 md:h-full w-full">
                <Input {...form.register("email")}  placeholder='Write your email here...' type='text' className='border-none h-full rounded-none focus-visible:ring-0 bg-white' />
                {/* Message */}
                <p className="text-red-700 text-sm p-2 font-medium">{form.formState?.errors?.email?.message}</p>
                </div>
                <Button type="submit" className='h-14 w-full md:w-fit md:h-full rounded-none  hover:bg-[#ff2e55] uppercase text-lg '>Subscribe</Button>
            
            </form>
        </div>
    </div>
    
  )
}

export default Newsletter