import { Text } from "@/components/ui"
import { IconBrandFacebookFilled, IconBrandInstagram, IconBrandTiktokFilled } from "@tabler/icons-react"
import { IconPhone, IconMail } from "@tabler/icons-react"

const Footer = () => {
  return (
    <footer className="bg-footer text-white flex flex-col items-center" style={{ zIndex: -15 }} id="contactus">
      <div className="flex  justify-between w-[1000px] py-16">
        <div className="flex flex-col gap-6">
          <Text className="font-bold">Subscribe</Text>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <IconBrandFacebookFilled className="h-[24px]" />
              <Text className="font-bold text-base">simplicity</Text>
            </div>
            <div className="flex items-center gap-3">
              <IconBrandInstagram className="h-[24px]" />
              <Text className="font-bold text-base">@simplicity</Text>
            </div>
            <div className="flex items-center gap-3">
              <IconBrandTiktokFilled className="h-[24px]" />
              <Text className="font-bold text-base">@simplicity</Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <Text className="font-bold">Contact Us</Text>
          <div className="flex gap-2">
            <div className="rounded-full flex justify-center items-center bg-footerLight w-10 h-10">
              <IconPhone className="text-main" />
            </div>
            <div>
              <Text className="text-lg">
                Phone
              </Text>
              <Text className="text-base">+65 9776 1941</Text>
              <Text className="text-base">+65 9774 9426</Text>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="rounded-full flex justify-center items-center bg-footerLight w-10 h-10">
              <IconMail className="text-main" />
            </div>
            <div>
              <Text className="text-lg">
                Email
              </Text>
              <Text className="text-base">simplicyt@examplemail.com</Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <Text className="font-bold">Our Office</Text>
          <div className="relative overflow-hidden">
            <img src='/hq.png' alt="hq" />
          </div>
          <Text className="text-base text-footerText">
            55 Changi Road #02-11 Millage
            Singapore 419709
          </Text>
        </div>
      </div>

      <div className="text-center bg-footerLight w-full py-2">
        <Text className="text-sm">
          Copyright 2024
        </Text>
      </div>
    </footer>
  )
}

export default Footer
