"use client"

import React, { useRef } from 'react'
import { Title, Text } from "@/components/ui"
import { IconBrandSpotify, IconBrandTiktok } from "@tabler/icons-react"

import { cn } from "@/lib/utils"
import { useLazyLoader } from "@/lib/hooks"

const Socials = () => {
  const elementRef = useRef<HTMLDivElement>(null)
  const [isVisible] = useLazyLoader({
    elementRef,
    threshold: 0.5,
    freezeOnceVisible: true
  })
  return (
    <section className={cn("flex flex-col text-center gap-16 py-32 translate-y-8 opacity-0 transition-all ease-in-out ", isVisible ? "translate-y-0 opacity-100" : "")} id="socialmedias" ref={elementRef}>
      <Title className="text-main">
        Social Medias
      </Title>
      <div className="flex flex-col items-center gap-12">
        <div className="flex flex-col gap-8 items-center">
          <div className='flex items-center gap-2'>
            <IconBrandSpotify />
            <Text className="font-bold ">Podcasts</Text>
          </div>
          <div className="flex gap-16">
            <div className="w-full">
              <iframe style={{ borderRadius: 12 }} src="https://open.spotify.com/embed/episode/3dnQ6fWsvOz70AOCk30OBu?utm_source=generator" width="100%" height="152" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            <div className="w-full">
              <iframe style={{ borderRadius: 12 }} src="https://open.spotify.com/embed/episode/3X9pkXyNXK6rrTEOEqK3cx?utm_source=generator" width="100%" height="152" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 items-center">
          <div className='flex items-center gap-2'>
            <IconBrandTiktok />
            <Text className="font-bold ">Tiktok</Text>
          </div>
          <div className="flex justify-between gap-4 max-w-[1000px]">
            <div className="w-full">
              <blockquote
                className="tiktok-embed"
                cite="https://www.tiktok.com/@julia_asmr_sounds/video/7189670437524213034"
                data-video-id="7189670437524213034"
                data-embed-from="embed_page"
                style={{ width: "100%" }}> <section> <a target="_blank" title="@julia_asmr_sounds" href="https://www.tiktok.com/@julia_asmr_sounds?refer=embed">@julia_asmr_sounds</a> <p><a title="clean" target="_blank" href="https://www.tiktok.com/tag/clean?refer=embed">#clean</a> <a title="cleaning" target="_blank" href="https://www.tiktok.com/tag/cleaning?refer=embed">#cleaning</a> <a title="cleaningasmr" target="_blank" href="https://www.tiktok.com/tag/cleaningasmr?refer=embed">#cleaningasmr</a> <a title="cleaningasmrvideo" target="_blank" href="https://www.tiktok.com/tag/cleaningasmrvideo?refer=embed">#cleaningasmrvideo</a> <a title="cleanwithme" target="_blank" href="https://www.tiktok.com/tag/cleanwithme?refer=embed">#cleanwithme</a> <a title="CleanFreshHype" target="_blank" href="https://www.tiktok.com/tag/CleanFreshHype?refer=embed">#cleanfreshhype</a> <a title="cleantoilet" target="_blank" href="https://www.tiktok.com/tag/cleantoilet?refer=embed">#cleantoilet</a> <a title="toilet" target="_blank" href="https://www.tiktok.com/tag/toilet?refer=embed">#toilet</a> <a title="toiletclean" target="_blank" href="https://www.tiktok.com/tag/toiletclean?refer=embed">#toiletclean</a> <a title="toiletcleaning" target="_blank" href="https://www.tiktok.com/tag/toiletcleaning?refer=embed">#toiletcleaning</a> </p> <a target="_blank" title="♬ Monkeys Spinning Monkeys - Kevin MacLeod & Kevin The Monkey" href="https://www.tiktok.com/music/Monkeys-Spinning-Monkeys-6746993352891189249?refer=embed">♬ Monkeys Spinning Monkeys - Kevin MacLeod & Kevin The Monkey</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
            </div>

            <div className="w-full">
              <blockquote
                className="tiktok-embed"
                cite="https://www.tiktok.com/@julia_asmr_sounds/video/7189670437524213034"
                data-video-id="7189670437524213034"
                data-embed-from="embed_page"
                style={{ width: "100%" }}> <section> <a target="_blank" title="@julia_asmr_sounds" href="https://www.tiktok.com/@julia_asmr_sounds?refer=embed">@julia_asmr_sounds</a> <p><a title="clean" target="_blank" href="https://www.tiktok.com/tag/clean?refer=embed">#clean</a> <a title="cleaning" target="_blank" href="https://www.tiktok.com/tag/cleaning?refer=embed">#cleaning</a> <a title="cleaningasmr" target="_blank" href="https://www.tiktok.com/tag/cleaningasmr?refer=embed">#cleaningasmr</a> <a title="cleaningasmrvideo" target="_blank" href="https://www.tiktok.com/tag/cleaningasmrvideo?refer=embed">#cleaningasmrvideo</a> <a title="cleanwithme" target="_blank" href="https://www.tiktok.com/tag/cleanwithme?refer=embed">#cleanwithme</a> <a title="CleanFreshHype" target="_blank" href="https://www.tiktok.com/tag/CleanFreshHype?refer=embed">#cleanfreshhype</a> <a title="cleantoilet" target="_blank" href="https://www.tiktok.com/tag/cleantoilet?refer=embed">#cleantoilet</a> <a title="toilet" target="_blank" href="https://www.tiktok.com/tag/toilet?refer=embed">#toilet</a> <a title="toiletclean" target="_blank" href="https://www.tiktok.com/tag/toiletclean?refer=embed">#toiletclean</a> <a title="toiletcleaning" target="_blank" href="https://www.tiktok.com/tag/toiletcleaning?refer=embed">#toiletcleaning</a> </p> <a target="_blank" title="♬ Monkeys Spinning Monkeys - Kevin MacLeod & Kevin The Monkey" href="https://www.tiktok.com/music/Monkeys-Spinning-Monkeys-6746993352891189249?refer=embed">♬ Monkeys Spinning Monkeys - Kevin MacLeod & Kevin The Monkey</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
            </div>

            <div className="w-full">
              <blockquote
                className="tiktok-embed"
                cite="https://www.tiktok.com/@julia_asmr_sounds/video/7189670437524213034"
                data-video-id="7189670437524213034"
                data-embed-from="embed_page"
                style={{ width: "100%" }}> <section> <a target="_blank" title="@julia_asmr_sounds" href="https://www.tiktok.com/@julia_asmr_sounds?refer=embed">@julia_asmr_sounds</a> <p><a title="clean" target="_blank" href="https://www.tiktok.com/tag/clean?refer=embed">#clean</a> <a title="cleaning" target="_blank" href="https://www.tiktok.com/tag/cleaning?refer=embed">#cleaning</a> <a title="cleaningasmr" target="_blank" href="https://www.tiktok.com/tag/cleaningasmr?refer=embed">#cleaningasmr</a> <a title="cleaningasmrvideo" target="_blank" href="https://www.tiktok.com/tag/cleaningasmrvideo?refer=embed">#cleaningasmrvideo</a> <a title="cleanwithme" target="_blank" href="https://www.tiktok.com/tag/cleanwithme?refer=embed">#cleanwithme</a> <a title="CleanFreshHype" target="_blank" href="https://www.tiktok.com/tag/CleanFreshHype?refer=embed">#cleanfreshhype</a> <a title="cleantoilet" target="_blank" href="https://www.tiktok.com/tag/cleantoilet?refer=embed">#cleantoilet</a> <a title="toilet" target="_blank" href="https://www.tiktok.com/tag/toilet?refer=embed">#toilet</a> <a title="toiletclean" target="_blank" href="https://www.tiktok.com/tag/toiletclean?refer=embed">#toiletclean</a> <a title="toiletcleaning" target="_blank" href="https://www.tiktok.com/tag/toiletcleaning?refer=embed">#toiletcleaning</a> </p> <a target="_blank" title="♬ Monkeys Spinning Monkeys - Kevin MacLeod & Kevin The Monkey" href="https://www.tiktok.com/music/Monkeys-Spinning-Monkeys-6746993352891189249?refer=embed">♬ Monkeys Spinning Monkeys - Kevin MacLeod & Kevin The Monkey</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
            </div>



          </div>

        </div>
      </div>
    </section>
  )
}

export default Socials
