import { Text } from "@/components/ui"
import { IconBrandFacebookFilled, IconBrandInstagram, IconBrandTiktokFilled, IconMapPin } from "@tabler/icons-react"
import { IconPhone, IconMail } from "@tabler/icons-react"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-footer text-white flex flex-col items-center" style={{ zIndex: -15 }} id="contactus">
      <div className="flex flex-col lg:flex-row gap-16 justify-between lg:min-w-[1000px] py-16 px-16">
        <div className="flex flex-col gap-6">
          <Text className="font-bold">Subscribe</Text>
          <div className="flex flex-col gap-2">
            <Link href="https://www.facebook.com/profile.php?id=61557349001753&mibextid=ZbWKwL" target="_blank">
              <div className="flex items-center gap-3">
                <IconBrandFacebookFilled className="h-[24px]" />
                <Text className="font-bold text-base">simplicity</Text>
              </div>
            </Link>
            {/* <div className="flex items-center gap-3">
              <IconBrandInstagram className="h-[24px]" />
              <Text className="font-bold text-base">@simplicity</Text>
            </div> */}
            <Link href="https://www.tiktok.com/@s.e.a56?_t=8mKjp7W0DMV&_r=1" target="_blank">
              <div className="flex items-center gap-3">
                <IconBrandTiktokFilled className="h-[24px]" />
                <Text className="font-bold text-base">@s.e.a56</Text>
              </div>
            </Link>
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
              <Text className="text-base">8668-9140</Text>
              <Text className="text-base">9776-1941</Text>
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
              <Text className="text-base">mailtosimplicity@gmail.com</Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <Text className="font-bold">Our Office</Text>
          <Link className="flex flex-col gap-6" href="https://www.google.com/maps/place/Simplicity+Employment+Agency/@1.4346207,103.8439003,17z/data=!4m16!1m9!3m8!1s0x31da157bb0f3c127:0x99e18632fa6653d1!2sSimplicity+Employment+Agency!8m2!3d1.4346207!4d103.8439003!9m1!1b1!16s%2Fg%2F11vz491b9_!3m5!1s0x31da157bb0f3c127:0x99e18632fa6653d1!8m2!3d1.4346207!4d103.8439003!16s%2Fg%2F11vz491b9_?entry=ttu">
            <div className="relative overflow-hidden">
              <img src='/hq.png' alt="hq" />
            </div>
            <div className="flex gap-2">
              <IconMapPin />
              <Text className="text-base text-footerText">
                55 Changi Road #02-11 Millage
                Singapore 419709
              </Text>
            </div>
          </Link>
        </div>
      </div>

      <div className="text-center bg-footerLight w-full py-2">
        <Text className="text-sm">
          Copyright@2024
        </Text>
      </div>
    </footer>
  )
}

export default Footer
