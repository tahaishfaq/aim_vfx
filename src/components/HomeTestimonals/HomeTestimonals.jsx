import React from "react";
import CustomVideo from "../CustomVideo/CustomVideo";
import Heading from "../Heading/Heading";
import waiting from "../../assets/Vector (3).png";

const HomeTestimoal = () => {
  const videoData = [
    {
      title: "Dmitriy Gladenko",
      brandName: "Company VideoFx",

      videoPoster:
        "https://s3-alpha-sig.figma.com/img/c54c/bd2c/3e97e89ed71b3124d56fecb8bb658344?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AJaGiSX8~vO1OlpRt8rTHCCRRC6Ckdh2HB09tKnMY5LCewEhmY1rI9sP5ATXnGFzc-Onh8iuVuFGkBBpSrP2-qyJMyZciZ2Msxn2LhEbyrVEstqQHV0rJNdrBIhpZkOe2K6G2lKzGUHSUoIMDQSEiDPuQsDgSu6DCpyYXywEFn5-JkvDXIrVeiw2JdTQws6MqfgMEc4kn3UT8X2bPaQDUJgMLnS-4GY8sgRLslWAxrZc5AKZGXzGT4oFtDMJVb8NmD4fqKLTnXb9quQn4YhXHH-EDVAn30wsUaiEK8H~BywSxn2qggAJ-voeVbUQUEoDBruBaQWNoDX-8pRxGGvXgg__",
    },
    {
      title: "Eduardo Koss",
      brandName: "Berge - Conroy",

      videoPoster:
        "https://s3-alpha-sig.figma.com/img/ed44/2b85/c87c9fc2bf7ef1259a9e606e6bdfaec9?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mbGjqBZDDCyDoCJlWitaZfqkF2JKZfRRUmpXdMUQvYyEk1g~jBDISiwWs3~9vCfmEbGwrEAGTYiTtZgrFNPeKoHjR1i4cGvvIu9QUg1iDltcx1nVWR2bbamPtjjToja88I4N4-An-U7gC8CMQH7ZHVmTZtgytAXtLxOHN0y763pljLqhAHd3Vq5gtvX7Hx-SzHGR1QixBAinZqac5eW4WqUllNJtws6oUzHm2MZpqAZfmi6b8JdplT2MoxgXlF1~8L1YZ4qSBrpHKAwPMJhYLgUAujMAX-znAnYBArVdXEKWzdm2HJOUczHxeeHO6BGZBWxQI~0y4QV5r6pNeU8-pg__",
    },
    {
      title: "Eugene Leuschke",
      brandName: "Heller, O'Hara and Nicolas",

      videoPoster:
        "https://s3-alpha-sig.figma.com/img/1ee0/8fbd/b626ab6ca4200c61ee0f1c2dd9e46fdd?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FsxKK91o~LpW8ERxnmJbwtNzYP4ODpCYH4Na1hVI627FTwHimC04-VSXeUnM9-hTsp6R46xKeOpm1M5IULHOZe6v3fbEeHreKF6DXypKv1wGdv2DLJ4B3B-QKyPxk7Btx3KktMCwsbRPXtZwN7HsNxeT7JMxrylbPHreLWLezi6rkznLkwPbUmTm3YVJwGPM1R~xPtsdPoOP0ey5nOrYwG2we6--SZNYLDuG6UJqU643Em-mQiG2SvhWZe7UqSIfoRvYVEjj90w88MB7eFFDOQPnrbAOV7PwoSXYqhjR1zrHOXvPPLnj~BgTaq3VCNDSNFh95eVdFBRfg3J90xu4ew__",
    },
    {
      title: "Juana Sipes-Marquardt",
      brandName: "Sawayn Group",

      videoPoster:
        "https://s3-alpha-sig.figma.com/img/6725/52c9/891c8dc0a7f349286e284aecd1f93e0a?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jolsAYqMCl6roDDx7noWdAoWdqXj4snSOOof6R3JU0m7nf2m~4-~KKGFkWdxZsXW~XadMNC9imswSPcKcLh657sFrHR6XOc1-~3qzxrr5bhBw5KiM10HYfeODvr7XDQHtSRgHLNGeeCSsGYVonBzGD9bdpVNbNmMVbVSpcdfmdbVSXgQYdugundb4MfLjHKU13wd5ydBTLIg86nYonRtyvf9PWd3PI~pB2P38fji6dafXzz~yolVUE7ZTb3BR1Xyuc0e4TSPpwpSsmTjYx9broG8aduVC7d8fdRd5x1lHjAAFYgfSsXqxEpimh9mmXd6yLzoGCosOkofTKaP9LCc5g__",
    },
    {
      title: "Kyle Dare",
      brandName: "Ortiz LLC",
      videoPoster:
        "https://s3-alpha-sig.figma.com/img/b0a6/fccd/f6d39c2dddab6b0683ca876936271d72?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kVKKSwVMWL10EQJzir04e~MGLvxORonlpAPC4Hid9trjZxHjs6Q-DtMlF40iWcuuk8l1fDdLyfpcaz6KyLp-AiMRZZSkV8BuUdioug-DC7GGm3l3btOfudjrDgCxsAF6sGxeYFKMD5YQ55akPeX44FmJPnpLXvRYXmdS2NiBqVsSq0VrJxIQt8O0vq7wVRRLn0MAc1Wqjg-6Yzho-aOskRaP8jTUSgqcLOZTc670rIMc6Lc4hzWclERa5H1Xa~Juri3SmL48MnLlXtR4daKYwoVzqtdyHmBZMGIpPQMKXCG3QN4VuRFcdX0D9bz10o0gnN~RFsLWL4k4KrB234GFKw__",
    },
    {
      title: "Steven Corwin6",
      brandName: "Corwin, Hartmann and Hoeger",
      videoPoster:
        "https://s3-alpha-sig.figma.com/img/2bee/50ef/99943eed34b8c761abded556ce9d0503?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BEPoUG8ZLm-3ePNYl1e2KynZLm7zK1MIFohm-x3O52Wipr3I5o4nFjQbz-WwCfLt6C5xOQuBsFqlMMgZIX8Q40FJK1zSvS5lL0cibyotWYRD~g9fQTAccW-sn2NNIUunZAKkqhQwO91jk1eUWeS02w5K4tgxzdQhLRTOR6GzFx1x~vZyDwmBNUGaFuIld2ExS9CrmLGJP-8h4J0MDI8XXN60f02jrFkinCmX~cEFfFbXbOUAj2ofqTKXiwQXm2fh5-GR9b8P0GQ57yMJgm7e0MgNQby8vGti1~NXAbfAoQTDQZfq2SOpyklE8yVuFtIlxSCwDHFcrOPKhHa9XSUP~A__",
    },
  ];

  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-6 ">
        {videoData.map((video, index) => (
          <div className="flex flex-col gap-y-1">
            <div className="video-container-testimonal">
              <video controls poster={video?.videoPoster}>
                <source src="your-video-file.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="play-button"></div>
              <div className="flex flex-col px-2 pt-2.5 text-white">
                <Heading className="text-xl italic font-semibold">{video.title}</Heading>
                <span className="text-base ">{video.brandName}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeTestimoal;
