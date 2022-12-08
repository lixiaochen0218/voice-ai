【明芒科技】AI  Wechat mini program

Development tool: Wechatdevtool

# Configuration src/config/dict.ts
```
{
    type: "自我介绍",   // The type from the question list
    keyWords: ["您好","你好","是谁","名字","自我介绍"],   // Define some keywords which match the STT result
    question: "你是谁？你的名字是什么？",    // the question showing in the dropdown list
    answer: "您好，我是接诉即办推广大使时间小妮",
    URL: "shaosuki_yinhe/opening.mp4",    // the relative path for the answering video
    featured: false    // if this question show or hide in the dropdown list
  }
```

# Using FFMPEG to Making Idle, noop, opening and question answer videos
  1. Choose the AI in the AI studios and keeping in mind the location X Y
  2. Exporting the videos from AI studios and keeping the same location X Y
  3. Using FFMPEG to compress and crop the video which fit the video view in src/pages/index/aiVideo.tsx
  
      Script: 
      ```
      ffmpeg -i chunni_demo.mp4 -movflags faststart  -vf “crop=ih*(14/16):ih” -crf 21 -c:a copy chunni_demo_cropped.mp4
      ```
  4. Storing the video online for instance current videos are stored in Tencent cloud COS(对象存储)
  5. Replacing the URL for the videos in the first line of src/config/dict.ts 
    ```
    export const videoBaseUrl =
    ```


