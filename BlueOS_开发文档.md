# BlueOS 开发文档

> 来源：https://developers-watch.vivo.com.cn/
> 抓取时间：2026-05-29

---

## 目录

- [API-AI服务](#API-AI服务)
- [API-健康](#API-健康)
- [API-拓展](#API-拓展)
- [API-数据存储](#API-数据存储)
- [API-概述](#API-概述)
- [API-系统能力](#API-系统能力)
- [API-设备互联](#API-设备互联)
- [Native](#Native)
- [其他](#其他)
- [应用配置](#应用配置)
- [快速开始](#快速开始)
- [性能优化](#性能优化)
- [智慧服务卡片](#智慧服务卡片)
- [框架能力](#框架能力)
- [组件-其他](#组件-其他)
- [组件-基础组件](#组件-基础组件)
- [组件-容器组件](#组件-容器组件)
- [组件-拓展组件](#组件-拓展组件)
- [组件-系统风格组件](#组件-系统风格组件)
- [组件-表单组件](#组件-表单组件)
- [组件-通用能力](#组件-通用能力)

---

# API-AI服务

## nlp

> 原文路径：/api/ai/nlp/

](#%E8%87%AA%E7%84%B6%E8%AF%AD%E8%A8%80%E5%A4%84%E7%90%86)
# 自然语言处理


](#%E4%BD%BF%E7%94%A8%E5%89%8D%E6%8F%90%E6%9D%A1%E4%BB%B6)
## 使用前提条件


该接口底层依赖以下接口实现，开发者使用前需要在 manifest.json 中声明以下接口:


```js
{ "name": "blueos.network.fetch" }
```


](#%E4%BD%BF%E7%94%A8)
## 使用


```js
import nlp from "@blueos.ai.nlp"

```


](#%E6%8E%A5%E5%8F%A3%E6%80%BB%E8%A7%88)
## 接口总览


| 接口名称 | 接口说明明 |
| --- | --- |
| translateText | 翻译一段源语言文本为目标语言文本，支持多国语言之间的互译。 |


](#nlptranslatetextparamstranslateparamspromisetranslatedata)
### nlp.translateText(params:TranslateParams):Promise<TranslateData>


翻译一段源语言文本为目标语言文本，支持多国语言之间的互译。


](#translateparams-%E5%8F%82%E6%95%B0)
#### TranslateParams 参数


| 属性 | 必填 | 类型 | 说明 |
| --- | --- | --- | --- |
| text | 是 | string | 翻译文本，utf-8 编码，长度限制 1200 |
| auth | 是 | Auth | 请求的身份验证信息，确保请求来源合法 |
| options | 否 | object | 源语言与目标语言参数，默认 from: 'en'，to: 'zh-CHS' |


](#auth)
#### Auth


| 属性 | 必填 | 类型 | 说明 |
| --- | --- | --- | --- |
| appId | 是 | string | 应用 appId |
| appKey | 是 | string | 应用 appKey |


注： appId & appKey，需要在 [vivo 开发者平台](https://developers-ai.vivo.com.cn/documents?id=720) 申请


](#options-%E5%8F%82%E6%95%B0)
#### options 参数


| 属性 | 必填 | 类型 | 说明 |
| --- | --- | --- | --- |
| from | 否 | string | 源语言，语言 code 见下方语言代码对照表 |
| to | 否 | string | 目标语言，语言 code 见下方语言代码对照表 |


](#%E8%AF%AD%E8%A8%80%E4%BB%A3%E7%A0%81%E5%AF%B9%E7%85%A7%E8%A1%A8)
#### 语言代码对照表


下表为各语言对应代码：


| 语言 | 代码 |
| --- | --- |
| 中文（简体） | zh-CHS |
| 英文 | en |
| 日文 | ja |
| 韩文 | ko |


](#%E8%BF%94%E5%9B%9E%E5%80%BC-translatedata)
#### 返回值 TranslateData


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| text | string | 原文 |
| from | string | 源语言 |
| to | string | 目标语言 |
| translation | string | 翻译后的文本 |


](#%E5%BC%82%E5%B8%B8%E9%94%99%E8%AF%AF%E7%A0%81-translatecode-%E6%8F%8F%E8%BF%B0)
#### 异常错误码 TranslateCode 描述


| code 值 | 说明 |
| --- | --- |
| 20000 | 参数问题 |
| 10000 | 服务异常 |


](#%E7%A4%BA%E4%BE%8B)
#### 示例


```js
nlp.translateText({
    text: 'Hello, World',
    auth: {
        appId:"12345678", // 需要替换自己的appId
        appKey: "dkjdkjfi" // 需要替换自己的appKey
        }
    })
    .then((result:TranslateData) => {
        console.log('翻译结果：', result);
        })
    .catch((data:string,code:TranslateCode) => {
        console.error('翻译失败：', code);
    });
```

---

## overview

> 原文路径：/api/ai/overview/

](#%E6%A6%82%E8%BF%B0)
# 概述


基于 [vivo 算法平台](https://developers.vivo.com/product/ai/algorithm)，蓝河 AI 服务为开发者提供了图像、语音、自然语言处理等优质能力。通过这些能力，开发者可以为用户提供更智能的服务及体验。


](#%E5%AD%90%E6%A8%A1%E5%9D%97%E4%BB%8B%E7%BB%8D)
## 子模块介绍


| 模块 | 简述 |
| --- | --- |
| 视觉技术 | 通过计算机视觉技术来处理和分析图像和视频数据，对其进行识别、分类、分割等操作 |
| 自然语言处理 | 通过计算机算法和人工智能技术来分析、理解、生成和处理人类语言 |
| 语音技术 | 通过计算机语音技术能够识别与合成人类语音。 |

---

## speech

> 原文路径：/api/ai/speech/

](#%E8%AF%AD%E9%9F%B3%E6%8A%80%E6%9C%AF)
# 语音技术


语音技术目前支持 ASR 与 TTS 两种技术。


ASR，自动语音识别技术（Automatic Speech Recognition）是一种将人的语音转换为文本的技术, 支持实时短语音识别与长语音听写。
TTS，文字转语音技术（Text to Speech）是一种将文字转成语音的技术，可将上传的单句文本转成播报音频，包含了短音频生成和长音频生成能力。


](#%E4%BD%BF%E7%94%A8%E5%89%8D%E6%8F%90%E6%9D%A1%E4%BB%B6)
## 使用前提条件


该接口底层依赖以下接口实现，开发者使用前需要在 manifest.json 中声明以下接口:


```js
{ "name": "blueos.network.webSocket" }
{ "name": "blueos.media.audio.mediaManager" }
```


](#%E4%BD%BF%E7%94%A8)
## 使用


```js
import speech from "@blueos.ai.speech"
```


](#speech-%E6%8E%A5%E5%8F%A3%E6%80%BB%E8%A7%88)
## speech 接口总览


| 接口名称 | 接口说明 |
| --- | --- |
| createAsr | 创建 ASR 语音识别服务实例 AsrInstance |
| createTts | 创建 TTS 文字转语音服务实例 TtsInstance |


](#asrinstance-%E5%AE%9E%E4%BE%8B%E6%8E%A5%E5%8F%A3%E6%80%BB%E8%A7%88)
## AsrInstance 实例接口总览


| 接口名称 | 接口说明 |
| --- | --- |
| start() | 开启语音识别服务 |
| send(data:ArrayBuffer|TypedArray) | 发送语音数据，语音数据建议分帧发送，每帧包含的语音时长是 40 毫秒，单句不超过 60s |
| finish() | 结束语音识别服务 |
| onMessage = (result:ShortModeResult|LongModeResult) =>{} | 语音识别信息回调。通过 send()接口发送语音数据后，语音识别结果将通过该回调事件返回 |
| onStarted = () =>{} | 语音识别服务开启成功的回调。在服务开启成功后，语音识别服务将开始处理通过 send() 接口发送的数据 |
| onFinished = () =>{} | 语音识别服务结束回调。该回调可通过调用 finish()接口触发或者 endVadTime 超时自动触发 |
| onError = (data:string, code: number) =>{} | 语音识别服务异常回调 |


](#ttsinstance-%E5%AE%9E%E4%BE%8B%E6%8E%A5%E5%8F%A3%E6%80%BB%E8%A7%88)
## TtsInstance 实例接口总览


| 接口名称 | 接口说明 |
| --- | --- |
| connect() | 连接文本转语音服务 |
| disconnect() | 断开文本转语音服务，并且释放网络资源与相关播放器资源，建议在应用销毁时调用。 |
| send(data:string) | 发送文本内容 |
| pauseAudio() | tts 实例服务暂停播放音频 |
| resumeAudio() | tts 实例服务恢复播放音频 |
| onMessage = (result:TtsResult) =>{} | 文本识别信息回调。通过 send()接口发送文本内容后，文本识别结果将通过该回调事件返回 |
| onConnected = () =>{} | 文字转语音服务连接成功的回调。在调用 connect() 连接服务成功后触发。服务连接成功后，文字转语音服务将开始处理通过 send() 接口发送的文本内容。 |
| onSpeakStarted() | 播放开始回调 |
| onSpeakPaused() | 播放暂停回调，调用了TtsInstance.pauseAudio()后会触发此回调 |
| onSpeakProgress(progress:string) | 播放进度信息回调。开始播放后，播放进度信息会通过该回调多次触发，直到播放完毕 |
| onSpeakFinished() | 播放完毕回调 |
| onSpeakResumed() | 恢复播放回调，调用了TtsInstance.resumeAudio()后会触发此回调 |
| onError = (data:string, code: number) =>{} | 文字转语音服务异常回调 |


](#createasrasrparams-asrparamsasrinstance)
### createAsr(asrParams: AsrParams):AsrInstance


创建 ASR 实例


](#asrparams-%E5%8F%82%E6%95%B0)
#### AsrParams 参数


| 属性 | 必填 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| auth | 是 | Auth | 无 | 请求的身份验证信息，确保请求来源合法 |
| model | 是 | AsrModel | AsrModel.ShortInput | 使用的 ASR 模型，支持短语音与长语句模型。 |
| config | 否 | AsrConfig | 无 | 初始化 ASR 客户端相关配置 |


](#auth)
#### Auth


| 属性 | 必填 | 类型 | 说明 |
| --- | --- | --- | --- |
| appId | 是 | string | 应用 appId |
| appKey | 是 | string | 应用 appKey |


注： appId & appKey，需要在 [vivo 开发者平台](https://developers-ai.vivo.com.cn/documents?id=720) 申请


](#asrmodel)
#### AsrModel


| 属性 | 说明 |
| --- | --- |
| ShortInputt | 短语音，输入法模型。 |
| ShortJovi | 短语音，语音助手模型 |
| LongListen | 长语句，听说模型。 |
| LongSubtitle | 长语句，字幕模型 |


](#%E6%B3%A8)
##### 注：


- 短语音指单轮识别时长在 60s 之内。

- 长语句指单轮识别不限制时长。

](#asrconfig)
#### AsrConfig


| 参数 | 类型 | 说明 | 必填 | 默认值 | 备注 |
| --- | --- | --- | --- | --- | --- |
| audioType | AudioType | 音频类型 | 否 | AudioType.Pcm | 使用的音频类型 |
| isWithPunctuation | boolean | 是否打开标点符号 | 否 | true |  |
| endVadTime | number | 后端检测时间 | 否 | 1000 | 单位：毫秒， 仅实时短语音支持该参数 |
| isChinese2digital | boolean | 是否打开汉字转数字 | 否 | true | 仅实时短语音支持该参数 |
| lang | AsrLang | 语言 | 否 | AsrLang.Cn | 仅长语音听写支持该参数 |


](#audiotype)
#### AudioType


| 属性 | 说明 |
| --- | --- |
| Pcm | pcm 音频类型 |
| Opus | opus 音频类型 |


](#asrlang)
#### AsrLang


| 属性 | 说明 |
| --- | --- |
| Cn | 中文 |
| En | 英文 |


](#asrinstancestart)
### AsrInstance.start()


开启语音识别服务


](#asrinstancesenddataarraybuffertypedarray)
### AsrInstance.send(data:ArrayBuffer|TypedArray)


发送语音数据，语音数据建议分帧发送，每帧包含的语音时长是 40 毫秒，单句不超过 60s


](#asrinstanceonmessage--resultshortmoderesultlongmoderesult-)
### AsrInstance.onMessage = (result:ShortModeResult|LongModeResult) =>{}


语音识别信息回调。通过 send()接口发送语音数据后，语音识别结果将通过该回调事件返回


](#shortmoderesult)
#### ShortModeResult


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| text | string | asr 识别结果 |
| resultId | number | 结果序列号 |
| reformation | number | asr 识别返回， 1 代表修正 0 代表追加 |
| isLast | boolean | 是否为本次会话最后一条结果 |


](#longmoderesult)
#### LongModeResult


****
****
****


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| code | ResultCodeEnum | 结果代码描述 |
| midPoint | string | 识别中间 midPoint 结果即一句话中间结果 |
| endPoint | string | 识别中间 rec 结果即完整一句话或者最后一句结果 |
| beginTime | number | 开始时间，单位毫秒 |
| endTime | number | 结束时间，单位毫秒 |
| speaker | number | 当有角色分离时返回 0 表示当前说话人， 非 0 表示角色 id，有角色变化 |


](#resultcodeenum)
#### ResultCodeEnum


| 属性 | 说明 |
| --- | --- |
| 0 | 表示本次返回为识别中间结果，即一句话的完整结果，整个过程就是一句话中间结果，一句话完整结果…结束 |
| 8 | 表示本次返回为识别中间 midPoint 结果，即一句话的中间结果。 |
| 9 | 表示为客户端发完语音数据后的最后一句，客户端可以断开链接。 |


](#%E4%B8%BE%E4%BE%8B%E8%AF%B4%E6%98%8E-98-%E5%92%8C-0-%E7%9A%84%E5%8C%BA%E5%88%AB)
##### 举例说明 9、8 和 0 的区别：


比如有两句话，一句是“今天天气怎么样”，下一句是“明天天气怎么样”，
第一次返回“今天”，就是 8
第二次返回“今天天气怎么样”，就是 0，表示一句话的结束
第三次返回“明天”，就是 8
第四次返回“明天天气怎么样”，就是 9
然后就结束了


](#asrinstanceonstarted---)
### AsrInstance.onStarted = () =>{}


语音识别服务开启成功的回调。在服务开启成功后，语音识别服务将开始处理通过 send() 接口发送的数据


](#asrinstanceonfinished---)
### AsrInstance.onFinished = () =>{}


语音识别服务结束回调。该回调可通过调用 finish()接口触发或者 endVadTime 超时自动触发


](#asrinstanceonerror--datastring-code-number-)
### AsrInstance.onError = (data:string, code: number) =>{}


语音识别服务异常回调


](#onerror-%E5%9B%9E%E8%B0%83%E5%8F%82%E6%95%B0%E5%AE%9A%E4%B9%89)
#### onError 回调参数定义


| 属性 | 类型 | 说明 |
| --- | --- | --- |
| data | string | 失败信息描述 |
| code | FailCodeEnum | 失败业务码 |


](#failcodeenum)
#### FailCodeEnum


| 属性 | 说明 |
| --- | --- |
| 10000 | 参数校验失败 |
| 10002 | 引擎服务异常 |
| 10003 | 获取中间识别结果失败 |
| 10004 | 获取最终识别结果失败 |
| 10005 | 解析引擎数据异常 |
| 10006 | 引擎内部错误 |
| 10007 | 请求 nlu 出错 |
| 10008 | 音频超长 |
| 50001 | 使用超量 |


](#createasr-%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81)
#### createAsr 示例代码


```js
import media from "@blueos.media.audio.mediaManager";
import speech from "@blueos.ai.speech";

/**
 * 录音状态
 * @enum {number}
 */
const AudioRecordState = {
  /** 录音中 */
  record: 1,
  /** 录音结束 */
  stop: 2,

  ready: 3,
};

export default {
  data: {
    result: "结果",
    auth: {
      appId: "xxx",
      appKey: "xxxx",
    },
    asr: null,
    model: "",
    pagraph: "",
    audioRecorder: null,
    audioRecordState: AudioRecordState.stop,
  },
  createAsr() {
    this.model = speech.AsrModel.ShortInput;
    const asr = speech.createAsr({
      auth: this.auth,
      model: this.model,
      config: {
        audioType: speech.AudioType.Pcm,
        isWithPunctuation: true,
        endVadTime: 1000,
        isChinese2digital: false,
      },
    });
    const arrs = [];
    asr.onMessage = (data) => {
      console.log(`onmessage data :${JSON.stringify(data)}`);
      if (this.model === speech.AsrModel.LongListen || this.model === speech.AsrModel.LongSubtitle ) {
        if (data.midPoint) {
          this.result = data.midPoint;
        } else if (data.endPoint) {
          arrs.push(data.endPoint);
          this.pagraph = arrs.join("\n");
          this.result = "";
        }
      } else {
        this.result = data.text;
      }
    };
    asr.onStarted = () => {
      console.log("onstarted");
      this.audioRecordState = AudioRecordState.ready;
    };
    this.asr = asr;
  },
  async recordAudio() {
    console.log("recordAudio start");

    if (this.audioRecordState == AudioRecordState.record) {
      console.log(`正在录音中，不允许重复录音`);
      return;
    }
    if (this.audioRecordState != AudioRecordState.ready) {
      console.log(`asr 接口还没ready ，请稍后`);
      return;
    }

    const audioRecorder = media.createAudioRecord({
      channelConfig: 1,
      sampleRateInHz: 16000,
    });

    this.audioRecordState = AudioRecordState.record;
    audioRecorder.read({
      callback: (buffer) => {
        this.asr.send(buffer);
      },
    });

    this.asr.onError = (data, code) => {
      console.log(`ux ws.onError data:${data};code:${code}`);
      this.audioRecordState = AudioRecordState.stop;
      audioRecorder.stop();
      audioRecorder.release();
    };
    this.asr.onFinished = (reason) => {
      console.log(`ux onFinished ${reason}`);
      this.audioRecordState = AudioRecordState.stop;
      audioRecorder.stop();
      audioRecorder.release();
    };

    this.audioRecorder = audioRecorder;
  },
  startWebsocket() {
    this.asr.start();
  },
  releaseRecord() {
    if (this.audioRecorder) {
      this.audioRecorder.stop();
      this.audioRecorder.release();
      this.asr && this.asr.finish();
    }
    this.audioRecordState = AudioRecordState.stop;
  },
};
```


](#createttsauthauthengineidstringclientinfoclientinfottsinstance)
### createTts(auth:Auth,engineId:string,clientInfo:ClientInfo):TtsInstance


创建 TTS 文字转语音服务实例


](#%E5%8F%82%E6%95%B0)
#### 参数


| 属性 | 必填 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| auth | 是 | Auth | 无 | 请求的身份验证信息，确保请求来源合法 |
| model | 是 | TtsModel | TtsModel.LongDefault | TTS 音频生成模型，支持短音频模型与长音频生成模型 |
| config | 否 | TtsConfig | 无 | 初始化 TTS 客户端相关配置 |
| isNeedPlay | 否 | boolean | false | 设置是否让TTS实例来播放声音，如果不需要TTS实例播放声音，则可以通过回调方法onMessage中 TtsResult.audio 获得合成语音的PCM类型数据 |


](#auth-1)
#### Auth


| 属性 | 必填 | 类型 | 说明 |
| --- | --- | --- | --- |
| appId | 是 | string | 应用 appId |
| appKey | 是 | string | 应用 appKey |


注： appId & appKey，需要在 [vivo 开发者平台](https://developers-ai.vivo.com.cn/documents?id=720) 申请


](#ttsmodel)
#### TtsModel


| 属性 | 说明 |
| --- | --- |
| ShortJovi | 短音频生成，适用于对话合成场景，比如语音助手的应用场景 |
| LongDefault | 长音频生成，适用于长文本合成场景，比如小说阅读，屏幕朗读 |


](#ttsconfig)
#### TtsConfig


| 参数 | 类型 | 说明 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| engineType | EngineType | 引擎类型, 支持中英文与优化效果 | 否 | EngineType.normal |
| audioType | AudioType | 音频类型 | 否 | AudioType.Pcm |
| sampleRate | number | 采样率。采样率越高，语音合成播放的效果越好，但是占用流量更多。可选值：[8000,16000,24000] | 否 | 24000 |
| speaker | ShortSpeaker|LongSpeaker | 语音合成的发音人 | 否 | ShortSpeaker.yige|LongSpeaker.yige |
| speed | number | 语速，可选值：[0-100] | 否 | 50 |
| volume | number | 音量，可选值：[1-100] | 否 | 50 |
| isStream | boolean | 是否按照流式方式返回音频，假如设置为 false 则按标点分段返回 | 否 | true |


](#enginetype)
#### EngineType


| 属性 | 说明 |
| --- | --- |
| normal | 普通效果 |
| enZh | 中英文 |
| en | 英文 |
| optimized | 优化效果 |


](#audiotype-1)
#### AudioType


| 属性 | 说明 |
| --- | --- |
| Pcm | pcm 音频类型 |
| Opus | opus 音频类型 |


](#shortspeaker)
#### ShortSpeaker


| 属性 | 说明 |
| --- | --- |
| yiwen | 奕雯 |
| yunye | 云野-温柔 |
| wanqing | 婉清 |
| xiaofu | 晓芙-少女 |
| yigeChild | 小萌-女童 |
| yige | 依格 |
| yiyi | 依依 |
| xiaoming | 小茗 |


](#longspeaker)
#### LongSpeaker


| 属性 | 说明 |
| --- | --- |
| yiwen | 奕雯 |
| yunye | 云野-温柔 |
| yunyeNews | 云野-稳重 |
| yige | 依格-甜美 |
| yigeNews | 依格-稳重 |
| huaibin | 怀斌-浑厚 |
| zhaokun | 兆坤-成熟 |
| yaheng | 亚恒-磁性 |
| haiwei | 海蔚-大气 |
| qianqian | 倩倩-清甜 |
| enFemale | 英文女声 |
| xiaoyun | 晓云-稳重 |


](#ttsinstanceconnectdatastring)
### TtsInstance.connect(data:string)


连接文本转语音服务


](#ttsinstancedisconnect)
### TtsInstance.disconnect()


断开文本转语音服务，并且释放网络资源与相关播放器资源。建议在应用销毁时调用。


](#ttsinstancesenddatastring)
### TtsInstance.send(data:string)


发送文本内容


](#ttsinstancepauseaudio)
### TtsInstance.pauseAudio()


tts 实例服务暂停播放音频


](#ttsinstanceresumeaudio)
### TtsInstance.resumeAudio()


tts 实例服务恢复播放音频


](#ttsinstanceonconnected---)
### TtsInstance.onConnected = () =>{}


文字转语音服务连接成功的回调。在调用 connect() 连接服务成功后触发。服务连接成功后，文字转语音服务将开始处理通过 send() 接口发送的文本内容。


](#ttsinstanceonmessage--resultttsresult-)
### TtsInstance.onMessage = (result:TtsResult) =>{}


文本识别信息回调。通过 send()接口发送文本内容后，文本识别结果将通过该回调事件返回


](#ttsresult)
#### TtsResult


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| audio | Unit8Array | 合成后的音频片段 |
| status | number | 当前音频流状态，0 表示开始合成（返回的第一帧数据），1 表示合成中，2 表示合成结束(返回的最后一帧数据） |
| progress | string | 合成进度，指当前合成文本的字符数-总的字符数。注：请注意合成是以句为单位切割的，若文本只有一句话，则每次返回结果是相同的。 |
| slice | int | 返回的第几帧数据 |


](#ttsinstanceonspeakstarted---)
### TtsInstance.onSpeakStarted = () =>{}


播放开始回调


](#ttsinstanceonspeakpaused---)
### TtsInstance.onSpeakPaused = () =>{}


播放暂停回调，调用了TtsInstance.pauseAudio()后会触发此回调


](#ttsinstanceonspeakprogress--progressstring-)
### TtsInstance.onSpeakProgress = (progress:string) =>{}


播放进度信息回调。开始播放后，播放进度信息会通过该回调多次触发，直到播放完毕。


](#%E8%BF%94%E5%9B%9E%E5%80%BC)
#### 返回值


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| progress | string | 播放进度，指当前播放文本的字符数-总的字符数。注：请注意合成是以句为单位切割的，若文本只有一句话，则每次返回结果是相同的。 |


](#ttsinstanceonspeakfinished---)
### TtsInstance.onSpeakFinished = () =>{}


播放完毕回调


](#ttsinstanceonspeakresumed---)
### TtsInstance.onSpeakResumed = () =>{}


恢复播放回调，调用了TtsInstance.resumeAudio()后会触发此回调


](#ttsinstanceonerror--datastring-code-number-)
### TtsInstance.onError = (data:string, code: number) =>{}


文字转语音服务异常回调


](#onerror-%E5%9B%9E%E8%B0%83%E5%8F%82%E6%95%B0%E5%AE%9A%E4%B9%89-1)
#### onError 回调参数定义


| 属性 | 类型 | 说明 |
| --- | --- | --- |
| data | string | 失败信息描述 |
| code | FailCodeEnum | 失败业务码 |


](#failcodeenum-1)
#### FailCodeEnum


| 属性 | 说明 |
| --- | --- |
| 10000 | 缺少请求参数或者签名错误 （http 协议返回，status=400） |
| 10001 | 升级到 websocket 协议失败（http 协议返回，status=400） |
| 10010 | 发送数据不是 json 格式 |
| 10011 | 发送文本时，缺少必要的参数 |
| 10012 | 发送文本时，签名错误 |
| 以下是逻辑层服务器错误 |  |
| 10030 | 发送文本到引擎时错误 |
| 10031 | 获取 audio 数据发生错误 |
| 10032 | 无可用的引擎服务器 |
| 以下是引擎层服务器错误 |  |
| 11001 | 负载过大，拒绝新的请求 |
| 11002 | 请求头协议错误 |
| 11003 | 设置合成文本的请求参数错误 |
| 11004 | 获取 andio 数据的请求参数错误 |
| 11005 | session 重复了 |
| 11006 | 获取数据时，找到不到 session |
| 11007 | 创建引擎错误 |
| 11008 | 向算法引擎获取数据时出错 |
| 11009 | opus 压缩出现问题 |
| 11010 | 输入的合成文本不合法 |
| 以下是语音服务层错误 |  |
| 20000 | 语音正在合成中，不允许发送新的文字 |
| 20010 | 语音缓存已满 |
| 20030 | 语音服务已经断连 |


](#createtts-%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81)
#### createTts 示例代码


```js
import media from "@blueos.media.audio.mediaManager";
import speech from "@blueos.ai.speech";

/**
 * 录音状态
 * @enum {number}
 */
const AudioRecordState = {
  /** 录音结束 */
  init: 0,
  inited: 1,
  play: 1,
  stop: 2,
  release: 3,
};

export default {
  data: {
    title: "欢迎体验 AI 服务",
    inputtext: "你好",
    auth: {
      appId: "您的appId",
      appKey: "您的appKey",
    },
    tts: null,
    model: "",
    audioRecorder: null,
    audioRecordState: AudioRecordState.stop,
  },

  createShort() {
    this.model = speech.TtsModel.ShortJovi;
    this.createTts();
  },
  createLong() {
    this.model = speech.TtsModel.LongDefault;
    this.createTts();
  },
  createTts() {
    const tts = speech.createTts({
      auth: this.auth,
      model: this.model,
      config: {
        speaker: speech.ShortSpeaker.yige,
        sampleRate: 24000,
        isStream: false,
      },
    });
    tts.onMessage = (data) => {
      if (this.audioRecorder) {
        this.audioRecorder.write({
          buffer: data.audio.buffer,
        });
      }
    };
    tts.onConnected = () => {
      logtool("onConnected");
      this.modetext = "短语音实例已连接"
    };

    this.tts = tts;
  },
  async createAudio() {
    const audioRecorder = media.createAudioTrack({
      sampleRateInHz: 24000,
      contentType: "speech",
      channelConfig: 1,
      audioFormat: 16,
    });
    audioRecorder.onError = function () {
      logtool(`createAudioRecord error`);
      this.audioRecordState = AudioRecordState.stop;
    };
    this.audioRecordState = AudioRecordState.inited;
    logtool(`createAudioRecord success`);
    this.audioRecorder = audioRecorder;
  },
  connect() {
    this.tts && this.tts.connect()
  },
  send() {
    this.tts && this.tts.send(this.inputtext);
  },
  stop() {
    this.audioRecordState = AudioRecordState.stop
    this.audioRecorder && this.audioRecorder.stop();
  },
  release() {
    this.audioRecordState = AudioRecordState.release
    this.audioRecorder && this.audioRecorder.release();
  },
  play() {
    this.audioRecordState = AudioRecordState.play
    this.audioRecorder && this.audioRecorder.play();
  },
  releaseRecord() {
    if (this.audioRecorder) {
      this.audioRecorder.stop();
      this.audioRecorder.release();
    }
  },
};
```

---

## vision

> 原文路径：/api/ai/vision/

](#%E8%A7%86%E8%A7%89%E6%8A%80%E6%9C%AF)
# 视觉技术


](#%E4%BD%BF%E7%94%A8%E5%89%8D%E6%8F%90%E6%9D%A1%E4%BB%B6)
## 使用前提条件


该接口底层依赖以下接口实现，开发者使用前需要在 manifest.json 中声明以下接口:


```js
{ "name": "blueos.network.fetch" }
```


](#%E4%BD%BF%E7%94%A8)
## 使用


```js
import vision from "@blueos.ai.vision"

```


](#%E6%8E%A5%E5%8F%A3%E6%80%BB%E8%A7%88)
## 接口总览


| 接口名称 | 接口说明 |
| --- | --- |
| commonOcr | 识别图片中的所有文字，并返回文字在图片中的位置信息，方便用户进行文字排版的二次处理参考 |
| segmentFace | 基于 AI 抠图技术，对图像中的人体头部进行分割，可用于图片背景切换或换脸玩法。 |
| segmentForeground | 对人像、猫、狗、车的图像进行分割 |
| inpaintForeground | 一种图像编辑方式。去除图片中不希望存在的人、猫、狗、车等，并填充以自然的图案，力求看不出修复痕迹。 |
| cropImage | 基于图像的主体内容及画幅要求，提供优质的图像智能裁剪能⼒ |
| generateIdPhoto | 通过人像分割算法识别照片面部区域，将其抠出后修改背景色，使之成为证件照。 |
| idCardOcr | 识别提取身份证中的姓名、性别、民族、出生日期、住址、公民身份证号码信息 |
| demoire | 对屏幕拍摄的带摩尔纹的图像进行摩尔纹去除 |
| deshadow | 提供文档图像阴影去除能力，同时保证原图文字清晰度 |


](#visioncommonocrparamsocrparamspromiseocrresult)
### vision.commonOcr(params:OcrParams):Promise<OcrResult>


识别图片中的所有文字，并返回文字在图片中的位置信息，方便用户进行文字排版的二次处理


](#ocrparams-%E5%8F%82%E6%95%B0)
#### OcrParams 参数


| 属性 | 必填 | 类型 | 说明 |
| --- | --- | --- | --- |
| auth | 是 | Auth | 请求的身份验证信息，确保请求来源合法 |
| image | 是 | string | 图片的 base64 编码（目前只支持识别 jpg、png、bmp 格式的图片） |
| options | 否 | OcrOptions | 请求的参数配置 |


](#auth)
#### Auth


| 属性 | 必填 | 类型 | 说明 |
| --- | --- | --- | --- |
| appId | 是 | string | 应用 appId |
| appKey | 是 | string | 应用 appKey |


注： appId & appKey，需要在 [vivo 开发者平台](https://developers-ai.vivo.com.cn/documents?id=720) 申请


](#ocroptions-%E8%AF%B4%E6%98%8E)
#### OcrOptions 说明


| 参数 | 必填 | 类型 | 说明 |
| --- | --- | --- | --- |
| pos | 否 | string | 默认为 2，可取值为 0,1,2。0 代表只需要文字信息，1 代表提供文字信息和坐标信息(坐标绝对值)，2 代表将 0 和 1 的信息同时提供. |
| checkDirection | 否 | boolean | 选择是否支持旋转图像、非正向文字识别，默认为 false 不支持 |


](#ocrresult-%E8%BF%94%E5%9B%9E%E5%80%BC)
#### OcrResult 返回值


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| words | Array<WordInfo> | 文字信息 |
| OCR | Array<OcrInfo> | 文字与坐标信息 |
| angle | number | 旋转角度 |


](#wordinfo)
##### WordInfo


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| words | string | 识别的文字信息 |


](#ocrinfo)
##### OcrInfo


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| words | string | 识别的文字信息 |
| location | locationInfo | 文字相关的坐标信息 |


](#locationinfo)
##### locationInfo


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| top_left | {x:number,y:number} | 左上角坐标信息 |
| top_right | {x:number,y:number} | 右上角坐标信息 |
| down_left | {x:number,y:number} | 左下角坐标信息 |
| down_right | {x:number,y:number} | 右下角坐标信息 |


```js
// 当pos 参数为0 时的返回结果
"OcrResult": {
    "words": [
        {"words": "取消"},
        {"words": "编辑"}
    ],
    "angle": 0
}


// 当pos 参数为1 时的返回结果
"OcrResult": {
    "OCR": [
        {
            "words": "取消",
            "location": {
                "top_left": {"x": 658.0, "y": 1130.0},
                "top_right": {"x": 893.0, "y": 1130.0},
                "down_left": {"x": 658.0, "y": 1174.0},
                "down_right": {"x": 893.0, "y": 1174.0}
            }
        },
        {
            "words": "编辑",
            "location": {
                "top_left": {"x": 398.0, "y": 825.0},
                "top_right": {"x": 1912.0, "y": 825.0},
                "down_left": {"x": 398.0, "y": 1004.0},
                "down_right": {"x": 1912.0, "y": 1004.0}
            }
        }
    ],
    "angle": 0
}
```


](#%E7%A4%BA%E4%BE%8B)
#### 示例


```js
vision.commonOcr({
    image: '',
    auth: {
        appId:"12345678", // 需要替换自己的appId
        appKey: "dkjdkjfi" // 需要替换自己的appKey
        }
})
.then((result:OcrResult) => {
    console.log('commonOcr result', result);
    })
.catch((data:string,code:OcrErrorCode) => {
        console.error(`commonOcr 失败,  code:${code};data:${data}`);
    });
```


](#%E5%BC%82%E5%B8%B8%E9%94%99%E8%AF%AF%E7%A0%81-ocrerrorcode-%E6%8F%8F%E8%BF%B0)
#### 异常错误码 OcrErrorCode 描述


| code 值 | 说明 |
| --- | --- |
| 1 | ocr 识别失败 |
| 2 | 图像错误 |


](#visionsegmentfaceparamssegmentfaceparamspromisesegmentfaceresult)
### vision.segmentFace(params:SegmentFaceParams):Promise<SegmentFaceResult>


人脸分割，基于 AI 抠图技术，对图像中的人体头部进行分割，可用于图片背景切换或换脸玩法。


](#segmentfaceparams-%E5%8F%82%E6%95%B0)
#### SegmentFaceParams 参数


| 属性 | 必填 | 类型 | 说明 |
| --- | --- | --- | --- |
| image | 是 | string | 图片 base64 编码,图片尺寸最大不超过 1024 个像素 |
| auth | 是 | Auth | 请求的身份验证信息，确保请求来源合法 |


](#segmentfaceresult-%E8%BF%94%E5%9B%9E%E5%80%BC)
#### SegmentFaceResult 返回值


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| originMask | string | 总的 mask 的 base64 编码，图像为单通道灰度图 |
| partBox | Array<string> | partMask 的 box 类别和位置，包含 idx, xmax, xmin,ymax,ymin；代表类别 idx 和 box 框在原图的坐标位置比例(0-1 之间) |
| partMask | Array<string> | partBox 对应框的的 mask 的 base64 编码，图像也为单通道灰度图 |
| size | {width:number,height:number} | 包含 height, width 字段，orginMask 的长宽型 |


](#%E5%BC%82%E5%B8%B8%E9%94%99%E8%AF%AF%E7%A0%81-segmentfaceerrorcode-%E6%8F%8F%E8%BF%B0)
#### 异常错误码 SegmentFaceErrorCode 描述


| code 值 | 说明 |
| --- | --- |
| 1 | 未检测到人脸 |
| 2 | 分割失败 |
| 3 | 无图 |


](#%E7%A4%BA%E4%BE%8B-1)
#### 示例


```js
vision.segmentFace({
    image: ''
    auth: {
        appId:"12345678", // 需要替换自己的appId
        appKey: "dkjdkjfi" // 需要替换自己的appKey
    }
    })
    .then((result:SegmentFaceResult) => {
        console.log('face segment result', result);
    })
    .catch((data:string,code:SegmentFaceErrorCode) => {
        console.error(`segmentFace 失败,  code:${code};data:${data}`);
    });
```


](#visionsegmentforegroundparamssegmentforegroundparamspromisesegmentforegroundresult)
### vision.segmentForeground(params:SegmentForegroundParams):Promise<SegmentForegroundResult>


前景分割，对人像、猫、狗、车的图像进行分割


](#segmentforegroundparams-%E5%8F%82%E6%95%B0)
#### SegmentForegroundParams 参数


| 属性 | 必填 | 类型 | 说明 |
| --- | --- | --- | --- |
| image | 是 | string | 图片 base64 编码,图片尺寸最大不超过 1024 个像素 |
| auth | 是 | Auth | 请求的身份验证信息，确保请求来源合法 |


](#segmentforegroundresult-%E8%BF%94%E5%9B%9E%E5%80%BC)
#### SegmentForegroundResult 返回值


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| orginMask | string | 总的 mask 的 base64 编码，图像为单通道灰度图 |
| inpaintMask | string | 用于修复部分的 mask,为单通道灰度图，背景 0，前景 255 |
| partBox | Array<string> | partMask 的 box 类别和位置，包含 idx,xmax,xmin,ymax,ymin；代表类别 idx 和 box 框在原图的坐标位置比例(0-1 之间) |
| partMask | Array<string> | partBox 对应框的的 mask 的 base64 编码，图像也为单通道灰度图 |
| size | {width:number,height:number} | 包含 height, width 字段，orginMask 的长宽 |


](#%E5%BC%82%E5%B8%B8%E9%94%99%E8%AF%AF%E7%A0%81-segmentforegrounderrorcode-%E6%8F%8F%E8%BF%B0)
#### 异常错误码 segmentForegroundErrorCode 描述


| code 值 | 说明 |
| --- | --- |
| 1 | 分割失败 |
| 2 | 未检测到图片 |


](#%E7%A4%BA%E4%BE%8B-2)
#### 示例


```js
vision.segmentForeground({
    image: '',
    auth: {
        appId:"12345678", // 需要替换自己的appId
        appKey: "dkjdkjfi" // 需要替换自己的appKey
        }
    })
    .then((result:SegmentForegroundResult) => {
        console.log('segmentForeground result', result);
    })
    .catch((data:string,code:SegmentFaceErrorCode) => {
        console.error(`segmentForeground 失败,  code:${code};data:${data}`);
    });
```


](#visioninpaintforegroundparamsinpaintforegroundparamspromiseinpaintforegroundresult)
### vision.inpaintForeground(params:InpaintForegroundParams):Promise<InpaintForegroundResult>


前景修复，一种图像编辑方式。使用分割算法去除图片中不希望存在的人、猫、狗、车等，并填充以自然的图案，力求看不出修复痕迹。


](#inpaintforegroundparams-%E5%8F%82%E6%95%B0)
#### InpaintForegroundParams 参数


| 属性 | 必填 | 类型 | 说明 |
| --- | --- | --- | --- |
| image | 是 | string | 图片 base64 编码 |
| mask | 是 | string | Mask 的 base64 编码 |
| auth | 是 | Auth | 请求的身份验证信息，确保请求来源合法 |


](#inpaintforegroundresult-%E8%BF%94%E5%9B%9E%E5%80%BC)
#### InpaintForegroundResult 返回值


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| inpaintImg | string | 修复结果图的 base64 编码 |


](#%E7%A4%BA%E4%BE%8B-3)
#### 示例


```js
vision.inpaintForeground({
    image: '',
    mask: '',
    auth: {
        appId:"12345678", // 需要替换自己的appId
        appKey: "dkjdkjfi" // 需要替换自己的appKey
        }
    })
    .then((result:InpaintForegroundResult) => {
        console.log('inpaintForeground result', result);
    })
    .catch((data:string,code:number) => {
        console.error(`inpaintForeground 失败,  code:${code};data:${data}`);
    });
```


](#visioncropimageparamscropimageparamspromisecropimageresult)
### vision.cropImage(params:CropImageParams):Promise<CropImageResult>


构图裁剪，基于图像的主体内容及画幅要求，提供优质的图像智能裁剪能⼒


](#cropimageparams-%E5%8F%82%E6%95%B0)
#### CropImageParams 参数


**


| 属性 | 必填 | 类型 | 说明 |
| --- | --- | --- | --- |
| auth | 是 | object | 请求的身份验证信息，确保请求来源合法 |
| imageList | 是 | object | 裁剪的图片信息列表，详见下方 imageList 说明 |
| aspectRatio | 是 | Array<string> | 裁剪比例列表 ,例如["10060","10383"] |


](#imagelist)
#### imageList


| 参数 | 必填 | 类型 | 说明 |
| --- | --- | --- | --- |
| imageUrl | 是 | string | 图片链接 |
| imgSymbol | 是 | string | 图片唯一标识 |


](#cropimageresult-%E8%BF%94%E5%9B%9E%E5%80%BC)
#### CropImageResult 返回值


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| imageList | Array<ImageResult> | 返回的图片信息列表，详见下方 ImageResult 说明 |


](#imageresult)
#### ImageResult


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| imageSymbol | string | 图片名称标识 |
| cropResult | Array<CropResult> | 裁剪结果，详见下方 CropResult 说明 |


](#cropresult-%E8%AF%B4%E6%98%8E)
#### CropResult 说明


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| aspectRatio | string | 输入的裁剪比例 |
| box | Array<number> | 该裁剪比例对应的裁剪坐标 |


](#%E7%A4%BA%E4%BE%8B-4)
#### 示例


```js
const auth = {
        appId:"12345678", // 需要替换自己的appId
        appKey: "dkjdkjfi" // 需要替换自己的appKey
    }
    const request = {
        auth: auth,
        imageList:   {
            image_url: "imageUrl" // 替换具体的图片路径
            },
            aspectRatio:["100*60","103*83"]
        }

    vision.cropImage(request)
        .then((result:CropImageResult) => {
            console.log('cropImage result', result);
        })
        .catch((data:string,code:number) => {
            console.error(`cropImage 失败,  code:${code};data:${data}`);
        });
```

---

# API-健康

## health

> 原文路径：/api/health/health/

](#%E8%BF%90%E5%8A%A8%E5%81%A5%E5%BA%B7)
# 运动健康


](#%E6%A6%82%E8%BF%B0)
## 概述


蓝河应用等运动健康模块旨在支持用户的运动和健康数据管理。该模块提供了两个主要部分：采样数据和统计数据，为用户提供了全面的健康数据管理和实时监控功能，对于健康和运动类应用、健康监测工具和健康管理应用非常有用。


](#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E)
## 接口声明


```json
{ "name": "blueos.health.health" }
```


](#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97)
## 导入模块


```ts
import health from '@blueos.health.health' 或 const health = require('@blueos.health.health')
```


**开发者需要在 manifest.json 里面配置权限：**


```json
{
  "permissions": [{ "name": "watch.permission.READ_HEALTH_DATA" }]
}
```


](#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89)
## 接口定义


](#getrecentsamples)
### getRecentSamples


获取最近一次采样数据


**参数**


[DataType](#datatype)


[RecentSample](#recentsample)

[RecentSample](#recentsample)


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| dataTypes | [] | 是 | 数据类型 |
| success | (recentSamples:[]) => void | 是 | 回调函数，返回值是一个数组 |
| complete | () => void | 否 | 完成的回调函数 |
| fail | (data: string, code: number) => void | 否 | 失败回调函数 |


**示例**


```ts
health.getRecentSamples({
  dataTypes: [health.DATA_TYPES.HEART_RATE, health.DATA_TYPES.STEP_COUNT],
  success: (res) => {
    console.log(`current heart rate(${res[0].dataType}) is`, res[0].data.value, 'bpm')
  },
})
```


](#subscribesample)
### subscribeSample


监听采样数据变化


**参数**


[DataType](#datatype)


[Sample](#sample)

[Sample](#sample)


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| dataType |  | 是 | 数据类型 |
| callback | (sample:) => void | 是 | 回调函数，返回值是一个 |
| fail | (data: string, code: number) => void | 否 | 失败回调函数 |


**示例**


```ts
health.subscribeSample({
  dataType: health.DATA_TYPES.HEART_RATE,
  callback: (res) => {
    console.log(`current heart rate(${res.value}) is`)
  },
})
```


](#unsubscribesample)
### unsubscribeSample


取消监听采样数据变化


**参数**


[DataType](#datatype)


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| dataType |  | 是 | 数据类型 |


**示例**


```ts
health.unsubscribeSample({
  dataType: health.DATA_TYPES.HEART_RATE,
})
```


](#gettodaystatistic)
### getTodayStatistic


查询当日统计数据


[DataType](#datatype)


[StatisticType](#statistictype)


[Statistic](#statistic)

[Statistic](#statistic)


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| dataType |  | 是 | 数据类型 |
| statisticType |  | 否 | 统计的维度，不同的 dataType 支持的维度不一样 |
| success | (statistic:) => void | 是 | 回调函数，返回值是一个, 统计类型由 dataType 决定 |
| complete | () => void | 否 | 完成的回调函数 |
| fail | (data: string, code: number) => void | 否 | 失败回调函数 |


**示例**


```ts
health.getTodayStatistic({
  dataType: health.DATA_TYPES.HEART_RATE,
  statisticType: health.STATISTIC_TYPES.SUM,
  success(data) {
    console.log(data)
  },
  fail(data, code) {
    console.log(data, code)
  },
})
```


](#getstatistic)
### getStatistic


根据时间段，查询统计数据。


**说明：**


- 仅支持查询当天的数据，数据粒度为小时级；

- `startTime` 和 `endTime` 向下取整；

- `startTime` 为空时，默认取当天 0 点；

- 若 `startTime` 早于当天 0 点，则自动取当天 0 点；

- 若 `endTime` 晚于当前时间，则自动取当前时间；

- 若 `startTime` 晚于 `endTime`，则将 `startTime` 设置为 `endTime`；


[DataType](#datatype)


[StatisticType](#statistictype)


[Statistic](#statistic)

[Statistic](#statistic)


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| dataType |  | 是 | 数据类型 |
| statisticType |  | 否 | 统计的维度，不同的 dataType 支持的维度不一样 |
| startTime | timeStamp | 否 | 开始时间，在这个时间之后发生的活动，包含在这个时间段之前已经发生，但是还没有结束的活动 |
| endTime | timeStamp | 否 | 结束时间，在这个时间之前发生的活动，包含正在发生但还没有完全结束的活动 |
| success | (statistic:) => void | 否 | 回调函数，返回值是一个, 统计类型由 dataType 决定 |
| complete | () => void | 否 | 完成的回调函数 |
| fail | (data: string, code: number) => void | 否 | 失败回调函数 |


**示例**


```ts
health.getStatistic({
  dataType: health.DATA_TYPES.HEART_RATE,
  statisticType: health.STATISTIC_TYPES.SUM,
  startTime: new Date().setHours(9, 0, 0, 0), // 9点
  endTime: new Date().setHours(15, 0, 0, 0), // 15点
  success(data) {
    console.log(data)
  },
  fail(data, code) {
    console.log(data, code)
  },
})
```


](#subscribetodaystatistic)
### subscribeTodayStatistic


监听当日统计数据


[DataType](#datatype)


[StatisticType](#statistictype)


[Statistic](#statistic)

[Statistic](#statistic)


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| dataType |  | 是 | 每个值都是一个 DataType 的枚举类型 |
| statisticType |  | 否 | 统计的维度，不同厂商，不同的 dataType 支持的维度不一样 |
| callback | (statistic:) => void | 是 | 回调函数，返回值是一个, 统计类型由 dataType 决定 |
| fail | (data: string, code: number) => void | 否 | 失败回调函数 |


**示例**


```ts
health.subscribeTodayStatistic({
  dataType: health.DATA_TYPES.HEART_RATE,
  statisticType: health.STATISTIC_TYPES.SUM,
  callback(data) {
    console.log(data)
  },
  fail(data, code) {
    console.log(data, code)
  },
})
```


](#unsubscribetodaystatistic)
### unsubscribeTodayStatistic


取消监听当日统计数据


[DataType](#datatype)


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| dataType |  | 是 | 数据类型 |


**示例**


```ts
health.unsubscribeTodayStatistic({
  dataType: health.DATA_TYPES.HEART_RATE,
})
```


](#recentsample)
### RecentSample


最近一次采样数据结构


[DataType](#datatype)


[Sample](#sample)


| 属性名 | 值类型 | 说明 |
| --- | --- | --- |
| dataType |  | 数据类型 |
| data |  | 采样数据 |


**示例：**


```json
{
  "dataType": 0,
  "data": {
    "timeStamp": 1732706966443,
    "value": 80
  }
}
```


](#sample)
### Sample


采样查询接口返回的数据结构


[SleepUnit](#sleepunit)[SleepStage](#sleepstage)
[DataType](#datatype)


| 属性 | 值类型 | 说明 |
| --- | --- | --- |
| timeStamp | timeStamp | 采样时间 |
| value | Int |Float ||[] | 数据类型由查询时的决定 |


**示例：**


```json
{
  "timeStamp": 1732705884223,
  "value": 80
}
```


](#datatype)
### DataType


健康数据类型


```ts
const heartRate = health.DATA_TYPES.HEART_RATE
```


****


****


****


****


****


[SleepUnit](#sleepunit)

****


[SleepStage](#sleepstage)

****


****


****


| 类型 | 类型值 | 返回值类型 | 返回单位 | 说明 |
| --- | --- | --- | --- | --- |
| HEART_RATE | 0 | Int | bpm | 心率 |
| HEART_RATE_STEP | 1 | Int | bpm | 步行心率 |
| HEART_RATE_RESTING | 2 | Int | bpm | 静息心率 |
| STANDING | 3 | Int | hour | 站立，以时长衡量。1 小时内站立超过 1 分钟即算作站立 1 小时，仅支持统计数据 |
| INTENSITY_SPORT | 4 | Int | minutes | 中高强度运动的持续时长，仅支持统计数据 |
| STEP_COUNT | 5 | Int | 步 | 步数，仅支持统计数据，按时间段查询的最小粒度为小时 |
| SPO2 | 6 | Int | % | 血氧 |
| DISTANCE | 7 | Int | 米 | 距离，由骑行、跑步、步行产生，仅支持统计数据 |
| CALORIES | 8 | Int | 千卡 | 总卡路里，仅支持统计数据 |
| STRESS | 9 | Int |  | 压力值 |
| WALKING_SPEED | 10 | Int | 步/min | 步频 |
| SLEEP_UNIT | 11 |  |  | 睡眠时段，暂不支持 |
| SLEEP_STAGES | 12 | [] |  | 一个完整睡眠包含的睡眠分期，暂不支持 |
| SLEEP_STATUS | 13 | Int | 0:清醒 1:睡眠 | 睡眠状态 |
| ENERGY | 14 | Int | % | 活力值，暂不支持 |
| WALKING_STATUS | 15 | Int | 0:非步行 1:步行 | 步行状态 |
| SPEED | 16 | Float | 米/s | 配速，暂不支持 |


](#sleepunit)
### SleepUnit


睡眠时段返回值


| 属性 | 单位 | 说明 |
| --- | --- | --- |
| enterSleep | timeStamp | 入睡时间戳 |
| exitSleep | timeStamp | 出睡时间戳 |


**示例：**


```json
{
  "enterSleep": 1732705884223,
  "exitSleep": 1732706966443
}
```


](#sleepstage)
### SleepStage


| 属性 | 单位 | 说明 |
| --- | --- | --- |
| enterTimeStamp | timeStamp | 进入该睡眠分期的时间戳 |
| sleepType | Int | 进入的睡眠分期类型 1:深睡 2:浅睡 3:快速眼动 4:清醒 |


**示例：**


```json
{
  "enterTimeStamp": 1732705884223,
  "sleepType": 1
}
```


](#statistictype)
### StatisticType


统计数据类型


```ts
const sum = health.STATISTIC_TYPES.SUM
```


不同[DataType](#datatype)支持的统计类型如下：


| 类型 | 类型值 | 说明 |
| --- | --- | --- |
| AVERAGE | 0 | 平均值 |
| SUM | 1 | 总和 |
| MAX | 2 | 最大值 |
| MIN | 3 | 最小值 |


各数据类型的统计类型支持情况与统计 API 支持情况：


| 数据类型 | 最大小值 | 总和 | 平均值 | getTodayStatistic | subscribeTodayStatistic | getStatistic |
| --- | --- | --- | --- | --- | --- | --- |
| HEART_RATE | 支持 |  |  | 支持 | 支持 |  |
| SPO2 | 支持 |  |  | 支持 | 支持 |  |
| STRESS | 支持 |  |  | 支持 | 支持 |  |
| STANDING |  | 支持 |  | 支持 |  | 支持 |
| INTENSITY_SPORT |  | 支持 |  | 支持 |  | 支持 |
| STEP_COUNT |  | 支持 |  | 支持 |  | 支持 |
| DISTANCE |  | 支持 |  | 支持 |  | 支持 |
| CALORIES |  | 支持 |  | 支持 |  | 支持 |


](#statistic)
### Statistic


统计数据，获取采样数据的统计值。统计数据的数据结构如下：


[SleepUnit](#sleepunit)[SleepStage](#sleepstage)
[DataType](#datatype)


| 属性 | 值类型 | 说明 |
| --- | --- | --- |
| value | Int | Float ||[] | 数据类型由查询时的决定 |
| statisticType | - | 统计类型。如果数据返回的不是统计类型，则此值是 null |
| startTime | timeStamp | 统计开始时间 |
| endTime | timeStamp | 统计结束时间 |


**示例：**


```json
{
  "value": 80,
  "statisticType": 0,
  "startTime": 1732705884223,
  "endTime": 1732706966443
}
```

---

# API-拓展

## file-sandbox

> 原文路径：/api/extend/file-sandbox/

](#%E5%BA%94%E7%94%A8%E6%B2%99%E7%AE%B1%E7%9B%AE%E5%BD%95)
# 应用沙箱目录


蓝河应用框架给每个应用分配了一个专属的应用目录，蓝河应用的数据访问和操作都被限制在该目录内，此目录下存放的数据可以保护数据的安全性，这个目录称为 “应用的沙箱目录”。


](#%E5%BA%94%E7%94%A8%E6%B2%99%E7%AE%B1%E7%9B%AE%E5%BD%95%E5%AE%9A%E4%B9%89)
## 应用沙箱目录定义


应用沙箱目录定义详细说明


****
****


| 沙箱目录名 | 定义说明 |
| --- | --- |
| files | 应用在本设备上用于存放小而重要的数据目录（如用户登录数据），安全且持久有效，随应用卸载而删除。 |
| cache | 应用在本设备上用于存放缓存文件的目录（如图片、音频缓存），此目录可能会因系统空间不足而被清理，用户也可通过系统管理类应用清理该目录，此目录随应用卸载而删除，适合保存不重要的缓存数据。 |
| mass | 应用在本设备上用于存放大文件的目录（如下载的音频文件），此目录随应用卸载而删除。 |
| tmp | 应用在本设备上用于存放临时文件的目录（如临时日志），应用退出后就会清理该目录，此目录随应用卸载而删除，适合存放使用后即可删除的文件数据。 |
| preferences | 应用在本设备上用于存放 key-val 数据的目录，有大小限制，此目录下的数据通过 storage 的 API 写入，适合保存首选项和配置文件，随应用卸载而删除。 |


](#%E8%AE%BF%E9%97%AE%E6%B2%99%E7%AE%B1%E7%9B%AE%E5%BD%95)
## 访问沙箱目录


沙箱目录是通过 URI 形式访问，每个沙箱目录都有对应的 URI 标准标识。可以使用 URI 的地方都可以访问到沙箱目录，下面表格展示了不同沙箱目录的对应的 URI 格式。


****
****


| 沙箱目录名 | URI 定义 |
| --- | --- |
| files | internal://files/ |
| cache | internal://cache/ |
| mass | internal://mass/ |
| tmp | internal://tmp/ |


如需要往 files 沙箱存放一个 json 文件，则可如下操作：


```ts
file.writeText({
  uri: 'internal://files/demo.json',
  text: '{"name": "张三"}',
  success: function () {
    console.log('handling success')
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#%E5%A6%82%E4%BD%95%E9%80%89%E6%8B%A9%E5%AD%98%E6%94%BE%E6%B2%99%E7%AE%B1%E7%9B%AE%E5%BD%95%E7%9A%84%E4%BD%8D%E7%BD%AE)
## 如何选择存放沙箱目录的位置


沙箱目录的不同划分是为了对数据进行分类管理，将数据放在合理的目录下会让应用获得更大的收益。


对于不同沙箱目录的使用场景如下：


- files：此目录用于存放小而重要的数据，目录长期有效，可以保存的文本文件，如 json。

- mass：此目录用于存放大而不太重要的数据，目录长期有效，可以保存需要需要持久化的图片、音频、视频等文件。

- cache：此目录用于存放缓存文件，适合保存不重要的缓存数据，如缓存的音频、视频等。

- tmp：此目录用于存放临时文件，应用退出后可能被清理，适合存放日志等临时文件。

- preferences：此目录只能通过 storage 能力访问，适合存放应用运行中的 key-val 数据。

](#js-%E5%A6%82%E4%BD%95%E6%AD%A3%E7%A1%AE%E7%9A%84%E4%BD%BF%E7%94%A8%E6%B2%99%E7%AE%B1%E7%9B%AE%E5%BD%95)
## JS 如何正确的使用沙箱目录


要在 js 中使用沙箱目录，只要遵循蓝河应用框架开发即可。


- 存放/获取 文件时，使用 blueos.storage.file 能力，并且使用 URI 拼接，避免使用绝对路径写法。

- 存放/获取 key-val 时，使用 blueos.storage.storage 能力。

- 存放在沙箱目录内的图片，如果要用 image 标签访问，也需要使用 URI 访问。

- 同上，音频和视频文件如果要播放同样是需要 URI 访问。

---

## lifecycle

> 原文路径：/api/extend/lifecycle/

](#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F)
# 生命周期


了解应用/页面/自定义组件的生命周期与状态


![生命周期图](/dbc9b48af6d508812e00cdec9404e8e0/lifecycle.png)
](#%E5%BA%94%E7%94%A8%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F)
## 应用生命周期


](#oncreate)
### onCreate


监听应用创建，应用创建时调用。


**参数**


无


](#ondestroy)
### onDestroy


监听应用销毁，应用销毁时调用。


**参数**


无


](#onshow)
### onShow


应用显示在前台时调用。


**参数**


无


](#onhide)
### onHide


应用退到后台时调用。


**参数**


无


](#%E9%A1%B5%E9%9D%A2%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F)
## 页面生命周期


](#oninit)
### onInit


监听页面初始化。当页面完成初始化时调用，只触发一次


**参数**


无


](#onready)
### onReady


监听页面创建完成。当页面完成创建可以显示时触发，只触发一次


**参数**


无


](#onshow-1)
### onShow


onShow 是一个页面生命周期函数，用于监听页面显示的事件。当一个页面被打开或从后台切换到前台时(当应用处于后台时打开页面但页面没有在前台显示时 onShow 方法不会被触发)，onShow 方法会被触发。


**参数**


无


](#onhide-1)
### onHide


onHide 是一个页面生命周期函数，用于监听页面隐藏的事件。当一个页面被切换到后台或关闭时(当应用处于后台时页面被关闭 onHide 方法不会被触发)，onHide 方法会被触发。


**参数**


无


](#ondestroy-1)
### onDestroy


监听页面退出。当页面跳转离开（退出页面栈）时触发


**参数**


无


](#onbackpress)
### onBackPress


监听返回动作。当用户执行返回操作时触发。只有当前页面配置了 followHand : disable，该接口才生效。


**参数**


无


**返回值**


``


| 类型 | 描述 |
| --- | --- |
| boolean | 返回 true 表示页面自己处理返回逻辑，返回 false 表示使用默认的返回逻辑，不返回值会作为 false 处理； 注意：该函数不支持声明为异步函数（即：使用async标识），因为返回值代表界面要立即响应用户操作； |


](#onrefresh)
### onRefresh


监听页面重新打开。onRefresh 在 onShow 之前执行。


当页面在 manifest 中 launchMode 标识为'singleTask'时，仅会存在一个目标页面实例，用户多次打开目标页面时触发此函数。


该回调中参数为重新打开该页面时携带的参数。


详见[页面启动模式](/reference/extend/launch-mode)


**参数**


| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| query | Object | 通过 deeplink、router.push 等接口传入的 uri 中 query 解析成的对象，或者 router.push 等接口传入的 params 对象 |


](#onkey)
### onKey


监听按键响应。当按键被触发时回调


**参数**


| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| event | Object | 被触发的按键事件 |


**event 参数**


| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| keyCode | Number | 按下的键位，0：下键(电源键)，1：上键 |
| keyAction | Number | 按下或弹起的动作 0：按下 1：短按弹起 2：长按弹起 |
| repeatCount | Number | 连续按的次数，按键在长按的时候，会连续产生多个按下事件，这个时候第一个按下事件的 repeatCount 为 0，之后的按下事件 repeatCount 会递增。 |


**示例代码：**


```ts
onKey(event) {
  console.log(`key pressed! ${JSON.stringify(event)}`);
  console.info(`触发页面生命周期 onKey`)
}
```


](#onconfigurationchanged)
### onConfigurationChanged


监听系统语言改变


**参数**


| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| event | Object | 应用配置发生变化的事件 |


**event 参数：**


| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| type | String | 应用配置发生变化的原因类型，支持的 type 值如下所示 |


**event 中`type` 现在支持的参数值如下：**


| 参数值 | 描述 |
| --- | --- |
| locale | 应用语言、地区变化而发生改变 |


**示例代码：**


```javascript
onConfigurationChanged(evt) {
  if (event && event.type && event.type === 'locale') {
    console.log('locale or language changed!')
  }
}
```


](#onpalmover)
### onPalmOver


监听手掌覆盖事件


**参数**


无


**返回值**


`true` 表示不将事件继续传递给 launcher，其他值或者不返回都会将事件继续传递给 launcher。


**示例代码：**


```javascript
onPalmOver(evt) {
  console.info(`大手掌事件 onPalmOver`)
  return true;
}
```


](#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F)
## 自定义组件生命周期


自定义组件，指的是通过 import 标签引入的 ViewModel 组件


](#oninit-1)
### onInit


监听初始化，当数据驱动化完成时触发


**参数**


无


](#onready-1)
### onReady


监听模板创建完成，当模板创建完成时触发


**参数**


无


](#ondestroy-2)
### onDestroy


监听组件销毁，当销毁时触发


**参数**


无

---

## launch-mode

> 原文路径：/reference/extend/launch-mode/

](#%E9%A1%B5%E9%9D%A2%E5%90%AF%E5%8A%A8%E6%A8%A1%E5%BC%8F)
# 页面启动模式


用于定义页面的启动行为


](#%E9%9D%99%E6%80%81%E5%A3%B0%E6%98%8E)
## 静态声明


在 manifest 文件中页面路由信息 router.page 可增加启动模式字段 launchMode，用于声明该页面的启动模式


](#%E9%A1%B5%E9%9D%A2%E5%90%AF%E5%8A%A8%E6%A8%A1%E5%BC%8F%E5%8F%82%E6%95%B0)
### 页面启动模式参数：


| 属性 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| launchMode | String | standard | 否 | 声明页面的启动模式，支持"singleTask"，"standard"两种页面启动模式。标识为"singleTask"模式时每次打开目标页面都会打开已有的目标页面并回调 onRefresh 生命周期函数，清除该页面上打开的其他页面，没有打开过此页面时会创建新的目标页面实例。标识为"standard"模式时会每次打开新的目标页面（多次打开目标页面地址时会存在多个相同页面） |


](#%E7%A4%BA%E4%BE%8B)
### 示例：


```json
{
  "router": {
    "entry": "PageA",
    "pages": {
      "PageA": {
        "launchMode": "singleTask",
        "component": "index"
      },
      "PageB": {
        "launchMode": "standard",
        "component": "index"
      },
      "PageC": {
        "launchMode": "singleTask",
        "component": "index"
      }
    }
  }
}
```


打开页面的行为逻辑：


若按顺序启动 PageA -> PageB -> PageC -> PageB -> PageC -> PageA


- 打开 PageA，首次打开时页面栈为空 `页面栈为PageA`

- 打开 PageB，PageB 的启动模式为 standard，即在 PageA 之上新建 PageB 的页面实例并显示 `页面栈为PageA,PageB`

- 打开 PageC，首次打开 PageC，即在 PageB 之上新建 PageC 的页面实例并显示 `页面栈为PageA,PageB,PageC`

- 打开 PageB，PageB 的启动模式为 standard，即在 PageC 之上新建 PageB 的页面实例并显示 `页面栈为PageA,PageB,PageC,PageB`

- 打开 PageC，PageC 页面实例已存在，即销毁 PageC 之上的页面实例 PageB，回到之前打开的 PageC 的页面实例并回调此页面生命周期的 onRefresh 函数 `页面栈为PageA,PageB,PageC`

- 打开 PageA，PageA 页面实例已存在，即销毁 PageA 之上的页面实例 PageB 和 PageC，回到之前打开的 PageA 的页面实例并回调此页面生命周期的 onRefresh 函数 `页面栈为PageA`

---

## mulit

> 原文路径：/reference/extend/mulit/

](#%E5%B1%8F%E5%B9%95%E9%80%82%E9%85%8D)
# 屏幕适配


蓝河操作系统支持对不同尺寸和不同形状的屏幕的适配能力。


](#1%E7%AD%89%E6%AF%94%E6%94%BE%E7%BC%A9)
## 1.等比放缩


在 manifest 文件中配置`designWidth`字段的设计基准宽度，蓝河应用便可以自动完成等比缩放。


```json
// manifest.json
{
  "config": {
    "designWidth": 466
  }
}
```


如上示例中`designWidth`配置为 466px，那么所有的 px 单位使用都会按照 466px 的基准宽度换算。如下示例中显示为宽高都是屏幕宽度一半。


```css
.box {
  width: 233px;
  height: 233px;
}
```


](#2%E9%9D%9E%E7%AD%89%E6%AF%94%E5%B1%8F%E5%B9%95)
## 2.非等比屏幕


在非等比屏幕下，使用等比缩放或许不是开发想要的效果，这里蓝河应用提供了使用绝对宽度的方案来实现您想要的布局。


](#dp-%E5%8D%95%E4%BD%8D)
### dp 单位


px 会使布局产生等比缩放效果，而 dp 为绝对的屏幕尺寸。


以宽度为示例，设备 dp 的计算方法如下：


```text
屏幕宽度dp值 = 设备屏幕分辨率的宽度 / DPR
```


上述公式中 DPR 的取值可以查如下表格得到


| 规格 | 取值 | 说明 |
| --- | --- | --- |
| ldpi | 0.75 | 低密度屏幕(~120dpi) |
| mdpi | 1 | 中密度屏幕(~160dpi)(基准密度) |
| hdpi | 1.5 | 高密度屏幕(~240dpi) |
| xhdpi | 2.0 | 加高密度屏幕(~320dpi) |
| xxhdpi | 3.0 | 超超高密度屏幕(~480dpi) |
| xxxhdpi | 4.0 | 超超超高密度屏幕(~640dpi) |


引入 DP 单位，开发者可以解决 `非等比例的屏幕适配` ;比如:在 DPR 为 3 的小屏幕上希望内容显示较少，设置元素 的宽度 dp 较小，在 DPR 为 3 的大屏幕上希望内容显示较多，设置元素的宽度 dp 较大;该单位可以像 px 单位 一样，用于常⻅的 DOM 元素的宽度、高度上。如下示例


```css
.box {
  width: 50dp;
  height: 50dp;
}
```


](#3%E5%AA%92%E4%BD%93%E6%9F%A5%E8%AF%A2)
## 3.媒体查询


结合 dp 值，设备类型，开发者可以针对不同屏幕和设备写不同样式。如下示例：


```css
/* 方表和手机上生效 */
@media screen and (device: watch-square) or screen and (device: phone) {
  .box {
    background-color: red;
  }
}
```


更多内容参考[媒体查询](/reference/configuration/style-sheet/#%E5%AA%92%E4%BD%93%E6%9F%A5%E8%AF%A2)


](#4%E8%8E%B7%E5%8F%96%E8%AE%BE%E5%A4%87%E7%B1%BB%E5%9E%8B)
## 4.获取设备类型


在 template 或者 js 中，如果我们想差异性处理组件和逻辑，可以判断当前的设备类型。


如下示例，在布局中判断设备类型


```html
<div>
  <header-of-square if="$device.deviceType == 'watch-square'">
  <header-of-round elif="$device.deviceType == 'watch-round'">
</div>
```


$device 的详细文档异步[公共对象](/reference/configuration/script/#%E5%85%AC%E5%85%B1%E5%AF%B9%E8%B1%A1)


](#5-%E8%B5%84%E6%BA%90%E7%AE%A1%E7%90%86)
## 5. 资源管理


资源是与您的应用程序捆绑和部署的文件，它们可以在运行时被访问。常见的资源类型包括静态数据（例如 JSON 文件）、配置文件、以及各种格式的图标和图像（JPEG、WebP、GIF、动画 WebP/GIF、PNG、BMP 和 WBMP）。考虑到您的程序将在各种不同类型和屏幕分辨率的设备上运行，为了追求最佳的用户体验，您需要针对不同的场景、设备和分辨率匹配合适的资源。因此，这里提供了一套匹配规则，使得您的应用可以轻松地适配不同的设备状态。


在项目的根目录下的 `resources` 文件夹中，您可以根据需要创建 JSON 格式的配置文件。这些文件的命名规则为：前缀“res”开头，用连字符“-”连接，再根据需要添加限定词。默认的配置文件命名为 `res-defaults.json`。


```text
├── resources
  │── res-pad.json
  │── res-watch.json
  └── res-defaults.json
```


](#51-resources-%E8%A7%84%E5%88%99)
### 5.1 resources 规则


1、res-watch-分辨率-手表形状-屏幕密度.json，短线连接的为限定词，限定词顺序为：分辨率 > 表盘形状 > 屏幕密度。


2、其中分辨率、手表形状和屏幕密度如无需要可以不用写


3、分辨率使用 宽 x 高的形式，x 为英文字母 X 的小写


4、 屏幕密度的枚举为：`ldpi`/`mdpi`/`hdpi`/`xhdpi`/`xxhdpi`/`xxxhdpi`


5、手表形状枚举值为：`square` 和 `round`


6、 默认资源名为：res-defaults.json


7、 资源的命中权重大小为：分辨率 (1000) > 表盘形状 (100) > 屏幕密度 (10)


为方便理解资源的生效顺序，我们可以假设下权重: 分辨率 = 1000, 表盘形状 = 100, 屏幕密度 = 10，以下权重越高则越会优先命中并生效。


```js
// 匹配402x402，方形手表，屏幕密度120
// 权重：1110
res-watch-402x402-square-ldpi.json

// 匹配402x402，圆形手表
// 权重：1100
res-watch-402x402-round.json

// 匹配方形手表
// 权重：100
res-watch-square.json

// 匹配402x402的手表
// 权重：1000
res-watch-402x402.json

// 匹配手表密度为120dpi
// 权重：10
res-watch-ldpi.json

// 匹配手表
res-watch.json

// 匹配所有资源作为兜底
res-defaults.json
```


](#52-resources-%E9%85%8D%E7%BD%AE)
### 5.2 resources 配置


下面示例演示了如何配置 pad 和 watch 两种设备的资源的配置


```json
// resources/res-pad.json
{
  "image": {
    "logo": "/common/pad/logo.png",
    "banner": "/common/pad/banner.png"
  },
  "colors": {
    "headerBackGround": "#ffffff"
  }
}
```


```json
// resources/res-watch.json
{
  "image": {
    "logo": "/common/watch/logo.png",
    "banner": "/common/watch/banner.png"
  },
  "colors": {
    "headerBackGround": "#fff000"
  }
}
```


](#53-res-%E6%96%B9%E6%B3%95)
### 5.3 $res 方法


配置完 resources 后就可以使用$res 在 template 和 script 中使用了


| 属性 | 类型 | 参数 | 描述 |
| --- | --- | --- | --- |
| $res | Function | path: String 资源路径 | 根据开发者配置的 resources 和当前系统的参数返回对应的资源 |


示例：


```html
<template>
  <div style="background-color: {{ $res('colors.headerBackGround') }}">
    <image src="{{ $res('image.banner') }}"></image>
  </div>
</template>
<script>
  export default {
    onInit() {
      console.log(this.$res('image.banner'))
    },
  }
</script>
```

---

## resident

> 原文路径：/reference/extend/resident/

](#%E5%90%8E%E5%8F%B0%E8%BF%90%E8%A1%8C)
# 后台运行


](#%E6%A6%82%E8%BF%B0)
## 概述


为了节省系统资源，通常情况下，应用切换到后台后将会暂停运行，等到再次切换回前台时继续运行。但音乐/运动等类型的应用， 退到后台后可能仍然需要继续运行，为满足此类需求，加入了对后台运行的支持。


](#%E5%90%8E%E5%8F%B0%E8%BF%90%E8%A1%8C%E6%A8%A1%E5%BC%8F%E7%9A%84%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86%E5%A6%82%E4%B8%8B)
### 后台运行模式的工作原理如下:


在应用切换到后台时，系统将会检查是否满足后台运行的条件，如果满足，应用将继续运行，否则将被暂停。此条件包括：


-
manifest.json 中声明了后台运行接口


-
当前至少有一个（已在 manifest.json 中声明的）后台运行接口正在运行


处于后台运行中的应用，如果所有后台运行接口均运行结束，系统将会启动倒计时。倒计时结束后，如果仍未有后台运行接口被调用， 应用将会退出后台运行模式，暂停运行。


](#%E5%AE%9E%E8%B7%B5%E5%BB%BA%E8%AE%AE)
### 实践建议:


-
后台运行需要消耗较多的系统资源，应用需要根据自身需求审慎使用。针对申请后台运行的应用，上线审核时将会审核其后台运行的需求是否合理。


-
后台运行接口的导入和后台执行的工作放到 app.ux 中，而不是放到页面中，以免避免页面切换和销毁的影响。


](#%E9%85%8D%E7%BD%AE%E6%96%B9%E6%B3%95)
### 配置方法


manifest.json 中声明所需的后台运行接口。后台运行接口及后台运行条件包括：


| 模块 | 后台运行条件 |
| --- | --- |
| blueos.multimedia.audio | 音频播放 |
| blueos.multimedia.record | 录音 |
| blueos.multimedia.media | 音频播放/录音 |
| blueos.communication.network.request | 上传下载 |
| blueos.hardware.geolocation | 定位 |
| blueos.bluetooth.ble | 蓝牙连接 |


**使用示例：**


```json
{
  "package": "com.demo.sample",
  "config": {
    "logLevel": "trace",
    "background": {
      "features": [
        "blueos.multimedia.audio",
        "blueos.multimedia.media",
        "blueos.multimedia.record",
        "blueos.communication.network.request",
        "blueos.hardware.geolocation"
      ]
    }
  }
}
```

---

## watchface

> 原文路径：/reference/extend/watchface/

](#%E8%A1%A8%E7%9B%98)
# 表盘


](#%E6%A6%82%E8%BF%B0)
## 概述


表盘指默认开机首屏的界面，可分为指针表盘和数字表盘，除了查看时间，表盘还可以给用户提供展示计步、心率、电量、天气等关键信息。


系统会内置一些表盘，同时也支持第三方开发，用户可以根据喜好通过长按切换选择表盘。


](#%E8%A1%A8%E7%9B%98%E9%A1%B9%E7%9B%AE%E7%BB%93%E6%9E%84)
## 表盘项目结构


一个表盘项目包含：描述项目配置信息的[manifest 文件](/reference/configuration/manifest)，一个描述表盘界面的[ux 文件](/reference/configuration/ux-file)，以及引用的图片资源文件，典型示例如下：


应用根目录


```text
.
├── README.md
├── package.json
├── sign
│   ├── certificate.pem
│   └── private.pem
└── src
    ├── app.ux
    ├── manifest.json
    └── watch3000
        ├── assets
        │   ├── aaa.png
        │   └── bg.png
        ├── edit.ux
        └── index.ux
```


](#manifest-%E6%96%87%E4%BB%B6)
## manifest 文件


manifest.json 文件中包含了表盘信息描述、接口声明等


](#manifest)
### manifest


****


``


``**``**


````````````


``


| 属性 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| package | String | - | 是 | 表盘包名，确认与原生应用的包名不一致，包名须保证唯一，推荐采用 com.company.watch 的格式，如：com.company.watch.demo |
| versionName | String | - | 否 | 表盘版本名称，如："1.0" |
| versionCode | Integer | - | 是 | 表盘版本号，从1自增，推荐每次重新上传包时versionCode+1 |
| config | Object | - | 是 | 系统配置信息，详见下面说明 |
| router | Object | - | 是 | 路由信息，详见下面说明 |
| deviceTypeList | Array<String> | watch | 否 | 可选值有：watch,watch-square,watch-round,tv,car,phone |
| customData | Record<string, string> | - | 否 | 开发者自定义字段，限定不超过 30 个字符，可通过packageManager.getCustomData()方法读取 |


](#config)
### config


用于定义系统配置和全局数据。


| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| designWidth | Integer | 466 | 页面设计基准宽度，根据实际设备宽度来缩放元素大小 |


](#router)
### router


用于定义页面的组成和相关配置信息，如果页面没有配置路由信息，则在编译打包时跳过。


****````


| 属性 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| watchfaces | Object | - | 是 | 页面配置列表，key 值为表盘目录（命名为watch+表盘 id，对应表盘目录名，例如表盘 id 为 3000，则 key 为watch3000， 对应watch3000目录），value 为该表盘详细配置 ，详见下面说明 |


](#routerwatchfaceswatchpath)
#### router.watchfaces[watchPath]


用于定义单个表盘页面信息。


``


| 属性 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| id | Integer | - | 是 | 表盘唯一标识，由服务端生成 |
| name | String | - | 是 | 表盘名称，用于在表盘商店、切换选择等显示的名称 |
| component | String | - | 是 | 表盘对应组件名，与 ux 文件名保持一致，例如'index' 对应 'index.ux' |
| edit | String | '' | 否 | 为空字符串''时，表盘为不可编辑表盘；为非空字符串值时，代表表盘目录下编辑表盘页面的路由名称 |
| features | Array | - | 否 | 表盘用到的 features 全部在此配置，注意与蓝河应用的配置区别 |
| params | Object | - | 是 | 表盘参数，详见下面说明 |


](#params)
##### params


表盘特有参数，用于表盘框架加载表盘和展示列表。


``


| 属性 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| previewImage | [String] | - | 是 | 字符串数组，数组每一项代表预览图片路径，用于在表盘商店、切换选择等显示的预览图，预览图片的路径格式为：local://包名/path |
| hpw | Integer | - | 否 | 高功耗提醒，0-无高功耗提醒，1-需要高功耗提醒，默认为 0 |


示例:


```json
{
  "package": "com.vivo.watch.sample",
  "versionName": "1.0.0",
  "versionCode": 1,
  "config": {
    "designWidth": 466
  },
  "router": {
    "watchfaces": {
      "watch3000": {
        "id": 3000,
        "name": "表盘示例",
        "component": "index",
        "edit": "edit",
        "features": [
          {
            "name": "blueos.app.router"
          }
        ],
        "params": {
          "previewImage": ["assets/aaa.png"],
          "hpw": 0
        }
      }
    }
  },
  "customData": { "key1": "value1", "key2": "value2" }
}
```


](#ux-%E6%96%87%E4%BB%B6)
## ux 文件


index.ux 文件中包含了表盘界面描述、样式定义和业务逻辑代码，最终会编译为 js 文件，在运行时中以挂件组件的形式进行加载


](#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F)
### 生命周期


](#oninit)
#### onInit


监听表盘初始化。当表盘数据完成初始化时调用，只触发一次


](#onready)
#### onReady


监听表盘界面创建完成。当表盘界面完成创建可以显示时触发，只触发一次


](#ondestroy)
#### onDestroy


监听表盘退出。当表盘即将退出销毁时触发


](#onshow)
#### onShow()


监听表盘返回前台,表盘返回前台时调用


](#onhide)
#### onHide()


监听表盘退到后台,表盘退到后台时调用


```html
<template>
  <div class="wrap">
    <!-- 表盘界面 -->
  </div>
</template>
<script>
  // 业务逻辑代码
  export default {
    // 初始化数据
    data() {
      return {}
    },
    // 生命周期
    onInit() {},
    onShow() {},
    onHide() {}
    // 自定义方法
    refreshTime() {}
  }
</script>
<style>
  /* 样式描述 */
</style>
```

---

## widget

> 原文路径：/reference/extend/widget/

](#%E5%BF%AB%E6%8D%B7%E5%8D%A1%E7%89%87)
# 快捷卡片


⚠ 快捷卡片已经弃用，请使用 [智慧服务卡片](/reference/widget/overview/)


](#%E6%A6%82%E8%BF%B0)
### 概述


快捷卡片是应用的特殊页面，配置为快捷卡片的页面可以被其他宿主应用作为组件引入。此特性可以使得其能跟随主应用更新，而宿主应用无需更新。


一个应用可以配置多个快捷卡片，一个快捷卡片也可以被多个宿主应用所引用。


](#manifestjson-%E6%96%87%E4%BB%B6)
### manifest.json 文件


快捷卡片在 manifest.json 中的 widgets 对象里进行定义，参考下面定义简例：


```json
{
  "package": "com.example.demo",
  "router": {
    "entry": "pages/Home",
    "pages": {
      "pages/Home": {
        "component": "index"
      },
      "pages/Music": {
        "component": "index"
      }
    },
    // 快捷卡片定义
    "widgets": {
      // 音乐快捷卡片
      "pages/Music": {
        "id": "music2008",
        // 快捷卡片名（必填）
        "name": "音乐服务",
        // 快捷卡片组件名（必填）
        "component": "index",
        // 可编辑路径
        "params": {
          // 快捷卡片缩略图 (必填)
          "previewImage": ["./music.png"],
          "hpw": 0
        }
      }
    }
  }
}
```


](#routerwidgetswidgetpath)
#### router.widgets[widgetPath]


用于定义单个快捷卡片页面信息。


| 属性 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| id | Integer | - | 是 | 快捷卡片唯一标识 |
| name | String | - | 是 | 快捷卡片中文名称，用于在切换选择等显示的名称 |
| component | String | - | 是 | 表盘对应组件名，与 ux 文件名保持一致，例如'index' 对应 'index.ux' |
| params | Object | - | 是 | 快捷卡片参数，详见下面说明 |


](#params)
#### params


快捷卡片特有参数，用于快捷卡片框架加载快捷卡片和展示列表。


| 属性 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| previewImage | String | - | 是 | 字符串数组，数组每一项代表预览图片路径，用于在快捷卡片商店、切换选择等显示的预览图 |
| hpw | Integer | - | 否 | 高功耗提醒，0-无高功耗提醒，1-需要高功耗提醒，默认为 0 |


](#%E5%BF%AB%E6%8D%B7%E5%8D%A1%E7%89%87%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F)
### 快捷卡片生命周期


1、宿主页面的生命周期触发，同时也会触发快捷卡片的生命周期。


2、对快捷卡片使用`if指令`移除时会触发`onDestroy`, `if指令`再显示等同于重新创建。


3、对快捷卡片使用`show指令`控制显示隐藏时会触发`onShow`和`onHide`。


](#%E6%B3%A8%E6%84%8F)
### 注意


快捷卡片为单页面操作，不能使用路由跳转

---

# API-数据存储

## exchange

> 原文路径：/api/storage/exchange/

](#%E6%95%B0%E6%8D%AE%E5%85%B1%E4%BA%AB)
# 数据共享


提供了一个不同蓝河应用间数据交互的方式。蓝河应用可以利用它发布数据，或从其他蓝河应用获取数据


数据交互有三个数据空间，分别是应用空间（application）、应用开发商空间（vendor）和全局空间（global）


application：数据发布在应用空间，读取、修改、删除 时需同时指定发布方的包名和签名，并且需要发布方授权


vendor：数据发布在应用开发商空间，同签名的多个应用的写操作会相互覆盖，读取时不能指定发布方的包名和签名，不需要发布方授权


global：数据发布在全局空间，多个应用的写操作会相互覆盖，读取时不能指定发布方的包名和签名，不需要发布方授权


**注意**：


1、set、get 操作支持在 `application`、`vendor` 和`global` 空间上操作数据。 2、exchange 的数据不做持久化处理，系统重启后数据会丢失。


](#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E)
## 接口声明


```json
{ "name": "blueos.storage.exchange" }
```


](#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97)
## 导入模块


```ts
import exchange from '@blueos.storage.exchange'
```


](#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89)
## 接口定义


](#exchangegetobject)
### exchange.get(OBJECT)


读取蓝河应用平台数据，可获取到`应用空间`（application）、`应用开发商空间`（vendor ）或`全局空间`（global）的数据


](#%E5%8F%82%E6%95%B0)
#### 参数


``````


``````


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| package | String | 否 | 数据发布方的包名，scope 为application时必须提供，为vendor或global时必须为空 |
| sign | String | 否 | 数据发布方签名的 SHA-256，scope 为application时必须提供，为vendor或global时必须为空 |
| scope | String | 否 | 数据发布的空间类型，支持 application、vendor 和 global，默认为 application |
| key | String | 是 | 数据的 key |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调（调用成功、失败都会执行） |


](#%E8%BF%94%E5%9B%9E%E5%80%BC)
#### 返回值:


| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| value | String | Boolean | Number | Object | Array | 数据的值，与 set 设置的类型一致 |


](#fail-%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%E4%BB%A3%E7%A0%81)
##### fail 返回错误代码：


| 错误码 | 说明 |
| --- | --- |
| 202 | 参数错误 |
| 1000 | 没有权限 |


](#%E7%A4%BA%E4%BE%8B)
#### 示例


```ts
exchange.get({
  package: 'com.example',
  sign: '7a12ec1d66233f20a20141035b1f7937',
  key: 'token',
  success: function (ret) {
    console.log(`handling success, value = ${ret.value}`)
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#exchangegetsyncobject)
### exchange.getSync(Object)


同步读取蓝河应用平台数据，可获取到`应用空间`（application）、`应用开发商空间`（vendor ）或`全局空间`（global）的数据


](#%E5%8F%82%E6%95%B0-1)
#### 参数


``````


``````


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| package | String | 否 | 数据发布方的包名，scope 为application时必须提供，为vendor或global时必须为空 |
| sign | String | 否 | 数据发布方签名的 SHA-256，scope 为application时必须提供，为vendor或global时必须为空 |
| scope | String | 否 | 数据发布的空间类型，支持 application、vendor 和 global，默认为 application |
| key | String | 是 | 数据的 key |


](#%E8%BF%94%E5%9B%9E%E5%80%BC-1)
#### 返回值


| 参数值 | 类型 | 说明 |
| --- | --- | --- |
| value | String | Boolean | Number | Object | Array | 数据的值，与 set 设置的类型一致 |


](#%E7%A4%BA%E4%BE%8B-1)
#### 示例


```ts
const value = exchange.getSync({
  package: 'com.example',
  sign: '7a12ec1d66233f20a20141035b1f7937',
  key: 'token',
})
```


](#exchangesetobject)
### exchange.set(OBJECT)


发布数据到蓝河应用平台，可发布到`应用空间`（application）、`应用开发商空间` 或`全局空间`（global）


](#%E5%8F%82%E6%95%B0-2)
#### 参数


``````````````


``````````````


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | String | 是 | 数据的 key |
| value | String | Boolean | Number | Object | Array | 是 | 数据的值 |
| scope | String | 否 | 数据发布的空间类型，支持 application、vendor 和 global，默认为 application |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调（调用成功、失败都会执行） |
| package | String | 否 | 配置需要写入数据到某蓝河应用的应用空间时某蓝河应用的包名，仅在scope参数不设置或设置为application时生效，在scope为vendor或global时必须设为空值 |
| sign | String | 否 | 配置需要写入数据到某蓝河应用的应用空间时某蓝河应用的签名的 SHA-256，仅在scope参数不设置或设置为application时生效，在scope为vendor或global时必须设为空值 |


](#fail-%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%E4%BB%A3%E7%A0%81-1)
##### fail 返回错误代码：


| 错误码 | 说明 |
| --- | --- |
| 202 | 参数错误 |


](#%E7%A4%BA%E4%BE%8B-2)
#### 示例


```ts
exchange.set({
  key: 'token',
  value: '12347979',
  success: function () {
    console.log(`handling success`)
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#%E7%A4%BA%E4%BE%8B-3)
#### 示例


```ts
exchange.set({
  key: 'token',
  value: false,
  success: function () {
    console.log(`handling success`)
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#%E7%A4%BA%E4%BE%8B-4)
#### 示例


```ts
exchange.set({
  key: 'token',
  value: 10,
  success: function () {
    console.log(`handling success`)
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#%E7%A4%BA%E4%BE%8B-5)
#### 示例


```ts
exchange.set({
  key: 'token',
  value: { name: '张三', age: 18 },
  success: function () {
    console.log(`handling success`)
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#%E7%A4%BA%E4%BE%8B-6)
#### 示例


```ts
exchange.set({
  key: 'token',
  value: [2, 3, 4],
  success: function () {
    console.log(`handling success`)
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```

---

## file

> 原文路径：/api/storage/file/

](#%E6%96%87%E4%BB%B6%E5%AD%98%E5%82%A8)
# 文件存储


](#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E)
## 接口声明


```json
{ "name": "blueos.storage.file" }
```


](#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97)
## 导入模块


```ts
import file from '@blueos.storage.file'
```


**注意：下面文件操作仅支持 URI 的写法，不支持文件绝对路径。**


](#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89)
## 接口定义


](#filemoveobject)
### file.move(OBJECT)


将源文件移动到指定位置


](#%E5%8F%82%E6%95%B0)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| srcUri | String | 是 | 源文件的 uri，不能是应用资源路径和 tmp 类型的 uri |
| dstUri | String | 是 | 目标文件的 uri，不能是应用资源路径和 tmp 类型的 uri |
| success | Function | 否 | 成功回调，返回目标文件的 uri |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |


](#fail-%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%E4%BB%A3%E7%A0%81)
##### fail 返回错误代码：


| 错误码 | 说明 |
| --- | --- |
| 202 | 参数错误 |
| 300 | I/O 错误 |


](#%E7%A4%BA%E4%BE%8B)
#### 示例：


```ts
file.move({
  srcUri: 'internal://cache/path/to/file',
  dstUri: 'internal://files/path/to/file',
  success: function (uri) {
    console.log(`move success: ${uri}`)
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#filecopyobject)
### file.copy(OBJECT)


将源文件复制一份并存储到指定位置，接口中使用的 URI 描述请参考[文件组织](/reference/configuration/file-organization)


](#%E5%8F%82%E6%95%B0-1)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| srcUri | String | 是 | 源文件的 uri |
| dstUri | String | 是 | 目标文件的 uri，不能是应用资源路径和 tmp 类型的 uri |
| success | Function | 否 | 成功回调，返回目标文件的 uri |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |


](#fail-%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%E4%BB%A3%E7%A0%81-1)
##### fail 返回错误代码：


| 错误码 | 说明 |
| --- | --- |
| 202 | 参数错误 |
| 300 | I/O 错误 |


](#%E7%A4%BA%E4%BE%8B-1)
#### 示例：


```ts
file.copy({
  srcUri: 'internal://cache/path/to/file',
  dstUri: 'internal://files/path/to/file',
  success: function (uri) {
    console.log(`copy success: ${uri}`)
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#filelistobject)
### file.list(OBJECT)


获取指定目录下的文件列表，接口中使用的 URI 描述请参考[文件组织](/reference/configuration/file-organization)


](#%E5%8F%82%E6%95%B0-2)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | String | 是 | 目录 uri，不能是应用资源路径和 tmp 类型的 uri。 支持应用资源路径 |
| success | Function | 否 | 成功回调，返回{fileList:[{uri:'file1', lastModifiedTime:1234456, length:123456} ...]} |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |


](#success-%E8%BF%94%E5%9B%9E%E5%80%BC)
##### success 返回值：


| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| fileList | Array | 文件列表，每个文件的格式为{uri:'file1', lastModifiedTime:1234456, length:123456} |


](#%E6%AF%8F%E4%B8%AA%E6%96%87%E4%BB%B6%E7%9A%84%E5%85%83%E4%BF%A1%E6%81%AF)
###### 每个文件的元信息：


| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| uri | String | 文件的 uri，该 uri 可以被其他组件或 Feature 访问 |
| length | Number | 文件大小，单位 B |
| lastModifiedTime | Number | 文件的保存是的时间戳，从 1970/01/01 00:00:00 GMT 到当前时间的毫秒数 |


](#fail-%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%E4%BB%A3%E7%A0%81-2)
##### fail 返回错误代码：


| 错误码 | 说明 |
| --- | --- |
| 202 | 参数错误 |
| 300 | I/O 错误 |


](#%E7%A4%BA%E4%BE%8B-2)
#### 示例：


```ts
file.list({
  uri: 'internal://files/movies/',
  success: function (data) {
    console.log(data.fileList)
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#filegetobject)
### file.get(OBJECT)


获取本地文件的文件信息，接口中使用的 URI 描述请参考[文件组织](/reference/configuration/file-organization)


](#%E5%8F%82%E6%95%B0-3)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | String | 是 | 文件的 uri，不能是应用资源路径。 支持应用资源路径 |
| recursive | Boolean | 否 | 是否递归获取子目录文件列表。默认 false |
| success | Function | 否 | 成功回调，返回{uri:'file1', length:123456, lastModifiedTime:1233456} |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |


](#success-%E8%BF%94%E5%9B%9E%E5%80%BC-1)
##### success 返回值：


| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| uri | String | 文件的 uri，该 uri 可以被其他组件或 Feature 访问 |
| length | Number | 文件大小，单位 B |
| lastModifiedTime | Number | 文件的保存是的时间戳，从 1970/01/01 08:00:00 到当前时间的毫秒数 |
| type | String | 文件类型，dir：目录；file：文件 |
| subFiles | Array | 文件列表，recursive 为 true 且 type 为 dir 时递归返回子目录文件细信息，否则不返回 |


](#fail-%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%E4%BB%A3%E7%A0%81-3)
##### fail 返回错误代码：


| 错误码 | 说明 |
| --- | --- |
| 202 | 参数错误 |
| 300 | I/O 错误 |


](#%E7%A4%BA%E4%BE%8B-3)
#### 示例：


```ts
file.get({
  uri: 'internal://files/path/to/file',
  success: function (data) {
    console.log(data.uri)
    console.log(data.length)
    console.log(data.lastModifiedTime)
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#filedeleteobject)
### file.delete(OBJECT)


删除本地存储的文件，接口中使用的 URI 描述请参考[文件组织](/reference/configuration/file-organization)


](#%E5%8F%82%E6%95%B0-4)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | String | 是 | 需要删除的文件 uri，不能是应用资源路径和 tmp 类型的 uri |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |


](#fail-%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%E4%BB%A3%E7%A0%81-4)
##### fail 返回错误代码：


| 错误码 | 说明 |
| --- | --- |
| 202 | 参数错误 |
| 300 | I/O 错误 |


](#%E7%A4%BA%E4%BE%8B-4)
#### 示例：


```ts
file.delete({
  uri: 'internal://files/path/to/file',
  success: function (data) {
    console.log('handling success')
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#filewritetextobject)
### file.writeText(OBJECT)


写文本到文件


](#%E5%8F%82%E6%95%B0-5)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | String | 是 | 本地文件路径，不支持资源文件路径和 tmp 分区，如果文件不存在会创建文件 |
| text | String | 是 | 需要写入的字符串 |
| encoding | String | 否 | 编码格式，默认 UTF-8 |
| append | Boolean | 否 | 是否追加模式，默认 false |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |


](#fail-%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%E4%BB%A3%E7%A0%81-5)
##### fail 返回错误代码：


| 错误码 | 说明 |
| --- | --- |
| 202 | 参数错误 |
| 300 | I/O 错误 |


](#%E7%A4%BA%E4%BE%8B-5)
#### 示例：


```ts
file.writeText({
  uri: 'internal://files/work/demo.txt',
  text: 'test',
  success: function () {
    console.log('handling success')
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#filewritearraybufferobject)
### file.writeArrayBuffer(OBJECT)


写 Buffer 到文件


](#%E5%8F%82%E6%95%B0-6)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | String | 是 | 本地文件路径，不支持资源文件路径和 tmp 分区，如果文件不存在会创建文件 |
| buffer | Uint8Array | 是 | 需要写入的 Buffer |
| position | Number | 否 | 指向文件开始写入数据的位置的偏移量，默认 0 |
| append | Boolean | 否 | 是否追加模式，默认 false。当为 true 时，position 参数无效 |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |


](#fail-%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%E4%BB%A3%E7%A0%81-6)
##### fail 返回错误代码：


| 错误码 | 说明 |
| --- | --- |
| 202 | 参数错误 |
| 300 | I/O 错误 |


](#%E7%A4%BA%E4%BE%8B-6)
#### 示例：


```ts
file.writeArrayBuffer({
  uri: 'internal://files/work/demo',
  buffer: buffer,
  success: function () {
    console.log('handling success')
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#filereadtextobject)
### file.readText(OBJECT)


从文件中读取文本


](#%E5%8F%82%E6%95%B0-7)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | String | 是 | 本地文件路径 |
| encoding | String | 否 | 编码格式，默认 UTF-8 |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |


](#success-%E8%BF%94%E5%9B%9E%E5%80%BC-2)
##### success 返回值：


| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| text | String | 读取的文本 |


](#fail-%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%E4%BB%A3%E7%A0%81-7)
##### fail 返回错误代码：


| 错误码 | 说明 |
| --- | --- |
| 202 | 参数错误 |
| 300 | I/O 错误 |
| 301 | 文件不存在 |


](#%E7%A4%BA%E4%BE%8B-7)
#### 示例：


```ts
file.readText({
  uri: 'internal://files/work/demo.txt',
  success: function (data) {
    console.log('text: ' + data.text)
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#filereadarraybufferobject)
### file.readArrayBuffer(OBJECT)


从文件中读取 Buffer


](#%E5%8F%82%E6%95%B0-8)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | String | 是 | 本地文件路径 |
| position | Number | 否 | 读取的起始位置，默认值为文件的起始位置 |
| length | Number | 否 | 读取的长度，不填写则读取到文件结尾 |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |


](#success-%E8%BF%94%E5%9B%9E%E5%80%BC-3)
##### success 返回值：


| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| buffer | Uint8Array | 读取的文件内容 |


](#fail-%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%E4%BB%A3%E7%A0%81-8)
##### fail 返回错误代码：


| 错误码 | 说明 |
| --- | --- |
| 202 | 参数错误 |
| 300 | I/O 错误 |
| 301 | 文件不存在 |


](#%E7%A4%BA%E4%BE%8B-8)
#### 示例：


```ts
file.readArrayBuffer({
  uri: 'internal://files/work/demo',
  position: 100,
  length: 100,
  success: function (data) {
    console.log('buffer.byteLength: ' + data.buffer.byteLength)
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#fileaccessobject)
### file.access(OBJECT)


判断文件或目录是否存在


](#%E5%8F%82%E6%95%B0-9)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | String | 是 | 目录或文件 uri，不能是应用资源路径和 tmp 类型的 uri。 支持应用资源路径 |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |


](#fail-%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%E4%BB%A3%E7%A0%81-9)
##### fail 返回错误代码：


| 错误码 | 说明 |
| --- | --- |
| 202 | 参数错误 |
| 300 | I/O 错误 |


](#%E7%A4%BA%E4%BE%8B-9)
#### 示例：


```ts
file.access({
  uri: 'internal://files/test',
  success: function (data) {
    console.log(`handling success`)
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#filemkdirobject)
### file.mkdir(OBJECT)


创建目录


](#%E5%8F%82%E6%95%B0-10)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | String | 是 | 目录的 uri，不能是应用资源路径和 tmp 类型的 uri |
| recursive | Boolean | 否 | 是否递归创建该目录的上级目录后再创建该目录。默认 false |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |


](#fail-%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%E4%BB%A3%E7%A0%81-10)
##### fail 返回错误代码：


| 错误码 | 说明 |
| --- | --- |
| 202 | 参数错误 |
| 300 | I/O 错误 |


](#%E7%A4%BA%E4%BE%8B-10)
#### 示例：


```ts
file.mkdir({
  uri: 'internal://files/dir/',
  success: function (data) {
    console.log(`handling success`)
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#filermdirobject)
### file.rmdir(OBJECT)


删除目录


](#%E5%8F%82%E6%95%B0-11)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | String | 是 | 目录的 uri，不能是应用资源路径和 tmp 类型的 uri |
| recursive | Boolean | 否 | 是否递归删除子文件和子目录。默认 false |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |


](#fail-%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%E4%BB%A3%E7%A0%81-11)
##### fail 返回错误代码：


| 错误码 | 说明 |
| --- | --- |
| 202 | 参数错误 |
| 300 | I/O 错误 |


](#%E7%A4%BA%E4%BE%8B-11)
#### 示例：


```ts
file.rmdir({
  uri: 'internal://files/dir/',
  success: function (data) {
    console.log(`handling success`)
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#%E9%80%9A%E7%94%A8-fail-%E5%9B%9E%E8%B0%83%E5%8F%82%E6%95%B0%E5%AE%9A%E4%B9%89)
#### 通用 fail 回调参数定义


| 属性 | 类型 | 说明 |
| --- | --- | --- |
| data | string | 接口失败信息描述 |
| code | FailCodeEnum | 接口失败业务码 |


](#failcodeenum)
#### FailCodeEnum


| 属性 | 说明 |
| --- | --- |
| 202 | 参数错误 |
| 300 | I/O 错误 |
| 301 | 文件不存在 |
| 302 | 存储空间不足 |

---

## localstorage

> 原文路径：/api/storage/localstorage/

](#k-v-%E6%95%B0%E6%8D%AE%E5%AD%98%E5%82%A8)
# K-V 数据存储


](#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E)
## 接口声明


```json
{ "name": "blueos.storage.storage" }
```


](#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97)
## 导入模块


```ts
import storage from '@blueos.storage.storage' 或 const storage = require('@blueos.storage.storage')
```


](#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89)
## 接口定义


](#storagegetobject)
### storage.get(OBJECT)


读取存储内容


](#%E5%8F%82%E6%95%B0)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | String | 是 | 索引 |
| default | String | 否 | 如果 key 不存在，返回 default。如果 default 未指定，返回长度为 0 的空字符串 |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |


](#success-%E8%BF%94%E5%9B%9E%E5%80%BC)
#### success 返回值：


key 对应的存储内容


](#%E7%A4%BA%E4%BE%8B)
#### 示例：


```ts
storage.get({
  key: 'A1',
  success: function (data) {
    console.log('handling success')
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#storagegetsyncobject)
### storage.getSync(OBJECT)


同步读取存储内容


](#%E5%8F%82%E6%95%B0-1)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | String | 是 | 索引 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC)
#### 返回值：


| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| value | String | Boolean | Number | Object | Array | key 对应的存储内容 |


](#%E7%A4%BA%E4%BE%8B-1)
#### 示例：


```ts
const value = storage.getSync({ key: 'A1' })
```


](#storagesetobject)
### storage.set(OBJECT)


修改存储内容


](#%E5%8F%82%E6%95%B0-2)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | String | 是 | 索引 |
| value | String | Boolean | Number | Object | Array | 否 | 新值。如果新值是长度为 0 的空字符串，会删除以 key 为索引的数据项 |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |


](#%E7%A4%BA%E4%BE%8B-2)
#### 示例：


```ts
storage.set({
  key: 'A1',
  value: 'V1',
  success: function (data) {
    console.log('handling success')
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#%E7%A4%BA%E4%BE%8B-3)
#### 示例：


```ts
storage.set({
  key: 'A1',
  value: true,
  success: function (data) {
    console.log('handling success')
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#%E7%A4%BA%E4%BE%8B-4)
#### 示例：


```ts
storage.set({
  key: 'A1',
  value: 18,
  success: function (data) {
    console.log('handling success')
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#%E7%A4%BA%E4%BE%8B-5)
#### 示例：


```ts
storage.set({
  key: 'A1',
  value: { name: '李四', age: 18 },
  success: function (data) {
    console.log('handling success')
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#%E7%A4%BA%E4%BE%8B-6)
#### 示例：


```ts
storage.set({
  key: 'A1',
  value: [18, 20],
  success: function (data) {
    console.log('handling success')
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#storageclearobject)
### storage.clear(OBJECT)


清空存储内容


](#%E5%8F%82%E6%95%B0-3)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |


](#%E7%A4%BA%E4%BE%8B-7)
#### 示例：


```ts
storage.clear({
  success: function (data) {
    console.log('handling success')
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#storagedeleteobject)
### storage.delete(OBJECT)


删除存储内容


](#%E5%8F%82%E6%95%B0-4)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | String | 是 | 索引 |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |


](#%E7%A4%BA%E4%BE%8B-8)
#### 示例：


```ts
storage.delete({
  key: 'A1',
  success: function (data) {
    console.log('handling success')
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#storagekeyobject)
### storage.key(OBJECT)


返回存储中某个 index 的键名


](#%E5%8F%82%E6%95%B0-5)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| index | Number | 是 | 要查询的键名对应的索引 |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |


](#success-%E8%BF%94%E5%9B%9E%E5%80%BC-1)
#### success 返回值：


index 对应的键名


](#%E7%A4%BA%E4%BE%8B-9)
#### 示例：


```ts
storage.key({
  index: 1,
  success: function (data) {
    console.log(`handling success, key = ${data}`)
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#%E5%B1%9E%E6%80%A7)
### 属性


| 名称 | 参数类型 | 是否可读 | 是否可写 | 描述 |
| --- | --- | --- | --- | --- |
| length | Number | 是 | 否 | 存储里的数据项的数量 |


](#%E7%A4%BA%E4%BE%8B-10)
#### 示例：


```ts
let length = storage.length
```


](#%E9%80%9A%E7%94%A8-fail-%E5%9B%9E%E8%B0%83%E5%8F%82%E6%95%B0%E5%AE%9A%E4%B9%89)
#### 通用 fail 回调参数定义


| 属性 | 类型 | 说明 |
| --- | --- | --- |
| data | string | 接口失败信息描述 |
| code | FailCodeEnum | 接口失败业务码 |


](#failcodeenum)
#### FailCodeEnum


| 属性 | 说明 |
| --- | --- |
| 302 | 存储空间不足 |

---

## overview

> 原文路径：/api/storage/overview/

](#%E6%A6%82%E8%BF%B0)
# 概述


蓝河应用的数据存储能力模块使应用能够更好地管理和存储数据，提供了广泛的工具和功能，从简单的键值存储到文件操作，以及跨应用数据共享，提供了多样化数据管理和共享能力。


](#%E5%AD%90%E6%A8%A1%E5%9D%97%E4%BB%8B%E7%BB%8D)
## 子模块介绍


| 模块 | 简述 |
| --- | --- |
| 存储空间统计 | 提供获取可用空间与总空间的能力，支持同步与异步。 |
| K-V 数据存储 | 提供读取、修改、设置、删除、清空存储内容等数据存储能力 |
| 文件存储 | 提供对应用沙箱目录下的文件的一些操作能力 |
| 数据共享 | 提供三个维度的不同蓝河应用间数据共享能力 |

---

## statvfs

> 原文路径：/api/storage/statvfs/

](#%E5%AD%98%E5%82%A8%E7%A9%BA%E9%97%B4%E7%BB%9F%E8%AE%A1)
# 存储空间统计


statvfs 一个用来获取应用空间的模块，包含了获取可用空间与总空间接口，支持同步与异步。


](#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E)
## 接口声明


```json
{ "name": "blueos.storage.statvfs" }
```


](#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97)
## 导入模块


```ts
import statvfs from '@blueos.storage.statvfs'
```


](#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89)
## 接口定义


](#statvfsgetfreesize)
### statvfs.getFreeSize()


查询指定文件系统可用空间大小，异步接口


**参数：**


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | 需要查询的文件系统的文件路径 URI |
| success | (size:number)=>{} | 否 | 成功回调,返回 空闲的字节数，（单位为 Byte） |
| fail | Function | 否 | 失败回调 |


**使用示例：**


```ts
statvfs.getFreeSize({
  path: 'internal://files',
  success(size) {
    console.info('getFreeSize successfully, Size: ' + size)
  },
})
```


](#statvfsgetfreesizesync)
### statvfs.getFreeSizeSync()


查询指定文件系统可用空间大小，同步接口


**参数：**


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | 需要查询的文件系统的文件路径 URI |


**返回值：**


空闲的字节数，（单位为 Byte）


**使用示例：**


```ts
const freeSize = statvfs.getFreeSizeSync('internal://files')
console.log(freeSize)
```


](#statvfsgettotalsize)
### statvfs.getTotalSize()


查询指定文件系统总空间大小，异步接口


**参数：**


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | 需要查询的文件系统的文件路径 URI |
| success | (size:number)=>{} | 否 | 成功回调,返回总空间大小的字节数，（单位为 Byte） |
| fail | Function | 否 | 失败回调 |


**使用示例：**


```ts
statvfs.getTotalSize({
  path: 'internal://files',
  success(size) {
    console.info('getTotalSize successfully, Size: ' + size)
  },
})
```


](#statvfsgettotalsizesync)
### statvfs.getTotalSizeSync()


查询指定文件系统总空间大小，同步接口


**参数：**


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | 需要查询的文件系统的文件路径 URI |


**返回值：**


总空间大小字节数，（单位为 Byte）


**使用示例：**


```ts
const totalSize = statvfs.getTotalSizeSync('internal://files')
console.log(totalSize)
```

---

# API-概述

## error-code

> 原文路径：/api/common/error-code/

](#%E9%80%9A%E7%94%A8%E9%94%99%E8%AF%AF%E7%A0%81)
# 通用错误码


](#%E6%8F%90%E4%BE%9B%E5%85%AC%E5%85%B1%E7%9A%84%E9%94%99%E8%AF%AF%E7%A0%81)
## 提供公共的错误码


](#%E5%85%B6%E4%B8%AD%E9%94%99%E8%AF%AF%E7%A0%81-200-%E4%B8%BA%E7%B3%BB%E7%BB%9F%E9%80%9A%E7%94%A8%E9%94%99%E8%AF%AF%E7%A0%81%E6%89%80%E6%9C%89%E7%B3%BB%E7%BB%9F%E6%9C%AA%E7%9F%A5%E5%BC%82%E5%B8%B8%E5%8F%91%E7%94%9F%E6%97%B6%E6%8A%9B%E5%87%BA%E6%AF%94%E5%A6%82%E7%B3%BB%E7%BB%9F%E7%94%B3%E8%AF%B7%E5%86%85%E5%AD%98%E7%A9%BA%E9%97%B4%E5%A4%B1%E8%B4%A5%E7%AD%89)
### 其中，错误码 200 为系统通用错误码，所有系统未知异常发生时抛出。比如系统申请内存空间失败等。


| code | 含义 |
| --- | --- |
| 200 | 通用错误。 |
| 202 | 参数错误。 |
| 300 | I/O 错误。 |

---

## overview

> 原文路径：/api/common/overview/

](#%E6%A6%82%E8%BF%B0)
# 概述


在本章节中，我们将为您介绍蓝河系统 JS API 的调用规则和通用的错误码。通过阅读本章节，您将了解 JS API 的三种调用形式——同步、异步和订阅，并且掌握一些常见的错误码。

---

## rule

> 原文路径：/api/common/rule/

](#%E8%B0%83%E7%94%A8%E8%A7%84%E5%88%99)
# 调用规则


](#%E5%90%8C%E6%AD%A5)
## 同步


同步方法调用后必须等到方法结果返回后才能继续后续的行为，返回值可以是任意类型。


](#%E7%A4%BA%E4%BE%8B)
## 示例


```ts
import context from '@blueos.app.context'

export default {
  getInfo() {
    const info = context.getInfo()
    console.log(JSON.stringify(info))
  },
}
```


](#%E5%BC%82%E6%AD%A5)
## 异步


异步方法调用整个过程不会阻碍调用者的工作。业务执行完成后会调用开发者提供的回调函数。


](#%E5%BC%82%E6%AD%A5%E6%8E%A5%E5%8F%A3%E6%94%AF%E6%8C%81%E7%9A%84%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0)
#### 异步接口支持的回调函数


[code 是错误码](/api/common/error-code/)


| 回调函数 | 参数名 | 类型 | 返回值 | 说明 |
| --- | --- | --- | --- | --- |
| success | data | any | 可选，返回值可以是任意类型，详见接口使用文档。 | 在执行成功时触发。 |
| fail | data,code | any,number | 错误信息内容，一般是字符串，也可能是其他类型，详见接口使用文档。 | 在执行失败时触发。 |
| complete | - | - | - | 在执行完成时触发。 |


](#%E8%AF%B4%E6%98%8E)
#### 说明


```text
success、fail和complete四个回调函数是否支持参考具体接口描述。
success、fail两个回调函数的触发是互斥的，即会且只会在一个回调函数中触发，触发任意一个都会再次调用complete回调。
```


](#%E7%A4%BA%E4%BE%8B-1)
## 示例


```ts
import deviceInfo from '@blueos.hardware.deviceInfo'

export default {
  getInfo() {
    deviceInfo.getInfo({
      success: function (data) {
        console.log('Device information obtained successfully. Device brand:' + data.brand)
      },
      fail: function (data, code) {
        console.log(
          'Failed to obtain device information. Error code:' + code + '; Error information: ' + data
        )
      },
    })
  },
}
```


](#%E8%AE%A2%E9%98%85)
## 订阅


订阅接口不会立即返回结果，开发者要在参数中设置相应的回调函数；该回调函数会在完成时或者事件变化时进行回调；可以执行多次。


](#%E8%AE%A2%E9%98%85%E6%8E%A5%E5%8F%A3%E6%94%AF%E6%8C%81%E4%BB%A5%E4%B8%8B%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0)
#### 订阅接口支持以下回调函数


[code 是错误码](/api/common/error-code/)


| 回调函数 | 参数名 | 类型 | 返回值 | 说明 |
| --- | --- | --- | --- | --- |
| callback | data | any | 返回值可以是任意类型，详见接口使用文档。 | 接口调用成功或事件变更时触发，可能会触发多次。 |
| fail | data,code | any,number | 错误信息内容，一般是字符串，也可能是其他类型，详见接口使用文档。 | 在执行失败时触发。一旦触发该回调函数，callback 不会再次被调用，接口调用结束。 |


](#%E4%BB%A5%E7%9B%91%E5%90%AC%E7%BD%97%E7%9B%98%E6%95%B0%E6%8D%AE%E4%B8%BA%E4%BE%8B)
#### 以监听罗盘数据为例


```ts
import sensor from '@blueos.hardware.sensor'

export default {
  subscribeCompass() {
    sensor.subscribeCompass({
      callback: function (ret) {
        console.log(`handling callback, direction = ${ret.direction}`)
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`)
      },
    })
  },
}
```

---

# API-系统能力

## am

> 原文路径：/api/system/am/

](#%E5%BA%94%E7%94%A8%E7%AE%A1%E7%90%86)
# 应用管理


](#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E)
## 接口声明


](#js-%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E)
### JS 接口声明


```json
{ "name": "blueos.app.appmanager.appState" }
```


](#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97)
### 导入模块


```ts
import am from '@blueos.app.appmanager.appState'
```


](#%E5%9C%A8%E5%B7%A5%E7%A8%8B%E9%87%8C%E9%9D%A2%E7%9A%84-manifest-%E6%96%87%E4%BB%B6%E4%B8%AD%E9%85%8D%E7%BD%AE%E5%A6%82%E4%B8%8B%E5%86%85%E5%AE%B9)
## 在工程里面的 manifest 文件中配置如下内容


](#%E7%94%B3%E8%AF%B7%E6%9D%83%E9%99%90)
### 申请权限


```json
{
  "permissions": [{ "name": "watch.permission.AM" }]
}
```


](#%E5%BA%94%E7%94%A8%E7%8A%B6%E6%80%81)
### 应用状态


蓝河应用的状态有三种，应用处于前台，后台以及应用未运行。对应的三种状态值枚举如下：


| 状态值 | 说明 |
| --- | --- |
| foreground | 应用处于前台 |
| background | 应用处于后台 |
| noRunning | 应用未运行 |


](#js-%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89)
## JS 接口定义


](#ammovetasktoback)
### am.moveTaskToBack()


将当前栈顶应用移动到后台


](#%E5%8F%82%E6%95%B0-3)
#### 参数


无


](#%E8%BF%94%E5%9B%9E%E5%80%BC-1)
#### 返回值


如果当前任务成功移动到后台，则返回值为 `true`，否则返回值为 `false`。


示例


```js
am.moveTaskToBack()
```

---

## app

> 原文路径：/api/system/app/

](#%E6%A6%82%E8%BF%B0)
# 概述


蓝河应用的应用框架为开发者提供了广泛的能力，以构建、管理蓝河应用的各个方面。通过这些能力，开发者可以更好地控制和定制蓝河应用的行为、用户体验以及数据操作。


](#%E5%AD%90%E6%A8%A1%E5%9D%97%E4%BB%8B%E7%BB%8D)
## 子模块介绍


| 模块 | 简介 |
| --- | --- |
| 应用上下文 | 提供了管理和控制应用的重要功能，可帮助开发者获得更多应用信息、整合外部资源，以及有效退出应用 |
| 页面路由 | 提供应用能够有效管理和导航不同页面的能力，以确保应用的流畅导航和用户体验 |
| 应用管理 | 该模块负责跟踪和管理应用的状态，包括前台运行、后台运行以及应用未运行的情况，以实现灵活的应用控制 |
| 生命周期 | 提供了页面、自定义组件、应用的生命周期接口，开发者可以选择在应用运行的特定阶段执行相应的业务代码 |
| 包管理 | 该模块允许检测应用是否存在，安装应用，获取应用版本信息、签名摘要信息以及应用分类，为应用操作和信息检索提供全面的支持 |
| 页面栈管理 | 管理页面栈信息 |
| 应用沙箱目录 | 蓝河应用框架给每个应用分配了一个专属的应用目录，蓝河应用的数据访问和操作都被限制在该目录内，此目录下存放的数据可以保护数据的安全性 |
| 通知能力 | 提供多应用间数据传递和事件交互的能力，应用发布通知能力以及弹窗能力 |
| 后台管理 | 提供定时触发事件或执行特定操作的功能，允许应用在预定的时间或间隔内执行后台任务 |

---

## audio

> 原文路径：/api/system/audio/

](#%E9%9F%B3%E9%A2%91)
# 音频


](#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E)
## 接口声明


```json
{ "name": "blueos.media.audio.audioPlayer" }
```


](#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97)
## 导入模块


```ts
import audio from '@blueos.media.audio.audioPlayer' 或 const audio = require('@blueos.media.audio.audioPlayer')
```


](#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89)
## 接口定义


](#audioplay)
### audio.play()


开始播放音频


](#%E5%8F%82%E6%95%B0)
#### 参数


无


](#%E7%A4%BA%E4%BE%8B)
#### 示例：


```ts
audio.play()
```


](#audiopause)
### audio.pause()


暂停播放音频


](#%E5%8F%82%E6%95%B0-1)
#### 参数


无


](#%E7%A4%BA%E4%BE%8B-1)
#### 示例


```ts
audio.pause()
```


](#audiostop)
### audio.stop()


停止音频播放，可以通过 play 重新播放音频


](#%E5%8F%82%E6%95%B0-2)
#### 参数


无


](#%E7%A4%BA%E4%BE%8B-2)
#### 示例：


```ts
audio.stop()
```


](#audiogetplaystateobject)
### audio.getPlayState(OBJECT)


获取当前播放状态数据


](#%E5%8F%82%E6%95%B0-3)
#### 参数


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |


](#success-%E8%BF%94%E5%9B%9E%E5%80%BC)
#### success 返回值：


| 参数值 | 类型 | 说明 |
| --- | --- | --- |
| state | String | 播放状态,分别为'play','pause','stop','idle' |
| src | String | 播放的音频媒体 uri |
| currentTime | Number | 当前音频的当前进度，单位秒,停止时返回-1 |


](#%E7%A4%BA%E4%BE%8B-3)
#### 示例：


```ts
audio.getPlayState({
  success: function (data) {
    console.log(`
      handling success: state: ${data.state},
      src:${data.src}
    `)
  },
  fail: function (data, code) {
    console.log('handling fail, code=' + code)
  },
})
```


](#%E5%B1%9E%E6%80%A7)
### 属性


[streamType](#streamType)


| 名称 | 参数类型 | 是否可读 | 是否可写 | 必填 | 描述 |
| --- | --- | --- | --- | --- | --- |
| src | String | 是 | 是 | 是 | 播放的音频媒体 uri |
| currentTime | Number | 是 | 是 | 否 | 音频的当前进度，单位秒，对值设置可以调整播放进度 |
| duration | Number | 是 | 否 | 否 | 音频文件的总时长，单位秒，未知返回 NaN |
| streamType | String | 是 | 是 | 否 | 指定使用音频类型，默认为 music。 |


](#a-idstreamtypestreamtype-%E5%8F%82%E6%95%B0a)[streamType 参数


| 名称 | 说明 | 取值 |
| --- | --- | --- |
| MEDIA | 媒体 | music |
| VOICE_CALL | 通话 | voicecall |


](#%E7%A4%BA%E4%BE%8B-4)
#### 示例：


```ts
let streamType = audio.streamType
audio.streamType = 'voicecall'
```


](#%E4%BA%8B%E4%BB%B6)
### 事件


``


``


| 名称 | 描述 | 返回值 |
| --- | --- | --- |
| Play | 在调用 play 方法后的回调事件 |  |
| Pause | 在调用 pause 方法后的回调事件 |  |
| Stop | 在调用 stop 方法后的回调事件 |  |
| Ended | 播放结束时的回调事件 |  |
| Error | 播放发生错误时的回调事件 |  |
| TimeUpdate | 在currentTime属性更新时会触发的回调事件 |  |
| DurationChange | 在duration属性更新时被触发的回调事件 |  |
| LoadedData | 第一次获取到音频数据的回调事件 |  |


](#%E7%A4%BA%E4%BE%8B-5)
#### 示例：


```ts
audio.onError = function (error) {
  console.info(`audio error called, error: ${error}`)
}
```

---

## audiomanager

> 原文路径：/api/system/audiomanager/

](#%E9%9F%B3%E9%A2%91%E7%AE%A1%E7%90%86)
# 音频管理


](#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E)
## 接口声明


```json
{ "name": "blueos.media.audio.audioManager" }
```


](#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97)
## 导入模块


```ts
import audioManager from '@blueos.media.audio.audioManager'
```


](#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89)
## 接口定义


](#setvolumeobject)
### setVolume(OBJECT)


设置音量


**参数**


[AudioVolumeType](#audiovolumetype)


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType |  | 是 | 音量流类型 |
| volume | number | 是 | 音量等级, 设置的音量，0.00-1.00 之间。 |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |


**返回值：**


无


**示例：**


```ts
audioManager.setVolume({
  volumeType: 'music',
  volume: 0.5,
  success() {
    console.log("设置音量成功")
  }
})
```


](#getvolumeobject)
### getVolume(OBJECT)


获取音量


**参数：**


[AudioVolumeType](#audiovolumetype)


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType |  | 是 | 音量流类型 |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |


**返回值：**


| 类型 | 必填 | 说明 |
| --- | --- | --- |
| number | 是 | 音量等级, 设置的音量，0.00-1.00 之间。 |


**示例**


```ts
audioManager.getVolume({
  volumeType: 'music',
  success(volume) {
    console.log(`音量等级为：${volume}`)
  }
})
```


](#getvolumesyncobject)
### getVolumeSync(OBJECT)


同步获取音量


**参数**


[AudioVolumeType](#audiovolumetype)


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType |  | 是 | 音量流类型 |


**返回值**


| 类型 | 说明 |
| --- | --- |
| number | 音量等级, 设置的音量，0.00-1.00 之间。 |


**示例**


```ts
const value = audioManager.getVolumeSync({
  volumeType: 'music',
})
console.log(`音量等级为：${value}`)
```


](#getminvolumeobject)
### getMinVolume(OBJECT)


获取指定流的最小音量


**参数：**


[AudioVolumeType](#audiovolumetype)


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType |  | 是 | 音量流类型 |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |


**success 返回值：**


| 类型 | 说明 |
| --- | --- |
| number | 最小音量 |


**示例：**


```ts
audioManager.getMinVolume({
  volumeType: 'music',
  success(volume) {
    console.log(`最小音量为：${volume}`)
  },
})
```


](#getmaxvolumeobject)
### getMaxVolume(OBJECT)


获取指定流的最大音量


**参数：**


[AudioVolumeType](#audiovolumetype)


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType |  | 是 | 音量流类型 |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |


**success 返回值：**


| 类型 | 说明 |
| --- | --- |
| number | 最大音量 |


**示例：**


```ts
audioManager.getMaxVolume({
  volumeType: 'music',
  success(volume) {
    console.log(`最大音量为：${volume}`)
  },
})
```


](#muteobject)
### mute(OBJECT)


设置指定音量流静音或取消静音


**参数：**


[AudioVolumeType](#audiovolumetype)


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType |  | 是 | 音量流类型 |
| isMute | number | 是 | 是否将音量流静音（1:设置静音 ；0:设置取消静音） |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |


**返回值：**


无


**示例：**


```ts
audioManager.mute({
  volumeType: 'music',
  isMute: 1,
  success() {
    console.log(`静音成功`)
  }
})
```


](#ismuteobject)
### isMute(OBJECT)


获取指定音量流是否被静音


**参数：**


[AudioVolumeType](#audiovolumetype)


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType |  | 是 | 音量流类型 |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |


**返回值：**


| 类型 | 说明 |
| --- | --- |
| number | 是否将音量流静音（1:设置静音 ；0:设置取消静音)。 |


**示例**


```ts
audioManager.isMute({
  volumeType: 'music',
  success(isMute) {
    console.log(isMute)
  }
})
```


](#subscribeobject)
### subscribe(OBJECT)


监听音量变化


**参数：**


``


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | volume：表示音量 |
| callback | Function | 是 | 监听音量变化数据回调函数的执行 |
| fail | Function | 否 | 失败回调 |


**callback 返回值：**


[AudioVolumeType](#audiovolumetype)


| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| volumeType |  | 音量流类型 |
| value | number | 音量等级, 设置的音量，0.00-1.00 之间 |


**示例：**


```ts
audioManager.subscribe({
  type: 'volume',
  callback(data) {
    console.log(`value = ${data.value} volumeType = ${data.volumeType}`)
  }
})
```


](#unsubscribeobject)
### unsubscribe(OBJECT)


取消监听音量变化


**参数：**


``


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | volume：表示音量 |


**示例：**


```ts
audioManager.unsubscribe({
  type: 'volume',
})
```


](#ismicrophonemuteobject)
### isMicrophoneMute(OBJECT)


获取麦克风是否为静音状态


**参数**


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |


**返回值**


| 类型 | 必填 | 说明 |
| --- | --- | --- |
| number | 是 | 是否将音量流静音（1:设置静音 ；0:设置取消静音)。 |


**示例**


```ts
audioManager.isMicrophoneMute({
  success(isMicrophoneMute) {
    console.log(isMicrophoneMute)
  }
})
```


](#audiovolumetype)
### AudioVolumeType


枚举，音量流的类型


| 名称 | 说明 | 取值 |
| --- | --- | --- |
| RING | 铃声 | ring |
| MEDIA | 媒体声音 | music |


](#audiofocusacquiretype)
### AudioFocusAcquireType


音频焦点变更类型枚举


****
****
****


| 名称 | 说明 | 取值 |
| --- | --- | --- |
| GAIN | 获得音频焦点 | gain |
| LOSS | 失去音频焦点 | loss |
| TRANSIENT | 短暂失去音频焦点，(预留，暂不支持) | transient |
| DUCK | 降音量，未失去音频焦点  ，(预留，暂不支持) | duck |

---

## battery

> 原文路径：/api/system/battery/

](#%E7%94%B5%E9%87%8F%E4%BF%A1%E6%81%AF)
# 电量信息


](#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E)
## 接口声明


```json
{ "name": "blueos.hardware.battery" }
```


](#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97)
## 导入模块


```ts
import battery from '@blueos.hardware.battery' 或 const battery = require('@blueos.hardware.battery')
```


](#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89)
## 接口定义


](#batterygetstatusobject)
### battery.getStatus(OBJECT)


获取当前设备的电量信息。


](#%E5%8F%82%E6%95%B0)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |


](#success-%E8%BF%94%E5%9B%9E%E5%80%BC)
##### success 返回值：


| 参数值 | 类型 | 说明 |
| --- | --- | --- |
| charging | Boolean | 是否正在充电 |
| level | Number | 当前电量，0.0 - 1.0 之间 |


](#%E7%A4%BA%E4%BE%8B)
#### 示例：


```ts
battery.getStatus({
  success: function (data) {
    console.log(`handling success: ${data.level}`)
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#batterygetstatussync)
### battery.getStatusSync()


同步获取当前设备的电量信息。


](#%E5%8F%82%E6%95%B0-1)
#### 参数


无


](#%E8%BF%94%E5%9B%9E%E5%80%BC)
#### 返回值


| 参数值 | 类型 | 说明 |
| --- | --- | --- |
| batteryStatus | Object | 当前电量信息 |


](#batterystatus-%E5%8F%82%E6%95%B0%E6%8F%8F%E8%BF%B0)
#### batteryStatus 参数描述


| 参数值 | 类型 | 说明 |
| --- | --- | --- |
| charging | Boolean | 是否正在充电 |
| level | Number | 当前电量，0.0 - 1.0 之间 |


](#%E7%A4%BA%E4%BE%8B-1)
#### 示例


```ts
const batteryStatus = battery.getStatusSync()
```

---

## bluetooth

> 原文路径：/api/system/bluetooth/

](#%E8%93%9D%E7%89%99)
# 蓝牙


](#%E4%B8%80%E8%93%9D%E7%89%99%E6%95%B4%E4%BD%93%E4%BB%8B%E7%BB%8D)
## 一、蓝牙整体介绍


](#%E4%BC%A0%E7%BB%9F%E8%93%9D%E7%89%99)
### 传统蓝牙


传统蓝牙本机管理：打开和关闭蓝牙、设置和获取本机蓝牙名称、扫描和取消扫描周边蓝牙设备、获取本机蓝牙 profile 对其他设备的连接状态、获取本机蓝牙已配对的蓝牙设备列表。


传统蓝牙远端设备操作：查询远端蓝牙设备名称和 MAC 地址、设备类型和配对状态，以及向远端蓝牙设备发起配对。


](#%E4%BD%8E%E5%8A%9F%E7%8E%87%E8%93%9D%E7%89%99-ble)
### 低功率蓝牙 BLE


BLE 设备交互时会分为不同的角色：


中心设备和外围设备：中心设备负责扫描外围设备、发现广播。外围设备负责发送广播。


GATT（Generic Attribute Profile，通用属性配置文件）服务端与 GATT 客户端：两台设备建立连接后，其中一台作为 GATT 服务端，另一台作为 GATT 客户端。


](#%E4%BA%8C%E4%BD%8E%E5%8A%9F%E8%80%97%E8%93%9D%E7%89%99-ble)
## 二、低功耗蓝牙 BLE


](#%E6%A6%82%E8%BF%B0)
### 概述


BLE 扫描和广播：根据指定状态获取外围设备、启动或停止 BLE 扫描、广播。


BLE 中心设备与外围设备进行数据交互：BLE 外围设备和中心设备建立 GATT 连接后，中心设备可以查询外围设备支持的各种数据，向外围设备发起数据请求，并向其写入特征值数据。


BLE 外围设备数据管理：BLE 外围设备作为服务端，可以接收来自中心设备（客户端）的 GATT 连接请求，应答来自中心设备的特征值内容读取和写入请求，并向中心设备提供数据。同时外围设备还可以主动向中心设备发送数据。


](#-%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF)
### ① 应用场景


通过 BLE 扫描和广播提供的开放能力，可以根据指定状态获取外围设备、启动或停止 BLE 扫描、广播。


](#-%E6%A8%A1%E5%9D%97%E5%AF%BC%E5%85%A5)
### ② 模块导入


接口声明


```json
{ "name": "blueos.bluetooth.ble" }
```


接口导入


```ts
import bluetooth from '@blueos.bluetooth.ble'
```


权限要求


```json
{
  "permissions": [{ "name": "blueos.permission.BLUETOOTH" }]
}
```


](#-api-%E8%AF%B4%E6%98%8E)
### ③ API 说明


**低功率蓝牙 BLE 管理类 bluetooth.BLE 的主要接口，本文档仅实现 createGattServer。**


| 接口名 | 功能描述 |
| --- | --- |
| createGattClientDevice | 创建一个可使用的 GattClientDevice 实例。 |
| createGattServer | 创建一个可使用的 GattServer 实例。 |
| getConnectedBLEDevices | 获取和当前设备连接的 BLE 设备。 |
| getLeMaximumAdvertisingDataLength | 广播的最大数据长度。 |
| startBLEScan | 发起 BLE 扫描流程。 |
| stopBLEScan | 停止 BLE 扫描流程。 |
| subscribeBLEDeviceFind | 订阅 BLE 设备发现上报事件。 |
| unsubscribeBLEDeviceFind | 取消订阅 BLE 设备发现上报事件。 |


](#bluetoothblecreategattserver)
### bluetooth.BLE.createGattServer()


创建一个可使用的 GattServer 实例。


](#%E5%8F%82%E6%95%B0)
#### 参数


无


](#%E8%BF%94%E5%9B%9E%E5%80%BC)
#### 返回值


[GattServer](#gattserver)


| 类型 | 说明 |
| --- | --- |
|  | server 端类，使用 server 端方法之前需要创建该类的实例进行操作。 |


](#gattserver)
#### GattServer


server 端类，使用 server 端方法之前需要创建该类的实例进行操作，通过 createGattServer()方法构造此实例。


](#%E7%A4%BA%E4%BE%8B)
#### 示例


```ts
const gattServer = bluetooth.BLE.createGattServer()
```


**BLE 外围设备管理类 GattServer(外围设备)server 端类，使用 server 端方法之前需要创建该类的实例进行操作，通过 createGattServer()方法构造此实例。(let gattServer = bluetooth.BLE.createGattServer()) 的主要接口：**


[GattServer](#gattserver)


| 接口名 | 功能描述 |
| --- | --- |
| startAdvertising | 开始发送 BLE 广播。 |
| stopAdvertising | 停止发送 BLE 广播。 |
| addService | server 端添加服务。 |
| removeService | 删除已添加的服务。 |
| close | 关闭服务端功能，去注册 server 在协议栈的注册，调用该接口后实例将不能再使用。 |
| notifyCharacteristicChanged | server 端特征值发生变化时，主动通知已连接的 client 设备。 |
| sendResponse | server 端回复 client 端的读写请求。 |
| subscribeCharacteristicRead | server 端订阅特征值读请求事件。 |
| unsubscribeCharacteristicRead | server 端取消订阅特征值读请求事件。 |
| subscribeCharacteristicWrite | server 端订阅特征值写请求事件。 |
| unsubscribeCharacteristicWrite | server 端取消订阅特征值读请求事件。 |
| subscribeDescriptorRead | server 端订阅描述符读请求事件。 |
| unsubscribeDescriptorRead | server 端取消订阅描述符读请求事件。 |
| subscribeDescriptorWrite | server 端订阅描述符写请求事件。 |
| unsubscribeDescriptorWrite | server 端取消订阅描述符写请求事件。 |
| subscribeConnectStateChange | server 端订阅 BLE 连接状态变化事件。 |
| unsubscribeConnectStateChange | server 端取消订阅 BLE 连接状态变化事件。 |


**BLE 外围设备管理类 GattServer(外围设备)server 端类接口详细描述：**


](#gattserverstartadvertisingsetting-advertisesetting-advdata-advertisedata-advresponse-advertisedata)
### gattServer.startAdvertising(setting: AdvertiseSetting, advData: AdvertiseData, advResponse?: AdvertiseData)


开始发送 BLE 广播。


](#%E5%8F%82%E6%95%B0-1)
#### 参数


[AdvertiseSetting](#advertisesetting)


[AdvertiseData](#advertisedata)


[AdvertiseData](#advertisedata)


| 参数名 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| setting |  | 是 | BLE 广播的相关参数。 |
| advData |  | 是 | BLE 广播包内容。 |
| advResponse |  | 否 | BLE 回复扫描请求回复响应。 |


](#advertisesetting)
#### AdvertiseSetting


描述蓝牙低功耗设备发送广播的参数。


| 参数名 | 类型 | 是否必填 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| interval | number | 否 | 1600 | 表示广播间隔，最小值设置 32 个 slot 表示 20ms，最大值设置 16384 个 slot，默认值设置为 1600 个 slot 表示 1s。 |
| txPower | number | 否 | -7 | 表示发送功率，最小值设置-127，最大值设置 1，默认值设置-7，单位 dbm。 |
| connectable | boolean | 否 | true | 表示是否是可连接广播，默认值设置为 true。 |


](#advertisedata)
#### AdvertiseData


描述 BLE 广播数据包的内容。


[ManufactureData](#manufacturedata)


[ServiceData](#servicedata)


| 参数名 | 类型 | 是否必填 | 描述 |
| --- | --- | --- | --- |
| serviceUuids | Array<string> | 否 | 表示要广播的服务 UUID 列表。 |
| manufactureData | Array<> | 否 | 表示要广播的广播的制造商信息列表。 |
| serviceData | Array<> | 否 | 表示要广播的服务数据列表。 |


serviceUuids 和 serviceData 至少填写一个。


](#manufacturedata)
#### ManufactureData


描述 BLE 广播数据包的内容。


| 参数名 | 类型 | 是否必填 | 描述 |
| --- | --- | --- | --- |
| manufactureId | string | number | 是 | 表示制造商的 ID，由蓝牙 SIG 分配。 |
| manufactureValue | ArrayBuffer | 是 | 表示制造商发送的制造商数据。 |


](#servicedata)
#### ServiceData


描述广播包中服务数据内容。


| 参数名 | 类型 | 是否必填 | 描述 |
| --- | --- | --- | --- |
| serviceUuid | string | 是 | 表示服务的 UUID。 |
| serviceValue | ArrayBuffer | 是 | 表示服务数据。 |


](#%E7%A4%BA%E4%BE%8B-1)
#### 示例


```ts
let manufactureValueBuffer = new Uint8Array(4)
manufactureValueBuffer[0] = 1
manufactureValueBuffer[1] = 2
manufactureValueBuffer[2] = 3
manufactureValueBuffer[3] = 4

let serviceValueBuffer = new Uint8Array(4)
serviceValueBuffer[0] = 4
serviceValueBuffer[1] = 6
serviceValueBuffer[2] = 7
serviceValueBuffer[3] = 8
console.info('manufactureValueBuffer = ' + JSON.stringify(manufactureValueBuffer))
console.info('serviceValueBuffer = ' + JSON.stringify(serviceValueBuffer))
let gattServer = bluetooth.BLE.createGattServer()
gattServer.startAdvertising(
  {
    interval: 150,
    txPower: 60,
    connectable: true,
  },
  {
    serviceUuids: ['00001888-0000-1000-8000-00805f9b34fb'],
    manufactureData: [
      {
        manufactureId: 4567,
        manufactureValue: manufactureValueBuffer.buffer,
      },
    ],
    serviceData: [
      {
        serviceUuid: '00001888-0000-1000-8000-00805f9b34fb',
        serviceValue: serviceValueBuffer.buffer,
      },
    ],
  },
  {
    serviceUuids: ['00001889-0000-1000-8000-00805f9b34fb'],
    manufactureData: [
      {
        manufactureId: 1789,
        manufactureValue: manufactureValueBuffer.buffer,
      },
    ],
    serviceData: [
      {
        serviceUuid: '00001889-0000-1000-8000-00805f9b34fb',
        serviceValue: serviceValueBuffer.buffer,
      },
    ],
  }
)
```


](#gattserverstopadvertising)
### gattServer.stopAdvertising()


停止发送 BLE 广播。


](#%E6%97%A0%E5%8F%82%E6%95%B0)
#### 无参数


](#%E6%97%A0%E8%BF%94%E5%9B%9E%E7%BB%93%E6%9E%9C)
#### 无返回结果


](#%E7%A4%BA%E4%BE%8B-2)
#### 示例


```ts
const gattServer = bluetooth.BLE.createGattServer()
gattServer.stopAdvertising()
```


](#gattserveraddserviceservice-gattservice)
### gattServer.addService(service: GattService)


server 端添加服务。


](#%E5%8F%82%E6%95%B0-2)
#### 参数


[GattService](#gattservice)


| 参数名 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| service |  | 是 | 服务端的 service 数据。BLE 广播的相关参数 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC-1)
#### 返回值：


| 类型 | 说明 |
| --- | --- |
| boolean | 添加服务操作，成功返回 true，否则返回 false。 |


](#gattservice)
#### GattService


描述 service 的接口参数定义。


[BLECharacteristic](#blecharacteristic)


[GattService](#gattservice)


| 参数名 | 类型 | 可读 | 可写 | 描述 |
| --- | --- | --- | --- | --- |
| serviceUuid | string | 是 | 是 | 特定服务（service）的 UUID，例如：00001888-0000-1000-8000-00805f9b34fb。 |
| isPrimary | boolean | 是 | 是 | 如果是主服务设置为 true，否则设置为 false。 |
| characteristics | Array<> | 是 | 是 | 当前服务包含的特征列表。 |
| includeServices | Array<> | 是 | 是 | 当前服务依赖的其它服务。 |


](#blecharacteristic)
#### BLECharacteristic


描述 characteristic 的接口参数定义 。


[BLEDescriptor](#bledescriptor)


[CharacteristicProperties](#characteristicproperties)


| 参数名 | 类型 | 可读 | 可写 | 描述 |
| --- | --- | --- | --- | --- |
| serviceUuid | string | 是 | 是 | 特定服务（service）的 UUID，例如：00001888-0000-1000-8000-00805f9b34fb。 |
| characteristicUuid | string | 是 | 是 | 特定特征（characteristic）的 UUID，例如：00002a11-0000-1000-8000-00805f9b34fb。 |
| characteristicValue | ArrayBuffer | 是 | 是 | 特征对应的二进制值。 |
| descriptors | Array<> | 是 | 是 | 特定特征的描述符列表。 |
| properties | Array<> | 是 | 是 | 特定特征的属性。 |


](#bledescriptor)
#### BLEDescriptor


描述 descriptor 的接口参数定义 。


| 参数名 | 类型 | 可读 | 可写 | 描述 |
| --- | --- | --- | --- | --- |
| serviceUuid | string | 是 | 是 | 特定服务（service）的 UUID，例如：00001888-0000-1000-8000-00805f9b34fb。 |
| characteristicUuid | string | 是 | 是 | 特定特征（characteristic）的 UUID，例如：00002a11-0000-1000-8000-00805f9b34fb。 |
| descriptorUuid | string | 是 | 是 | 描述符（descriptor）的 UUID，例如：00002902-0000-1000-8000-00805f9b34fb。 |
| descriptorValue | ArrayBuffer | 是 | 是 | 描述符对应的二进制值。 |


](#characteristicproperties)
#### CharacteristicProperties


| 名称 | 取值 | 描述 |
| --- | --- | --- |
| PROPERTY_BROADCAST | 0 | 表示 characteristic 是可广播的。 |
| PROPERTY_EXTENDED_PROPS | 1 | 表示 characteristic 有扩展的属性 descriptor。 |
| PROPERTY_INDICATE | 2 | 表示 characteristic 支持 indicate 操作。 |
| PROPERTY_NOTIFY | 3 | 表示 characteristic 支持 notification 操作。 |
| PROPERTY_READ | 4 | 表示 characteristic 是可读的。 |
| PROPERTY_WRITE | 5 | 表示 characteristic 是可写的。 |
| PROPERTY_SIGNED_WRITE | 6 | 表示 characteristic 支持带签名写入 |
| PROPERTY_WRITE_NO_RESPONSE | 7 | 表示 characteristic 支持没有回复的写入 |


](#%E7%A4%BA%E4%BE%8B-3)
#### 示例


```ts
// 创建descriptors
let descriptors = []
let arrayBuffer = new ArrayBuffer(8)
let descV = new Uint8Array(arrayBuffer)
descV[0] = 11
let descriptor = {
  serviceUuid: '00001810-0000-1000-8000-00805F9B34FB',
  characteristicUuid: '00001820-0000-1000-8000-00805F9B34FB',
  descriptorUuid: '00002902-0000-1000-8000-00805F9B34FB',
  descriptorValue: arrayBuffer,
}
descriptors[0] = descriptor

// 创建characteristics
let characteristics = []
let arrayBufferC = new ArrayBuffer(8)
let cccV = new Uint8Array(arrayBufferC)
cccV[0] = 1
let characteristic = {
  serviceUuid: '00001810-0000-1000-8000-00805F9B34FB',
  characteristicUuid: '00001820-0000-1000-8000-00805F9B34FB',
  characteristicValue: arrayBufferC,
  descriptors: descriptors,
  properties: [1, 4, 6],
}

characteristics[0] = characteristic

// 创建gattService
let gattService = {
  serviceUuid: '00001810-0000-1000-8000-00805F9B34FB',
  isPrimary: true,
  characteristics: characteristics,
  includeServices: [],
}

let gattServer = bluetooth.BLE.createGattServer()
let ret = gattServer.addService(gattService)
if (ret) {
  console.log('add service successfully')
} else {
  console.log('add service failed')
}
```


](#gattserverremoveserviceserviceuuid-string)
### gattServer.removeService(serviceUuid: string)


删除已添加的服务。


](#%E5%8F%82%E6%95%B0-3)
#### 参数


| 参数名 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| serviceUuid | string | 是 | service 的 UUID，例如“00001810-0000-1000-8000-00805F9B34FB”。 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC-2)
#### 返回值：


| 类型 | 说明 |
| --- | --- |
| boolean | 删除服务操作，成功返回 true，否则返回 false。 |


](#%E7%A4%BA%E4%BE%8B-4)
#### 示例


```ts
const gattServer = bluetooth.BLE.createGattServer()
gattServer.removeService('00001810-0000-1000-8000-00805F9B34FB')
```


](#gattserverclose)
### gattServer.close()


关闭服务端功能，去注册 server 在协议栈的注册，调用该接口后[GattServer](#gattserver)实例将不能再使用。


```ts
let gattServer = bluetooth.BLE.createGattServer()
gattServer.close()
```


](#gattservernotifycharacteristicchangeddeviceid-string-notifycharacteristic-notifycharacteristic)
### gattServer.notifyCharacteristicChanged(deviceId: string, notifyCharacteristic: NotifyCharacteristic)


server 端特征值发生变化时，主动通知已连接的 client 设备。


](#%E5%8F%82%E6%95%B0-4)
#### 参数


[NotifyCharacteristic](#notifycharacteristic)


| 参数名 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| deviceId | string | 是 | service 的 UUID，例如“00001810-0000-1000-8000-00805F9B34FB”。 |
| notifyCharacteristic |  | 是 | 通知的特征值数据。 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC-3)
#### 返回值：


| 类型 | 说明 |
| --- | --- |
| boolean | 通知操作，成功返回 true，否则返回 false。 |


](#%E7%A4%BA%E4%BE%8B-5)
#### 示例


```ts
// 创建descriptors
let descriptors = []
let arrayBuffer = new ArrayBuffer(8)
let descV = new Uint8Array(arrayBuffer)
descV[0] = 11
let descriptor = {
  serviceUuid: '00001810-0000-1000-8000-00805F9B34FB',
  characteristicUuid: '00001820-0000-1000-8000-00805F9B34FB',
  descriptorUuid: '00002902-0000-1000-8000-00805F9B34FB',
  descriptorValue: arrayBuffer,
}
descriptors[0] = descriptor

let arrayBufferC = new ArrayBuffer(8)
let characteristic = {
  serviceUuid: '00001810-0000-1000-8000-00805F9B34FB',
  characteristicUuid: '00001820-0000-1000-8000-00805F9B34FB',
  characteristicValue: arrayBufferC,
  descriptors: descriptors,
}
let notifyCharacteristic = {
  serviceUuid: '00001810-0000-1000-8000-00805F9B34FB',
  characteristicUuid: '00001821-0000-1000-8000-00805F9B34FB',
  characteristicValue: characteristic.characteristicValue,
  confirm: false,
}
let gattServer = bluetooth.BLE.createGattServer()
gattServer.notifyCharacteristicChanged('XX:XX:XX:XX:XX:XX', notifyCharacteristic)
```


](#notifycharacteristic)
#### NotifyCharacteristic


描述 server 端特征值发生变化时，server端发送特征值通知的参数结构。


| 名称 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| serviceUuid | string | 是 | 特征值所属的服务UUID。例如：00001888-0000-1000-8000-00805f9b34fb。 |
| characteristicUuid | string | 是 | 内容发生变化的特征值UUID。例如：00002a11-0000-1000-8000-00805f9b34fb。 |
| characteristicValue | ArrayBuffer | 是 | 特征值对应的数据内容。 |
| confirm | boolean | 是 | true表示发送的是指示，需要client端回复确认。false表示发送的是通知，不需要client端回复确认。 |


](#gattserversendresponseserverresponse-serverresponse)
### gattServer.sendResponse(serverResponse: ServerResponse)


server 端回复 client 端的读写请求。


](#%E5%8F%82%E6%95%B0-5)
#### 参数


[ServerResponse](#serverresponse)


| 参数名 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| serverResponse |  | 是 | service 的 UUID，例如“00001810-0000-1000-8000-00805F9B34FB”。 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC-4)
#### 返回值：


| 类型 | 说明 |
| --- | --- |
| boolean | 回复响应操作，成功返回 true，否则返回 false。 |


](#serverresponse)
#### ServerResponse


描述 server 端回复 client 端读/写请求的响应参数结构。


| 参数名 | 类型 | 可读 | 可写 | 描述 |
| --- | --- | --- | --- | --- |
| deviceId | string | 是 | 否 | 表示远端设备地址，例如："XX:XX:XX:XX:XX:XX"。 |
| transId | number | 是 | 否 | 表示请求的传输 ID，与订阅的读/写请求事件携带的 ID 保持一致。 |
| status | number | 是 | 否 | 表示响应的状态，设置为 0 即可，表示正常。 |
| offset | number | 是 | 否 | 表示请求的读/写起始位置，与订阅的读/写请求事件携带的 offset 保持一致。 |
| value | ArrayBuffer | 是 | 否 | 表示回复响应的二进制数据。 |


](#%E7%A4%BA%E4%BE%8B-6)
#### 示例


```ts
/* send response */
let arrayBufferCCC = new ArrayBuffer(8)
let cccValue = new Uint8Array(arrayBufferCCC)
cccValue[0] = 1123
let serverResponse = {
  deviceId: 'XX:XX:XX:XX:XX:XX',
  transId: 0,
  status: 0,
  offset: 0,
  value: arrayBufferCCC,
}

let gattServer = bluetooth.BLE.createGattServer()
let ret = gattServer.sendResponse(serverResponse)
if (ret) {
  console.log('bluetooth sendResponse successfully')
} else {
  console.log('bluetooth sendResponse failed')
}
```


](#gattserversubscribecharacteristicreadobject)
### gattServer.subscribeCharacteristicRead(OBJECT)


server 端订阅特征值读请求事件。


](#object-%E5%8F%82%E6%95%B0)
#### OBJECT 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Function | 是 | 回调此函数 |
| fail | Function | 否 | 失败回调。 |


](#callback-%E8%BF%94%E5%9B%9E%E5%80%BC)
#### callback 返回值:


[CharacteristicReadReq](#characteristicreadreq)


| 类型 | 说明 |
| --- | --- |
|  | 描述 server 端订阅后收到的特征值读请求事件参数结构。 |


](#characteristicreadreq)
#### CharacteristicReadReq


描述 server 端订阅后收到的特征值读请求事件参数结构。


| 参数名 | 类型 | 可读 | 可写 | 描述 |
| --- | --- | --- | --- | --- |
| deviceId | string | 是 | 否 | 表示发送特征值读请求的远端设备地址，例如："XX:XX:XX:XX:XX:XX"。 |
| transId | number | 是 | 否 | 表示读请求的传输 ID，server 端回复响应时需填写相同的传输 ID。 |
| offset | number | 是 | 否 | 表示读特征值数据的起始位置。例如：k 表示从第 k 个字节开始读，server 端回复响应时需填写相同的 offset。 |
| characteristicUuid | string | 是 | 否 | 特定特征（characteristic）的 UUID，例如：00002a11-0000-1000-8000-00805f9b34fb。 |
| serviceUuid | string | 是 | 否 | 特定服务（service）的 UUID，例如：00001888-0000-1000-8000-00805f9b34fb。 |


](#%E7%A4%BA%E4%BE%8B-7)
#### 示例


```ts
let gattServer = bluetooth.BLE.createGattServer()

let arrayBufferCCC = new ArrayBuffer(8)
let cccValue = new Uint8Array(arrayBufferCCC)
cccValue[0] = 1123
function ReadCharacteristicReq(CharacteristicReadReq) {
  let deviceId = CharacteristicReadReq.deviceId
  let transId = CharacteristicReadReq.transId
  let offset = CharacteristicReadReq.offset
  let characteristicUuid = CharacteristicReadReq.characteristicUuid

  let serverResponse = {
    deviceId: deviceId,
    transId: transId,
    status: 0,
    offset: offset,
    value: arrayBufferCCC,
  }

  let ret = gattServer.sendResponse(serverResponse)
  if (ret) {
    console.log('bluetooth sendResponse successfully')
  } else {
    console.log('bluetooth sendResponse failed')
  }
}

gattServer.subscribeCharacteristicRead({
  callback: function (data) {
    ReadCharacteristicReq(data)
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#gattserverunsubscribecharacteristicread)
### gattServer.unsubscribeCharacteristicRead()


server 端取消订阅特征值读请求事件。


](#%E6%97%A0%E5%8F%82%E6%95%B0-1)
#### 无参数


](#%E6%97%A0%E8%BF%94%E5%9B%9E%E5%80%BC)
#### 无返回值


](#%E7%A4%BA%E4%BE%8B-8)
#### 示例


```ts
const gattServer = bluetooth.BLE.createGattServer()
gattServer.unsubscribeCharacteristicRead()
```


](#gattserversubscribecharacteristicwriteobject)
### gattServer.subscribeCharacteristicWrite(OBJECT)


server 端订阅特征值写请求事件。


](#object-%E5%8F%82%E6%95%B0-1)
#### OBJECT 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Function | 是 | 回调此函数 |
| fail | Function | 否 | 失败回调。 |


](#callback-%E8%BF%94%E5%9B%9E%E5%80%BC-1)
#### callback 返回值:


[DescriptorWriteReq](#descriptorwritereq)


| 类型 | 说明 |
| --- | --- |
|  | 描述 server 端订阅后收到的描述符写请求事件参数结构。 |


](#descriptorwritereq)
#### DescriptorWriteReq


描述 server 端订阅后收到的描述符写请求事件参数结构。


| 参数名 | 类型 | 可读 | 可写 | 描述 |
| --- | --- | --- | --- | --- |
| deviceId | string | 是 | 否 | 表示发送描述符写请求的远端设备地址，例如："XX:XX:XX:XX:XX:XX"。 |
| transId | number | 是 | 否 | 表示写请求的传输 ID，server 端回复响应时需填写相同的传输 ID。 |
| offset | number | 是 | 否 | 表示写描述符数据的起始位置。例如：k 表示从第 k 个字节开始写，server 端回复响应时需填写相同的 offset。 |
| isPrep | boolean | 是 | 否 | 表示写请求是否立即执行。 |
| needRsp | boolean | 是 | 否 | 表示是否要给 client 端回复响应。 |
| value | ArrayBuffer | 是 | 否 | 表示写入的描述符二进制数据。 |
| descriptorUuid | string | 是 | 否 | 表示描述符（descriptor）的 UUID，例如：00002902-0000-1000-8000-00805f9b34fb。 |
| characteristicUuid | string | 是 | 否 | 特定特征（characteristic）的 UUID，例如：00002a11-0000-1000-8000-00805f9b34fb。 |
| serviceUuid | string | 是 | 否 | 特定服务（service）的 UUID，例如：00001888-0000-1000-8000-00805f9b34fb。 |


](#%E7%A4%BA%E4%BE%8B-9)
#### 示例


```ts
let gattServer = bluetooth.BLE.createGattServer()

let arrayBufferCCC = new ArrayBuffer(8)
let cccValue = new Uint8Array(arrayBufferCCC)
function WriteCharacteristicReq(CharacteristicWriteReq) {
  let deviceId = CharacteristicWriteReq.deviceId
  let transId = CharacteristicWriteReq.transId
  let offset = CharacteristicWriteReq.offset
  let isPrep = CharacteristicWriteReq.isPrep
  let needRsp = CharacteristicWriteReq.needRsp
  let value = new Uint8Array(CharacteristicWriteReq.value)
  let characteristicUuid = CharacteristicWriteReq.characteristicUuid

  cccValue[0] = value[0]
  let serverResponse = {
    deviceId: deviceId,
    transId: transId,
    status: 0,
    offset: offset,
    value: arrayBufferCCC,
  }

  let ret = gattServer.sendResponse(serverResponse)
  if (ret) {
    console.log('bluetooth sendResponse successfully')
  } else {
    console.log('bluetooth sendResponse failed')
  }
}

gattServer.subscribeCharacteristicWrite({
  callback: function (data) {
    WriteCharacteristicReq(data)
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#gattserverunsubscribecharacteristicwrite)
### gattServer.unsubscribeCharacteristicWrite()


server 端取消订阅特征值读请求事件。


](#%E6%97%A0%E5%8F%82%E6%95%B0-2)
#### 无参数


](#%E6%97%A0%E8%BF%94%E5%9B%9E%E5%80%BC-1)
#### 无返回值


](#%E7%A4%BA%E4%BE%8B-10)
#### 示例


```ts
const gattServer = bluetooth.BLE.createGattServer()
gattServer.unsubscribeCharacteristicWrite()
```


](#gattserversubscribedescriptorreadobject)
### gattServer.subscribeDescriptorRead(OBJECT)


server 端订阅描述符读请求事件。


](#object-%E5%8F%82%E6%95%B0-2)
#### OBJECT 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Function | 是 | 回调此函数 |
| fail | Function | 否 | 失败回调。 |


](#callback-%E8%BF%94%E5%9B%9E%E5%80%BC-2)
#### callback 返回值:


[DescriptorReadReq](#descriptorreadreq)


| 类型 | 说明 |
| --- | --- |
|  | 描述 server 端订阅后收到的描述符读请求事件参数结构。 |


](#descriptorreadreq)
#### DescriptorReadReq


描述 server 端订阅后收到的描述符读请求事件参数结构。


| 参数名 | 类型 | 可读 | 可写 | 描述 |
| --- | --- | --- | --- | --- |
| deviceId | string | 是 | 否 | 表示发送描述符读请求的远端设备地址，例如："XX:XX:XX:XX:XX:XX"。 |
| transId | number | 是 | 否 | 表示读请求的传输 ID，server 端回复响应时需填写相同的传输 ID。 |
| offset | number | 是 | 否 | 表示读描述符数据的起始位置。例如：k 表示从第 k 个字节开始读，server 端回复响应时需填写相同的 offset。 |
| descriptorUuid | string | 是 | 否 | 表示描述符（descriptor）的 UUID，例如：00002902-0000-1000-8000-00805f9b34fb。 |
| characteristicUuid | string | 是 | 否 | 表示是否要给 client 端回复响应。 |
| value | ArrayBuffer | 是 | 否 | 表示写入的描述符二进制数据。 |
| descriptorUuid | string | 是 | 否 | 表示描述符（descriptor）的 UUID，例如：00002902-0000-1000-8000-00805f9b34fb。 |
| characteristicUuid | string | 是 | 否 | 特定特征（characteristic）的 UUID，例如：00002a11-0000-1000-8000-00805f9b34fb。 |
| serviceUuid | string | 是 | 否 | 特定服务（service）的 UUID，例如：00001888-0000-1000-8000-00805f9b34fb。 |


](#%E7%A4%BA%E4%BE%8B-11)
#### 示例


```ts
let gattServer = bluetooth.BLE.createGattServer()

let arrayBufferDesc = new ArrayBuffer(8)
let descValue = new Uint8Array(arrayBufferDesc)
descValue[0] = 1101
function ReadDescriptorReq(DescriptorReadReq) {
  let deviceId = DescriptorReadReq.deviceId
  let transId = DescriptorReadReq.transId
  let offset = DescriptorReadReq.offset
  let descriptorUuid = DescriptorReadReq.descriptorUuid

  let serverResponse = {
    deviceId: deviceId,
    transId: transId,
    status: 0,
    offset: offset,
    value: arrayBufferDesc,
  }

  let ret = gattServer.sendResponse(serverResponse)
  if (ret) {
    console.log('bluetooth sendResponse successfully')
  } else {
    console.log('bluetooth sendResponse failed')
  }
}

gattServer.subscribeDescriptorRead({
  callback: function (data) {
    ReadDescriptorReq(data)
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#gattserverunsubscribedescriptorread)
### gattServer.unsubscribeDescriptorRead()


server 端取消订阅描述符读请求事件。


](#%E6%97%A0%E5%8F%82%E6%95%B0-3)
#### 无参数


](#%E6%97%A0%E8%BF%94%E5%9B%9E%E5%80%BC-2)
#### 无返回值


](#%E7%A4%BA%E4%BE%8B-12)
#### 示例


```ts
const gattServer = bluetooth.BLE.createGattServer()
gattServer.unsubscribeDescriptorRead()
```


](#gattserversubscribedescriptorwriteobject)
### gattServer.subscribeDescriptorWrite(OBJECT)


server 端订阅描述符写请求事件。


](#object-%E5%8F%82%E6%95%B0-3)
#### OBJECT 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Function | 是 | 回调此函数 |
| fail | Function | 否 | 失败回调。 |


](#callback-%E8%BF%94%E5%9B%9E%E5%80%BC-3)
#### callback 返回值:


[DescriptorWriteReq](#descriptorwritereq)


| 类型 | 说明 |
| --- | --- |
|  | 描述 server 端订阅后收到的描述符写请求事件参数结构。 |


](#descriptorwritereq-1)
#### DescriptorWriteReq


描述 server 端订阅后收到的描述符写请求事件参数结构。


| 参数名 | 类型 | 可读 | 可写 | 描述 |
| --- | --- | --- | --- | --- |
| deviceId | string | 是 | 否 | 表示发送描述符写请求的远端设备地址，例如："XX:XX:XX:XX:XX:XX"。 |
| transId | number | 是 | 否 | 表示写请求的传输 ID，server 端回复响应时需填写相同的传输 ID。 |
| offset | number | 是 | 否 | 表示写描述符数据的起始位置。例如：k 表示从第 k 个字节开始写，server 端回复响应时需填写相同的 offset。 |
| isPrep | boolean | 是 | 否 | 表示写请求是否立即执行。 |
| needRsp | boolean | 是 | 否 | 表示是否要给 client 端回复响应。 |
| value | ArrayBuffer | 是 | 否 | 表示写入的描述符二进制数据。 |
| descriptorUuid | string | 是 | 否 | 表示描述符（descriptor）的 UUID，例如：00002902-0000-1000-8000-00805f9b34fb。 |
| characteristicUuid | string | 是 | 否 | 特定特征（characteristic）的 UUID，例如：00002a11-0000-1000-8000-00805f9b34fb。 |
| serviceUuid | string | 是 | 否 | 特定服务（service）的 UUID，例如：00001888-0000-1000-8000-00805f9b34fb。 |


](#%E7%A4%BA%E4%BE%8B-13)
#### 示例


```ts
let gattServer = bluetooth.BLE.createGattServer()

let arrayBufferCCC = new ArrayBuffer(8)
let cccValue = new Uint8Array(arrayBufferCCC)
function WriteCharacteristicReq(CharacteristicWriteReq) {
  let deviceId = CharacteristicWriteReq.deviceId
  let transId = CharacteristicWriteReq.transId
  let offset = CharacteristicWriteReq.offset
  let isPrep = CharacteristicWriteReq.isPrep
  let needRsp = CharacteristicWriteReq.needRsp
  let value = new Uint8Array(CharacteristicWriteReq.value)
  let characteristicUuid = CharacteristicWriteReq.characteristicUuid

  cccValue[0] = value[0]
  let serverResponse = {
    deviceId: deviceId,
    transId: transId,
    status: 0,
    offset: offset,
    value: arrayBufferCCC,
  }

  let ret = gattServer.sendResponse(serverResponse)
  if (ret) {
    console.log('bluetooth sendResponse successfully')
  } else {
    console.log('bluetooth sendResponse failed')
  }
}

gattServer.subscribeDescriptorWrite({
  callback: function (data) {
    WriteCharacteristicReq(data)
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#gattserverunsubscribedescriptorwrite)
### gattServer.unsubscribeDescriptorWrite()


server 端取消订阅描述符写请求事件。


](#%E6%97%A0%E5%8F%82%E6%95%B0-4)
#### 无参数


](#%E8%BF%94%E5%9B%9E%E5%80%BC-5)
#### 返回值


](#%E7%A4%BA%E4%BE%8B-14)
#### 示例


```ts
const gattServer = bluetooth.BLE.createGattServer()
gattServer.unsubscribeDescriptorWrite()
```


](#gattserversubscribeconnectstatechangeobject)
### gattServer.subscribeConnectStateChange(OBJECT)


server 端订阅 BLE 连接状态变化事件。


](#object-%E5%8F%82%E6%95%B0-4)
#### OBJECT 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Function | 是 | 回调此函数 |
| fail | Function | 否 | 失败回调。 |


](#callback-%E8%BF%94%E5%9B%9E%E5%80%BC-4)
#### callback 返回值:


[BLEConnectChangedState](#bleconnectchangedstate)


| 类型 | 说明 |
| --- | --- |
|  | 描述 Gatt profile 连接状态 。 |


](#bleconnectchangedstate)
#### BLEConnectChangedState


描述 Gatt profile 连接状态 。


[ProfileConnectionState](#profileconnectionstate)


| 参数名 | 类型 | 可读 | 可写 | 描述 |
| --- | --- | --- | --- | --- |
| deviceId | string | 是 | 否 | 表示远端设备地址，例如："XX:XX:XX:XX:XX:XX"。 |
| transId |  | 是 | 是 | 表示 BLE 连接状态的枚举。 |


](#profileconnectionstate)
#### ProfileConnectionState


枚举，蓝牙设备的 profile 连接状态。


| 名称 | 默认值 | 说明 |
| --- | --- | --- |
| STATE_DISCONNECTED | 0 | 表示 profile 已断连。 |
| STATE_CONNECTING | 1 | 表示 profile 正在连接。 |
| STATE_CONNECTED | 2 | 表示 profile 正在连接。 |
| STATE_DISCONNECTING | 3 | 表示 profile 正在断连。 |


](#%E7%A4%BA%E4%BE%8B-15)
#### 示例


```ts
function Connected(BLEConnectChangedState) {
  let deviceId = BLEConnectChangedState.deviceId
  let status = BLEConnectChangedState.state
}

let gattServer = bluetooth.BLE.createGattServer()
gattServer.subscribeConnectStateChange({
  callback: function (data) {
    Connected(data)
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#gattserverunsubscribeconnectstatechange)
### gattServer.unsubscribeConnectStateChange()


server 端取消订阅 BLE 连接状态变化事件。


](#%E6%97%A0%E5%8F%82%E6%95%B0-5)
#### 无参数


](#%E6%97%A0%E8%BF%94%E5%9B%9E%E5%80%BC-3)
#### 无返回值


](#%E7%A4%BA%E4%BE%8B-16)
#### 示例


```ts
const gattServer = bluetooth.BLE.createGattServer()
gattServer.unsubscribeConnectStateChange()
```

---

## brightness

> 原文路径：/api/system/brightness/

](#%E5%B1%8F%E5%B9%95%E4%BA%AE%E5%BA%A6)
# 屏幕亮度


](#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E)
## 接口声明


```json
{ "name": "blueos.hardware.display.brightness" }
```


](#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97)
## 导入模块


```ts
import brightness from '@blueos.hardware.display.brightness' 或 const brightness = require('@blueos.hardware.display.brightness')
```


](#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89)
## 接口定义


](#brightnessgetvalueobject)
### brightness.getValue(OBJECT)


获得当前屏幕亮度值


](#%E5%8F%82%E6%95%B0)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |


](#success-%E8%BF%94%E5%9B%9E%E5%80%BC)
##### success 返回值：


| 参数值 | 类型 | 说明 |
| --- | --- | --- |
| value | Integer | 屏幕亮度，取值范围 0-255 |


](#%E7%A4%BA%E4%BE%8B)
#### 示例：


```ts
brightness.getValue({
  success: function (data) {
    console.log(`handling success, value = ${data.value}`)
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#brightnessgetvaluesync)
### brightness.getValueSync()


同步获得当前屏幕亮度值


](#%E5%8F%82%E6%95%B0-1)
#### 参数


无


](#%E8%BF%94%E5%9B%9E%E5%80%BC)
#### 返回值


| 参数值 | 类型 | 说明 |
| --- | --- | --- |
| value | Number | 屏幕亮度，取值范围 0-255 |


](#%E7%A4%BA%E4%BE%8B-1)
#### 示例


```ts
const value = brightness.getValueSync()
```


](#brightnesssetvalueobject)
### brightness.setValue(OBJECT)


设置当前屏幕亮度值


](#%E5%8F%82%E6%95%B0-2)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | Integer | 是 | 屏幕亮度，取值范围 0-255 |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |


](#%E7%A4%BA%E4%BE%8B-2)
#### 示例：


```ts
brightness.setValue({
  value: 100,
  success: function () {
    console.log('handling success')
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#brightnessgetmodeobject)
### brightness.getMode(OBJECT)


获得当前屏幕亮度模式


](#%E5%8F%82%E6%95%B0-3)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |


](#success-%E8%BF%94%E5%9B%9E%E5%80%BC-1)
##### success 返回值：


| 参数值 | 类型 | 说明 |
| --- | --- | --- |
| mode | Integer | 0 为手动调节屏幕亮度,1 为自动调节屏幕亮度 |


](#%E7%A4%BA%E4%BE%8B-3)
#### 示例：


```ts
brightness.getMode({
  success: function (data) {
    console.log(`handling success, mode = ${data.mode}`)
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#brightnesssetmodeobject)
### brightness.setMode(OBJECT)


设置当前屏幕亮度模式


](#%E5%8F%82%E6%95%B0-4)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | Integer | 是 | 0 为手动调节屏幕亮度,1 为自动调节屏幕亮度 |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |


](#%E7%A4%BA%E4%BE%8B-4)
#### 示例：


```ts
brightness.setMode({
  mode: 1,
  success: function () {
    console.log('handling success')
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#brightnesssetkeepscreenonobject)
### brightness.setKeepScreenOn(OBJECT)


设置是否保持常亮状态


](#%E5%8F%82%E6%95%B0-5)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| keepScreenOn | Boolean | 是 | 是否保持屏幕常亮 |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |


](#%E7%A4%BA%E4%BE%8B-5)
#### 示例：


```ts
brightness.setKeepScreenOn({
  keepScreenOn: true,
  success: function () {
    console.log('handling success')
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#brightnesswakescreenonobject)
### brightness.wakeScreenOn(OBJECT)


点亮或熄灭屏幕


](#%E5%8F%82%E6%95%B0-6)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| screenOn | Boolean | 是 | 是否点亮 |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |


](#%E7%A4%BA%E4%BE%8B-6)
#### 示例：


```javascript
brightness.wakeScreenOn({
  screenOn: true,
  success: function () {
    console.log('handling success')
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#brightnesssubscribeobject)
### brightness.subscribe(OBJECT)


监听当前屏幕亮度数据。如果多次调用，仅最后一次调用生效


](#%E5%8F%82%E6%95%B0-7)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Function | 是 | 监听前屏幕亮度数据回调函数的执行 |
| fail | Function | 否 | 失败回调 |


](#callback-%E8%BF%94%E5%9B%9E%E5%80%BC)
##### callback 返回值：


| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| value | Number | 屏幕亮度，取值范围 0-255 |


](#%E7%A4%BA%E4%BE%8B-7)
#### 示例：


```ts
brightness.subscribe({
  callback: function (data) {
    console.log(`handling success, data = ${data.value}`)
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#brightnessunsubscribe)
### brightness.unsubscribe()


取消监听屏幕亮度数据


](#%E5%8F%82%E6%95%B0-8)
#### 参数：


无


](#%E7%A4%BA%E4%BE%8B-8)
#### 示例：


```ts
brightness.unsubscribe()
```

---

## cipher

> 原文路径：/api/system/cipher/

](#%E5%AF%86%E7%A0%81%E7%AE%97%E6%B3%95)
# 密码算法


](#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E)
## 接口声明


```json
{ "name": "blueos.security.cipher" }
```


](#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97)
## 导入模块


```ts
import cipher from '@blueos.security.cipher' 或 const cipher = require('@blueos.security.cipher')
```


](#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89)
## 接口定义


](#cipherrsaobject)
### cipher.rsa(OBJECT)


RSA 加解密。


](#%E5%8F%82%E6%95%B0)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| action | String | 是 | 加解密类型，两个可选值：encrypt：加密，decrypt： 解密 |
| text | String | 是 | 待加密或解密的文本内容。待加密的文本内容应该是一段普通文本，长度不能超过 keySize / 8 - 66，其中 keySize 是秘钥的长度（例如秘钥长度为 1024 时，text 不能超过 62 个字节）。待解密的文本内容应该是经过 base64 编码的一段二进制值。base64 编码使用默认风格，下同 |
| key | String | 是 | 加密或解密使用到的 RSA 密钥，经过 base64 编码后生成的字符串。加密时 key 为公钥，解密时 key 为私钥 |
| transformation | String | 否 | RSA 算法的填充项，默认为"RSA/None/OAEPwithSHA-256andMGF1Padding" |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |


](#success-%E8%BF%94%E5%9B%9E%E5%80%BC)
##### success 返回值：


| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| text | String | 经过加密或解密后生成的文本内容。加密后内容是经过 base64 编码的一段二进制值，解密后内容是一段普通文本。如果解密后的内容不能转化为 utf-8 字符串会出错 |


](#fail-%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%E4%BB%A3%E7%A0%81)
##### fail 返回错误代码


| 错误码 | 说明 |
| --- | --- |
| 202 | 输入参数错误。 |


](#%E7%A4%BA%E4%BE%8B)
#### 示例：


```ts
//加密
cipher.rsa({
  action: 'encrypt',
  //待加密的文本内容
  text: 'hello',
  //base64编码后的加密公钥
  key:
    'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDc7GR2MrfAoefES+wrs1ns2afT\n' +
    'eJXSfIkEHfPXG9fVFjaws1ho4KcZfsxlA0+SXvc83f2SVGCuzULmM2lxxRCtcUN/\n' +
    'h7SoaYEeluhqFimL2AEjfSwINHCLqObJkcjCfoZpE1JCehPiDOJsyT50Auc08h/4\n' +
    'jHQfanyC1nc62LqUCQIDAQAB',
  success: function (data) {
    console.log(`handling success: ${data.text}`)
  },
  fail: function (data, code) {
    console.log(`### cipher.rsa fail ### ${code}: ${data}`)
  },
})

//解密：
cipher.rsa({
  action: 'decrypt',
  //待解密的内容，是base64编码后的一段二进制值，解密后是文本内容“hello”
  text:
    'CUg3tTxTIdpCfreIxIBdws3uhd5qXLwcrVl3XDnQzZFVHyjVVCDHS16rjopaZ4C5xU2Tc8mSDzt7\n' +
    'gp9vBfSwi7bMtSUvXG18DlncsKJFDkJpS5t0PkpS9YrJXrY80Gpe+ME6+6dN9bjgqMljbitDdBRf\n' +
    'S/ZWNI4Q8Q0suNjNkGU=',
  //base64编码后的解密私钥
  key:
    'MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBANzsZHYyt8Ch58RL\n' +
    '7CuzWezZp9N4ldJ8iQQd89cb19UWNrCzWGjgpxl+zGUDT5Je9zzd/ZJUYK7NQuYz\n' +
    'aXHFEK1xQ3+HtKhpgR6W6GoWKYvYASN9LAg0cIuo5smRyMJ+hmkTUkJ6E+IM4mzJ\n' +
    'PnQC5zTyH/iMdB9qfILWdzrYupQJAgMBAAECgYEAkibhH0DWR13U0gvYJeD08Lfd\n' +
    'Sw1PMHyquEqIcho9Yv7bF3LOXjOg2EEGPx09mvuwXFgP1Kp1e67XPytr6pQQPzK7\n' +
    'XAPcLPx80R/ZjZs8vNFndDOd1HgD3vSVmYQarNzmKi72tOUWMPevsaFXPHo6Xx3X\n' +
    '8x0wYb7XuBsQguRctTECQQD7GWX3JUiyo562iVrpTDPOXsrUxmzCrgz2OZildxMd\n' +
    'Pp/PkyDrx7mEXTpk4K/XnQJ3GpJNi2iDSxDuPSAeJ/aPAkEA4Tw4+1Z43S/xH3C3\n' +
    'nfulYBNyB4si6KEUuC0krcC1pDJ21Gd12efKo5VF8SaJI1ZUQOzguV+dqNsB/JUY\n' +
    'OFfX5wJAB1dKv9r7MR3Peg6x9bggm5vx2h6i914XSuuMJupASM6X5X2rrLj+F3yS\n' +
    'RHi9K1SPyeOg+1tkBtKfABgRZFBOyQJAbuTivUSe73AqTKuHjB4ZF0ubqgEkJ9sf\n' +
    'Q2rekzm9dOFvxjZGPQo1qALX09qATMi1ZN376ukby8ZAnSafLSZ64wJBAM2V37go\n' +
    'Sj44HF76ksRow8gecuQm48NCTGAGTicXg8riKog2GC9y8pMNHAezoR9wXJF7kk+k\n' +
    'lz5cHyoMZ9mcd30=',
  success: function (data) {
    console.log(`handling success: ${data.text}`)
  },
  fail: function (data, code) {
    console.log(`### cipher.rsa fail ### ${code}: ${data}`)
  },
})
```


](#cipheraesobject)
### cipher.aes(OBJECT)


AES 加解密,支持分段加密


](#%E5%8F%82%E6%95%B0-1)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| action | String | 是 | 加解密类型，两个可选值：encrypt：加密，decrypt：解密 |
| text | String | 是 | 待加密或解密的文本内容。待加密的文本内容应该是一段普通文本。待解密的文本内容应该是经过 base64 编码的一段二进制值。base64 编码使用默认风格，下同 |
| key | String | 是 | 加密或解密使用到的密钥，经过 base64 编码后生成的字符串。密钥长度可以是 128 bit，192 bit 或 256 bit。 |
| transformation | String | 否 | AES 算法的加密模式和填充项，默认为"AES/CBC/PKCS5Padding" |
| iv | String | 否 | AES 加解密的初始向量，经过 base64 编码后的字符串，默认值为 key 值 |
| ivOffset | Integer | 否 | AES 加解密的初始向量偏移，默认值为 0 |
| ivLen | Integer | 是 | AES 加解密的初始向量字节长度，取值和 iv 长度对应，iv 长度 128 bit，192 bit 或 256 bit 分别对应取值为 16，24，32 |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |


](#success-%E8%BF%94%E5%9B%9E%E5%80%BC-1)
##### success 返回值：


| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| text | String | 经过加密或解密后生成的文本内容。加密后内容是经过 base64 编码的一段二进制值，解密后内容是一段普通文本。如果解密后的内容不能转化为 utf-8 字符串会出错（CODE：200） |


](#fail-%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%E4%BB%A3%E7%A0%81-1)
##### fail 返回错误代码


| 错误码 | 说明 |
| --- | --- |
| 200 | 一般性错误，在加解密出错时会返回此错误 |
| 202 | 参数错误 |


](#%E7%A4%BA%E4%BE%8B-1)
#### 示例：


```ts
//加密
cipher.aes({
  action: 'encrypt',
  //待加密的文本内容
  text: 'hello',
  //base64编码后的密钥
  key: 'NDM5Qjk2UjAzMEE0NzVCRjlFMkQwQkVGOFc1NkM1QkQ=',
  transformation: 'AES/CBC/PKCS5Padding',
  //transformation: 'ECB', // ECB类型加密
  ivOffset: 0,
  ivLen: 32,
  success(data) {
    console.log(`handling success: ${data.text}`)
  },
  fail(data, code) {
    console.log(`code=${code},data=${data}`)
  },
})

//解密：
cipher.aes({
  action: 'decrypt',
  //待解密的内容，是base64编码后的一段二进制值
  text: '1o0kf2HXwLxHkSh5W5NhzA==',
  //base64编码后的密钥
  key: 'NDM5Qjk2UjAzMEE0NzVCRjlFMkQwQkVGOFc1NkM1QkQ=',
  transformation: 'AES/CBC/PKCS5Padding',
  ivOffset: 0,
  ivLen: 32,
  success(data) {
    console.log(`handling success: ${data.text}`)
  },
  fail(data, code) {
    console.log(`code=${code},data=${data}`)
  },
})
```


](#cipherbase64object)
### cipher.base64(OBJECT)


base64 编解码。


](#%E5%8F%82%E6%95%B0-2)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| action | String | 是 | 加解密类型，两个可选值：encrypt：加密，decrypt：解密 |
| text | String | 是 | 待加密或解密的文本内容。待加密的文本内容应该是一段普通文本。 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC)
#### 返回值：


| 类型 | 说明 |
| --- | --- |
| String | 经过 base64 加密或解密后生成的文本内容。 |


](#%E7%A4%BA%E4%BE%8B-2)
#### 示例：


```ts
//加密
const base64text = cipher.base64({
  action: 'encrypt',
  text: 'hello',
})
console.log(base64text)

//解密：
const text = cipher.base64({
  action: 'decrypt',
  text: base64text,
})
console.log(text)
```


](#ciphercrc32object)
### cipher.crc32(OBJECT)


crc32 加密


](#%E5%8F%82%E6%95%B0-3)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| content | Buffer | String | 是 | 加密内容 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC-1)
#### 返回值：


| 类型 | 说明 |
| --- | --- |
| Number | crc32 加密结果 |


](#%E7%A4%BA%E4%BE%8B-3)
#### 示例：


```ts
const res = cipher.crc32({
  content: new Uint8Array([1, 2]),
})
console.log(res)
```


](#cipherhashobject)
### cipher.hash(OBJECT)


求 hash 值


](#%E5%8F%82%E6%95%B0-4)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| algorithm | String | 是 | hash 算法，可选 md5,sha256。 |
| content | Buffer | String | 是 | 加密内容。 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC-2)
#### 返回值：


| 类型 | 说明 |
| --- | --- |
| String | 返回 hash 计算结果 |


](#%E7%A4%BA%E4%BE%8B-4)
#### 示例：


```ts
const res = cipher.hash({
  algorithm: 'md5',
  content: 'hello',
})
console.log(res)
```

---

## communicationOverview

> 原文路径：/api/system/communicationOverview/

](#%E6%A6%82%E8%BF%B0)
# 概述


蓝河应用通信能力为应用提供了丰富的通信工具，从本地设备到远程服务器，从文件传输到实时通信，从蓝牙到网络状态监测，为应用提供了多样化的数据传输和通信渠道。这使开发者能够构建更多样化的应用，实现应用内外的数据传输和通信。


](#%E5%AD%90%E6%A8%A1%E5%9D%97%E4%BB%8B%E7%BB%8D)
## 子模块介绍


| 模块 | 简述 |
| --- | --- |
| 蓝牙 | 该模块允许应用与附件的蓝牙设备进行通信，实现设备间的数据传输和互动 |
| 上传下载 | 该模块支持应用上传和下载各种文件数据，有助于实现文件传输和数据同步 |
| 数据请求 | 该模块允许应用向远程服务器发送请求，获取数据或与服务器进行交互。这是应用与后端服务通信的核心功能 |
| websocket | 该模块提供了实时双向通信的能力，使应用能够实时传递数据和事件 |
| 网络状态 | 该模块帮助应用监测当前网络连接状态，包括是否连接、网络类型等，有助于应用根据网络条件调整行为 |

---

## console

> 原文路径：/api/system/console/

](#%E6%97%A5%E5%BF%97%E6%89%93%E5%8D%B0)
# 日志打印


](#%E6%A6%82%E8%BF%B0)
## 概述


日志打印模块用于帮助开发者在应用开发和调试过程中记录和分析信息，有利于错误排查和性能优化。


](#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E)
## 接口声明


无需声明


](#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97)
## 导入模块


无需导入


](#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89)
## 接口定义


](#consoledebugloginfowarnerrormessage)
### console.debug/log/info/warn/error(message)


打印一段文本。


](#%E5%8F%82%E6%95%B0)
#### 参数：


| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| message | String | 是 | 要打印的文本，也可以是格式化文本，规则与浏览器的 console 相同 |


备注：本接口只支持普通打印，不支持内容样式定义等其他操作。


](#%E7%A4%BA%E4%BE%8B)
#### 示例：


```ts
console.log('log:我是log')
console.debug('debug:我是debug')
console.info('info:我是info')
console.warn('warn:我是warn')
console.error('error:我是error')
```

---

## device

> 原文路径：/api/system/device/

](#%E8%AE%BE%E5%A4%87%E4%BF%A1%E6%81%AF)
# 设备信息


](#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E)
## 接口声明


```json
{ "name": "blueos.hardware.deviceInfo" }
```


](#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97)
## 导入模块


```ts
import device from '@blueos.hardware.deviceInfo' 或 const device = require('@blueos.hardware.deviceInfo')
```


](#%E5%BC%80%E5%8F%91%E8%80%85%E9%9C%80%E8%A6%81%E5%9C%A8-manifestjson-%E9%87%8C%E9%9D%A2%E9%85%8D%E7%BD%AE%E6%9D%83%E9%99%90)
#### 开发者需要在 manifest.json 里面配置权限：


```json
{
  "permissions": [{ "name": "watch.permission.DEVICE_INFO" }]
}
```


](#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89)
## 接口定义


](#devicegetinfoobject)
### device.getInfo(OBJECT)


获取设备信息


](#%E5%8F%82%E6%95%B0)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |


](#success-%E8%BF%94%E5%9B%9E%E5%80%BC)
##### success 返回值：


| 参数值 | 类型 | 说明 |
| --- | --- | --- |
| brand | String | 设备品牌 |
| manufacturer | String | 设备生产商 |
| model | String | 设备型号 |
| product | String | 设备代号 |
| osType | String | 操作系统名称 |
| osVersionName | String | 操作系统版本名称 |
| osVersionCode | Integer | 操作系统版本号 |
| platformVersionName | String | 运行平台版本名称 |
| platformVersionCode | Integer | 运行平台版本号 |
| language | String | 系统语言 |
| deviceName | String | 设备名称 |
| hardwareVersion | String | 硬件版本 |
| softwareVersion | String | 软件版本 |
| region | String | 系统地区 |
| screenWidth | Integer | 屏幕宽 |
| screenHeight | Integer | 屏幕高 |
| windowWidth | Integer | 可使用窗口宽度 |
| windowHeight | Integer | 可使用窗口高度 |
| statusBarHeight | Integer | 状态栏高度 |
| screenDensity | Float | 设备的屏幕密度 |
| vendorOsName | String | 系统的名称，如 BlueOS |
| vendorOsVersion | String | 蓝河应用的版本号 |
| cutout | Array | 针对异形屏(比如刘海屏、水滴屏和开孔屏)返回异形区域的位置大小。Array 中每个 item 表示一个异形区域的描述。item 参数：left:cutout 左边界距离屏幕左边距离top:cutout 上边界距离屏幕上边距离right:cutout 右边界距离屏幕右边距离bottom:cutout 下边界距离屏幕下边距离cutout 的坐标描述以竖屏为基准。即在横屏和竖屏下获取的 cutout 参数描述都是一样的。 |
| deviceType | String | 当前蓝河应用引擎的设备类型，手表版为'watch' |
| screenRefreshRate | Float | 获取屏幕显示刷新率(获取帧率可能不为 60, 90, 144 等标准帧率) |


](#%E7%A4%BA%E4%BE%8B)
#### 示例：


```ts
device.getInfo({
  success: function (ret) {
    console.log(`handling success， brand = ${ret.brand}`)
  },
})
```


](#devicegetinfosync)
### device.getInfoSync()


同步获取设备信息


](#%E5%8F%82%E6%95%B0-1)
#### 参数


无


](#%E8%BF%94%E5%9B%9E%E5%80%BC)
#### 返回值


| 参数值 | 类型 | 说明 |
| --- | --- | --- |
| deviceInfo | Object | 当前设备信息,deviceInfo 参数信息如上 device.getInfo success 返回值 |


](#%E7%A4%BA%E4%BE%8B-1)
#### 示例


```ts
const deviceInfo = device.getInfoSync()
```


](#devicegetapilevelobject)
### device.getApiLevel(OBJECT)


获取系统支持的支持API Level


](#%E5%8F%82%E6%95%B0-2)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| success | (apiLevel: number) => void | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |


](#success-%E8%BF%94%E5%9B%9E%E5%80%BC-1)
##### success 返回值：


| 类型 | 说明 |
| --- | --- |
| number | 系统支持的支持API Level |


](#%E7%A4%BA%E4%BE%8B-2)
#### 示例


```ts
device.getApiLevel({
  success(apiLevel) {
    console.log(`apiLevel=${apiLevel}`)
  },
  fail() {}
})
```


](#devicegetapilevelsync)
### device.getApiLevelSync()


同步获取系统支持的支持API Level


](#%E5%8F%82%E6%95%B0-3)
#### 参数


无


](#%E8%BF%94%E5%9B%9E%E5%80%BC-1)
#### 返回值


| 类型 | 说明 |
| --- | --- |
| number | 系统支持的支持API Level |


](#%E7%A4%BA%E4%BE%8B-3)
#### 示例


```ts
const apiLevel = device.getApiLevelSync();
console.log(`apiLevel=${apiLevel}`)
```


](#devicegetregionsync)
### device.getRegionSync()


同步获取设备地区信息


](#%E5%8F%82%E6%95%B0-4)
#### 参数


无


](#%E8%BF%94%E5%9B%9E%E5%80%BC-2)
#### 返回值


| 类型 | 说明 |
| --- | --- |
| string | CN 中国ID 印度尼西亚TH 泰国MY 马来西亚SG 新加坡PH 菲律宾ZA 南非CO 哥伦比亚TR 土耳其RU 俄罗斯 |


](#%E7%A4%BA%E4%BE%8B-4)
#### 示例


```ts
const region = device.getRegionSync()
console.log('region is', region)
```


](#devicegetregion)
### device.getRegion()


异步获取设备地区信息


](#%E5%8F%82%E6%95%B0-5)
#### 参数：


| 属性 | 必填 | 类型 | 说明 |
| --- | --- | --- | --- |
| success | 否 | Function | 成功回调 |
| fail | 否 | Function | 失败回调 |


](#success-%E8%BF%94%E5%9B%9E%E5%80%BC-2)
#### success 返回值:


| 类型 | 说明 |
| --- | --- |
| string | CN 中国ID 印度尼西亚TH 泰国MY 马来西亚SG 新加坡PH 菲律宾ZA 南非CO 哥伦比亚TR 土耳其RU 俄罗斯 |


](#%E7%A4%BA%E4%BE%8B-5)
#### 示例：


```ts
device.getRegion({
  success: function (region) {
    console.log('region is', region)
  },
})
```


](#devicegetpeerdeviceinfoobject)
### device.getPeerDeviceInfo(OBJECT)


获取连接手机的信息


](#%E5%8F%82%E6%95%B0-6)
#### 参数：


| 属性 | 必填 | 类型 | 说明 |
| --- | --- | --- | --- |
| success | 否 | Function | 成功回调 |
| fail | 否 | Function | 失败回调 |


](#success-%E8%BF%94%E5%9B%9E%E5%80%BC-3)
#### success 返回值:


| 属性 | 类型 | 说明 |
| --- | --- | --- |
| brand | String | 设备品牌 |
| osType | String | 操作系统名称 |


](#fail-%E8%BF%94%E5%9B%9E%E5%80%BC)
#### fail 返回值:


](#%E7%A4%BA%E4%BE%8B-6)
#### 示例：


```ts
device.getPeerDeviceInfo({
  success: function (ret) {
    console.log(`handling success， brand = ${ret.brand}`)
  },
})
```


](#devicegetidobject)
### device.getId(OBJECT)


批量获取设备标识


](#%E6%9D%83%E9%99%90%E8%A6%81%E6%B1%82)
#### 权限要求


获取手表状态


](#%E5%8F%82%E6%95%B0-7)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | Array | 是 | 支持 device、mac、user、advertising 四种类型，可提供一至多个 |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |


](#success-%E8%BF%94%E5%9B%9E%E5%80%BC-4)
##### success 返回值：


按照传入的 type 返回对应的 id，未在 type 中出现的 id 类型不会返回


| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| device | String | 设备唯一标识。 |
| mac | String | 设备的 mac 地址。 |
| user | String | 用户唯一标识。 |
| advertising | String | 广告唯一标识 |


](#fail-%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%E4%BB%A3%E7%A0%81)
##### fail 返回错误代码


| 错误码 | 说明 |
| --- | --- |
| 400 | 拒绝授予权限 |
| 402 | 权限错误（未声明该权限） |


](#%E7%A4%BA%E4%BE%8B-7)
#### 示例：


```ts
device.getId({
  type: ['device', 'mac'],
  success: function (data) {
    console.log(`handling success: ${data.device}`)
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}, errorMsg=${data}`)
  },
})
```


](#devicegetdeviceidobject)
### device.getDeviceId(OBJECT)


获取设备唯一标识


](#%E6%9D%83%E9%99%90%E8%A6%81%E6%B1%82-1)
#### 权限要求


获取手表状态


](#%E5%8F%82%E6%95%B0-8)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |


](#success-%E8%BF%94%E5%9B%9E%E5%80%BC-5)
##### success 返回值：


| 参数值 | 类型 | 说明 |
| --- | --- | --- |
| deviceId | String | 设备唯一标识。 |


](#fail-%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%E4%BB%A3%E7%A0%81-1)
##### fail 返回错误代码


| 错误码 | 说明 |
| --- | --- |
| 400 | 拒绝授予权限 |
| 402 | 权限错误（未声明该权限） |


```ts
device.getDeviceId({
  success: function (data) {
    console.log(`handling success: ${data.deviceId}`)
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#devicegetserialobject)
### device.getSerial(OBJECT)


获取设备序列号


](#%E6%9D%83%E9%99%90%E8%A6%81%E6%B1%82-2)
#### 权限要求


获取手表状态


](#%E5%8F%82%E6%95%B0-9)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |


](#success-%E8%BF%94%E5%9B%9E%E5%80%BC-6)
##### success 返回值：


| 参数值 | 类型 | 说明 |
| --- | --- | --- |
| serial | String | 设备序列号 |


```ts
device.getSerial({
  success: function (data) {
    console.log(`handling success: ${data.serial}`)
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#devicegettotalstorageobject)
### device.getTotalStorage(OBJECT)


获取存储空间的总大小


](#%E5%8F%82%E6%95%B0-10)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |


](#success-%E8%BF%94%E5%9B%9E%E5%80%BC-7)
##### success 返回值：


| 参数值 | 类型 | 说明 |
| --- | --- | --- |
| totalStorage | Number | 存储空间的总大小，单位是 Byte。 |


```ts
device.getTotalStorage({
  success: function (data) {
    console.log(`handling success: ${data.totalStorage}`)
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#devicegetavailablestorageobject)
### device.getAvailableStorage(OBJECT)


获取存储空间的可用大小


](#%E5%8F%82%E6%95%B0-11)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |


](#success-%E8%BF%94%E5%9B%9E%E5%80%BC-8)
##### success 返回值：


| 参数值 | 类型 | 说明 |
| --- | --- | --- |
| availableStorage | Number | 存储空间的可用大小，单位是 Byte。 |


```ts
device.getAvailableStorage({
  success: function (data) {
    console.log(`handling success: ${data.availableStorage}`)
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#devicegetdeviceiccidobject)
### device.getDeviceICCID(OBJECT)


获取卡识别码


](#%E5%8F%82%E6%95%B0-12)
#### 参数


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |


](#success-%E8%BF%94%E5%9B%9E%E5%80%BC-9)
##### success 返回值：


| 参数值 | 类型 | 说明 |
| --- | --- | --- |
| iccid | String | 卡识别码 |


```ts
device.getDeviceICCID({
  success: function (data) {
    console.log(`handling success: ${data.iccid}`)
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#devicegetcpuinfoobject)
### device.getCpuInfo(OBJECT)


返回 CPU 信息


](#%E5%8F%82%E6%95%B0-13)
#### 参数


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |


](#success-%E8%BF%94%E5%9B%9E%E5%80%BC-10)
##### success 返回值：


| 参数值 | 类型 | 说明 |
| --- | --- | --- |
| cpuInfo | String | CPU 信息。 |


```ts
device.getCpuInfo({
  success: function (data) {
    console.log(`handling success: ${data.cpuInfo}`)
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#deviceissupportedname-string)
### device.isSupported(name: string)


断硬件设备能力是否支持


](#%E5%8F%82%E6%95%B0-14)
#### 参数


| 类型 | 必填 | 说明 |
| --- | --- | --- |
| String | 是 | 支持的硬件能力枚举，见下文【硬件设备能力枚举】 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC-3)
##### 返回值


| 类型 | 说明 |
| --- | --- |
| Boolean | 是否支持，true 支持，false 不支持 |


](#%E7%A4%BA%E4%BE%8B-8)
##### 示例


```ts
const isSupported = device.isSupported('sys.modem.support')
```


](#devicegetfeaturelistobject)
### device.getFeatureList(OBJECT)


获取全部硬件功能列表


](#%E5%8F%82%E6%95%B0-15)
#### 参数


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |


](#success-%E8%BF%94%E5%9B%9E%E5%80%BC-11)
##### success 返回值：


| 类型 | 说明 |
| --- | --- |
| Array<string> | 获取全部硬件功能列表，见下文【硬件设备能力枚举】 |


](#%E7%A4%BA%E4%BE%8B-9)
##### 示例


```ts
device.getFeatureList({
  success: function (data) {
    console.log(`handling success: ${data}`)
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}, errorMsg=${data}`)
  },
})
```


| 类型 | 说明 |
| --- | --- |
| Array<string> | 硬件设备支持的功能列表 |


](#%E7%A1%AC%E4%BB%B6%E8%AE%BE%E5%A4%87%E8%83%BD%E5%8A%9B%E6%9E%9A%E4%B8%BE)
## 硬件设备能力枚举


| 枚举值 | 说明 |
| --- | --- |
| sys.modem.support | modem 功能 |
| sys.sensor.ecg.support | ecg 功能 |

---

## event

> 原文路径：/api/system/event/

](#%E5%85%AC%E5%85%B1%E4%BA%8B%E4%BB%B6)
# 公共事件


公共事件提供了多应用间数据传递和事件交互的能力。


](#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E)
## 接口声明


```json
{ "name": "blueos.app.event.eventManager" }
```


](#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97)
## 导入模块


```ts
import event from '@blueos.app.event.eventManager' 或 const event = require('@blueos.app.event.eventManager')
```


](#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89)
## 接口定义


](#eventpublishobject)
### event.publish(OBJECT)


发布公共事件


](#%E5%8F%82%E6%95%B0)
#### 参数：


[公共事件保留名称](#%E5%85%AC%E5%85%B1%E4%BA%8B%E4%BB%B6%E4%BF%9D%E7%95%99%E7%B1%BB%E5%9E%8B)


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| eventName | String | 是 | 事件名称,被系统占用，请勿使用 |
| options | Object | 否 | 事件参数 |


](#options-%E5%8F%82%E6%95%B0)
##### options 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| params | Object | 否 | 事件参数 |
| permissions | Array<String> | 否 | 订阅者的权限, 拥有权限的包才能收到发送的事件 |


](#%E7%A4%BA%E4%BE%8B)
#### 示例：


```ts
event.publish({
  eventName: 'myEventName',
  options: {
    params: { age: 10, name: 'peter' },
    permissions: ['com.example.demo'],
  },
})
```


](#eventsubscribeobject)
### event.subscribe(OBJECT)


订阅公共事件


](#%E5%8F%82%E6%95%B0-1)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| eventName | String | 是 | 事件名称 |
| callback | Function | 是 | 事件回调 |


](#callback-%E8%BF%94%E5%9B%9E%E5%80%BC)
##### callback 返回值：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| params | Object | 否 | 事件参数 |
| package | String | 否 | 事件推送者包名 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC)
#### 返回值：


| 类型 | 必填 | 说明 |
| --- | --- | --- |
| Number | 是 | 事件 id |


](#%E7%A4%BA%E4%BE%8B-1)
#### 示例：


```ts
const evtId = event.subscribe({
  eventName: 'myEventName',
  callback: function (res) {
    if (res.package === 'com.example.demo') {
      console.log(res.params)
    }
  },
})
console.log(evtId)
```


](#eventunsubscribeobject)
### event.unsubscribe(OBJECT)


取消订阅公共事件


](#%E5%8F%82%E6%95%B0-2)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | Number | 是 | 订阅 id |


](#%E7%A4%BA%E4%BE%8B-2)
#### 示例：


```ts
event.unsubscribe({ id: 1 })
```


](#a-id%E5%85%AC%E5%85%B1%E4%BA%8B%E4%BB%B6%E4%BF%9D%E7%95%99%E7%B1%BB%E5%9E%8B%E7%B3%BB%E7%BB%9F%E6%94%AF%E6%8C%81%E7%9A%84%E5%85%AC%E5%85%B1%E4%BA%8B%E4%BB%B6a)[系统支持的公共事件


| 系统公共事件名称 | 订阅者所需权限 | 说明 |
| --- | --- | --- |
| usual.event.SHUTDOWN | 无 | 即将关机 |
| usual.event.BATTERY_CHANGED | 无 | 电量改变，参数：level:0.0 - 1.0 之间 |
| usual.event.BATTERY_LOW | 无 | 低电事件 |
| usual.event.BATTERY_OKAY | 无 | 充满电事件 |
| usual.event.SCREEN_OFF | 无 | 灭屏事件 |
| usual.event.SCREEN_AOD | 无 | AOD 事件 |
| usual.event.SCREEN_ON | 无 | 亮屏事件 |
| usual.event.PACKAGE_ADDED | 无 | 新安装应用，参数：package:com.xxx.xxx |
| usual.event.PACKAGE_REPLACED | 无 | 应用安装更新，参数：package:com.xxx.xxx |
| usual.event.PACKAGE_REMOVED | 无 | 应用卸载，参数：package:com.xxx.xxx |
| usual.event.DISCHARGING | 无 | 停止充电 |
| usual.event.CHARGING | 无 | 开始充电 |
| usual.event.OTA_TRANSFER | 无 | ota 开始传输 |
| usual.event.OTA_INSTALL | 无 | ota 开始安装 |

---

## fastlz

> 原文路径：/api/system/fastlz/

](#%E8%A7%A3%E5%8E%8B%E7%BC%A9)
# 解压缩


](#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E)
## 接口声明


```json
{ "name": "blueos.util.fastlz" }
```


](#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97)
## 导入模块


```ts
import fastlz from '@blueos.util.fastlz' 或 const fastlz = require('@blueos.util.fastlz')
```


](#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89)
## 接口定义


](#fastlzdecompressobject)
### fastlz.decompress(OBJECT)


解压文件


](#%E5%8F%82%E6%95%B0)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| srcUri | String | 是 | 源文件的 uri，不能是 tmp 类型的 uri |
| dstUri | String | 是 | 目标目录的 uri 必须是完整的文件名 |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |


](#fail-%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%E4%BB%A3%E7%A0%81)
##### fail 返回错误代码：


| 错误码 | 说明 |
| --- | --- |
| 202 | 参数错误 |
| 300 | I/O 错误 |


](#%E7%A4%BA%E4%BE%8B)
#### 示例：


```ts
fastlz.decompress({
  srcUri: 'internal://files/test1',
  dstUri: 'internal://files/test2',
  success: function () {
    console.log(`handling success`)
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```

---

## fetch

> 原文路径：/api/system/fetch/

](#%E6%95%B0%E6%8D%AE%E8%AF%B7%E6%B1%82)
# 数据请求


](#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E)
## 接口声明


```json
{ "name": "blueos.network.fetch" }
```


](#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97)
## 导入模块


```ts
import fetch from '@blueos.network.fetch' 或 const fetch = require('@blueos.network.fetch')
```


](#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89)
## 接口定义


](#fetchfetchobject)
### fetch.fetch(OBJECT)


获取网络数据


](#%E5%8F%82%E6%95%B0)
#### 参数：


``


``


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| url | String | 是 | 资源 url |
| data | String/Object/ArrayBuffer | 否 | 请求的参数，可以是字符串，或者是 js 对象、arraybuffer 对象。参考data与Content-Type关系部分 |
| header | Object | 否 | 请求的 header，会将其所有属性设置到请求的 header 部分。User-Agent 设置在版本开始支持。示例：{"Accept-Encoding": "gzip, deflate","Accept-Language": "zh-CN,en-US;q=0.8,en;q=0.6"} |
| method | String | 否 | 默认为 GET，可以是：OPTIONS，GET，HEAD，POST，PUT，DELETE，TRACE，CONNECT |
| responseType | String | 否 | 支持返回类型是 text，json，file，arraybuffer，默认会根据服务器返回 header 中的 Content-Type 确定返回类型，详见success返回值。 |
| timeout | Number | 否 | 超时时间，单位 ms，默认值为 7000 |
| success | Function | 否 | 成功返回的回调函数 |
| fail | Function | 否 | 失败的回调函数，可能会因为权限失败 |
| complete | Function | 否 | 结束的回调函数（调用成功、失败都会执行） |


](#data-%E4%B8%8E-content-type-%E5%85%B3%E7%B3%BB)
#### data 与 Content-Type 关系


| data | Content-Type | 说明 |
| --- | --- | --- |
| String | 不设置 | Content-Type 默认为 text/plain，data 值作为请求的 body |
| String | 任意 Type | data 值作为请求的 body |
| Object | 不设置 | Content-Type 默认为 application/x-www-form-urlencoded，data 按照 url 规则进行 encode 拼接作为请求的 body |
| Object | application/x-www-form-urlencoded | data 按照 url 规则进行 encode 拼接作为请求的 body |
| Object | application/x-www-form-urlencoded 之外的任意 type | 会将 data 转为字符串作为请求的 body |
| ArrayBuffer | 不设置 | Content-Type 默认为 application/octet-stream，data 值作为请求的 body |
| ArrayBuffer | 任意 Type | data 值作为请求的 body |


](#success-%E8%BF%94%E5%9B%9E%E5%80%BC)
##### success 返回值：


``


| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| code | Integer | 服务器状态 code |
| data | String/Object /ArrayBuffer | 参考responseType与success中data关系部分 |
| headers | Object | 服务器 response 的所有 header |


](#responsetype-%E4%B8%8E-success-%E4%B8%AD-data-%E5%85%B3%E7%B3%BB)
##### responseType 与 success 中 data 关系：


| responseType | data | 说明 |
| --- | --- | --- |
| 无 | String | 服务器返回的 header 中 type 是 text/*或 application/json、application/javascript、application/xml，值是文本内容，否则是存储的临时文件的 uri，临时文件如果是图片或者视频内容，可以将图片设置到 image 或 video 控件上显示 |
| text | String | 返回普通文本 |
| json | Object | 返回 js 对象 |
| file | String | 返回存储的临时文件的 uri |
| arraybuffer | ArrayBuffer | 返回 ArrayBuffer 对象 |


](#%E7%A4%BA%E4%BE%8B)
#### 示例：


```ts
fetch.fetch({
  url: 'http://www.example.com',
  responseType: 'text',
  success: function (response) {
    console.log(`the status code of the response: ${response.code}`)
    console.log(`the data of the response: ${response.data}`)
    console.log(`the headers of the response: ${JSON.stringify(response.headers)}`)
  },
  fail: function (data, code) {
    console.log(`handling fail, errMsg = ${data}`)
    console.log(`handling fail, errCode = ${code}`)
  },
})
```

---

## generatecertificatethumbprint

> 原文路径：/api/system/generatecertificatethumbprint/

](#%E7%94%9F%E6%88%90%E7%AD%BE%E5%90%8D%E8%AF%81%E4%B9%A6%E6%8C%87%E7%BA%B9)
# 生成签名证书指纹


开发者通过**JDK**的**Keytool**工具以及签名文件，导出**SHA256**指纹。


](#windows)
## windows


- 执行 CMD 命令打开命令行工具，执行 cd 命令进入 keytool.exe 所在的目录（以下样例为 JDK 安装在 C 盘的 Program Files 目录）。


```bash
  cd C:\Program Files\Java\jdk\bin
```


- 执行命令 `keytool -list -v -keystore \<keystore-file\>`，按命令行提示进行操作。`\<keystore-file\>`为应用签名证书的完整路径。例如：


```bash
  keytool -list -v -keystore C:\TestApp.jks
```


- 根据结果获取对应的 SHA256 指纹。

![windowsSHA256](/c301ef1e1909585101d5106c752a8d6f/windowsSHA256.png)


](#macos)
## macOS


- 打开 Terminal 终端。

![macOSTerminal](/e22774e8b3878b67d0253aa5d750bd9f/macOSTerminal.png)


- 执行命令 `keytool -list -v -keystore \<keystore-file\>`，按命令行提示进行操作。`\<keystore-file\>`为应用签名证书的完整路径。例如：


```bash
  keytool -list -v -keystore /Users/admin/Downloads/HmsDemo.jks
```


- 根据结果获取对应的 SHA256 指纹。

![macOSSHA256](/16720dd49f62d60febf7af53f7f975d9/macOSSHA256.png)

---

## geolocation

> 原文路径：/api/system/geolocation/

](#%E5%9C%B0%E7%90%86%E4%BD%8D%E7%BD%AE)
# 地理位置


](#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E)
## 接口声明


```json
{ "name": "blueos.hardware.location.location" }
```


](#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97)
## 导入模块


```ts
import geolocation from '@blueos.hardware.location.location' 或 const geolocation = require('@blueos.hardware.location.location')
```


](#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89)
## 接口定义


](#geolocationgetlocationobject)
### geolocation.getLocation(OBJECT)


获取地理位置


](#%E6%9D%83%E9%99%90%E8%A6%81%E6%B1%82)
#### 权限要求


精确设备定位


](#%E5%BC%80%E5%8F%91%E8%80%85%E9%9C%80%E8%A6%81%E5%9C%A8-manifestjson-%E9%87%8C%E9%9D%A2%E9%85%8D%E7%BD%AE%E6%9D%83%E9%99%90)
#### 开发者需要在 manifest.json 里面配置权限：


```json
{
  "permissions": [{ "name": "watch.permission.LOCATION" }]
}
```


](#%E5%8F%82%E6%95%B0)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| timeout | Number | 否 | 设置超时时间，单位是 ms，默认值为 30000。在权限被系统拒绝或者定位设置不当的情况下，有可能永远不能返回结果，因而需要设置超时。超时后会使用 fail 回调 |
| coordType | String | 否 | 坐标系类型，可选值可通过 getSupportedCoordTypes 获取，默认为 wgs84 |
| success | Function | 是 | 成功回调 |
| fail | Function | 否 | 失败回调，原因可能是用户拒绝 |
| complete | Function | 否 | 执行结束后的回调 |


](#success-%E8%BF%94%E5%9B%9E%E5%80%BC)
##### success 返回值：


| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| longitude | Number | 经度 |
| latitude | Number | 纬度 |
| accuracy | Number | 精确度 |
| time | Number | 时间 |


](#fail-%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%E4%BB%A3%E7%A0%81)
##### fail 返回错误代码


| 错误码 | 说明 |
| --- | --- |
| 400 | 拒绝授予权限 |
| 402 | 权限错误（未声明该权限） |


](#%E7%A4%BA%E4%BE%8B)
#### 示例：


```ts
geolocation.getLocation({
  success: function (data) {
    console.log(`handling success: longitude = ${data.longitude}, latitude = ${data.latitude}`)
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}, errorMsg=${data}`)
  },
})
```


](#geolocationsubscribeobject)
### geolocation.subscribe(OBJECT)


监听地理位置。如果多次调用，仅最后一次调用生效


](#%E6%9D%83%E9%99%90%E8%A6%81%E6%B1%82-1)
#### 权限要求


精确设备定位


](#%E5%8F%82%E6%95%B0-1)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| reserved | Boolean | 否 | 是否持久化订阅，默认为 false。机制：设置为 true，页面跳转，不会自动取消订阅，需手动取消订阅 |
| coordType | String | 否 | 坐标系类型，可选值可通过 getSupportedCoordTypes 获取，默认为 wgs84 |
| callback | Function | 是 | 每次位置信息发生变化，都会被回调 |
| fail | Function | 否 | 失败回调，原因可能是用户拒绝 |


](#callback-%E8%BF%94%E5%9B%9E%E5%80%BC)
##### callback 返回值：


| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| longitude | Number | 经度 |
| latitude | Number | 纬度 |
| accuracy | Number | 精确度 |
| time | Number | 时间 |


](#fail-%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%E4%BB%A3%E7%A0%81-1)
##### fail 返回错误代码


| 错误码 | 说明 |
| --- | --- |
| 400 | 拒绝授予权限 |
| 402 | 权限错误（未声明该权限） |


](#%E7%A4%BA%E4%BE%8B-1)
#### 示例：


```ts
geolocation.subscribe({
  callback: function (data) {
    console.log(`handling success: longitude = ${data.longitude}, latitude = ${data.latitude}`)
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}, errorMsg=${data}`)
  },
})
```


](#geolocationunsubscribe)
### geolocation.unsubscribe()


取消监听地理位置


](#%E5%8F%82%E6%95%B0-2)
#### 参数：


无


](#%E7%A4%BA%E4%BE%8B-2)
#### 示例：


```ts
geolocation.unsubscribe()
```


](#geolocationgetsupportedcoordtypes)
### geolocation.getSupportedCoordTypes()


获取支持的坐标系类型


](#%E5%8F%82%E6%95%B0-3)
#### 参数：


无


](#%E8%BF%94%E5%9B%9E%E5%80%BC)
#### 返回值：


字符串数组。当前支持的坐标系类型，如['wgs84']


](#%E7%A4%BA%E4%BE%8B-3)
#### 示例：


```ts
const types = geolocation.getSupportedCoordTypes()
```

---

## hardware

> 原文路径：/api/system/hardware/

](#%E6%A6%82%E8%BF%B0)
# 概述


蓝河应用的基础硬件能力模块旨在为应用提供访问和控制设备的基础硬件功能。该模块使应用能够与设备硬件进行互动，为开发者提供了强大的工具，以满足应用特定功能要求。


](#%E5%AD%90%E6%A8%A1%E5%9D%97%E4%BB%8B%E7%BB%8D)
## 子模块介绍


| 模块 | 简述 |
| --- | --- |
| 地理位置 | 该模块允许应用获取设备的地理位置信息，包括经度、纬度和定位精度，以支持位置相关的应用功能 |
| 振动 | 该模块提供了控制设备振动的功能，使应用能够在需要时触发振动反馈。 |
| 屏幕管理 | 提供获取熄屏时间能力 |
| 传感器 | 该模块提供了访问设备内置传感器（如加速度计、陀螺仪等）的功能，以支持应用的传感器驱动功能 |
| 电量信息 | 该模块提供了获取设备电池状态和电量信息的能力 |
| 屏幕亮度 | 该模块允许应用调整和获取设备屏幕的亮度，以满足用户需求和环境条件。 |
| 设备信息 | 该模块提供了获取设备硬件信息的功能，包括设备型号、操作系统版本等，以帮助应用适配和识别设备特性 |

---

## inputmethod

> 原文路径：/api/system/inputmethod/

](#%E8%BE%93%E5%85%A5%E6%B3%95)
# 输入法


](#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E)
## 接口声明


```json
{ "name": "blueos.service.inputMethod" }
```


](#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97)
## 导入模块


```ts
import inputmethod from '@blueos.service.inputMethod' 或 const inputmethod = require('@blueos.service.inputMethod')
```


](#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89)
## 接口定义


](#inputmethodsetinput)
### inputmethod.setInput()


输入法应用向页面的 [<input>](/component/table/input) 组件写入数据，仅输入法应用才会用到此功能


](#%E5%8F%82%E6%95%B0)
#### 参数：


| 属性 | 类型 | 说明 |
| --- | --- | --- |
| value | String | 输入法录入的数据 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC)
#### 返回值：


无


](#%E7%A4%BA%E4%BE%8B)
#### 示例：


```ts
inputmethod.setInput({
  value: 'hello vivo watch',
})
```


](#%E5%A6%82%E4%BD%95%E8%B0%83%E8%B5%B7%E8%BE%93%E5%85%A5%E6%B3%95)
## 如何调起输入法


](#1-%E9%80%89%E6%8B%A9%E8%BE%93%E5%85%A5%E6%B3%95%E7%B1%BB%E5%9E%8B)
### 1. 选择输入法类型


`input` 组件 `type` 属性可以控制拉起输入法类型


- text: 手写输入法

- speak: 语音输入法


```html
<template>
  <input type="text" value="inputValue" onchange="textChange" />
</template>
<script>
  export default {
    data: {
      inputValue: '',
    },
    textChange({ value }) {
      this.inputValue = value
    },
  }
</script>
```


](#2%E7%A6%81%E6%AD%A2-input-%E8%BE%93%E5%85%A5%E6%B3%95%E8%87%AA%E5%8A%A8%E6%8B%89%E8%B5%B7)
### 2.禁止 input 输入法自动拉起


若调用者仅需要展示文本，而不希望自动拉起输入法，可以在 `input` 组件上设置属性 `readonly="readonly"`


```html
<template>
  <input type="text" value="inputValue" readonly="readonly" />
</template>
<script>
  export default {
    data: {
      inputValue: 'hello',
    },
  }
</script>
```


](#3%E4%BB%BB%E6%84%8F%E7%BB%84%E4%BB%B6%E6%8B%89%E8%B5%B7%E8%BE%93%E5%85%A5%E6%B3%95)
### 3.任意组件拉起输入法


- 增加类型为 `text` 或者 `speak` 的 `input` 组件，并将其隐藏 `show="false"`, `input`组件位置可以是任意的。

- `input` 组件的 `change` 事件回调用于调用者接收输入法返回的数据。

- 在其他需要调用输入法的组件的 `click` 事件中调用 `input` 组件的 `focus` 方法

- 若有多个组件需要启动输入法，只需要新增一个 `input` 组件，在对应的组件的 `click` 方法中标识是哪个组件拉起输入法。


```html
<template>
  <div>
    <text onclick="btnClick">{{inputValue}}</text>
    <input show="false" id="ipt" type="text" onchange="textChange" />
  </div>
</template>
<script>
  export default {
    data: {
      inputValue: '',
    },
    textChange({ value }) {
      this.inputValue = value
    },
    btnClick() {
      this.$element('ipt').focus()
    },
  }
</script>
```

---

## media

> 原文路径：/api/system/media/

](#%E5%A4%9A%E5%AA%92%E4%BD%93)
# 多媒体


](#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E)
## 接口声明


```json
{ "name": "blueos.media.audio.mediaManager" }
```


](#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97)
## 导入模块


```ts
import media from '@blueos.media.audio.mediaManager' 或 const media = require('@blueos.media.audio.mediaManager')
```


](#mediacreateaudioplayerobject)
## media.createAudioPlayer(OBJECT)


创建音频播放的实例。


**参数**


[StreamType](#streamtype)


[ContentType](#contenttype)


[StreamUsage](#streamusage)


| 属性 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| streamType |  | 否 | 音量策略，默认值为 music |
| contentType |  | 否 | 音频后处理类型，默认值为 music |
| streamUsage |  | 否 | 音频类型，默认值为 music |


**返回值：** [AudioPlayer](#audioplayer)


**示例：**


```ts
const audioPlayer = media.createAudioPlayer({
  streamType: "music",
  contentType: "music",
  streamUsage: "music"
})
```


](#mediacreateaudiotrackobject)
## media.createAudioTrack(OBJECT)


创建音频流式播放的实例


**参数**


[StreamType](#streamtype)


[ContentType](#contenttype)


[StreamUsage](#streamusage)


| 属性 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| streamType |  | 否 | 音量策略，默认值为 music |
| contentType |  | 否 | 音频后处理类型，默认值为 music |
| streamUsage |  | 否 | 音频类型，默认值为 music |
| sampleRateInHz | number | 否 | 采样率，单位赫兹，可选值为：8000、 16000；默认值为 16000 |
| channelConfig | number | 否 | 捕获音频的声道数目，1：单声道，2：立体声；默认值为 1 |
| audioFormat | number | 否 | 样本的分辨率，单位 bit，可选值为： 8、16；默认值为 16 |


**返回值：** [AudioTrack](#audiotrack)


**示例：**


```ts
const audioTrack = media.createAudioTrack()
```


](#mediacreateaudiorecordobject)
## media.createAudioRecord(OBJECT)


创建录音实例


**权限要求**： 录音


**开发者需要在 manifest.json 里面配置权限：**


```json
{
  "permissions": [{ "name": "blueos.permission.RECORD" }]
}
```


**参数**


| 属性名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sampleRateInHz | number | 否 | 采样率，单位赫兹，可选值为：8000、 16000；默认值为 16000 |
| channelConfig | number | 否 | 音频的声道数目，1：单声道，2：立体声；默认值为 1 |
| audioFormat | number | 否 | 样本的分辨率，单位 bit，可选值为： 8、16；默认值为 16 |


**返回值：** [AudioRecorder](#audiorecorder)


**示例：**


```ts
const audioRecorder = media.createAudioRecord({
  sampleRateInHz: 16000,
  channelConfig: 1,
  audioFormat: 16
})
```


](#audioplayer)
## AudioPlayer


](#play)
### play()


开始播放音频


**参数：** 无


**示例：**


```ts
audioPlayer.src = 'xxx'
// play 方法调用无需等待 src 加载完成
audioPlayer.play()
```


](#pause)
### pause()


暂停播放音频


**参数：** 无


**示例：**


```ts
audioPlayer.pause()
```


](#stop)
### stop()


停止音频播放，可以通过 play 重新播放音频


**参数：** 无


**示例：**


```ts
audioPlayer.stop()
```


](#release)
### release()


释放音频资源


**参数：** 无


**示例：**


```ts
audioPlayer.release()
```


](#src)
### src


字符串属性；可读可写属性，声明该属性会指定播放的音频媒体 uri。


**示例：**


```ts
audioPlayer.src = "internal://files/a.mp3"
```


](#currenttime)
### currentTime


读取 `currentTime` 属性将返回一个双精度浮点值，用以标明以秒为单位的当前音频的播放位置，设置 `currentTime` 将设置当前的播放位置。


**示例：**


```ts
audioPlayer.currentTime = 100.0
```


](#duration-code-classlanguage-text%E5%8F%AA%E8%AF%BBcode)
### duration`
### 只读`


这是一个双精度浮点数，指明了音频在时间轴中的持续时间（总长度），以秒为单位。如果元素上没有媒体，或者媒体是不可用的，那么会返回 `NaN`。


**示例：**


```ts
const duration = audioPlayer.duration;
console.log(duration)
```


](#state-code-classlanguage-text%E5%8F%AA%E8%AF%BBcode)
### state`
### 只读`


读取 `state` 属性可获取当前音频的播放状态。分别为：分别为`play,'pause','stop','idle'


```ts
const state = audioPlayer.state;
console.log(state)
```


](#playcount)
### playcount


整型数值，控制音频的循环播放。playcount = 1 或 playcount = 0：不开启循环; playcount >1：开启循环，且循环指定的次数; playcount = -1：开启循环，且循环无限次数。


**示例：**


```ts
audioPlayer.playcount = -1;
```


](#onplay)
### onPlay


在音频 play 后的回调事件。


**示例：**


```ts
audioPlayer.onPlay = () => {
  console.log("play")
}
```


](#onpause)
### onPause


在音频 pause 后的回调事件


**示例：**


```ts
audioPlayer.onPause = () => {
  console.log("pause")
}
```


](#onstop)
### onStop


在音频 stop 后的回调事件


**示例：**


```ts
audioPlayer.onStop = () => {
  console.log("stop")
}
```


](#onended)
### onEnded


播放结束时的回调事件


**示例：**


```ts
audioPlayer.onEnded = () => {
  console.log("ended")
}
```


](#onerror)
### onError


播放发生错误时的回调事件


**回调返回：**


[ErrorCode](#errorcode)


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| data | string | 错误说明 |
| code |  | 错误码 |


**示例：**


```ts
audioPlayer.onError = (data, code) => {
  console.log(`data = ${data} code = ${code}`)
}
```


](#ontimeupdate)
### onTimeUpdate


在 `currentTime` 属性更新时会触发的回调事件


**示例：**


```ts
audioPlayer.onTimeUpdate = () => {
  console.log("timeUpdate")
}
```


](#ondurationchange)
### onDurationChange


在 `duration` 属性更新时被触发的回调事件


**示例：**


```ts
audioPlayer.onDurationChange = () => {
  console.log("durationChange")
}
```


](#onprevious)
### onPrevious


音乐面板点击上一首按钮时触发


**示例：**


```ts
audioPlayer.onPrevious = () => {
  console.log("播放上一首")
}
```


](#onnext)
### onNext


音乐面板点击下一首按钮时触发


**示例：**


```ts
audioPlayer.onNext = () => {
  console.log("播放下一首")
}
```


](#onloadeddata)
### onLoadedData


第一次获取到音频数据的回调事件


**示例：**


```ts
audioPlayer.onLoadedData = () => {
  console.log("loadedData")
}
```


](#oninterrupt)
### onInterrupt


音频打断事件，当前音频被其他有相同音频类型的音频抢夺时，被停止或者恢复的通知。或者当前音频被当外部设备操作打断的通知。


**回调返回：**


[InterruptAction](#interruptaction)


| 类型 | 说明 |
| --- | --- |
|  | 打断事件信息 |


**示例：**


```ts
audioPlayer.onInterrupt = function (interruptAction) {
  console.log(interruptAction.interruptHint)
}
```


](#audiotrack)
## AudioTrack


](#play-1)
### play()


开始播放音频


**参数：** 无


**示例：**


```ts
audioTrack.play()
```


](#writeobject)
### write(OBJECT)


写入音频数据。


请确保在调用 `write()` 之前先调用 `play()`，否则写入的数据不会被处理或播放。


**参数**


| 属性 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| buffer | ArrayBuffer | 是 | 写入的二进制音频数据 |
| success | Function | 否 | 成功函数，通过该回调函数通知写入的情况 |
| fail | Function | 否 | 失败函数 |


**success 返回值：**


| 类型 | 说明 |
| --- | --- |
| number | 表示写入成功的字节数，若返回的字节数为0 ，表示音频缓冲区已写满，建议等待后再次写入。 |


**fail 返回值：**


| 错误码 | 说明 |
| --- | --- |
| 202 | 参数错误 |
| 300 | 写入失败 |


**示例：**


```ts
audioTrack.write({
  buffer: new ArrayBuffer(16),
  success(writtenBytes) {
    console.log(`written success writtenBytes=${writtenBytes}`)
  },
  fail(data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#pause-1)
### pause()


暂停播放音频


**参数：** 无


**示例：**


```ts
audioTrack.pause()
```


](#stop-1)
### stop()


停止音频播放，可以通过 play 重新播放音频


**参数：** 无


**示例：**


```ts
audioTrack.stop()
```


](#release-1)
### release()


释放音频资源


**参数：** 无


**示例：**


```ts
audioTrack.release()
```


](#state-code-classlanguage-text%E5%8F%AA%E8%AF%BBcode-1)
### state`
### 只读`


读取该属性可获得播放状态，分别为'play', 'pause', 'stop'


**示例：**


```ts
let state = audioTrack.state
console.log(state)
```


](#onplay-1)
### onPlay


在音频 play 后的回调事件


**示例：**


```ts
audioTrack.onPlay = () => {
  console.log('play')
}
```


](#onstop-1)
### onStop


在音频 stop 后的回调事件


**示例：**


```ts
audioTrack.onStop = () => {
  console.log('stop')
}
```


](#onpause-1)
### onPause


在音频 pause 后的回调事件


**示例**：


```ts
audioTrack.onPause = () => {
  console.log('pause')
}
```


](#onerror-1)
### onError


播放发生错误时的回调事件


**回调返回：**


[ErrorCode](#errorcode)


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| data | string | 错误说明 |
| code |  | 错误码 |


**示例：**


```ts
audioTrack.onError = (data, code) => {
  console.log(`data = ${data} code = ${code}`)
}
```


](#oninterrupt-1)
### onInterrupt


音频打断事件，当前音频被其他有相同音频类型的音频抢夺时，被停止或者恢复的通知。或者当前音频被当外部设备操作打断的通知。


**回调返回：**


[InterruptAction](#interruptaction)


| 类型 | 说明 |
| --- | --- |
|  | 打断事件信息 |


**示例：**


```ts
audioPlayer.onInterrupt = function (interruptAction) {
  console.log(interruptAction.interruptHint)
}
```


](#audiorecorder)
## AudioRecorder


](#startobject)
### start(OBJECT)


开始录音，并在录音结束后生成音频文件。


**参数：**


| 属性名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | string | 是 | 需要输出到文件的 uri |
| success | Function | 是 | 成功的回调 |
| fail | Function | 是 | 失败的回调 |
| complete | Function | 是 | 执行结束后的回调 |


**success 返回值：**


| 属性名 | 类型 | 说明 |
| --- | --- | --- |
| uri | String | 录音文件的存储路径 |


**示例：**


```ts
audioRecorder.start({
  uri: 'internal://cache/file.mp3',
  success: function (data) {
    console.log(`handling success: ${data.uri}`)
  },
  fail: function (data, code) {},
})
```


](#readobject)
### read(OBJECT)


开始录音，录音的过程中实时返回音频内容。


注意：read 也是开始录音，不要再调用 start。


**参数：**


| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Function | 否 | 回调函数 |


**callback 返回值：**


| 类型 | 说明 |
| --- | --- |
| ArrayBuffer | 录音内容 |


**示例：**


```ts
audioRecorder.read({
  callback(buffer) {
    console.log('buffer.byteLength: ' + buffer.byteLength)
  },
})
```


](#stop-2)
### stop()


停止录音。


**参数：** 无


**示例：**


```ts
audioRecorder.stop()
```


](#release-2)
### release()


释放录音资源。


**参数：** 无


**示例：**


```ts
audioRecorder.release()
```


](#onerror-2)
### onError


录音发生错误时的回调事件


**回调返回：**


[ErrorCode](#errorcode)


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| data | string | 错误说明 |
| code |  | 错误码 |


**示例：**


```ts
audioRecorder.onError = (data, code) => {
  console.log(`data = ${data} code = ${code}`)
}
```


](#onstart)
### onStart


录音开始时的回调事件


**示例：**


```ts
audioRecorder.onStart = () => {
  console.log(`start`)
}
```


](#onstop-2)
### onStop


录音停止时的回调事件


**示例：**


```ts
audioRecorder.onStop = () => {
  console.log(`stop`)
}
```


](#streamusage)
## StreamUsage


音频类型枚举值 ，取值为 `string` 类型，默认值为`music`。用于对音频冲突的仲裁，多个相同的`streamUsage`音频同时播放时，系统只会保留一个，其他的会被打断。


| 取值 | 权限限制 | 说明 |
| --- | --- | --- |
| system | 仅系统应用可用 | 系统消息 |
| ring | 仅系统应用可用 | 电话响铃或短信提示 |
| music | 无 | 媒体 |
| voicecall | 仅系统应用可用 | 通话 |
| alarm | 仅系统应用可用 | 闹钟 |
| notification | 仅系统应用可用 | 通知 |
| game | 仅系统应用可用 | 游戏 |
| tts | 仅系统应用可用 | 文本语音播报 |
| sportbroadcast | 仅系统应用可用 | 运动播报 |
| navigation | 仅系统应用可用 | 导航 |


](#contenttype)
## ContentType


音频后处理枚举值，取值为 `string` 类型，默认值为`music`。系统会根据不同的 `contentType` 对声音进行优化处理。


| 取值 | 说明 |
| --- | --- |
| speech | 语音播报 |
| music | 音乐播放 |
| movie | 视频播放/电视节目 |
| sonification | 按键音/游戏中的短音提示/拟音 |


](#streamtype)
## StreamType


音量策略枚举值，取值为 `string` 类型，默认值为`music`。系统可以通过不同的 `streamType` 来管理音频的音量，例如：播放音乐设置为 `music`，消息提示音设置为 `ring` 。


| 名称 | 权限限制 | 说明 |
| --- | --- | --- |
| system | 仅系统应用可用 | 系统消息 |
| ring | 仅系统应用可用 | 电话响铃或短信提示 |
| music | 无 | 媒体 |
| voicecall | 仅系统应用可用 | 通话 |
| alarm | 仅系统应用可用 | 闹钟 |
| notification | 仅系统应用可用 | 通知 |
| bluetoothsco | 仅系统应用可用 | 蓝牙通话 |
| tts | 仅系统应用可用 | 文本语音播报 |
| sportbroadcast | 仅系统应用可用 | 运动播报 |
| force | 仅系统应用可用 | 忽视静音策略，强制最大音量播放 |


](#interruptaction)
## InterruptAction


音频打断对象


| 属性 | 类型 | 说明 |
| --- | --- | --- |
| interruptHint | number | 1 - 音频恢复 （如：来电恢复）2 - 音频暂停，可以恢复 （如：来电打断）3 - 音频停止，不会再恢复（如：彻底停止）4 - 音频被拒绝（如：来电时播放音乐） |
| actionType | number | 事件返回类型。0 - 被音频抢夺，焦点触发事件1 - 音频被外部设备打断事件，如蓝牙耳机连接。 |


**示例：**


```json
{
  "interruptHint": 2,
  "actionType": 0
}
```


](#errorcode)
## ErrorCode


错误码的枚举，枚举值的类型为 number


| 枚举值 | 对应的 data 信息 | 说明 |
| --- | --- | --- |
| 201 | No Permission | 表示无权限执行此操作，需要申请权限或者用户授权。 |
| 202 | Invalid Parameters | 参数无效 。 |
| 100001 | Insufficient Memory or Service Limit Reached | 表示系统内存不足或服务数量达到上限 。 |
| 100002 | Operation Not Allowed | 表示当前状态不允许或无权执行此操作 。 |
| 100003 | I/O error. | 表示出现IO错误。 |
| 100004 | System or Network Timeout | 表示系统或网络响应超时 。录音暂无此错误。 |
| 100005 | Service Process Terminated | 表示服务进程死亡。 |
| 100006 | Unsupported Format | 表示不支持当前媒体资源的格式。 |
| 100007 | Audio interrupted. | 表示音频焦点被抢占 。 |

---

## multimediaOverview

> 原文路径：/api/system/multimediaOverview/

](#%E6%A6%82%E8%BF%B0)
# 概述


蓝河应用多媒体能力支持音频业务的开发，提供音频相关的功能，主要包括音频播放、音频流式播放、录音、音量管理等。


](#%E5%AD%90%E6%A8%A1%E5%9D%97%E4%BB%8B%E7%BB%8D)
## 子模块介绍


| 模块 | 简述 |
| --- | --- |
| 音频 | 提供音频播放能力 |
| 多媒体 | 提供音频播放、音频流式播放、录音能力 |
| 音频管理 | 提供音量设置，音量获取、监听等音频管理能力 |
| 录音 | 提供录音能力 |

---

## network

> 原文路径：/api/system/network/

](#%E7%BD%91%E7%BB%9C%E7%8A%B6%E6%80%81)
# 网络状态


](#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E)
## 接口声明


```json
{ "name": "blueos.network.networkManager" }
```


](#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97)
## 导入模块


```ts
import network from '@blueos.network.networkManager' 或 const network = require('@blueos.network.networkManager')
```


](#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89)
## 接口定义


](#networkgettypeobject)
### network.getType(OBJECT)


获取网络类型


](#%E5%8F%82%E6%95%B0)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调，可能是因为缺乏权限 |
| complete | Function | 否 | 执行结束后的回调 |


](#success-%E8%BF%94%E5%9B%9E%E5%80%BC)
##### success 返回值：


| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| type | String | 网络类型，可能的值为 2g，3g，4g，wifi，none，5g，bluetooth，others |


](#%E7%A4%BA%E4%BE%8B)
#### 示例：


```ts
network.getType({
  success(data) {
    console.log(`handling success: ${data.type}`)
  },
})
```


](#networksubscribeobject)
### network.subscribe(OBJECT)


监听网络连接状态。如果多次调用，仅最后一次调用生效


](#%E5%8F%82%E6%95%B0-1)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| reserved | Boolean | 否 | 是否持久化订阅，默认为 false。机制：设置为 true，页面跳转，不会自动取消订阅，需手动取消订阅 |
| callback | Function | 否 | 每次网络发生变化，都会被回调 |
| fail | Function | 否 | 失败回调，可能是因为缺乏权限 |


](#callback-%E8%BF%94%E5%9B%9E%E5%80%BC)
##### callback 返回值：


| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| type | String | 网络类型，可能的值为 2g，3g，4g，wifi，none，5g，bluetooth，others |


](#%E7%A4%BA%E4%BE%8B-1)
#### 示例：


```ts
network.subscribe({
  callback: (data) => {
    console.log('handling callback')
  },
})
```


](#networkunsubscribe)
### network.unsubscribe()


取消监听网络连接状态


](#%E5%8F%82%E6%95%B0-2)
#### 参数：


无


](#%E7%A4%BA%E4%BE%8B-2)
#### 示例：


```ts
network.unsubscribe()
```


](#networkgetsimoperatorsobject)
### network.getSimOperators(OBJECT)


获取 Sim 卡的运营商信息，即将废弃，改用 @blueos.telephony.simManager.getSimOperators()


](#%E6%9D%83%E9%99%90%E8%A6%81%E6%B1%82)
#### 权限要求


电话权限


](#%E5%8F%82%E6%95%B0-3)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |


](#success-%E8%BF%94%E5%9B%9E%E5%80%BC-1)
##### success 返回值：


| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| operators | Array | SIM 卡列表信息 |
| size | Number | Sim 卡数量 |


](#fail-%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%E4%BB%A3%E7%A0%81)
##### fail 返回错误代码：


| 错误码 | 说明 |
| --- | --- |
| 201 | 用户拒绝，获取电话权限失败 |
| 207 | 用户拒绝并勾选不再询问复选框 |
| 1001 | 未插入 sim 卡 |
| 1002 | 获取运营商信息失败 |


](#sim-%E5%8D%A1%E5%88%97%E8%A1%A8%E9%A1%B9%E5%8F%82%E6%95%B0)
##### SIM 卡列表项参数：


[其余 MCC+MNC](https://www.mcc-mnc.com/ )


| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| operator | String | 返回 Sim 卡的运营商信息运营商信息说明：此处统一返回 MCC+MNC，即移动国家代码 + 移动网络代码；中国移动：46000，46002，46004，46007；中国联通：46001，46006，46009；中国电信：46003，46005，46011； |
| slotIndex | Number | 卡槽序号 |


](#%E7%A4%BA%E4%BE%8B-3)
#### 示例：


```ts
network.getSimOperators({
  success(data) {
    console.log(`size: ${data.size}`)
    for (const i in data.operators) {
      console.log(`operator: ${data.operators[i].operator},
        slotIndex:${data.operators[i].slotIndex},
        isDefaultDataOperator:${data.operators[i].isDefaultDataOperator},`)
    }
  },
  fail(data, code) {
    console.log(`handling fail, code = ${code}, errorMsg=${data}`)
  },
})
```

---

## notification

> 原文路径：/api/system/notification/

](#%E6%B6%88%E6%81%AF%E9%80%9A%E7%9F%A5)
# 消息通知


](#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E)
## 接口声明


```json
{ "name": "blueos.app.notification.notificationManager" }
```


](#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97)
## 导入模块


```ts
import notification from '@blueos.app.notification.notificationManager' 或 const notification = require('@blueos.app.notification.notificationManager')
```


](#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89)
## 接口定义


](#notificationpublishobject)
### notification.publish(OBJECT)


发布通知


](#%E5%8F%82%E6%95%B0)
#### 参数：


[Notification](#Notification)


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| request |  | 是 | 消息通知对象 |
| success | Function | 是 | 成功的回调 |
| fail | Function | 是 | 失败的回调 |
| complete | Function | 是 | 执行结束后的回调 |


](#a-idnotificationnotificationa)[Notification


说明如下：


[Content](#Content)


[ActionButton](#ActionButton)


| 参数名 | 类型 | 必填 | 默认 | 说明 |
| --- | --- | --- | --- | --- |
| icon | string | 是 | - | 通知小图标，应用下以 src 为根目录的图片的绝对路径 |
| id | number | 否 | - | 应用通知的唯一 id |
| appName | string | 否 | - | 应用名称 |
| contentType | number | 是 | - | 正文类型。 1：普通文本通知类型。 2：图片通知类型 |
| content |  | 是 | - | 通知内容 与 contentType 对应 |
| channel | number | 是 | - | 通知来源 , 1：PHONE；2：WATCH_APP |
| platform | string | 否 | - | 消息渠道来源 (PHONE 时) iOS | Andriod |
| deliveryTime | number | 是 | - | 通知发送时间，格式为毫秒时间戳 |
| actionButtons | Array<> | 否 | - | 通知按钮，最多两个按钮 |
| largeIcon | string | 否 | - | 通知大图标，应用下以 src 为根目录的图片的绝对路径 |
| isUnremovable | boolean | 否 | false | 是否不可清除 |
| badge | number | 否 | - | 数字角标(消息合并情况下) |
| appBundleName | string | 否 | - | 应用包名 ，格式 com.xxx.xxx，该字段的值应由 native 填充 |
| group | string | 否 | - | 消息分组 |
| extraInfo | {[key: string]: any} | 否 | - | 扩展参数 |


](#a-idcontentcontenta)[Content


普通文本通知类型


| 名称 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| title | string | 是 | 普通文本通知标题 |
| text | string | 是 | 普通文本通知内容 |
| additionalText | string | 否 | 可选参数，普通文本通知附加信息 |


图片通知类型


| 名称 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| title | string | 是 | 通知标题 |
| text | string | 是 | 通知内容 |
| additionalText | string | 否 | 可选参数，通知附加信息 |
| briefText | string | 是 | 图片文本通知简略内容 |
| expandedTitle | string | 是 | 图片通知扩展标题 |
| picture | string | 是 | 图片通知的图片，应用下以 src 为根目录的图片的绝对路径 |


](#a-idactionbuttonactionbuttona)[ActionButton


[Action](#Action)


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| label | string | 是 | 按钮标题 |
| action |  | 是 | 点击按钮时触发的动作 |
| extras | {[key: string]: any} | 否 | 扩展参数 |


](#a-idactionactiona)[Action


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| triggerMethod | string | 否 | 定义按钮点击触发的回调函数, 需要在 app.ux 中定义 |
| prameters | {[key: string]: any} | 否 | 自定义参数，供回调函数使用 |


](#%E7%A4%BA%E4%BE%8B)
#### 示例：


```ts
notification.publish({
  request: {
    icon: '/assets/images/icon.png',
    contentType: 1,
    content: {
      title: '收件通知',
      text: '门口xx收件，收件码：XXX',
    },
    channel: 1,
    deliveryTime: Date.now(),
  },
  success: function () {},
  fail: function () {},
  complete: function () {},
})
```


](#notificationremoveobject)
### notification.remove(OBJECT)


清除消息通知


](#%E5%8F%82%E6%95%B0-1)
#### 参数：


[Query](#Query)


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| query |  | 是 | 清除的查询条件，如果条件为空则全部清除 |
| success | Function | 是 | 成功的回调 |
| fail | Function | 是 | 失败的回调 |
| complete | Function | 是 | 执行结束后的回调 |


](#a-idqueryquerya-%E5%8F%82%E6%95%B0)[Query
##### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | number | 否 | 应用通知的唯一 id |
| group | string | 否 | 通知的分组 |


](#%E7%A4%BA%E4%BE%8B-1)
#### 示例：


```ts
notification.remove({
  query: {
    group: 'group1',
  },
  success: function () {},
  fail: function () {},
  complete: function () {},
})
```

---

## package

> 原文路径：/api/system/package/

](#%E5%8C%85%E7%AE%A1%E7%90%86)
# 包管理


](#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E)
## 接口声明


```json
{ "name": "blueos.package.packageManager" }
```


](#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97)
## 导入模块


```ts
import packageManager from '@blueos.package.packageManager' 或 const packageManager = require('@blueos.package.packageManager')
```


](#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89)
## 接口定义


](#hasinstalled)
### hasInstalled()


检测应用是否存在


](#%E5%8F%82%E6%95%B0)
#### 参数


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| package | String | 是 | 应用包名，如:com.vivo.music |
| moduleName | string | type 为 widget 时必填 | 卡片的 moduleName，manifest 中 widget 的 key，如：widgets/widget |
| type | "widget" | "package" | 否 | 默认值为 package，package 表示普通应用，widget 表示卡片 |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |


](#success-%E8%BF%94%E5%9B%9E%E5%80%BC)
#### success 返回值


| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| result | boolean | 应用是否存在 |


](#%E7%A4%BA%E4%BE%8B)
#### 示例


```ts
packageManager.hasInstalled({
  package: 'com.hap.app',
  moduleName: 'widgets/widget1',
  type: 'widget',
  success(data: { result: boolean }) {
    console.log(`handling success: ${data.result}`)
  },
  fail(data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#getcustomdata)
### getCustomData()


读取当前应用在 manifest 中定义的 customData


](#%E5%8F%82%E6%95%B0-9)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |


](#success-%E8%BF%94%E5%9B%9E%E5%80%BC-6)
##### success 返回值：


| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| data | Record<string, string> | 开发者在 manifest 中定义的 customData |


](#%E7%A4%BA%E4%BE%8B-9)
#### 示例：


```ts
packageManager.getCustomData({
  success(response) {
    console.log(`handling success: ${response.data}`)
  },
  fail(data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```

---

## pagestack

> 原文路径：/api/system/pagestack/

](#%E9%A1%B5%E9%9D%A2%E6%A0%88%E7%AE%A1%E7%90%86)
# 页面栈管理


](#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E)
## 接口声明


```json
{ "name": "blueos.app.appmanager.pageStack" }
```


](#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97)
## 导入模块


```ts
 import pagestack from '@blueos.app.appmanager.pageStack' 或 const pagestack = require('@blueos.app.appmanager.pageStack')
```


](#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89)
## 接口定义


](#pagestackgetappstacksobject)
### pagestack.getAppStacks(OBJECT)


获取应用页面栈信息


](#%E5%8F%82%E6%95%B0)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| package | Array|String | 否 | 应用包名。 默认不传获取所有应用的页面栈信息 或 ['com.vivo.app1','com.vivo.app2'] 或 'com.vivo.app1' |
| success | Function | 否 | 接口调用成功的回调函数。 |
| fail | Function | 否 | 接口调用失败的回调函数。 |
| complete | Function | 否 | 接口调用结束的回调函数。 |


](#success-%E8%BF%94%E5%9B%9E%E5%80%BC)
#### success 返回值：


``


| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| appStackPages | Array<Object> | 返回调用方页面栈信息 |


](#%E6%89%80%E6%9C%89%E5%BA%94%E7%94%A8-appstackpages-%E6%95%B0%E6%8D%AE%E6%A0%BC%E5%BC%8F%E7%A4%BA%E4%BE%8B)
#### 所有应用 appStackPages 数据格式示例：


```js
appStackPages：[
 {
   appInfo:{zIndex:1,package:'com.vivo.app'},
   pages:[{pageId:1,path:'pages/index/index'}]
 },
 null,
 null
]
```


](#%E6%A0%B9%E6%8D%AE%E4%BC%A0%E5%85%A5%E5%BA%94%E7%94%A8%E5%8C%85%E5%90%8D%E7%9A%84%E9%A1%BA%E5%BA%8F%E8%BF%94%E5%9B%9E%E9%A1%B5%E9%9D%A2%E6%A0%88%E4%BF%A1%E6%81%AF)
##### 根据传入应用包名的顺序返回页面栈信息


``


| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| appInfo | Object | 应用信息 |
| pages | Array<Object> | 应用页面栈信息 |


某个应用 appInfo 参数详细说明


| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| zIndex | Number | 所属应用的层级 |
| package | String | 应用包名 |


某个应用 pages 参数详细说明


| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| pageId | Number | 页面的 id |
| path | String | 页面的路径 |


](#%E7%A4%BA%E4%BE%8B)
#### 示例：


```ts
pagestack.getAppStacks({
  package: ['com.vivo.app1', 'com.vivo.app2'],
  success: function (data) {
    const [app1, app2] = data.appStackPages
    //获取某个应用页面栈里面的某个页面id
    let paths1 = [app1 && app1.pages[0].path, app1 && app1.pages[1].path]
    let paths2 = [app2 && app2.pages[0].path, app2 && app2.pages[1].path]
    let pageIds1 = [app1 && app1.pages[0].pageId, app1 && app1.pages[1].pageId]
    let pageIds2 = [app2 && app2.pages[0].pageId, app2 && app2.pages[1].pageId]
    let package1 = app1 && app1.appInfo.package
    let package2 = app2 && app2.appInfo.package
    //根据页面id或页面路径关闭指定页面
    pagestack.close({
      pageList: [
        {
          package: package1, //是
          pageIds: pageIds1, //否
          paths: paths1, //否
        },
        {
          package: package2,
          pageIds: pageIds2,
          paths: paths2,
        },
      ],
      success: function () {},
      fail: function (data, code) {
        console.log(`handling fail,code = ${code}`)
      },
      complete: function () {
        console.log(`handling complete`)
      },
    })
    console.log(`handling success, pages = ${pages}`)
  },
  fail: function (data, code) {
    console.log(`handling fail,code = ${code}`)
  },
  complete: function () {
    console.log(`handling complete`)
  },
})
```


](#pagestackcloseobject)
### pagestack.close(OBJECT)


关闭页面


](#%E5%8F%82%E6%95%B0-1)
#### 参数


``


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| pageList | Array<Object> | 是 | 关闭应用的配置项 |
| success | Function | 否 | 接口调用成功的回调函数。 |
| fail | Function | 否 | 接口调用失败的回调函数。 |
| complete | Function | 否 | 接口调用结束的回调函数。 |


](#pagelist-%E5%8F%82%E6%95%B0%E8%AF%A6%E7%BB%86)
#### pageList 参数详细


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| package | String | 是 | 应用包名 |
| pageIds | Array | 否 | 页面 id |
| paths | Array | 否 | 页面路径 |


](#%E7%A4%BA%E4%BE%8B-1)
#### 示例：


```ts
pagestack.close({
  pageList: [
    {
      package: 'com.vivo.app',
      pageIds: [1],
      paths: ['/pages/index/index'],
    },
  ],
  success: function () {},
  fail: function (data, code) {
    console.log(`handling fail,code = ${code}`)
  },
  complete: function () {
    console.log(`handling complete`)
  },
})
```

---

## peaceOverview

> 原文路径：/api/system/peaceOverview/

](#%E6%A6%82%E8%BF%B0)
# 概述


蓝河应用安全模块旨在确保应用程序的数据和用户信息得到有效的保护，以防止未经授权的访问和数据泄漏。


](#%E5%AD%90%E6%A8%A1%E5%9D%97%E4%BB%8B%E7%BB%8D)
## 子模块介绍


| 模块 | 简述 |
| --- | --- |
| 权限管理 | 提供全面的权限控制和管理功能，以确保应用的安全性和隐私保护 |
| 密码算法 | 为应用提供了安全数据加密和解密的功能，以确保用户的敏感信息得到保护 |

---

## permission

> 原文路径：/api/system/permission/

](#%E6%9D%83%E9%99%90%E7%AE%A1%E7%90%86)
# 权限管理


](#%E6%9D%83%E9%99%90%E5%88%97%E8%A1%A8)
## 权限列表


](#watchpermissionlocation)
### watch.permission.LOCATION


**说明：** 位置信息


**模块：** @blueos.hardware.geolocation


- geolocation.getLocation(OBJECT)

- geolocation.subscribe(OBJECT)

- geolocation.unsubscribe()

**错误码：**


-
400 : 拒绝授予权限


-
402: 权限错误（未声明该权限）


](#watchpermissionstep_counter)
### watch.permission.STEP_COUNTER


**说明：** 计步传感器


**模块：** @blueos.hardware.sensor


- sensor.subscribeStepCounter(OBJECT)

**错误码：**


-
400 : 拒绝授予权限


-
402: 权限错误（未声明该权限）


](#watchpermissiondevice_info)
### watch.permission.DEVICE_INFO


**说明：** 设备信息


**模块：** @blueos.hardware.device


-
device.getId(OBJECT)


-
device.getDeviceId(OBJECT)


-
device.getSerial(OBJECT)


**错误码：**


-
400: 拒绝授予权限


-
402: 权限错误（未声明该权限）


](#watchpermissionrecord)
### watch.permission.RECORD


**说明：** 录音


**模块 1：** @blueos.multimedia.record


-
record.start(OBJECT)


-
record.stop(OBJECT)


-
record.release(OBJECT)


**模块 2：** @blueos.media.audio.mediaManager


- media.createAudioRecord()

**错误码：**


-
400: 拒绝授予权限


-
401: 敏感权限不能在后台运行


-
402: 权限错误（未声明该权限）


](#watchpermissionbluetooth)
### watch.permission.BLUETOOTH


**说明：** 允许使用设备蓝牙


**模块 1：** @blueos.communication.bluetooth.bluetooth / @vivo.bluetooth


- bluetooth.getBindState()

- bluetooth.startBind(OBJECT)

- bluetooth.confirmBind(OBJECT)

- bluetooth.cancelBind(OBJECT)

- bluetooth.startDevicesDiscovery(OBJECT)

- bluetooth.onDevicefound = function(data)

- bluetooth.stopDevicesDiscovery(OBJECT)

- bluetooth.getConnectedDevices(OBJECT)

- bluetooth.getPairedDevices(OBJECT)

- bluetooth.createConnection(OBJECT)

- bluetooth.closeConnection (OBJECT)

- bluetooth.pair(OBJECT)

- bluetooth.unpair(OBJECT)

- bluetooth.subscribeBind(OBJECT)

- bluetooth.clearBindData(OBJECT)

- bluetooth.replyPhone(OBJECT)

- bluetooth.onadapterstatechange = function(data)

**模块 2：** @blueos.bluetooth.ble


- createGattClientDevice

- createGattServer

- getConnectedBLEDevices

- getLeMaximumAdvertisingDataLength

- startBLEScan

- stopBLEScan

- subscribeBLEDeviceFind

- unsubscribeBLEDeviceFind

**错误码：**


- 400 : 拒绝授予权限,

- 402: 权限错误（未声明该权限）

](#watchpermissionread_health_data)
### watch.permission.READ_HEALTH_DATA


**说明：** 读取健康数据


**模块：** @blueos.health.healthManager / @vivo.health


- health.getRecentSamples(Object)

- health.subscribeSample(Object)

- health.unsubscribeSample(Object)

- health.getTodayStatistic(Object)

- health.subscribeTodayStatistic(Object)

- health.unsubscribeTodayStatistic(Object)

**错误码：**


- 400 : 拒绝授予权限,

- 402: 权限错误（未声明该权限）

](#watchpermissionplace_call)
### watch.permission.PLACE_CALL


**说明：** 拨打电话


**模块：** @blueos.telephony.call


**错误码：**


- 400 : 拒绝授予权限,

- 402: 权限错误（未声明该权限）

](#watchpermissionsend_messages)
### watch.permission.SEND_MESSAGES


**说明：** 发送短信


**模块：** @blueos.telephony.sms


**错误码：**


- 400 : 拒绝授予权限,

- 402: 权限错误（未声明该权限）

---

## phoneOverview

> 原文路径：/api/system/phoneOverview/

](#%E6%A6%82%E8%BF%B0)
# 概述


蓝河应用的电话能力模块的多功能性使其成为实现通信和互动的强大工具。它为应用提供了多种通信方式，可以通过短信进行信息传递以及通过电话进行语音通话，满足不同用户需求。这对于社交应用、通讯工具、客户服务和多种应用场景都具有广泛的适用性。


](#%E5%AD%90%E6%A8%A1%E5%9D%97%E4%BB%8B%E7%BB%8D)
### 子模块介绍


| 模块 | 简述 |
| --- | --- |
| 短信 | 提供了短信服务集成和短信功能实现支持 |
| 打电话 | 提供了电话通信支持，以满足用户的通话需求 |

---

## prompt

> 原文路径：/api/system/prompt/

](#%E5%BC%B9%E7%AA%97)
# 弹窗


](#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E)
## 接口声明


```json
{ "name": "blueos.window.prompt" }
```


](#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97)
## 导入模块


```ts
import prompt from '@blueos.window.prompt' 或 const prompt = require('@blueos.window.prompt')
```


](#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89)
## 接口定义


](#promptshowtoastobject)
### prompt.showToast(OBJECT)


显示 Toast


](#%E5%8F%82%E6%95%B0)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| message | String | 是 | 要显示的文本 |
| duration | Number | 否 | 0 为短时，1 为长时，默认 0 |


](#%E7%A4%BA%E4%BE%8B)
#### 示例：


```ts
prompt.showToast({
  message: 'message',
})
```

---

## record

> 原文路径：/api/system/record/

](#%E5%BD%95%E9%9F%B3)
# 录音


](#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E)
## 接口声明


```json
{ "name": "blueos.media.audio.audioRecorder" }
```


](#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97)
## 导入模块


```ts
import record from '@blueos.media.audio.audioRecorder' 或 const record = require('@blueos.media.audio.audioRecorder')
```


](#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89)
## 接口定义


](#recordstartobject)
### record.start(OBJECT)


开始录音。默认录制为 PCM 格式，16000 采样率，16bit 位宽，2 通道。


](#%E6%9D%83%E9%99%90%E8%A6%81%E6%B1%82)
#### 权限要求


录音


](#%E5%BC%80%E5%8F%91%E8%80%85%E9%9C%80%E8%A6%81%E5%9C%A8-manifestjson-%E9%87%8C%E9%9D%A2%E9%85%8D%E7%BD%AE%E6%9D%83%E9%99%90)
#### 开发者需要在 manifest.json 里面配置权限：


```json
{
  "permissions": [{ "name": "watch.permission.RECORD" }]
}
```


](#%E5%8F%82%E6%95%B0)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| success | Function | 是 | 成功的回调 |
| fail | Function | 是 | 失败的回调 |
| complete | Function | 是 | 执行结束后的回调 |


](#success-%E8%BF%94%E5%9B%9E%E5%80%BC)
##### success 返回值：


| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| uri | String | 录音文件的存储路径，在应用的缓存目录中 |


](#fail-%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%E4%BB%A3%E7%A0%81)
##### fail 返回错误代码


| 错误码 | 说明 |
| --- | --- |
| 400 | 拒绝授予权限 |
| 401 | 敏感权限不能在后台运行 |
| 402 | 权限错误（未声明该权限） |


](#%E7%A4%BA%E4%BE%8B)
#### 示例：


```ts
record.start({
  success: function (data) {
    console.log(`handling success: ${data.uri}`)
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}, errorMsg=${data}`)
  },
})
```


](#recordstopobject)
### record.stop(OBJECT)


停止录音。


](#%E5%8F%82%E6%95%B0-1)
#### 参数：


无


](#%E7%A4%BA%E4%BE%8B-1)
#### 示例：


```ts
record.stop()
```


](#recordreleaseobject)
### record.release(OBJECT)


释放录音资源。


](#%E5%8F%82%E6%95%B0-2)
#### 参数：


无


](#%E7%A4%BA%E4%BE%8B-2)
#### 示例：


```ts
record.release()
```


](#%E4%BA%8B%E4%BB%B6)
### 事件


| 名称 | 描述 |
| --- | --- |
| Error | 录音发生错误时的回调事件 |
| Start | 录音开始时的回调事件 |
| Stop | 录音停止时的回调事件 |


](#%E7%A4%BA%E4%BE%8B-3)
#### 示例：


```ts
record.onError = function () {
  console.log(`audio error`)
}
```

---

## request

> 原文路径：/api/system/request/

](#%E4%B8%8A%E4%BC%A0%E4%B8%8B%E8%BD%BD)
# 上传下载


](#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E)
## 接口声明


```json
{ "name": "blueos.network.request" }
```


](#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97)
## 导入模块


```ts
import request from '@blueos.network.request' 或 const request = require('@blueos.network.request')
```


](#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89)
## 接口定义


](#requestuploadobject)
### request.upload(OBJECT)


上传文件


**参数：**


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| url | String | 是 | 资源 url |
| header | Object | 否 | 请求的 header，会将其所有属性设置到请求的 header 部分。 |
| method | String | 否 | 默认为 POST，可以是： POST, PUT |
| files | Array | 是 | 需要上传的文件列表，使用 multipart/form-data 方式提交 |
| data | Array | 否 | HTTP 请求中其他额外的 form data |
| success | Function | 否 | 成功返回的回调函数 |
| fail | Function | 否 | 失败的回调函数 |
| complete | Function | 否 | 结束的回调函数（调用成功、失败都会执行） |


**files 参数 ：**


files 参数是一个 file 对象的数组，file 对象的结构如下：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| filename | String | 否 | multipart 提交时，header 中的文件名 |
| name | String | 否 | multipart 提交时，表单的项目名，默认 file |
| uri | String | 是 | 只能为应用沙箱内 internal 目录 |
| type | String | 否 | 文件的 Content-Type 格式，默认会根据 filename 或者 uri 的后缀获取 |


**data 参数 ：**


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | String | 是 | form 元素的名称。 |
| value | String | 是 | form 元素的值。 |


**success 返回值：**


| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| code | Integer | 服务器状态 code |
| data | String | 如果服务器返回的 header 中 type 是 text/*或 application/json、application/javascript、application/xml，值是文本内容，否则是存储的临时文件的 uri 临时文件如果是图片或者视频内容，可以将图片设置到 image 或 video 控件上显示 |
| headers | Object | 服务器 response 的所有 header |


**示例：**


```ts
request.upload({
  url: 'http://www.example.com',
  files: [
    {
      uri: 'internal://xxx/xxx/test',
      name: 'file1',
      filename: 'test.png',
    },
  ],
  data: [
    {
      name: 'param1',
      value: 'value1',
    },
  ],
  success: function (data) {
    console.log('handling success')
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#requestdownloadobject)
### request.download(OBJECT)


下载文件


**参数：**


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| url | String | 是 | 资源 url |
| header | String | 否 | 请求的 header，会将其所有属性设置到请求的 header 部分。 |
| description | String | 否 | 下载描述，会用于通知栏标题。默认为文件名 |
| filename | String | 否 | 在下载文件时，可以提供文件名或文件 URI。当输入文件 URI（internal://xxx）时，可定义下载路径；而若输入文件名，则会默认保存至缓存目录（internal://cache/）。若未提供文件信息，系统将从网络请求或 URL 中获取文件名。 |
| success | Function | 否 | 成功返回的回调函数 |
| fail | Function | 否 | 失败的回调函数 |
| complete | Function | 否 | 结束的回调函数（调用成功、失败都会执行） |


**success 返回值：**


| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| token | String | 下载的 token，根据此 token 获取下载状态 |


**fail 返回错误代码：**


| 错误码 | 说明 |
| --- | --- |
| 302 | 存储空间不足 |


**示例：**


```ts
request.download({
  url: 'http://www.example.com',
  success: function (data) {
    console.log(`handling success${data.token}`)
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#requestabortdownloadobject)
### request.abortDownload(OBJECT)


中断下载任务


**参数：**


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| token | String | 是 | download 接口返回的 token |
| success | Function | 否 | 成功返回的回调函数 |
| fail | Function | 否 | 失败的回调函数 |
| complete | Function | 否 | 结束的回调函数（调用成功、失败都会执行） |


**success 返回值：**


无


**fail 返回错误代码：**


| 错误码 | 说明 |
| --- | --- |
| 1000 | 中断失败 |
| 1001 | 下载任务不存在 |


**示例：**


```ts
request.abortDownload({
  token: '123',
  success: function (data) {
    console.log(`abortDownload success`)
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#requestondownloadcompleteobject)
### request.onDownloadComplete(OBJECT)


监听下载任务


**参数：**


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| token | String | 是 | download 接口返回的 token |
| success | Function | 否 | 成功返回的回调函数 |
| fail | Function | 否 | 失败的回调函数 |
| complete | Function | 否 | 结束的回调函数（调用成功、失败都会执行） |


**success 返回值：**


| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| uri | String | 下载文件的 uri（默认情况下该文件处于应用缓存目录。如果文件类型为图片或者视频且要求用户可以在相册等应用内查看，则需要将该文件转存至公共目录，参考 media 接口中的方法实现即可） |


**fail 返回错误代码：**


| 错误码 | 说明 |
| --- | --- |
| 1000 | 下载失败 |
| 1001 | 下载任务不存在 |


**示例：**


```ts
request.onDownloadComplete({
  token: '123',
  success: function (data) {
    console.log(`handling success${data.uri}`)
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```

---

## router

> 原文路径：/api/system/router/

](#%E9%A1%B5%E9%9D%A2%E8%B7%AF%E7%94%B1)
# 页面路由


](#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E)
## 接口声明


无需声明


](#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97)
## 导入模块


```ts
import router from '@blueos.app.appmanager.router' 或 const router = require('@blueos.app.appmanager.router')
```


](#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89)
## 接口定义


](#routerpushobject)
### router.push(OBJECT)


跳转到应用内的某个页面。


](#%E5%8F%82%E6%95%B0)
#### 参数：


``


``


| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | String | 是 | 要跳转到的 uri，可以是下面的格式：1. 以"/"开头的应用内页面的路径；例：/about。2. 以非"/"开头的应用内页面的名称；例：About。3. 特殊的，如果 uri 的值是"/"，则跳转到 path 为"/"的页，没有则跳转到首页 |
| params | Object | 否 | 跳转时需要传递的数据；跳转到蓝河应用页面时，参数可以在目标页面中通过this.param1的方式使用，param1 为 json 中的参数名，param1 对应的值会统一转换为 String 类型。 |
| transition | Object | 否 | 设置当前跳转的转场动画，优先级高于router.setTransition |


](#transition-%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E)
#### transition 参数说明


| 属性 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| forward | Object | 否 | 路由进入页面时的动效 |
| back | Object | 否 | 路由返回页面时的动效 |


](#forwardback-%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E)
#### forward、back 参数说明


[TransitionAnimation](#transitionanimation)


[TransitionAnimation](#transitionanimation)


| 属性 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| exit |  | 否 | 即将退出的页面动画 |
| enter |  | 否 | 即将出现的页面动画 |


](#%E7%A4%BA%E4%BE%8B)
#### 示例：


-
应用内切换页面


-
path 切换


```ts
router.push({
  uri: '/about',
  params: {
    testId: '1',
  },
})
```


-
name 切换


```ts
// open page by name
router.push({
  uri: 'About',
  params: {
    testId: '1',
  },
})
```


-
打开另一个应用


-
指定 deeplink 打开


```ts
router.push({
  uri: 'hap://app/com.vivo.bind/pages/bindmain?key=value',
})
```


](#routerreplaceobject)
### router.replace(OBJECT)


跳转到应用内的某个页面，当前页面无法返回


](#%E5%8F%82%E6%95%B0-1)
#### 参数：


-
-
-


``


| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | String | 是 | 要跳转到的 uri，可以是下面的格式：以"/"开头的应用内页面的路径；例：/about。以非"/"开头的应用内页面的名称;例：About。特殊的，如果 uri 的值是"/"，则跳转到 path 为"/"的页，没有则跳转到首页 |
| params | Object | 否 | 跳转时需要传递的数据，参数可以在目标页面中通过this.param1的方式使用，param1 为 json 中的参数名，param1 对应的值会统一转换为 String 类型。 |


](#%E7%A4%BA%E4%BE%8B-1)
#### 示例：


```ts
router.replace({
  uri: '/test',
  params: {
    testId: '1',
  },
})
```


](#routerback)
### router.back()


返回上一页面


](#%E7%A4%BA%E4%BE%8B-2)
#### 示例：


```ts
// A页面，open page by name
router.push({
  uri: 'B',
})
// B页面，open page by name
router.push({
  uri: 'C',
})
// C页面，open page by name
router.push({
  uri: 'D',
})
// D页面，open page by name
router.push({
  uri: 'E',
})
// E页面返回至D页面
router.back()
// D页面返回至C页面
router.back()
```


](#routerclear)
### router.clear()


清空所有历史页面记录，仅保留当前页面（即保留栈顶页面）


](#%E5%8F%82%E6%95%B0-2)
#### 参数：


无


](#%E7%A4%BA%E4%BE%8B-3)
#### 示例：


```ts
router.clear()
```


](#routergetstate)
### router.getState()


获取当前页面状态


](#%E8%BF%94%E5%9B%9E%E5%8F%82%E6%95%B0)
#### 返回参数：


| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| index | Number | 当前页面在页面栈中的位置 |
| name | String | 当前页面的名称 |
| path | String | 当前页面的路径 |


](#%E7%A4%BA%E4%BE%8B-4)
#### 示例：


```ts
const page = router.getState()
console.log(`page index = ${page.index}`)
console.log(`page name = ${page.name}`)
console.log(`page path = ${page.path}`)
```


](#routersettransitionobject)
### router.setTransition(OBJECT)


设置应用默认转场动画


](#%E5%8F%82%E6%95%B0-3)
#### 参数：


| 属性 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| forward | Object | 否 | 路由进入页面时的动效 |
| back | Object | 否 | 路由返回页面时的动效 |


](#forwardback-%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E-1)
#### forward、back 参数说明：


[TransitionAnimation](#transitionanimation)


[TransitionAnimation](#transitionanimation)


| 属性 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| exit |  | 否 | 即将退出的页面动画 |
| enter |  | 否 | 即将出现的页面动画 |


](#%E7%A4%BA%E4%BE%8B-5)
#### 示例：


```ts
router.setTransition({
  forward: {
    enter: 'fadeIn',
    exit: 'fadeOut',
  },
  back: {
    enter: 'fadeIn',
    exit: 'fadeOut',
  },
})
```


](#transitionanimation)
### TransitionAnimation


支持别名内置动画


](#%E5%8A%A8%E6%95%88%E5%88%AB%E5%90%8D%E8%A1%A8)
#### 动效别名表


系统提供内置动画，类型为 String。


| 别名 | 适用情况 | 描述 |
| --- | --- | --- |
| slideInLeft | 打开页面 | 左侧滑入 |
| slideOutRight | 关闭页面 | 右侧滑出 |
| fadeIn | 打开页面 | 淡入 |
| fadeOut | 关闭页面 | 淡出 |
| none | 打开/关闭页面 | 无动效，瞬间显示/瞬间隐藏 |
| zoomIn | 打开/关闭页面 | 放大 |
| zoomOut | 打开/关闭页面 | 缩小 |

---

## schedule

> 原文路径：/api/system/schedule/

](#%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1)
# 定时任务


](#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E)
## 接口声明


```json
{ "name": "blueos.app.appmanager.schedule" }
```


](#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97)
## 导入模块


```ts
import schedule from '@blueos.app.appmanager.schedule' 或 const schedule = require('@blueos.app.appmanager.schedule')
```


](#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89)
## 接口定义


](#scheduleschedulejobobject)
### schedule.scheduleJob(OBJECT)


设置定时任务


](#%E5%8F%82%E6%95%B0)
##### 参数：


``````


````````


| 属性 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | Number | 是 | 1硬件时间，2真实时间流逝，前者可以通过修改系统时间触发triggerMethod，后者要通过真实时间的流逝，即使在休眠状态，时间也会被计算 |
| timeout | long | 是 | 若type为1，则为首次执行时间的时间戳，即从 1970/01/01 00:00:00 GMT 到当前时间的毫秒数；若type为2，则为当前时间距离首次执行时间的间隔，单位毫秒。 |
| triggerMethod | String | 是 | app.ux 中定义的方法名，由后台拉起时调用 |
| interval | long | 否 | 周期性执行的间隔，毫秒为单位，不传就不重复执行 |
| params | Object | 否 | 任务参数 |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |


](#%E8%AF%B4%E6%98%8E)
#### 说明


- 首次执行时间可设置为过去的时间

- 若首次执行时间为过去时间，已过期的任务将不会被执行，未过期的任务仍然会被执行

](#%E8%BF%94%E5%9B%9E%E5%80%BC)
#### 返回值：


| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| id | Integer | 底层分配唯一的 ID |


](#fail-%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%E4%BB%A3%E7%A0%81)
##### fail 返回错误代码


| 错误码 | 说明 |
| --- | --- |
| -27 | 定时任务已满 |
| -28 | 已注册 |


](#%E7%A4%BA%E4%BE%8B)
#### 示例：


```ts
// xx.ux
schedule.scheduleJob({
  type: 1,
  timeout: new Date('2050-10-01 09:00:00').getTime(),
  interval: 1000,
  triggerMethod: 'scheduleFunc',
  params: {
    color: 'red',
  },
  success: function (data) {
    console.log(`handling success, scheduleId = ${data.id}`)
  },
  fail: function (data, code) {
    console.log(`handling fail,code = ${code}`)
  },
  complete: function () {
    console.log(`handling complete`)
  },
})

// app.ux
export default {
  scheduleFunc(params) {
    console.log(`background processing color = ${params.color}`)
  },
}
```


](#schedulecancelid-integer)
### schedule.cancel(id: Integer)


取消定时任务


](#%E5%8F%82%E6%95%B0-1)
#### 参数：


| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| id | Integer | 底层分配唯一的 ID |


](#%E8%BF%94%E5%9B%9E%E5%80%BC-1)
#### 返回值：


| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| value | Boolean | true：成功； false：失败； |


](#%E7%A4%BA%E4%BE%8B-1)
#### 示例：


```ts
schedule.cancel(1)
```

---

## screen

> 原文路径：/api/system/screen/

](#%E5%B1%8F%E5%B9%95%E7%AE%A1%E7%90%86)
# 屏幕管理


](#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E)
## 接口声明


```json
{ "name": "blueos.hardware.display.screen" }
```


](#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97)
## 导入模块


```ts
import screen from '@blueos.hardware.display.screen' 或 const screen = require('@blueos.hardware.display.screen')
```


](#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89)
## 接口定义


](#screengetscreenofftime)
### screen.getScreenOffTime()


获取熄屏时间


](#%E5%8F%82%E6%95%B0-1)
##### 参数：


无


](#%E8%BF%94%E5%9B%9E%E5%80%BC-1)
#### 返回值：


| 类型 | 说明 |
| --- | --- |
| Number | 1-999 秒 |


](#%E7%A4%BA%E4%BE%8B-1)
#### 示例：


```ts
screen.getScreenOffTime()
```


](#screengetaodstatus)
### screen.getAodStatus()


获取 AOD 状态


AOD：Always on Display，即不点亮整块屏幕的情况下，控制屏幕局部亮起，将一些重要的信息一直显示在屏幕上。


](#%E5%8F%82%E6%95%B0-3)
#### 参数：


无


](#%E8%BF%94%E5%9B%9E%E5%80%BC-3)
#### 返回值：


| 类型 | 说明 |
| --- | --- |
| Number | 0: AOD 关闭; 1: AOD 打开 |


](#%E7%A4%BA%E4%BE%8B-3)
#### 示例：


```ts
screen.getAodStatus()
```

---

## sensor

> 原文路径：/api/system/sensor/

](#%E4%BC%A0%E6%84%9F%E5%99%A8)
# 传感器


](#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E)
## 接口声明


```json
{ "name": "blueos.hardware.sensor.sensor" }
```


](#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97)
## 导入模块


```ts
import sensor from '@blueos.hardware.sensor.sensor' 或 const sensor = require('@blueos.hardware.sensor.sensor')
```


](#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89)
## 接口定义


](#sensorsubscribeaccelerometerobject)
### sensor.subscribeAccelerometer(OBJECT)


订阅加速度传感器数据，如果多次调用，仅最后一次调用生效


**说明：**


- 加速度是重力加速度和设备自身运动加速度的矢量叠加

- 当设备静止或做匀速直线运动时，返回的加速度值表示重力加速度。

](#%E5%8F%82%E6%95%B0)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| interval | String | 否 | 监听加速度数据回调函数的执行频率，默认 normal |
| callback | Function | 是 | 加速度感应数据变化后会回调此函数。 |
| fail | Function | 否 | 失败回调 |


](#callback-%E8%BF%94%E5%9B%9E%E5%80%BC)
##### callback 返回值：


| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| x | Number | x 轴加速度 |
| y | Number | y 轴加速度 |
| z | Number | z 轴加速度 |


interval 的合法值：


| 值 | 说明 |
| --- | --- |
| game | 适用于更新游戏的回调频率，在 20ms/次 左右 |
| ui | 适用于更新 UI 的回调频率，在 60ms/次 左右 |
| normal | 普通的回调频率，在 200ms/次 左右 |


](#fail-%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%E4%BB%A3%E7%A0%81)
##### fail 返回错误代码


| 错误码 | 说明 |
| --- | --- |
| 1000 | 当前设备不支持重力感应传感器 |


](#%E7%A4%BA%E4%BE%8B)
#### 示例：


```ts
sensor.subscribeAccelerometer({
  callback: function (ret) {
    console.log(`handling callback, x = ${ret.x}, y = ${ret.y}, z = ${ret.z}`)
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#sensorunsubscribeaccelerometer)
### sensor.unsubscribeAccelerometer()


取消监听重力感应数据


](#%E5%8F%82%E6%95%B0-1)
#### 参数：


无


](#%E7%A4%BA%E4%BE%8B-1)
#### 示例：


```ts
sensor.unsubscribeAccelerometer()
```


](#sensorsubscribecompassobject)
### sensor.subscribeCompass(OBJECT)


监听罗盘数据。如果多次调用，仅最后一次调用生效


](#%E5%8F%82%E6%95%B0-2)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Function | 是 | 罗盘数据变化后会回调此函数。 |
| fail | Function | 否 | 失败回调 |


](#callback-%E8%BF%94%E5%9B%9E%E5%80%BC-1)
##### callback 返回值：


| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| direction | Number | 表示设备的 y 轴和地球磁场北极之间的角度，当面朝北，角度为 0；朝南角度为 π；朝东角度 π/2；朝西角度-π/2 |
| accuracy | Number | 精度 |


](#fail-%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%E4%BB%A3%E7%A0%81-1)
##### fail 返回错误代码


| 错误码 | 说明 |
| --- | --- |
| 1000 | 当前设备不支持罗盘传感器 |


| 值 | 说明 |
| --- | --- |
| 3 | 高精度 |
| 2 | 中等精度 |
| 1 | 低精度 |
| -1 | 不可信，传感器失去连接 |
| 0 | 不可信，原因未知 |


](#%E7%A4%BA%E4%BE%8B-2)
#### 示例：


```ts
sensor.subscribeCompass({
  callback: function (ret) {
    console.log(`handling callback, direction = ${ret.direction}`)
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#sensorunsubscribecompass)
### sensor.unsubscribeCompass()


取消监听罗盘数据


](#%E5%8F%82%E6%95%B0-3)
#### 参数：


无


](#%E7%A4%BA%E4%BE%8B-3)
#### 示例：


```ts
sensor.unsubscribeCompass()
```


](#sensorsubscribestepcounterobject)
### sensor.subscribeStepCounter(OBJECT)


监听计步传感器数据。如果多次调用，仅最后一次调用生效。


](#%E5%BC%80%E5%8F%91%E8%80%85%E9%9C%80%E8%A6%81%E5%9C%A8-manifestjson-%E9%87%8C%E9%9D%A2%E9%85%8D%E7%BD%AE%E6%9D%83%E9%99%90)
#### 开发者需要在 manifest.json 里面配置权限：


```json
{
  "permissions": [{ "name": "watch.permission.STEP_COUNTER" }]
}
```


](#%E5%8F%82%E6%95%B0-4)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Function | 是 | 计步传感器数据变化后会回调此函数。 |
| fail | Function | 否 | 失败回调 |


](#callback-%E8%BF%94%E5%9B%9E%E5%80%BC-2)
##### callback 返回值：


| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| steps | Number | 计步传感器当前累计记录的步数。每次手表重启，这个值就会从 0 开始重新计算。 |


](#fail-%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%E4%BB%A3%E7%A0%81-2)
##### fail 返回错误代码


| 错误码 | 说明 |
| --- | --- |
| 1000 | 当前设备不支持计步传感器 |


](#%E7%A4%BA%E4%BE%8B-4)
#### 示例：


```ts
sensor.subscribeStepCounter({
  callback: function (ret) {
    console.log(`handling callback, steps = ${ret.steps}`)
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#sensorunsubscribestepcounter)
### sensor.unsubscribeStepCounter()


取消监听计步传感器数据。


](#%E5%8F%82%E6%95%B0-5)
#### 参数：


无


](#%E7%A4%BA%E4%BE%8B-5)
#### 示例：


```ts
sensor.unsubscribeStepCounter()
```


](#sensorsubscribeonbodystateobject)
### sensor.subscribeOnBodyState(OBJECT)


监听设备佩戴状态传感器数据。如果多次调用，仅最后一次调用生效。


](#%E5%8F%82%E6%95%B0-6)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Function | 是 | 穿戴状态改变后的回调函数。 |
| fail | Function | 否 | 接口调用失败的回调函数。 |


](#callback-%E8%BF%94%E5%9B%9E%E5%80%BC-3)
##### callback 返回值：


| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| value | boolean | 是否已佩戴。 |


](#fail-%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%E4%BB%A3%E7%A0%81-3)
##### fail 返回错误代码


| 错误码 | 说明 |
| --- | --- |
| 1000 | 当前设备不支持佩戴状态传感器 |


```ts
sensor.subscribeOnBodyState({
  callback: function (ret) {
    console.log('get on-body state value:' + ret.value)
  },
  fail: function (data, code) {
    console.log('Subscription failed. Code: ' + code + '; Data: ' + data)
  },
})
```


](#sensorunsubscribeonbodystate)
### sensor.unsubscribeOnBodyState()


取消监听设备佩戴状态。


](#%E5%8F%82%E6%95%B0-7)
#### 参数：


无


](#%E7%A4%BA%E4%BE%8B-6)
#### 示例：


```ts
sensor.unsubscribeOnBodyState()
```


](#sensorgetonbodystateobject)
### sensor.getOnBodyState(OBJECT)


获取设备佩戴状态。


](#%E5%8F%82%E6%95%B0-8)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| success | Function | 否 | 接口调用成功的回调函数。 |
| fail | Function | 否 | 接口调用失败的回调函数。 |
| complete | Function | 否 | 接口调用结束的回调函数。 |


](#callback-%E8%BF%94%E5%9B%9E%E5%80%BC-4)
##### callback 返回值：


| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| value | boolean | 是否已佩戴。 |


](#fail-%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%E4%BB%A3%E7%A0%81-4)
##### fail 返回错误代码


| 错误码 | 说明 |
| --- | --- |
| 1000 | 当前设备不支持佩戴状态传感器 |


```ts
sensor.getOnBodyState({
  success: function (ret) {
    console.log('on body state: ' + ret.value)
  },
  fail: function (data, code) {
    console.log('Subscription failed. Code: ' + code + '; Data: ' + data)
  },
})
```


](#sensorsubscribegyroscopeobject)
### sensor.subscribeGyroscope(OBJECT)


监听陀螺仪传感器数据。如果多次调用，仅最后一次调用生效。


](#%E5%8F%82%E6%95%B0-9)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Function | 是 | 陀螺仪传感器数据改变后的回调函数。 |
| fail | Function | 否 | 接口调用失败的回调函数。 |


](#callback-%E8%BF%94%E5%9B%9E%E5%80%BC-5)
##### callback 返回值：


| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| x | Number | x 轴坐标 |
| y | Number | y 轴坐标 |
| z | Number | z 轴坐标 |


](#fail-%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%E4%BB%A3%E7%A0%81-5)
##### fail 返回错误代码


| 错误码 | 说明 |
| --- | --- |
| 1000 | 当前设备不支持陀螺仪传感器 |


](#%E7%A4%BA%E4%BE%8B-7)
#### 示例：


```ts
sensor.subscribeGyroscope({
  callback: function (ret) {
    console.log(`handling callback, x = ${ret.x}, y = ${ret.y}, z = ${ret.z}`)
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#sensorunsubscribegyroscope)
### sensor.unsubscribeGyroscope()


取消监听陀螺仪数据。


](#%E5%8F%82%E6%95%B0-10)
#### 参数：


无


](#%E7%A4%BA%E4%BE%8B-8)
#### 示例：


```ts
sensor.unsubscribeGyroscope()
```


](#sensorsubscribebarometerobject)
### sensor.subscribeBarometer(OBJECT)


监听气压传感器数据。如果多次调用，仅最后一次调用生效。


](#%E5%8F%82%E6%95%B0-11)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Function | 是 | 气压传感器数据改变后的回调函数。 |
| fail | Function | 否 | 接口调用失败的回调函数。 |


](#callback-%E8%BF%94%E5%9B%9E%E5%80%BC-6)
##### callback 返回值：


| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| pressure | Number | 气压值，单位：帕斯卡。 |


](#fail-%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%E4%BB%A3%E7%A0%81-6)
##### fail 返回错误代码


| 错误码 | 说明 |
| --- | --- |
| 1000 | 当前设备不支持气压传感器 |


```ts
sensor.subscribeBarometer({
  callback: function (ret) {
    console.log('get data value:' + ret.pressure)
  },
  fail: function (data, code) {
    console.log('Subscription failed. Code: ' + code + '; Data: ' + data)
  },
})
```


](#sensorunsubscribebarometer)
### sensor.unsubscribeBarometer()


取消监听气压传感器。


](#%E5%8F%82%E6%95%B0-12)
#### 参数：


无


](#%E7%A4%BA%E4%BE%8B-9)
#### 示例：


```ts
sensor.unsubscribeBarometer()
```


](#sensorsubscribewristliftobject)
### sensor.subscribeWristLift(OBJECT)


监听抬腕。如果多次调用，仅最后一次调用生效。


](#%E5%8F%82%E6%95%B0-13)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Function | 是 | 抬腕后的回调函数。 |
| fail | Function | 否 | 接口调用失败的回调函数。 |


](#callback-%E8%BF%94%E5%9B%9E%E5%80%BC-7)
##### callback 返回值：


无


](#fail-%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%E4%BB%A3%E7%A0%81-7)
##### fail 返回错误代码


| 错误码 | 说明 |
| --- | --- |
| 1000 | 当前设备不支持 |


```ts
sensor.subscribeWristLift({
  callback: function () {
    console.log('wrist lift')
  },
  fail: function (data, code) {
    console.log('Subscription failed. Code: ' + code + '; Data: ' + data)
  },
})
```


](#sensorunsubscribewristlift)
### sensor.unsubscribeWristLift()


取消监听监听抬腕。


](#%E5%8F%82%E6%95%B0-14)
#### 参数：


无


](#%E7%A4%BA%E4%BE%8B-10)
#### 示例：


```ts
sensor.unsubscribeWristLift()
```


](#sensorsubscribecontinuouswristturnobject)
### sensor.subscribeContinuousWristTurn(OBJECT)


监听连续转腕。如果多次调用，仅最后一次调用生效。


](#%E5%8F%82%E6%95%B0-15)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Function | 是 | 连续转腕变后的回调函数。 |
| fail | Function | 否 | 接口调用失败的回调函数。 |


](#callback-%E8%BF%94%E5%9B%9E%E5%80%BC-8)
##### callback 返回值：


无


](#fail-%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%E4%BB%A3%E7%A0%81-8)
##### fail 返回错误代码


| 错误码 | 说明 |
| --- | --- |
| 1000 | 当前设备不支持 |


```ts
sensor.subscribeContinuousWristTurn({
  callback: function () {
    console.log('continuous wrist turn')
  },
  fail: function (data, code) {
    console.log('Subscription failed. Code: ' + code + '; Data: ' + data)
  },
})
```


](#sensorunsubscribecontinuouswristturn)
### sensor.unsubscribeContinuousWristTurn()


取消监听连续转腕。


](#%E5%8F%82%E6%95%B0-16)
#### 参数：


无


](#%E7%A4%BA%E4%BE%8B-11)
#### 示例：


```ts
sensor.unsubscribeContinuousWristTurn()
```

---

## settings

> 原文路径：/api/system/settings/

](#%E7%B3%BB%E7%BB%9F%E8%AE%BE%E7%BD%AE)
# 系统设置


](#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E)
## 接口声明


```json
{ "name": "blueos.service.settings" }
```


](#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97)
## 导入模块


```ts
import settings from '@blueos.service.settings'
```


](#%E5%9C%A8%E5%B7%A5%E7%A8%8B%E9%87%8C%E9%9D%A2%E7%9A%84-manifest-%E6%96%87%E4%BB%B6%E4%B8%AD%E9%85%8D%E7%BD%AE%E5%A6%82%E4%B8%8B%E5%86%85%E5%AE%B9)
## 在工程里面的 manifest 文件中配置如下内容


](#%E7%94%B3%E8%AF%B7%E6%9D%83%E9%99%90)
### 申请权限


```json
{
  "permissions": [{ "name": "watch.permission.SETTINGS" }]
}
```


](#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89)
## 接口定义


](#settingsgetvalueobject)
### settings.getValue(OBJECT)


获取设置


](#%E5%8F%82%E6%95%B0-1)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | String | 是 | 相应设置的字段名 |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |


](#success-%E8%BF%94%E5%9B%9E%E5%80%BC-1)
##### success 返回值：


| 参数值 | 类型 | 说明 |
| --- | --- | --- |
| key | String | 相应设置的字段名 |
| value | String/Object/Array 等 JS 原生对象 | 相应设置的值 |


](#%E7%A4%BA%E4%BE%8B-1)
#### 示例：


```ts
settings.getValue({
  key: 'brightness',
  success: function (data) {
    console.log(data.key + ': ' + data.value)
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#settingsgetvaluesyncstring)
### settings.getValueSync(String)


同步获取设置


](#%E5%8F%82%E6%95%B0-2)
#### 参数


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | String | 是 | 相应设置的字段名 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC)
#### 返回值


| 参数值 | 类型 | 说明 |
| --- | --- | --- |
| value | String/Object/Array 等 JS 原生对象 | 相应设置的值 |


](#%E7%A4%BA%E4%BE%8B-2)
#### 示例


```ts
const value = settings.getValueSync('brightness')
```


](#%E8%AE%BE%E7%BD%AE%E7%9B%B8%E5%85%B3%E7%9A%84%E5%AD%97%E6%AE%B5)
#### 设置相关的字段


](#brightness-%E5%B1%8F%E5%B9%95%E4%BA%AE%E5%BA%A6)
##### brightness 屏幕亮度


| 字段名 | 类型 | 功能 | 说明 |
| --- | --- | --- | --- |
| brightness | Number | 系统屏幕亮度值设置 | 取值范围 0-255 |


```js
{
  brightness: 60
}
```


](#wearhand-%E4%BD%A9%E6%88%B4%E6%89%8B)
##### wearHand 佩戴手


````


| 字段名 | 类型 | 功能 | 说明 |
| --- | --- | --- | --- |
| wearHand | String | 佩戴手设置 | L: 左手，R: 右手 |


```js
{
  wearHand: 'R'
}
```


](#raisewristswitch-%E6%8A%AC%E8%85%95%E7%9B%91%E5%90%AC%E5%BC%80%E5%85%B3)
##### raiseWristSwitch 抬腕监听开关


注意: 此处的监听仅代表用户感知的监听设置，和真实的监听无关


````


| 字段名 | 类型 | 功能 | 说明 |
| --- | --- | --- | --- |
| raiseWristSwitch | Boolean | 抬腕监听开关设置 | true: 开启抬腕监听，false: 关闭抬腕监听 |


```js
{
  raiseWristSwitch: true
}
```


](#raisewristsensitivity-%E6%8A%AC%E8%85%95%E7%9B%91%E5%90%AC%E7%81%B5%E6%95%8F%E5%BA%A6)
##### raiseWristSensitivity 抬腕监听灵敏度


注：灵敏度改变会影响 sensor 接口监听的灵敏度


````


| 字段名 | 类型 | 功能 | 说明 |
| --- | --- | --- | --- |
| raiseWristSensitivity | String | 抬腕监听灵敏度设置 | H: 高灵敏度，M: 标准灵敏度 |


```js
{
  raiseWristSensitivity: `H`
}
```


](#silentmode-%E9%9D%99%E9%9F%B3%E6%A8%A1%E5%BC%8F)
##### silentMode 静音模式


````


| 字段名 | 类型 | 功能 | 说明 |
| --- | --- | --- | --- |
| silentMode | Boolean | 静音模式设置 | true: 开启静音模式，false: 关闭静音模式 |


```js
{
  silentMode: false
}
```


](#flipscreen-%E5%B1%8F%E5%B9%95%E7%BF%BB%E8%BD%AC)
##### flipScreen 屏幕翻转


````


| 字段名 | 类型 | 功能 | 说明 |
| --- | --- | --- | --- |
| flipScreen | Boolean | 屏幕翻转设置 | true: 翻转到正向，false: 翻转到反向 |


```js
{
  flipScreen: false
}
```

---

## short-message-service

> 原文路径：/api/system/short-message-service/

](#%E7%9F%AD%E4%BF%A1)
# 短信


在蓝河系统中，我们提供了 Deeplink 链接来使您可以快速打开短信服务所对应的页面。


我们已经为短信服务功能提供了 Deeplink 链接，具体链接为 `hap://app/com.vivo.mms/pages/entry`。


该 Deeplink 链接的页面拉取是通过 Router 调用来实现的，您可以方便地打开短信服务页面并进行相关操作。


](#%E7%A4%BA%E4%BE%8B)
## 示例


以下是一个演示示例，为您展示如何通过调用 Deeplink 链接来实现轻松发送短信的操作过程：


```html
<template>
  <text @click="sendMessage">发短信</text>
</template>
<script>
  import router from '@blueos.app.appmanager.router'
  export default {
    sendMessage () {
      router.push({
        uri: `hap://app/com.vivo.mms/pages/entry`,
      })
    }
  }
</script>
```

---

## simManager

> 原文路径：/api/system/simManager/

](#sim-%E5%8D%A1%E7%AE%A1%E7%90%86)
# sim 卡管理


](#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E)
## 接口声明


```json
{ "name": "blueos.telephony.simManager" }
```


](#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97)
## 导入模块


```ts
import simManager from '@blueos.telephony.simManager' 或 const simManager = require('@blueos.telephony.simManager')
```


](#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89)
## 接口定义


](#simmanagergetsimoperatorsobject)
### simManager.getSimOperators(OBJECT)


获取 Sim 卡的运营商信息


](#%E6%9D%83%E9%99%90%E8%A6%81%E6%B1%82)
#### 权限要求


电话权限


](#%E5%8F%82%E6%95%B0)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |


](#success-%E8%BF%94%E5%9B%9E%E5%80%BC)
##### success 返回值：


| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| operators | Array | SIM 卡列表信息 |
| size | Number | Sim 卡数量 |


](#fail-%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%E4%BB%A3%E7%A0%81)
##### fail 返回错误代码：


| 错误码 | 说明 |
| --- | --- |
| 201 | 用户拒绝，获取电话权限失败 |
| 207 | 用户拒绝并勾选不再询问复选框 |
| 1001 | 未插入 sim 卡 |
| 1002 | 获取运营商信息失败 |


](#sim-%E5%8D%A1%E5%88%97%E8%A1%A8%E9%A1%B9%E5%8F%82%E6%95%B0)
##### SIM 卡列表项参数：


[其余 MCC+MNC](https://www.mcc-mnc.com/ )


| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| operator | String | 返回 Sim 卡的运营商信息运营商信息说明：此处统一返回 MCC+MNC，即移动国家代码 + 移动网络代码；中国移动：46000，46002，46004，46007；中国联通：46001，46006，46009；中国电信：46003，46005，46011； |
| slotIndex | Number | 卡槽序号 |


](#%E7%A4%BA%E4%BE%8B)
#### 示例：


```ts
simManager.getSimOperators({
  success(data) {
    console.log(`size: ${data.size}`)
    for (const i in data.operators) {
      console.log(`operator: ${data.operators[i].operator},
        slotIndex:${data.operators[i].slotIndex},
        isDefaultDataOperator:${data.operators[i].isDefaultDataOperator},`)
    }
  },
  fail(data, code) {
    console.log(`handling fail, code = ${code}, errorMsg=${data}`)
  },
})
```

---

## softwareOverview

> 原文路径：/api/system/softwareOverview/

](#%E6%A6%82%E8%BF%B0)
# 概述


蓝河应用的基础软件能力为应用提供了基础的软件功能支持，包括系统设置、输入法、解压缩、解包和序列化等，可以帮助开发者更加高效、快速地进行软件开发和计算机操作


](#%E5%AD%90%E6%A8%A1%E5%9D%97%E4%BB%8B%E7%BB%8D)
## 子模块介绍


| 模块 | 简述 |
| --- | --- |
| 系统设置 | 提供获取系统设置能力 |
| 输入法 | 为输入法应用提供向 input 组件写入数据能力 |
| 解压缩 | 提供解压本地文件能力 |
| 解包 | 提供解包能力 |
| 序列化 | 提供序列化数据，反序列化数据能力 |

---

## systemapp

> 原文路径：/api/system/systemapp/

](#%E5%BA%94%E7%94%A8%E4%B8%8A%E4%B8%8B%E6%96%87)
# 应用上下文


](#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E)
## 接口声明


无需声明


](#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97)
## 导入模块


```ts
import app from '@blueos.app.context'
// 或 const app = require('@blueos.app.context')
```


](#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89)
## 接口定义


](#appgetinfo)
### app.getInfo()


获取当前应用信息


](#%E5%8F%82%E6%95%B0)
#### 参数：


无


](#%E8%BF%94%E5%9B%9E%E5%80%BC)
#### 返回值


| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| packageName | String | 应用包名 |
| icon | String | 应用图标路径 |
| name | String | 应用名称 |
| versionName | String | 应用版本名称 |
| versionCode | Integer | 应用版本号 |


](#%E7%A4%BA%E4%BE%8B)
#### 示例：


```ts
console.log(JSON.stringify(app.getInfo()))
```


```json
// console 值打印
{
  // 应用包名
  "packageName": "com.example.demo",
  // 应用名称
  "name": "demo",
  // 应用版本名称
  "versionName": "1.0.0",
  // 应用版本号
  "versionCode": 1,
  // 应用图片
  "icon": "/Common/logo.png"
}
```


](#apploadlibraryname-string)
### app.loadLibrary(name: string)


加载静态库，需要与厂商合作


](#%E5%8F%82%E6%95%B0-1)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | String | 是 | lib 库名称 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC-1)
#### 返回值


静态库加载结果


](#%E7%A4%BA%E4%BE%8B-1)
#### 示例：


```ts
import app from '@blueos.app.context'
const testApp = app.loadLibrary('test_app')

testApp.on('js_task_callback', () => {
  // callback action
})
```


](#appterminate)
### app.terminate()


退出当前应用


](#%E5%8F%82%E6%95%B0-3)
#### 参数:


无


](#%E8%BF%94%E5%9B%9E%E5%80%BC-2)
#### 返回值：


无


](#%E7%A4%BA%E4%BE%8B-3)
#### 示例：


```ts
app.terminate()
```

---

## tar

> 原文路径：/api/system/tar/

](#%E8%A7%A3%E5%8C%85)
# 解包


](#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E)
## 接口声明


```json
{ "name": "blueos.util.tar" }
```


](#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97)
## 导入模块


```ts
import tar from '@blueos.util.tar' 或 const fastlz = require('@blueos.util.tar')
```


](#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89)
## 接口定义


](#%E6%B3%A8%E8%93%9D%E6%B2%B3%E5%BA%94%E7%94%A8%E5%B9%B3%E5%8F%B0%E5%8F%82%E6%95%B0-%E8%A1%A8%E7%A4%BA%E5%BC%80%E5%8F%91%E8%93%9D%E6%B2%B3%E5%BA%94%E7%94%A8%E5%BF%85%E5%A1%AB%E5%8F%82%E6%95%B0)
### 注：“蓝河应用平台参数” 表示开发蓝河应用必填参数


](#taruntarobject)
### tar.untar(OBJECT)


解包


](#%E5%8F%82%E6%95%B0)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| srcUri | String | 是 | 源文件的 uri，不能是 tmp 类型的 uri |
| dstUri | String | 是 | 目标目录的 uri，不能是应用资源路径和 tmp 类型的 uri |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |


](#%E5%A4%87%E6%B3%A8)
##### 备注：


srcUri 和 dstUri 路径采用的是 file_feature 协议，由于是私有接口，是可以跨包读取的。internal:// 原本的路径解析为: /sdcard/internal/rpk 包名，但在解压缩去掉了包名的限制，实际得到的路径是： /sdcard/internal/


](#fail-%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%E4%BB%A3%E7%A0%81)
##### fail 返回错误代码：


| 错误码 | 说明 |
| --- | --- |
| 202 | 参数错误 |
| 300 | I/O 错误 |


](#%E7%A4%BA%E4%BE%8B)
#### 示例：


```ts
tar.untar({
  srcUri: 'internal://cache/test.tar',
  dstUri: 'interval://files/untar/',
  success: function () {
    console.log(`handling success`)
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```

---

## telephony-service

> 原文路径：/api/system/telephony-service/

](#%E7%94%B5%E8%AF%9D)
# 电话


在蓝河系统中，您可以通过 Deeplink 链接来打开电话服务相应页面。


我们为电话服务提供了 Deeplink 链接，具体链接为 `hap://app/com.vivo.call/pages/callMenu`。


并且 Deeplink 的页面拉取是通过 Router 调用来实现的，方便您快速地进行操作。


](#%E7%A4%BA%E4%BE%8B)
## 示例


以下是一个示例，展示了如何使用 Deeplink 链接调用电话功能，简单易懂、易于操作：


```html
<template>
  <text @click="call">打电话</text>
</template>
<script>
  import router from '@blueos.app.appmanager.router'
  export default {
    call () {
      router.push({
        uri: `hap://app/com.vivo.call/pages/callMenu`,
      })
    }
  }
</script>
```

---

## vibrator

> 原文路径：/api/system/vibrator/

](#%E6%8C%AF%E5%8A%A8)
# 振动


](#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E)
## 接口声明


```json
{ "name": "blueos.hardware.vibrator.vibrator" }
```


](#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97)
## 导入模块


```ts
import vibrator from '@blueos.hardware.vibrator.vibrator' 或 const vibrator = require('@blueos.hardware.vibrator.vibrator')
```


](#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89)
## 接口定义


](#vibratorvibrateobject)
### vibrator.vibrate(OBJECT)


触发振动


](#%E5%8F%82%E6%95%B0)
#### 参数：


``````


| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | String | 否 | 振动模式，long表示长振动，short表示短振动。默认为long |


](#%E7%A4%BA%E4%BE%8B)
#### 示例：


```ts
vibrator.vibrate({
  mode: 'long',
})
```


](#vibratorstartobject)
### vibrator.start(OBJECT)


开始振动


](#%E5%8F%82%E6%95%B0-1)
##### 参数：


| 属性 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| priority | Number | 是 | 振动优先级 0-8，数字越小优先级越高 |
| duration | Number | 是 | 振动持续时间(单位 ms) |
| interval | Number | 是 | 振动间隔时间(单位 ms) |
| count | Number | 是 | 振动次数 |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |


](#success-%E8%BF%94%E5%9B%9E%E5%80%BC)
#### success 返回值：


| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| id | Number | 底层分配唯一的 ID 并返回给调用者 |


](#%E7%A4%BA%E4%BE%8B-1)
#### 示例：


```ts
vibrator.start({
  priority: 1,
  duration: 1000,
  interval: 1000,
  count: 10,
  success: function (data) {
    console.log(`handling success, id = ${data.id}`)
  },
  fail: function () {
    console.log(`handling fail`)
  },
  complete: function () {
    console.log(`handling complete`)
  },
})
```


](#vibratorstopnumber)
### vibrator.stop(Number)


停止振动


](#%E5%8F%82%E6%95%B0-3)
#### 参数：


| 类型 | 必填 | 说明 |
| --- | --- | --- |
| Number | 是 | 底层分配唯一的 ID |


](#%E8%BF%94%E5%9B%9E%E5%80%BC)
#### 返回值：


| 类型 | 说明 |
| --- | --- |
| Boolean | true:成功; false:失败; |


](#%E7%A4%BA%E4%BE%8B-3)
#### 示例：


```ts
vibrator.stop(1)
```


](#vibratorgetsystemdefaultmode)
### vibrator.getSystemDefaultMode()


获取系统默认振动模式


](#%E5%8F%82%E6%95%B0-4)
#### 参数：


无


](#%E8%BF%94%E5%9B%9E%E5%80%BC-1)
#### 返回值：


| 类型 | 说明 |
| --- | --- |
| Number | 0:关闭振动; 1:标准振动; 2:加强振动 |


](#%E7%A4%BA%E4%BE%8B-4)
#### 示例：


```ts
vibrator.getSystemDefaultMode()
```

---

## websocket

> 原文路径：/api/system/websocket/

](#websocket)
# websocket


](#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E)
## 接口声明


```json
{ "name": "blueos.network.webSocket" }
```


](#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97)
## 导入模块


```ts
import websocketfactory from '@blueos.network.webSocket' 或 const websocketfactory = require('@blueos.network.webSocket')
```


](#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89)
## 接口定义


](#%E6%96%B9%E6%B3%95)
### 方法


](#websocketfactorycreateobject)
### websocketfactory.create(OBJECT)


创建 websocket 实例


](#%E5%8F%82%E6%95%B0)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| url | String | 是 | 请求 url， 必须是 wss 或 ws 协议 |
| header | Object | 否 | 请求头，header 中不能设置 Referer |
| protocols | StringArray | 否 | 子协议组 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC)
#### 返回值：


``
[WebSocket](#websocket)


| 类型 | 描述 |
| --- | --- |
| WebSocket | 返回一个 WebSocket 对象，请参考对象 |


](#%E7%A4%BA%E4%BE%8B)
#### 示例：


```ts
ws = websocketfactory.create({
  url: 'ws://test:8088',
  header: {
    'content-type': 'application/json',
  },
  protocols: ['protocol'],
})
```


---

](#span-idwebsocket-websocket-span)
## WebSocket


WebSocket 对象提供了用于创建和管理 WebSocket 连接，以及可以通过该连接发送和接收数据的 API。


](#%E6%96%B9%E6%B3%95-1)
## 方法


](#websocketsendobject)
### WebSocket.send(OBJECT)


向服务器发送数据


](#%E5%8F%82%E6%95%B0-1)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| data | String | ArrayBuffer | 是 | 发送的消息 |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |


](#%E7%A4%BA%E4%BE%8B-1)
#### 示例：


```ts
ws.send({
  data: 'send message',
  success: function () {
    console.log(`send success`)
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#websocketcloseobject)
### WebSocket.close(OBJECT)


关闭当前连接


](#%E5%8F%82%E6%95%B0-2)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| code | Number | 否 | 关闭链接的状态号 ，默认 1000 |
| reason | String | 否 | 关闭的原因 |
| success | Function | 否 | 接口调用成功的回调函数 |
| fail | Function | 否 | 接口调用失败的回调函数 |


](#%E7%A4%BA%E4%BE%8B-2)
#### 示例：


```ts
ws.close({
  code: 1000,
  reason: 'close as normal',
  success: function () {
    console.log(`close success`)
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#%E5%B1%9E%E6%80%A7)
## 属性


](#websocketonopen)
### WebSocket.onOpen


用于指定连接成功后的回调函数


](#%E5%8F%82%E6%95%B0-3)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Function | 否 | 打开连接回调 |


](#%E7%A4%BA%E4%BE%8B-3)
#### 示例：


```ts
ws.onOpen = function () {
  console.log(`connect open`)
}
```


](#websocketonmessage)
### WebSocket.onMessage


用于指定当从服务器接受到信息时的回调函数


](#%E5%8F%82%E6%95%B0-4)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Function | 否 | 服务器返回消息事件回调 |


](#callback-%E5%8F%82%E6%95%B0)
#### callback 参数：


| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| data | String | ArrayBuffer | 监听器接收到的消息，消息类型与发送类型一致 |


](#%E7%A4%BA%E4%BE%8B-4)
#### 示例：


```ts
ws.onMessage = function (data) {
  console.log(`message is ${data.data}`)
}
```


](#websocketonclose)
### WebSocket.onClose


用于指定连接关闭后的回调函数


](#%E5%8F%82%E6%95%B0-5)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Function | 否 | 关闭连接事件回调。 |


](#callback-%E5%8F%82%E6%95%B0-1)
#### callback 参数：


| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| code | Number | 服务器返回关闭的状态码。 |
| reason | String | 服务器返回的关闭原因。 |
| wasClean | Boolean | 是否正常关闭。 |


](#%E7%A4%BA%E4%BE%8B-5)
#### 示例：


```ts
ws.onClose = function (data) {
  console.log(
    `onclose:data.code = ${data.code}, data.reason = ${data.reason}, data.wasClean = ${data.wasClean}`
  )
}
```


](#websocketonerror)
### WebSocket.onError


用于指定连接失败后的回调函数


](#%E5%8F%82%E6%95%B0-6)
#### 参数：


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Function | 否 | 连接错误回调 |


](#callback-%E5%8F%82%E6%95%B0-2)
#### callback 参数：


| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| data | String | 监听器接收到的消息。 |


](#%E7%A4%BA%E4%BE%8B-6)
#### 示例：


```ts
ws.onError = function (data) {
  console.log(`onerror data.data = ${data.data}`)
}
```

---

## widget-manager

> 原文路径：/api/system/widget-manager/

](#widgetmanager)
# widgetManager


widgetProvider 通过 widgetManager 来刷新 卡片 UI 页面中的 uiData 数据，widgetManager 也可以用于主应用刷新 uidata 的数据。


详细参考 [widgetProvider 开发](/reference/widget/widget-provider/)


**接口声明**


```json
{ "name": "blueos.app.widgetManager" }
```


](#updateuidata)
## updateUiData


更新卡片 ui 数据


**入参**


| 属性 | 类型 | 是否必填 | 描述 |
| --- | --- | --- | --- |
| instanceId | number | string | 是 | widget 实例 id |
| uiData | Record<string, unknown> | 否 | 传递的数据 |


**返回值：** 无


**示例：**


```typescript
import widgetManager from '@blueos.app.widgetManager'

export default {
  onWidgetEvent(instanceId, event) {
    console.log(`instanceId=${instanceId}, event=${JSON.stringify(event)}`)
    widgetManager.updateUiData({
      instanceId: instanceId,
      uiData: { cityName: `Shenzhen ${event.title}` },
    })
  },
}
```

---

## widget-provider

> 原文路径：/api/system/widget-provider/

](#widgetprovider)
# widgetProvider


widgetProvider 是轻卡的核心组成部分，它负责执行轻卡页面的逻辑，并与轻卡页面进行数据传递。


详细参考 [widgetProvider 开发](/reference/widget/widget-provider/)


](#onwidgetcreate)
## onWidgetCreate


当卡片在入口被创建时触发


**参数：**


[WidgetInfo](#widgetinfo)


| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| id | string | 卡片实例 id |
| widgetInfo |  | 卡片信息 |


**示例：**


```ts
export default {
  onWidgetCreate(id, widgetInfo) {
    console.log(`卡片被创建`)
  },
}
```


](#onwidgetupdate)
## onWidgetUpdate


定时或定点条件满足时，卡片请求提供方刷新卡片


**参数：**


[WidgetInfo](#widgetinfo)


| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| id | string | 卡片实例 id |
| widgetInfo |  | 卡片信息 |


**示例：**


```ts
export default {
  onWidgetUpdate(id, widgetInfo) {
    console.log(`卡片需要更新`)
  },
}
```


](#onwidgetevent)
## onWidgetEvent


当卡片页面触发 Action 的 message 事件时被调用


**参数：**


[WidgetEventInfo](#widgeteventinfo)


| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| id | string | 卡片实例 id |
| event |  | 事件信息 |


**示例：**


```ts
export default {
  onWidgetEvent(id, event) {
    console.log(`收到 message 事件`)
  },
}
```


](#onconfigurationchanged)
## onConfigurationChanged


监听系统语言改变


| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| event | Object | 应用配置发生变化的事件 |


event 参数：


| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| type | String | 应用配置发生变化的原因类型，支持的 type 值如下所示 |


event 中`type` 现在支持的参数值如下：


| 参数值 | 描述 |
| --- | --- |
| locale | 应用语言、地区变化而发生改变 |


**示例：**


```ts
export default {
  onConfigurationChanged(id, evt) {
    if (event && event.type && event.type === 'locale') {
      console.log('locale or language changed!')
    }
  },
}
```


](#onwidgetdestroy)
## onWidgetDestroy


销毁卡片时触发，提供方可以做对应的释放


**参数：**


| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| id | string | 卡片实例 id |


**示例：**


```ts
export default {
  onWidgetDestroy(id) {
    console.log(`卡片销毁`)
  },
}
```


](#%E5%8F%82%E6%95%B0%E7%B1%BB%E5%9E%8B%E8%AF%B4%E6%98%8E)
## 参数类型说明


](#widgetinfo)
### WidgetInfo


widgetProvider 生命周期入参，描述卡片信息。


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| instanceId | string | 是 | 卡片运行时实例的 id。 |
| package | string | 是 | 卡片包名，可用于校验卡片。 |
| path | string | 是 | 卡片路径，可用于校验卡片。 |
| sha256 | string | 否 | 卡片数字签名，可用于校验卡片是否合法。 |
| host | string | 是 | 卡片入口的包名，用于提供方做不同策略。 |
| scene | string | 否 | 卡片展示方场景标识 |
| version | number | 否 | 卡片版本 |
| extra | Record<string, any> | 否 | 如果卡片入口加载卡片 Uri 有携带额外数据，此时会携带额外的数据到提供方。 |


](#widgeteventinfo)
### WidgetEventInfo


widgetProvider 生命周期入参，描述卡片页面的 Action 事件信息。


[Event](#event)


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| instanceId | string | 是 | 卡片运行时实例的 id。 |
| package | string | 是 | 卡片包名，可用于校验卡片。 |
| path | string | 是 | 卡片路径，可用于校验卡片。 |
| sha256 | string | 否 | 卡片数字签名，可用于校验卡片是否合法。 |
| host | string | 是 | 卡片入口的包名，用于提供方做不同策略。 |
| scene | string | 否 | 卡片展示方场景标识 |
| version | number | 否 | 卡片版本。 |
| extra | Record<string, any> | 否 | 如果卡片入口加载卡片 Uri 有携带额外数据，此时会携带额外的数据到提供方。 |
| event |  | 是 | event 事件对象。 |


](#event)
### Event


描述 Action 事件参数


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| action | string | 是 | action 名，对应 data 中 actions 里的某个响应动作 |
| params | Record<string, any> | 否 | 开发者在事件响应动作设置的参数 |

---

# API-设备互联

## brief-introduction

> 原文路径：/api/connect/brief-introduction/

](#%E8%AF%B4%E6%98%8E)
# 说明


针对手机及vivo智能终端设备互联，向第三方应用开发者提供高层次的、简单易用的 API。

第三方应用开发者无需关心手机及vivo智能终端设备的互联细节，通过 API 提供的能力可以简单地实现设备状态查询订阅、设备信息查询、数据传输等操作。

vivo智能终端设备SDK及穿戴业务Kit分别为手机及vivo智能终端设备提供API。

手机侧应用基于 Java 开发，vivo智能终端设备侧应用基于 JS/Native 开发。


 
   
     
     
     
     
   
 
 
   
     
     
     
     
   
   
     
     
     
     
   
   
     
     
     
   
 

| 设备 | 语言开发 | SDK | 说明 |
| --- | --- | --- | --- |
| 手机 | Java | vivo智能终端设备SDK | 基于Java语言的手机侧应用开发接口，可以实现与vivo智能终端设备侧应用的数据交互、获取vivo智能终端设备状态及信息等。 |
| vivo智能终端设备 | JS | 穿戴业务Kit | 基于JS语言的vivo智能终端设备侧应用开发接口，可以实现与手机侧应用的数据交互、获取手机设备状态及信息等。 |
| Native | 穿戴业务Kit | 基于C++语言的vivo智能终端设备侧应用开发接口，将在后续版本提供。 |

---

## privacy-policy

> 原文路径：/api/connect/development-guidance/privacy-policy/

](#vivo-%E6%99%BA%E8%83%BD%E7%BB%88%E7%AB%AF%E8%AE%BE%E5%A4%87-sdk-%E9%9A%90%E7%A7%81%E6%94%BF%E7%AD%96)
# vivo 智能终端设备 SDK 隐私政策


](#%E7%94%9F%E6%95%88%E6%97%A5%E6%9C%9F2023-%E5%B9%B4-11-%E6%9C%88-1-%E6%97%A5)
### 生效日期：2023 年 11 月 1 日


](#%E5%BC%95%E8%A8%80)
## 引言


本隐私政策适用于维沃移动通信有限公司及其关联方（以下简称“我们”或“vivo”，注册地址：广东省东莞市长安镇维沃路 1 号）提供的 vivo 智能终端设备 SDK 产品及服务（以下统称“SDK 产品”）。本文档要向开发者及其终端用户(“终端用户”)说明，为了实现产品的相关功能，本服务将如何处理终端用户的个人信息。


请开发者及终端用户务必认真阅读本规则。如您是开发者，请您确认充分了解并同意本规则后再集成 SDK 产品，如果您不同意本规则的任何内容，应立即停止接入及使用 SDK 产品；同时，您应仅在获得终端用户的同意后集成 SDK 产品并处理终端用户的个人信息。为了保障您的 App 合法合规，请 App 开发者务必将 SDK 产品升级到最新版本。


](#%E7%89%B9%E5%88%AB%E8%AF%B4%E6%98%8E)
### 特别说明：


如您是开发者，您应当：


- 遵守法律、法规收集、使用和处理终端用户的个人信息，包括但不限于制定和公布有关个人信息保护的隐私政策等;


- 在集成 SDK 产品前，告知终端用户 SDK 产品处理终端用户个人信息的情况，并依法获得终端用户同意;


- 在获得终端用户的同意前，除非法律法规另有规定，不应收集终端用户的个人信息；


- 向终端用户提供易于操作且满足法律法规要求的用户权利实现机制，并告知终端用户如何查阅、复制、修改、删除个人信息，撤回同意，以及限制个人信息处理、转移个人信息、获取个人信息副本和注销账号；


- 遵守本规则的要求。
 如开发者和终端用户对本规则内容有任何疑问、意见或建议的，可随时通过本规则第六条提供的方式与我们联系。


](#%E4%B8%80%E6%88%91%E4%BB%AC%E5%B0%86%E5%A6%82%E4%BD%95%E6%94%B6%E9%9B%86%E5%92%8C%E4%BD%BF%E7%94%A8%E4%BF%A1%E6%81%AF)
## 一、我们将如何收集和使用信息


](#%E4%B8%80%E4%B8%BA%E5%AE%9E%E7%8E%B0-sdk-%E4%BA%A7%E5%93%81%E5%8A%9F%E8%83%BD%E6%89%80%E9%9C%80%E6%94%B6%E9%9B%86%E7%9A%84%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF)
### （一）为实现 SDK 产品功能所需收集的个人信息：


开发者通过集成 vivo 智能终端设备 SDK，使用 vivo 智能终端设备 SDK 提供的能力，实现第三方 APP 同 vivo 运动健康之间进行数据通信和交互，也可实现 vivo 智能终端设备上的第三方 APP 同 vivo 智能终端设备的业务数据通信功能。为实现 SDK 产品的相应功能所必须，我们将向终端用户或开发者收集终端用户在使用与 SDK 产品相关的功能时产生的如下个人信息：


基于不同的设备和系统及系统版本，以及开发者在集成、使用我们 SDK 产品时决定的权限，收集的设备信息会有所不同，因此开发者应对实际收集的个人信息向用户进行说明。


vivo 智能终端设备 SDK 主要用于提供给第三方 APP 集成，他提供了一种简便的和运动健康之间建立数据连接通道的方式，用于三方 APP 和 vivo 运动健康之间进行数据通信和交互，间接实现了三方 APP 与 vivo 手表设备的业务数据通信功能。


 
   
     
     
     
     
   
 
 
   
     
     
     
     
   
 

| 个人信息类型 | 个人信息清单 | 使用目的 | 存留期 |
| --- | --- | --- | --- |
| 设备信息 | 设备名称、电量、连接状态、可用空间、mac地址、存储空间、充电状态 | 用于接入SDK的第三方app查询或订阅穿戴设备状态、提供开放能力。 | 不涉及，该数据不存储至本地，不上云 |


如果您是开发者，在您接入、使用本服务前，我们要求您在隐私政策中向终端用户告知我们 SDK 的名称、SDK 提供方名称、收集个人信息类型、使用目的、隐私政策链接，并获取用户的同意或取得其他合法性基础。您可以参考如下方式提供条款内容：


](#%E7%AC%AC%E4%B8%89%E6%96%B9-sdk-%E5%90%8D%E7%A7%B0vivo-%E6%99%BA%E8%83%BD%E7%BB%88%E7%AB%AF%E8%AE%BE%E5%A4%87-sdk)
#### 第三方 SDK 名称：vivo 智能终端设备 SDK


](#%E7%AC%AC%E4%B8%89%E6%96%B9%E5%90%8D%E7%A7%B0%E7%BB%B4%E6%B2%83%E7%A7%BB%E5%8A%A8%E9%80%9A%E4%BF%A1%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8)
#### 第三方名称：维沃移动通信有限公司


](#%E6%94%B6%E9%9B%86%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF%E7%B1%BB%E5%9E%8B%E8%AE%BE%E5%A4%87%E4%BF%A1%E6%81%AF%E8%AE%BE%E5%A4%87%E5%90%8D%E7%A7%B0%E7%94%B5%E9%87%8F%E8%BF%9E%E6%8E%A5%E7%8A%B6%E6%80%81%E5%8F%AF%E7%94%A8%E7%A9%BA%E9%97%B4mac-%E5%9C%B0%E5%9D%80%E5%AD%98%E5%82%A8%E7%A9%BA%E9%97%B4%E5%85%85%E7%94%B5%E7%8A%B6%E6%80%81)
#### 收集个人信息类型：设备信息（设备名称、电量、连接状态、可用空间、mac 地址、存储空间、充电状态）


](#%E4%BD%BF%E7%94%A8%E7%9B%AE%E7%9A%84%E7%94%A8%E4%BA%8E%E6%8E%A5%E5%85%A5-sdk-%E7%9A%84%E7%AC%AC%E4%B8%89%E6%96%B9-app-%E6%9F%A5%E8%AF%A2%E6%88%96%E8%AE%A2%E9%98%85%E7%A9%BF%E6%88%B4%E8%AE%BE%E5%A4%87%E7%8A%B6%E6%80%81%E6%8F%90%E4%BE%9B%E5%BC%80%E6%94%BE%E8%83%BD%E5%8A%9Bbr)
#### 使用目的：用于接入 SDK 的第三方 app 查询或订阅穿戴设备状态，提供开放能力。


](#%E9%9A%90%E7%A7%81%E6%94%BF%E7%AD%96%E9%93%BE%E6%8E%A5sdk-%E9%9A%90%E7%A7%81%E6%94%BF%E7%AD%96br)
#### 隐私政策链接：[SDK 隐私政策](/api/connect/development-guidance/privacy-policy/)


](#%E4%BA%8C%E6%A0%B9%E6%8D%AE%E6%B3%95%E5%BE%8B%E6%B3%95%E8%A7%84%E7%9A%84%E8%A7%84%E5%AE%9A%E4%BB%A5%E4%B8%8B%E6%98%AF%E5%BE%81%E5%BE%97%E7%94%A8%E6%88%B7%E5%90%8C%E6%84%8F%E7%9A%84%E4%BE%8B%E5%A4%96%E6%83%85%E5%BD%A2)
### （二）根据法律法规的规定，以下是征得用户同意的例外情形：


](#1%E4%B8%8E%E5%9B%BD%E5%AE%B6%E5%AE%89%E5%85%A8%E5%9B%BD%E9%98%B2%E5%AE%89%E5%85%A8%E6%9C%89%E5%85%B3%E7%9A%84)
#### （1）与国家安全、国防安全有关的；


](#2%E4%B8%8E%E5%85%AC%E5%85%B1%E5%AE%89%E5%85%A8%E5%85%AC%E5%85%B1%E5%8D%AB%E7%94%9F%E9%87%8D%E5%A4%A7%E5%85%AC%E5%85%B1%E5%88%A9%E7%9B%8A%E6%9C%89%E5%85%B3%E7%9A%84)
#### （2）与公共安全、公共卫生、重大公共利益有关的；


](#3%E4%B8%8E%E7%8A%AF%E7%BD%AA%E4%BE%A6%E6%9F%A5%E8%B5%B7%E8%AF%89%E5%AE%A1%E5%88%A4%E5%92%8C%E5%88%A4%E5%86%B3%E6%89%A7%E8%A1%8C%E7%AD%89%E6%9C%89%E5%85%B3%E7%9A%84)
#### （3）与犯罪侦查、起诉、审判和判决执行等有关的；


](#4%E5%87%BA%E4%BA%8E%E7%BB%B4%E6%8A%A4%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF%E4%B8%BB%E4%BD%93%E6%88%96%E5%85%B6%E4%BB%96%E4%B8%AA%E4%BA%BA%E7%9A%84%E7%94%9F%E5%91%BD%E8%B4%A2%E4%BA%A7%E7%AD%89%E9%87%8D%E5%A4%A7%E5%90%88%E6%B3%95%E6%9D%83%E7%9B%8A%E4%BD%86%E5%8F%88%E5%BE%88%E9%9A%BE%E5%BE%97%E5%88%B0%E6%9C%AC%E4%BA%BA%E5%90%8C%E6%84%8F%E7%9A%84)
#### （4）出于维护个人信息主体或其他个人的生命、财产等重大合法权益但又很难得到本人同意的；


](#5%E6%89%80%E6%94%B6%E9%9B%86%E7%9A%84%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF%E6%98%AF%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF%E4%B8%BB%E4%BD%93%E8%87%AA%E8%A1%8C%E5%90%91%E7%A4%BE%E4%BC%9A%E5%85%AC%E4%BC%97%E5%85%AC%E5%BC%80%E7%9A%84br)
#### （5）所收集的个人信息是个人信息主体自行向社会公众公开的；


](#6%E4%BB%8E%E5%90%88%E6%B3%95%E5%85%AC%E5%BC%80%E6%8A%AB%E9%9C%B2%E7%9A%84%E4%BF%A1%E6%81%AF%E4%B8%AD%E6%94%B6%E9%9B%86%E7%9A%84%E6%82%A8%E7%9A%84%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF%E7%9A%84%E5%A6%82%E5%90%88%E6%B3%95%E7%9A%84%E6%96%B0%E9%97%BB%E6%8A%A5%E9%81%93%E6%94%BF%E5%BA%9C%E4%BF%A1%E6%81%AF%E5%85%AC%E5%BC%80%E7%AD%89%E6%B8%A0%E9%81%93)
#### （6）从合法公开披露的信息中收集的您的个人信息的，如合法的新闻报道、政府信息公开等渠道；


](#7%E6%A0%B9%E6%8D%AE%E6%82%A8%E7%9A%84%E8%A6%81%E6%B1%82%E7%AD%BE%E8%AE%A2%E5%90%88%E5%90%8C%E6%89%80%E5%BF%85%E9%9C%80%E7%9A%84)
#### （7）根据您的要求签订合同所必需的；


](#8%E7%94%A8%E4%BA%8E%E7%BB%B4%E6%8A%A4%E6%89%80%E6%8F%90%E4%BE%9B%E7%9A%84%E4%BA%A7%E5%93%81%E4%B8%8E%E6%88%96%E6%9C%8D%E5%8A%A1%E7%9A%84%E5%AE%89%E5%85%A8%E7%A8%B3%E5%AE%9A%E8%BF%90%E8%A1%8C%E6%89%80%E5%BF%85%E9%9C%80%E7%9A%84%E4%BE%8B%E5%A6%82%E5%8F%91%E7%8E%B0%E5%A4%84%E7%BD%AE%E4%BA%A7%E5%93%81%E4%B8%8E%E6%88%96%E6%9C%8D%E5%8A%A1%E7%9A%84%E6%95%85%E9%9A%9C)
#### （8）用于维护所提供的产品与/或服务的安全稳定运行所必需的，例如发现、处置产品与/或服务的故障；


](#9%E4%B8%BA%E5%90%88%E6%B3%95%E7%9A%84%E6%96%B0%E9%97%BB%E6%8A%A5%E9%81%93%E6%89%80%E5%BF%85%E9%9C%80%E7%9A%84)
#### （9）为合法的新闻报道所必需的；


](#10%E5%AD%A6%E6%9C%AF%E7%A0%94%E7%A9%B6%E6%9C%BA%E6%9E%84%E5%9F%BA%E4%BA%8E%E5%85%AC%E5%85%B1%E5%88%A9%E7%9B%8A%E5%BC%80%E5%B1%95%E7%BB%9F%E8%AE%A1%E6%88%96%E5%AD%A6%E6%9C%AF%E7%A0%94%E7%A9%B6%E6%89%80%E5%BF%85%E8%A6%81%E4%B8%94%E5%AF%B9%E5%A4%96%E6%8F%90%E4%BE%9B%E5%AD%A6%E6%9C%AF%E7%A0%94%E7%A9%B6%E6%88%96%E6%8F%8F%E8%BF%B0%E7%9A%84%E7%BB%93%E6%9E%9C%E6%97%B6%E5%AF%B9%E7%BB%93%E6%9E%9C%E4%B8%AD%E6%89%80%E5%8C%85%E5%90%AB%E7%9A%84%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF%E8%BF%9B%E8%A1%8C%E5%8E%BB%E6%A0%87%E8%AF%86%E5%8C%96%E5%A4%84%E7%90%86%E7%9A%84)
#### （10）学术研究机构基于公共利益开展统计或学术研究所必要，且对外提供学术研究或描述的结果时，对结果中所包含的个人信息进行去标识化处理的。


](#%E4%BA%8C%E4%BF%A1%E6%81%AF%E7%9A%84%E5%AD%98%E5%82%A8)
## 二、信息的存储


](#%E4%B8%80%E5%AD%98%E6%94%BE%E5%9C%B0%E5%9F%9F)
### （一）存放地域


我们遵守法律法规的规定，将在中华人民共和国境内收集和产生的个人信息存储在境内。


](#%E4%BA%8C%E5%AD%98%E5%82%A8%E6%9C%9F%E9%99%90)
### （二）存储期限


除非法律法规另有要求，我们仅在实现本声明所述目的所必需的时间内保留您的个人信息，超期会进行删除或进行匿名化处理。


](#%E4%B8%89%E6%95%B0%E6%8D%AE%E5%AE%89%E5%85%A8%E4%BF%9D%E6%8A%A4)
## 三、数据安全保护


为保护网络的完整性，vivo 采取了符合业界标准的安全防护措施以保护个人信息，防止数据遭到未经授权的访问、使用、修改、公开披露。我们将采取一切合理可行的措施保护个人信息，包括但不限于：


](#a-%E8%BF%9B%E8%A1%8C%E5%AE%89%E5%85%A8%E6%A3%80%E6%9F%A5%E4%BD%BF%E7%94%A8%E5%8A%A0%E5%AF%86%E5%B7%A5%E5%85%B7%E5%92%8C%E8%BD%AF%E4%BB%B6%E4%BB%A5%E5%8F%8A%E5%85%B6%E4%BB%96%E5%90%88%E7%90%86%E7%9A%84%E5%AE%89%E5%85%A8%E6%8E%AA%E6%96%BD%E5%92%8C%E7%A8%8B%E5%BA%8Fbr)
### a) 进行安全检查、使用加密工具和软件、以及其他合理的安全措施和程序；


](#b-%E9%87%87%E5%8F%96%E5%8A%A0%E5%AF%86%E6%8A%80%E6%9C%AF%E7%A1%AE%E4%BF%9D%E4%BF%A1%E6%81%AF%E4%BC%A0%E8%BE%93%E4%B8%8E%E5%AD%98%E5%82%A8%E8%BF%87%E7%A8%8B%E7%9A%84%E5%AE%89%E5%85%A8%E6%80%A7%E5%92%8C%E4%BF%9D%E5%AF%86%E6%80%A7%E5%B9%B6%E5%BB%BA%E7%AB%8B%E5%AE%89%E5%85%A8%E4%BA%8B%E4%BB%B6%E5%93%8D%E5%BA%94%E5%9B%A2%E9%98%9F%E5%8F%8A%E6%97%B6%E8%BF%9B%E8%A1%8C%E9%97%AE%E9%A2%98%E7%9A%84%E5%AE%9A%E4%BD%8D%E5%88%86%E6%9E%90%E5%A4%84%E7%90%86br)
### b) 采取加密技术确保信息传输与存储过程的安全性和保密性，并建立安全事件响应团队，及时进行问题的定位、分析、处理；


](#c-%E9%99%90%E5%AE%9A%E6%8E%88%E6%9D%83%E8%AE%BF%E9%97%AE%E4%BA%BA%E5%91%98%E5%B9%B6%E9%87%87%E5%8F%96%E5%88%86%E7%BA%A7%E6%9D%83%E9%99%90%E7%AE%A1%E7%90%86%E6%8E%AA%E6%96%BD%E4%BB%85%E7%BD%91%E7%BB%9C%E7%AE%A1%E7%90%86%E5%91%98%E5%92%8C%E5%9F%BA%E4%BA%8E%E4%B8%9A%E5%8A%A1%E5%BF%85%E8%A6%81%E9%9C%80%E4%BA%86%E8%A7%A3%E8%B5%84%E6%96%99%E7%9A%84%E4%BA%BA%E5%91%98%E6%89%8D%E8%83%BD%E4%BB%8E%E5%86%85%E9%83%A8%E8%AE%BF%E9%97%AE%E7%94%A8%E6%88%B7%E7%9A%84%E9%9D%9E%E5%85%AC%E5%BC%80%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AFbr)
### c) 限定授权访问人员，并采取分级权限管理措施，仅网络管理员和基于业务必要需了解资料的人员才能从内部访问用户的非公开个人信息。


如果 vivo 知悉 vivo IT 数据网络安全受到危害或由于外部行为（包括但不限于外部安全攻击）使用户的非公开信息披露给不相关第三方，尽管本隐私政策中有其他规定，vivo 仍将采取其认为适当的合理措施，包括但不限于内部调查、上报并通知执法机构、以及配合执法机构工作等；如果 vivo 发现用户提供给 vivo IT 数据网络的个人信息以非本隐私声明允许的方式进行了非法披露，vivo 将尽快采取合法合理措施通知相关用户，告知被披露的信息以及 vivo IT 数据网络对该信息的知悉程度，最大程度采取补救措施。


](#%E5%9B%9B%E6%9C%AA%E6%88%90%E5%B9%B4%E4%BA%BA%E4%BF%9D%E6%8A%A4)
## 四、未成年人保护


本 SDK 产品主要面向成年人。
 若您是开发者，如果终端用户是未满 14 周岁的未成年人（“儿童”），您应当向儿童的父母或其他监护人告知本规则，并在征得儿童的父母或其他监护人同意的前提下处理儿童个人信息。如果我们发现开发者未征得儿童监护人同意向我们提供儿童个人信息的，我们将会采取措施尽快删除。
 若您是儿童监护人，当您对您所监护儿童个人信息保护有相关疑问或权利请求时，您可以联系开发者，或通过本规则第六条提供的方式与我们联系。


](#%E4%BA%94%E5%8F%98%E6%9B%B4)
## 五、变更


我们可能适时修订本规则内容。如果某一功能或服务未在前述说明中且需要收集终端用户的信息，我们将在变更生效前，通过网站公告等方式进行提示。如您是开发者，当更新后的本规则对处理终端用户的个人信息情况有重大变化的，您应当适时更新隐私政策，并以弹框形式通知终端用户并且获得其同意，如果终端用户不同意接受本规则，请停止集成 SDK 产品。


](#%E5%85%AD%E5%A6%82%E4%BD%95%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC)
## 六、如何联系我们


如果您有任何疑问、意见或建议，请拨打我们的客服电话 95033 或发送电子邮件至[iotpartners@vivo.com](mailto:iotpartners@vivo.com)的方式与我们联系。

---

## rpc-sdk-guidance

> 原文路径：/api/connect/development-guidance/rpc-sdk-guidance/

](#vivo-%E6%99%BA%E8%83%BD%E7%BB%88%E7%AB%AF%E8%AE%BE%E5%A4%87-sdk)
# vivo 智能终端设备 SDK


](#%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87%E7%94%B3%E8%AF%B7-appid)
## 开发准备，申请 appid


](#1-%E7%94%B3%E8%AF%B7-app-%E5%BC%80%E5%8F%91%E8%80%85%E6%8E%A5%E5%85%A5%E6%8E%A5%E5%85%A5%E5%9C%B0%E5%9D%80a-hrefhttpsdevvivocomcn-target_blankvivo-%E5%BC%80%E6%94%BE%E5%B9%B3%E5%8F%B0a%E5%B7%B2%E6%9C%89%E8%B4%A6%E5%8F%B7%E5%88%99%E6%97%A0%E9%9C%80%E7%94%B3%E8%AF%B7%E7%9B%B4%E6%8E%A5%E7%99%BB%E5%BD%95)
#### 1. 申请 app 开发者接入，接入地址：[vivo 开放平台](https://dev.vivo.com.cn/)
#### ，已有账号则无需申请，直接登录


](#2-%E7%94%B3%E8%AF%B7%E8%B4%A6%E5%8F%B7%E5%90%8E%E6%B3%A8%E5%86%8C%E5%AF%B9%E5%BA%94%E7%9A%84-app%E5%8F%96%E5%88%B0-appid)
#### 2. 申请账号后，注册对应的 app，取到 appid


](#sdk-%E9%9B%86%E6%88%90)
## SDK 集成


```ts
implementation files('libs/device-rpc.aar')
```


](#%E5%88%9D%E5%A7%8B%E5%8C%96)
## 初始化


```ts
 // 在 app 恰当的时候初始化，如果需要拉起并发送到通知，建议放 application 里面。
 DeviceRpcManager.getInstance().init(getApplicationContext(), String encryStr,InitCallBack initCallBack);
```


](#encrystr%E6%99%BA%E8%83%BD%E7%BB%88%E7%AB%AFsdk%E5%AF%86%E9%92%A5%E7%94%B3%E8%AF%B7%E8%B7%AF%E5%BE%84)
#### encryStr（智能终端SDK密钥）申请路径:


登录vivo开放平台 --> 进入管理中心 --> 进入应用列表 --> 点击对应应用名称，进入应用详情页 --> 点击“智能终端SDK密钥”图标--> 点击弹窗的“申请”，会自动生成密钥 --> 点击眼睛按钮即可查看完整密钥；


![encryStr](/2f3e7d87a5e361155e09387c32f7dcf3/encystr1.png)
![encryStr](/975679a9b38d8428058b42ec2fc74e76/encystr2.png)
![encryStr](/29bd67bb41c2528cffdba2adf5b97e84/encystr3.png)
![encryStr](/566532c30340a8527dc1d2fcc88691e4/encystr4.png)
](#initcallback%E9%89%B4%E6%9D%83%E7%BB%93%E6%9E%9C%E5%9B%9E%E8%B0%83)
#### InitCallBack:鉴权结果回调


](#manifest-%E4%B8%AD%E6%B7%BB%E5%8A%A0-meta-%E6%95%B0%E6%8D%AE%E5%9B%BA%E5%AE%9A%E6%A0%BC%E5%BC%8F%E5%92%8C%E5%90%8D%E7%A7%B0%E7%94%A8%E4%BA%8E%E8%AE%BE%E5%A4%87%E6%9F%A5%E8%AF%A2-app-%E5%8A%9F%E8%83%BD%E4%BF%A1%E6%81%AF)
#### manifest 中添加 meta 数据，固定格式和名称，用于设备查询 app 功能信息


```html
<meta-data android:name="health.device.manager.version" android:value="1" />
<meta-data android:name="appid" android:value="开发平台申请的appid" />
```


](#%E4%B8%89%E6%96%B9-app-%E5%8D%8F%E8%AE%AE%E5%8F%82%E8%80%83%E8%AE%BE%E8%AE%A1)
## 三方 APP 协议参考设计


三方 App 除了获取“运动健康功能版本号”，“读取设备对应功能版本号”外，通常需要使用接口<给设备发送 Request 数据>跟手机交换数据，为了区分不同 Request 数据类型，建议使用如下 Json 格式


```json
{
     "type":"type_xxxx"
     "data":{}
}
```


](#%E5%AF%B9%E5%BA%94%E7%9A%84-response-%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E5%BB%BA%E8%AE%AE%E4%BD%BF%E7%94%A8%E5%A6%82%E4%B8%8B-json-%E6%A0%BC%E5%BC%8F)
#### 对应的 Response 数据类型，建议使用如下 Json 格式：


```json
{
     "code"：0
     "result":{}
}
```


](#%E5%85%B6%E4%B8%AD)
#### 其中


-
type 指定数据类型，不同的业务对应不同的类型，用于对端区分数据，作相应处理


-
data 数据，不同业务有不同的数据


-
code 对端的业务执行结果


-
result 结果依赖不同的 type 而不同


](#sdk-%E4%B8%8B%E8%BD%BD)
## SDK 下载


[vivo 智能终端设备 SDK](https://h5.vivo.com.cn/health/rpcsdk/new/device-rpc.aar)


](#api-%E5%8F%82%E8%80%83)
## API 参考


[手机侧](/api/connect/mobile-side/)


](#%E9%9A%90%E7%A7%81%E6%94%BF%E7%AD%96)
## 隐私政策


[隐私政策](/api/connect/development-guidance/privacy-policy/)

---

## watch-guidance

> 原文路径：/api/connect/development-guidance/watch-guidance/

](#%E7%A9%BF%E6%88%B4%E4%B8%9A%E5%8A%A1-kit)
# 穿戴业务 Kit


](#%E4%BB%A3%E7%A0%81%E7%A4%BA%E4%BE%8B)
## 代码示例


](#%E5%88%9B%E5%BB%BA%E8%BF%9E%E6%8E%A5%E5%AE%9E%E4%BE%8B)
#### 创建连接实例


```ts
 create() {
    console.log(`click here!`)
    connect = interconnect.instance({ package: 'com.vivo.health.deviceRpcSdk.demo', fingerprint: '5de8782b74c1e2e064786428c229ab68884e7563704d0642466bf5f51dfa1330' })
    this.create_text = "成功创建"
    this.onopen()
    this.onclose()
    this.onerror()
    this.onmessage()
    timer = setTimeout(() => {
      console.log(`等待 3s 执行send`)
      this.send()
    }, 3 * 1000)

  },
```


](#%E6%95%B0%E6%8D%AE%E5%8F%91%E9%80%81)
#### 数据发送


```ts
  send() {
    console.log('send--------')
    const self = this;
    if (connect == null) {
      console.log('interconnect feature not instanced!!')
      return
    }
    connect.send({
      data: {
        type: 'getIsLogin'
      },
      success: function () {
        self.send_status = '是'
        console.log(`handling success`)
      },
      fail: function (data, code) {
        self.send_status = '否'
        console.log(`handling fail, code = ${code}`)
      }
    })
  },
```


](#%E6%95%B0%E6%8D%AE%E6%8E%A5%E6%94%B6)
#### 数据接收


```ts
  onmessage() {
    console.log('onmessage--------')
    // 监听手机侧应用的数据
    const self = this
    if (connect == null) {
      console.log('interconnect feature not instanced!!')
      return
    }
    connect.onmessage = function (data) {
      if (data && data.isFileType) {
        console.log('filename is', data.fileName)
      } else {
        console.log('msg is', data)
      }
      self.onmessage_data = data
    }

  },
```


](#%E6%96%AD%E5%BC%80%E5%8F%8A%E9%94%80%E6%AF%81)
#### 断开及销毁


```ts
  close() {
    const self = this
    if (connect == null) {
      console.log('interconnect feature not instanced!!')
      return
    }
    connect.close({

      success() {
        console.log(`close success`)
        self.close_data = 'success!'
      },
      fail(data, code) {
        console.log(`handling fail, code = ${code}`)
        self.close_data = 'fail!'
      },
    })
  },

  onDestroy() {
    if(timer != null){
      clearTimeout(timer) // 清除定时函数
    }
    this.close()
  },
```


](#api-%E5%8F%82%E8%80%83)
## API 参考


[vivo 智能终端设备侧](/api/connect/interconnect/)

---

## interconnect

> 原文路径：/api/connect/interconnect/

](#vivo-%E6%99%BA%E8%83%BD%E7%BB%88%E7%AB%AF%E8%AE%BE%E5%A4%87%E4%BE%A7)
# vivo 智能终端设备侧


用于和搭配使用的手机 app 进行通信，收发手机 app 数据。


](#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E)
## 接口声明


```json
{ "name": "blueos.bluexlink.connectionManager" }
```


](#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97)
## 导入模块


```ts
import interconnect from '@blueos.bluexlink.connectionManager' 或 const interconnect = require('@blueos.bluexlink.connectionManager')
```


](#interconnectgetpeerdevicestatusobject)
## interconnect.getPeerDeviceStatus(OBJECT)


获取 vivo 智能终端设备和手机的连接状态


**参数：**


| 属性 | 必填 | 类型 | 说明 |
| --- | --- | --- | --- |
| success | 否 | Function | 成功回调 |
| fail | 否 | Function | 失败回调 |


**success 返回值:**


| 属性 | 类型 | 说明 |
| --- | --- | --- |
| status | number | 0:未连接。1:已连接 |


**示例：**


```ts
interconnect.getPeerDeviceStatus({
  success: function (data) {
    if (data.status == 1) {
      console.log('已连接')
    } else if (data.status == 0) {
      console.log('未连接')
    }
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#interconnectinstanceobject)
## interconnect.instance(OBJECT)


创建连接实例


**参数：**


[证书指纹的获取方法](/api/system/generatecertificatethumbprint/)


| 属性 | 必填 | 类型 | 说明 |
| --- | --- | --- | --- |
| package | 是 | string | 手机 APP 包名 |
| fingerprint | 否 | string | 手机 APP 的证书指纹信息。 |


**返回值：**


[Connect](#connect)


**示例：**


```ts
const connnect = interconnect.instance({ package: 'com.xx.xx', fingerprint: 'xxxxx' })
```


](#connect)
## connect


](#getreadystateobject)
### getReadyState(OBJECT)


获取 App 连接状态


**参数：**


| 属性 | 必填 | 类型 | 说明 |
| --- | --- | --- | --- |
| success | 否 | Function | 成功回调 |
| fail | 否 | Function | 失败回调 |


**success 返回值:**


| 属性 | 类型 | 说明 |
| --- | --- | --- |
| status | number | 1:连接成功。2:连接断开 |


**fail 返回值:**


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| data | string | 错误信息 |
| code | number | 错误码，1006 表示 连接断开 |


**示例：**


```ts
connect.getReadyState({
  success: function (data) {
    if (data.status == 1) {
      console.log('连接成功')
    } else if (data.status == 2) {
      console.log('连接失败')
    }
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#getpeerdeviceclientversionobject)
### getPeerDeviceClientVersion(OBJECT)


查询 App 版本状态


**参数：**


| 属性 | 必填 | 类型 | 说明 |
| --- | --- | --- | --- |
| success | 否 | Function | 成功回调 |
| fail | 否 | Function | 失败回调 |


**success 返回值:**


| 属性 | 类型 | 说明 |
| --- | --- | --- |
| version | number | 手机应用版本号，有则正常返回，-1:未安装 |


**fail 返回值:**


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| data | string | 错误信息 |
| code | number | 错误码，1006 表示 连接断开 |


**示例：**


```ts
connect.getPeerDeviceClientVersion({
  success: function (data) {
    console.log(`handling success, version = ${data.version}`)
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#sendobject)
### send(OBJECT)


发送数据到手机 App 端


**参数：**


| 属性 | 必填 | 类型 | 说明 |
| --- | --- | --- | --- |
| data | 否 | Object | 发送的数据 |
| success | 否 | Function | 成功回调 |
| fail | 否 | Function | 失败回调 |


**fail 返回值:**


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| data | string | 错误信息 |
| code | number | 错误码，1006 表示 连接断开 |


**示例：**


```ts
connect.send({
  data: { name: 'zangsan' },
  success: function () {
    console.log('handling success')
  },
  fail: function (data, code) {
    console.log('handling fail')
  },
})
```


](#sendfileobject)
### sendFile(OBJECT)


发送文件到手机 App 端


**参数：**


| 属性 | 必填 | 类型 | 说明 |
| --- | --- | --- | --- |
| uri | 否 | String | 目录的 uri |
| success | 否 | Function | 成功回调 |
| fail | 否 | Function | 失败回调 |


**fail 返回值:**


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| data | string | 错误信息 |
| code | number | 错误码，1006 表示 连接断开 |


**示例：**


```ts
connect.sendFile({
  uri: 'internal://files/work/demo',
  success: function () {
    console.log('handling success')
  },
  fail: function (data, code) {
    console.log('handling fail')
  },
})
```


](#closeobject)
### close(OBJECT)


关闭当前连接


**参数：**


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| success | Function | 否 | 接口调用成功的回调函数 |
| fail | Function | 否 | 接口调用失败的回调函数 |


**示例：**


```ts
connect.close({
  success() {
    console.log(`close success`)
  },
  fail(data, code) {
    console.log(`handling fail, code = ${code}`)
  },
})
```


](#onopen)
### onOpen


用于指定连接打开时的回调


**示例：**


```ts
connect.onOpen = function () {
  console.log('connection opened')
}
```


](#onclose)
### onClose


用于指定连接关闭时回调


**示例：**


```ts
connect.onClose = function () {
  console.log('connection closed')
}
```


](#onmessage)
### onMessage


用于指定接收手机 App 端数据的回调


**回调返回:**


| 属性 | 类型 | 说明 |
| --- | --- | --- |
| isFileType | boolean | 是否是文件 |
| fileUri | string | 文件存储路径 |
| fileName | string | 文件名称 |


**示例：**


```ts
// 监听手机app的数据
connect.onMessage = function (data) {
  if (data && data.isFileType) {
    console.log('filename is', data.fileName)
  } else {
    console.log('msg is', data.data)
  }
}
```


](#onerror)
### onError


用于指定连接失败后的回调


**回调返回:**


| 属性 | 类型 | 说明 |
| --- | --- | --- |
| data | string | 错误信息 |
| code | number | 错误码, 1000：未知错误， 1001：手机 APP 未安装， 1002：手机三方 APP 和健康未连接，1006：蓝牙未连接，1007：指纹校验失败 |


**示例：**


```ts
connect.onError = function (error) {
  console.log(`connection error code =${error.code} data = ${error.data}`)
}
```

---

## introduce

> 原文路径：/api/connect/introduce/

](#%E6%A6%82%E8%BF%B0)
# 概述


基于开放兼容的 BlueXlink 互联底座，可以实现不同设备间的能力互补，为用户提供一致的交互体验。


BlueXlink 互联底座实现了设备发现，连接，组网，安全认证，协议兼容等复杂工作，开发者只需要调用简单的 API，就可实现设备互联功能的开发。


另外，我们提供了支持多种开发语言的，多套 SDK 支持不同设备间的互联。当前向手机及 vivo 智能终端设备第三方应用开发者开放 BlueXlink 互联能力。


基于 BlueXlink 互联底座提供的设备发现、连接、组网能力及运动健康应用，开发者可以无感地实现手机与 vivo 智能终端设备间的发现与连接，基于 BlueXlink 互联底座提供的数据交互能力，开发者可简单地实现手机侧应用及 vivo 智能终端设备侧应用间的消息通知发送、数据文件传输、设备状态获取等能力。


手机及 vivo 智能终端设备间的互联及数据共享为消费者提供更丰富的场景与体验，同时为第三方应用提供了更多的机会。


](#%E6%94%AF%E6%8C%81%E7%9A%84%E8%AE%BE%E5%A4%87)
## 支持的设备


| 设备 | 要求 |
| --- | --- |
| 手机 | 安装 vivo 运动健康应用 |
| vivo 智能终端设备 | vivo WATCH3 |


](#%E5%BC%80%E6%94%BE%E8%83%BD%E5%8A%9B)
## 开放能力


| 能力 | 手机侧应用 | vivo 智能终端设备侧应用 |
| --- | --- | --- |
| 设备发现 | √ | √ |
| 设备连接 | √ | √ |
| 设备信息查询 | √ | √ |
| 设备状态查询及订阅 | √ | √ |
| 数据传输（文件/字节流） | √ | √ |


](#%E6%8A%80%E6%9C%AF%E6%9E%B6%E6%9E%84)
## 技术架构


![structure](/a96058b8072db85ac79ffa2bfde1f9ff/structure.png)


](#%E6%89%8B%E6%9C%BA%E4%BE%A7)
## 手机侧


手机侧运动健康应用集成互联底座能力，我们针对手机侧第三方应用提供 vivo 智能终端设备 SDK。
 基于 vivo 智能终端设备 SDK，第三方应用可以实现与 vivo 运动健康应用之间的数据通信和交互，以及与 vivo 智能终端设备侧第三方应用、vivo 智能终端设备之间的业务数据通信能力。


](#vivo-%E6%99%BA%E8%83%BD%E7%BB%88%E7%AB%AF%E8%AE%BE%E5%A4%87%E4%BE%A7)
## vivo 智能终端设备侧


vivo 智能终端设备集成互联底座能力，我们针对 vivo 智能终端设备侧第三方应用提供穿戴业务 Kit。
 穿戴业务 Kit 为第三方应用提供设备状态查询与订阅、设备信息查询及数据传输能力的接口，设备发现及连接细节由互联底座完成，第三方应用开发者无需关心。


](#%E5%BC%80%E5%8F%91%E6%8C%87%E5%AF%BC)
## 开发指导


[开发指导](/api/connect/development-guidance/rpc-sdk-guidance/)


](#api-%E5%8F%82%E8%80%83)
## API 参考


[API 参考](/api/connect/brief-introduction/)

---

## mobile-side

> 原文路径：/api/connect/mobile-side/

](#%E6%89%8B%E6%9C%BA%E4%BE%A7)
# 手机侧


](#%E6%8E%A5%E5%8F%A3%E4%BD%BF%E7%94%A8)
## 接口使用


](#%E5%90%8C%E6%AD%A5%E5%8F%91%E9%80%81%E6%95%B0%E6%8D%AE)
### 同步发送数据


](#%E5%91%BD%E4%BB%A4%E5%8F%91%E9%80%81-api)
#### 命令发送 API


```ts
Request request = new Request.Builder()
                    .action(Constant.Action.ACTION_DEVICE_BUSINESS_DATA)
                    .pkgName("com.vivo.health")
                    .data(data)
                    .build();
    Response response = RpcClient.getInstance().callSync(request);
    RpcLogger.i("test test_send response:" + response.getData());
```


](#%E5%BC%82%E6%AD%A5%E5%8F%91%E9%80%81%E6%95%B0%E6%8D%AE)
### 异步发送数据


```ts
    String data = "业务自定义数据";
    Request request = new Request.Builder()
            .action(Constant.Action.ACTION_DEVICE_BUSINESS_DATA)
            .pkgName("com.vivo.health")
            .data(data)
            .build();
    RpcClient.getInstance().callAsync(request, new Callback() {
        @Override
        public void onResponse(Response response) {
            MockLogger.i("test test_send_async response:" + response.getData());
        }
    });
```


](#%E6%8E%A5%E6%94%B6%E6%95%B0%E6%8D%AE%E7%9B%91%E5%90%AC)
### 接收数据监听


```ts
DeviceRpcManager.getInstance().startDataReceiver(new IDataReceiver() {
            @Override
            public void onReceiveData(Request request) {
                switch (request.getAction()){
                     case Constant.Action.ACTION_DEVICE_BUSINESS_DATA:
                        String data = request.getData();                        //接收端数据处理
                        String result = "填写的response";
                        response = Util.responseData(request, result);
                        DeviceRpcManager.getInstance().onResponse(response);
                        break;
                     default:
                        break;
                }
            @Override
            public void onReceiveNotification(Notification notification) {
                //处理接收的notification事件
            }
        });
```


](#%E5%8F%91%E9%80%81%E9%80%9A%E7%9F%A5%E6%95%B0%E6%8D%AE)
### 发送通知数据


](#%E9%80%9A%E7%9F%A5%E6%95%B0%E6%8D%AE%E6%B2%A1%E6%9C%89%E8%BF%94%E5%9B%9E%E5%80%BC)
##### 通知数据没有返回值。


- 请求的数据：


```ts
String data = "业务自定义数据";
Notification notification = new Notification.Builder()
        .action(Constant.Action.ACTION_DEVICE_BUSINESS_DATA)
        .pkgName("com.vivo.health")
        .data(data)
        .build();
RpcClient.getInstance().notify(notification);
```


- 返回的数据：通知类数据没有返回结果。

](#code-%E6%8F%8F%E8%BF%B0)
## code 描述


| code | 描述 |
| --- | --- |
| 0 | 成功 |
| 1 | 目标 app 没有处理对应 ACTION |
| 2 | 数据解析错误 |
| 3 | 设备命令失败 |
| 4 | 设备未连接 |
| 5 | 请求设备数据超时 |
| 6 | 设备不存在 |
| 7 | 请求目标 app 超时 |
| 8 | 目标 app 不支持 sdk 功能或目标 app 未安装 |
| 9 | 权限拒绝 |
| -1 | 未知错误 |


](#action-%E5%88%97%E8%A1%A8)
## ACTION 列表


- ACTION_DEVICE_INFO 当前连接的设备信息

- ACTION_DEVICE_BUSINESS_DATA 发送设备业务数据

- ACTION_DEVICE_DYNAMIC 设备动态信息更新

](#%E6%8E%A5%E5%8F%A3%E5%88%97%E8%A1%A8)
## 接口列表


](#1%E8%AF%BB%E5%8F%96%E8%BF%90%E5%8A%A8%E5%81%A5%E5%BA%B7%E5%8A%9F%E8%83%BD%E7%89%88%E6%9C%AC%E5%8F%B7)
### 1.读取运动健康功能版本号


](#%E8%8E%B7%E5%8F%96%E8%BF%90%E5%8A%A8%E5%81%A5%E5%BA%B7%E5%8A%9F%E8%83%BD%E7%89%88%E6%9C%AC%E5%8F%B7%E7%89%88%E6%9C%AC%E5%8F%B7%E5%A4%A7%E4%BA%8E%E7%AD%89%E4%BA%8E-2-%E8%AF%B4%E6%98%8E%E5%85%B7%E5%A4%87%E5%BD%93%E5%89%8D%E8%83%BD%E5%8A%9B)
##### 获取运动健康功能版本号，版本号大于等于 2 说明具备当前能力


](#%E8%AF%B7%E6%B1%82%E7%9A%84%E6%95%B0%E6%8D%AE)
##### 请求的数据：


```ts
int version = DeviceRpcManager.getInstance().getHealthDeviceVersion();
```


](#2%E8%8E%B7%E5%8F%96%E5%BD%93%E5%89%8D%E8%BF%9E%E6%8E%A5%E7%9A%84%E8%AE%BE%E5%A4%87%E4%BF%A1%E6%81%AF)
### 2.获取当前连接的设备信息


](#%E5%90%8C%E6%AD%A5%E8%AF%B7%E6%B1%82%E7%9A%84%E6%95%B0%E6%8D%AE)
##### 同步请求的数据


```ts
Request request = new Request.Builder()
        .action(Constant.Action.ACTION_DEVICE_INFO)
        .pkgName("com.vivo.health")
        .data(data)
        .build();
Response response = RpcClient.getInstance().callSync(request);
```


](#%E8%BF%94%E5%9B%9E%E7%9A%84%E6%95%B0%E6%8D%AE)
##### 返回的数据：


```json
{
    "device":
        {
        "deviceName":"Watch Name XXX2",
        "battery":90, //范围0-100
        "connected":true,
        "freeStorage":200000, //单位byte
        "mac":"11:11:11:11:11:11",
        "productId":2,
        "totalStorage":800000000 //单位byte
        "batteryState":1 //充电状态
        }
}

```


](#3%E7%BB%99%E8%AE%BE%E5%A4%87%E5%8F%91%E9%80%81-request-%E6%B6%88%E6%81%AF)
### 3.给设备发送 Request 消息


](#%E5%90%8C%E6%AD%A5%E8%AF%B7%E6%B1%82%E7%9A%84%E6%95%B0%E6%8D%AE-1)
##### 同步请求的数据


```ts
JSONObject jsonObject = new JSONObject();
jsonObject.put("msg", "业务自定义数据");

Request request = new Request.Builder()
        .action(Constant.Action.ACTION_DEVICE_BUSINESS_DATA)
        .pkgName("com.vivo.health")
        .data(jsonObject.toJSONString())
        .build();
Response response = RpcClient.getInstance().callSync(request);
```


](#%E8%BF%94%E5%9B%9E%E7%9A%84%E6%95%B0%E6%8D%AE-1)
##### 返回的数据：


```ts
data：{"code":0}
```


](#4%E8%AE%BE%E5%A4%87%E5%8A%A8%E6%80%81%E4%BF%A1%E6%81%AF%E6%9B%B4%E6%96%B0)
### 4.设备动态信息更新


](#%E6%95%B0%E6%8D%AE%E7%9B%91%E5%90%AC)
##### 数据监听


```ts
DeviceRpcManager.getInstance().registerDataReceiver(new IDataReceiver() {
            @Override
            public void onReceiveRequest(Request request) {

            }

            @Override
            public void onReceiveNotification(Notification notification) {
                try {
                    RpcLogger.i("server onReceiveNotification:" + notification);
                    switch (notification.getAction()) {
                        case Constant.Action.ACTION_DEVICE_DYNAMIC:
                            String data = notification.getData();
                            break;
                        default:
                            break;
                    }
                }catch (Exception e){
                    e.printStackTrace();
                }
            }
        });
```


](#%E8%8E%B7%E5%8F%96%E5%88%B0%E7%9A%84-data-%E6%95%B0%E6%8D%AE%E5%9C%A8-onreceivenotification-%E5%9B%9E%E8%B0%83%E4%B8%AD%E5%BE%97%E5%88%B0%E7%9A%84-data-%E6%98%AF%E5%A6%82%E4%B8%8B%E6%A0%BC%E5%BC%8F)
##### 获取到的 data 数据：在 onReceiveNotification 回调中，得到的 data 是如下格式：


```json
{
    "device":
        {
        "deviceName":"Watch Name XXX2",
        "battery":90, //范围0-100
        "connected":true,
        "freeStorage":200000, //单位byte
        "mac":"11:11:11:11:11:11",
        "productId":2,
        "totalStorage":800000000 //单位byte
        "batteryState":1 //充电状态
        }
}
```

---

# Native

## cipher

> 原文路径：/native/cipher/cipher/

](#%E5%AF%86%E7%A0%81%E7%AE%97%E6%B3%95)
# 密码算法


头文件<security/cipher.h>


](#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89)
## 接口定义


](#rsa-%E5%8A%A0%E5%AF%86)
### RSA 加密


```ts
int BCipher_rsaEncrypt(const char* plain_text, size_t plain_len, char* key, BCipher_Padding transformation, char** cipher_text, size_t* cipher_len);
```


](#%E5%8F%82%E6%95%B0)
#### 参数


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| plain_text | const char* | 待加密的文本内容。待加密的文本内容应该是一段普通文本，长度不能超过 keySize / 8 - 66，其中 keySize 是秘钥的长度（例如秘钥长度为 1024 时，text 不能超过 62 个字节） |
| plain_len | size_t | 待加密文本长度 |
| key | char* | 加密使用到的 RSA 公钥（仅支持 PKCS#8），经过 base64 编码后生成的字符串。 |
| transformation | BCipher_Padding | RSA 算法的填充项（详见《枚举 RSA 算法填充项》） |
| cipher_text（输出） | char** | 加密后的文本内容 |
| cipher_len（输出） | size_t* | 加密后的文本长度 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC)
#### 返回值


| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| result | int | 密钥算法相关操作结果代码（详见 《枚举 密钥算法操作结果代码》） |


](#%E5%A4%87%E6%B3%A8)
#### 备注


加密的文本使用结束后，需调用《密钥资源释放》接口进行释放。


](#rsa-%E8%A7%A3%E5%AF%86)
### RSA 解密


```ts
int BCipher_rsaDecrypt(const char* cipher_text, size_t cipher_len, char* key, BCipher_Padding transformation, char** plain_text, size_t* plain_len);
```


](#%E5%8F%82%E6%95%B0-1)
#### 参数


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| cipher_text | const char* | 待解密的文本内容应该是经过 base64 编码的一段二进制值。base64 编码使用默认风格，长度不能超过 keySize / 8 - 66，其中 keySize 是秘钥的长度（例如秘钥长度为 1024 时，text 不能超过 62 个字节） |
| cipher_len | size_t | 待解密文本长度 |
| key | char* | 解密使用到的 RSA 私钥（仅支持 PKCS#8），经过 base64 编码后生成的字符串。 |
| transformation | BCipher_Padding | RSA 算法的填充项（详见《枚举 RSA 算法填充项》） |
| plain_text（输出） | char** | 解密后的文本内容 |
| plain_len（输出） | size_t* | 解密后的文本长度 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC-1)
#### 返回值


| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| result | int | 密钥算法相关操作结果代码（详见 《枚举 密钥算法操作结果代码》） |


](#%E5%A4%87%E6%B3%A8-1)
#### 备注


解密的文本使用结束后，需调用《密钥资源释放》接口进行释放。


](#base64-%E5%8A%A0%E5%AF%86)
### base64 加密


```ts
int BCipher_base64Encode(const char* text, size_t text_len, char** digest, size_t* disgest_len);
```


](#%E5%8F%82%E6%95%B0-2)
#### 参数


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| text | const char* | 待加密的文本内容（普通文本） |
| text_len | size_t | 待加密的文本长度 |
| digest（输出） | char** | 经过 base64 加密的文本内容 |
| digest_len（输出） | size_t | 经过 base64 加密的文本长度 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC-2)
#### 返回值


| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| result | int | 密钥算法相关操作结果代码（详见 《枚举 密钥算法操作结果代码》） |


](#%E5%A4%87%E6%B3%A8-2)
#### 备注


加密的文本使用结束后，需调用《密钥资源释放》接口进行释放。


](#base64-%E8%A7%A3%E5%AF%86)
### base64 解密


```ts
int BCipher_base64Decode(const char* digest, size_t digest_len, char** text, size_t* text_len);
```


](#%E5%8F%82%E6%95%B0-3)
#### 参数


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| digest | const char* | 待解密的文本内容 |
| digest_len | size_t | 待解密的文本长度 |
| text（输出） | char** | 经过 base64 解密的文本内容 |
| text_len（输出） | size_t | 经过 base64 解密的文本长度 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC-3)
#### 返回值


| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| result | int | 密钥算法相关操作结果代码（详见 《枚举 密钥算法操作结果代码》） |


](#%E5%A4%87%E6%B3%A8-3)
#### 备注


解密的文本使用结束后，需调用《密钥资源释放》接口进行释放。


](#%E5%AF%86%E9%92%A5%E8%B5%84%E6%BA%90%E9%87%8A%E6%94%BE)
### 密钥资源释放


```ts
void BChiper_free(void **value);
```


](#%E5%8F%82%E6%95%B0-4)
#### 参数


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| value | void** | 待释放资源地址 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC-4)
#### 返回值


无


](#%E6%9E%9A%E4%B8%BE)
## 枚举


](#%E5%AF%86%E9%92%A5%E7%AE%97%E6%B3%95%E6%93%8D%E4%BD%9C%E7%BB%93%E6%9E%9C%E4%BB%A3%E7%A0%81)
### 密钥算法操作结果代码


| 枚举 | 值 | 说明 |
| --- | --- | --- |
| BCIPHER_OK | 0 | 密钥算法相关操作成功 |
| BCIPHER_ERROR | -1 | 密钥算法相关操作失败 |


](#rsa-%E7%AE%97%E6%B3%95%E5%A1%AB%E5%85%85%E9%A1%B9-bcipher_padding)
### RSA 算法填充项 BCipher_Padding


| 枚举 | 值 | 说明 |
| --- | --- | --- |
| BCIPHER_PADDING_DEFAULT | 0 | 默认填充模式"RSA/None/OAEPwithSHA-256andMGF1Padding"，目前只支持这种模式 |

---

## device

> 原文路径：/native/device/device/

](#%E8%AE%BE%E5%A4%87%E4%BF%A1%E6%81%AF)
# 设备信息


头文件<hardware/device_info.h>


](#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89)
## 接口定义


](#%E8%8E%B7%E5%8F%96%E8%AE%BE%E5%A4%87%E4%BF%A1%E6%81%AF)
### 获取设备信息


```ts
int BDevice_getInfo(BDevice_DeviceInfo* info);
```


](#%E5%8F%82%E6%95%B0)
#### 参数


| 参数(输出) | 类型 | 说明 |
| --- | --- | --- |
| info | BDevice_DeviceInfo* | 设备信息（详见 《结构体 设备信息》） |


](#%E8%BF%94%E5%9B%9E%E5%80%BC)
#### 返回值


| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| result | int | 结果代码（详见 《枚举 操作结果代码》） |


](#%E8%8E%B7%E5%8F%96%E8%AE%BE%E5%A4%87%E5%94%AF%E4%B8%80%E6%A0%87%E8%AF%86)
### 获取设备唯一标识


```ts
int BDevice_getDeviceId(char** device_id);
```


](#%E5%8F%82%E6%95%B0-1)
#### 参数


| 参数(输出) | 类型 | 说明 |
| --- | --- | --- |
| device_id | char** | 设备唯一标识 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC-1)
#### 返回值


| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| result | int | 结果代码（详见 《枚举 操作结果代码》） |


](#%E6%9D%83%E9%99%90)
#### 权限


需要申请 DEVICE_INFO 权限。


](#%E8%8E%B7%E5%8F%96%E7%94%A8%E6%88%B7%E5%94%AF%E4%B8%80%E6%A0%87%E8%AF%86)
### 获取用户唯一标识


```ts
int BDevice_getUserId(char** user_id);
```


](#%E5%8F%82%E6%95%B0-2)
#### 参数


| 参数(输出) | 类型 | 说明 |
| --- | --- | --- |
| user_id | char** | 用户唯一标识 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC-2)
#### 返回值


| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| result | int | 结果代码（详见 《枚举 操作结果代码》） |


](#%E6%9D%83%E9%99%90-1)
#### 权限


需要申请 DEVICE_INFO 权限。


](#%E8%8E%B7%E5%8F%96%E8%AE%BE%E5%A4%87-mac-%E5%9C%B0%E5%9D%80)
### 获取设备 MAC 地址


```ts
int BDevice_getMac(char** mac);
```


](#%E5%8F%82%E6%95%B0-3)
#### 参数


| 参数(输出) | 类型 | 说明 |
| --- | --- | --- |
| mac | char** | 设备 mac 地址 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC-3)
#### 返回值


| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| result | int | 结果代码（详见 《枚举 操作结果代码》） |


](#%E6%9D%83%E9%99%90-2)
#### 权限


需要申请 DEVICE_INFO 权限。


](#%E8%8E%B7%E5%8F%96%E8%AE%BE%E5%A4%87%E5%B9%BF%E5%91%8A%E6%A0%87%E8%AF%86)
### 获取设备广告标识


```ts
int BDevice_getAdvertisingId(char** advertising_id);
```


](#%E5%8F%82%E6%95%B0-4)
#### 参数


| 参数(输出) | 类型 | 说明 |
| --- | --- | --- |
| advertising_id | char** | 设备广告标识 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC-4)
#### 返回值


| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| result | int | 结果代码（详见 《枚举 操作结果代码》） |


](#%E6%9D%83%E9%99%90-3)
#### 权限


需要申请 DEVICE_INFO 权限。


](#%E8%8E%B7%E5%8F%96%E8%AE%BE%E5%A4%87%E5%BA%8F%E5%88%97%E5%8F%B7)
### 获取设备序列号


```ts
int BDevice_getSerial(char** serial_id);
```


](#%E5%8F%82%E6%95%B0-5)
#### 参数


| 参数(输出) | 类型 | 说明 |
| --- | --- | --- |
| serial_id | char** | 设备序列号 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC-5)
#### 返回值


| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| result | int | 结果代码（详见 《枚举 操作结果代码》） |


](#%E6%9D%83%E9%99%90-4)
#### 权限


需要申请 DEVICE_INFO 权限。


](#%E8%8E%B7%E5%8F%96%E8%AE%BE%E5%A4%87%E5%AD%98%E5%82%A8%E7%A9%BA%E9%97%B4%E6%80%BB%E5%A4%A7%E5%B0%8F)
### 获取设备存储空间总大小


```ts
int BDevice_getTotalStorage(int* total_storage);
```


](#%E5%8F%82%E6%95%B0-6)
#### 参数


| 参数(输出) | 类型 | 说明 |
| --- | --- | --- |
| total_storage | int* | 设备存储空间总大小 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC-6)
#### 返回值


| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| result | int | 结果代码（详见 《枚举 操作结果代码》） |


](#%E8%8E%B7%E5%8F%96%E8%AE%BE%E5%A4%87%E5%AD%98%E5%82%A8%E7%A9%BA%E9%97%B4%E5%8F%AF%E7%94%A8%E5%A4%A7%E5%B0%8F)
### 获取设备存储空间可用大小


```ts
int BDevice_getAvailableStorage(int* available_storage);
```


](#%E5%8F%82%E6%95%B0-7)
#### 参数


| 参数(输出) | 类型 | 说明 |
| --- | --- | --- |
| available_storage | int* | 设备存储空间可用大小 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC-7)
#### 返回值


| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| result | int | 结果代码（详见 《枚举 操作结果代码》） |


](#%E8%8E%B7%E5%8F%96%E8%AE%BE%E5%A4%87%E5%8D%A1%E8%AF%86%E5%88%AB%E7%A0%81)
### 获取设备卡识别码


```ts
int BDevice_getDeviceICCID(char** device_iccid);
```


](#%E5%8F%82%E6%95%B0-8)
#### 参数


| 参数(输出) | 类型 | 说明 |
| --- | --- | --- |
| device_iccid | char** | 设备卡识别码 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC-8)
#### 返回值


| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| result | int | 结果代码（详见 《枚举 操作结果代码》） |


](#%E8%8E%B7%E5%8F%96%E8%AE%BE%E5%A4%87-cpu-%E4%BF%A1%E6%81%AF)
### 获取设备 CPU 信息


```ts
int BDevice_getCpuInfo(char** cpu_info);
```


](#%E5%8F%82%E6%95%B0-9)
#### 参数


| 参数(输出) | 类型 | 说明 |
| --- | --- | --- |
| cpu_info | char** | 设备 CPU 信息 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC-9)
#### 返回值


| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| result | int | 结果代码（详见 《枚举 操作结果代码》） |


](#%E6%9E%9A%E4%B8%BE)
## 枚举


| 枚举值 | 值 | 说明 |
| --- | --- | --- |
| BDEVICE_OK | 0 | 操作成功 |
| BDEVICE_ERROR | -1 | 操作失败 |


](#%E7%BB%93%E6%9E%84%E4%BD%93)
## 结构体


](#%E8%AE%BE%E5%A4%87%E4%BF%A1%E6%81%AF-bdevice_deviceinfo)
### 设备信息 BDevice_DeviceInfo


```ts
typedef struct BDevice_DeviceInfo {
  char* brand;
  char* manufacturer;
  char* model;
  char* product;
  char* os_type;
  char* os_version_name;
  int os_version_code;
  char* platform_version_name;
  int platform_version_code;
  char* language;
  char* device_name;
  char* hardware_version;
  char* software_version;
  char* region;
  int screen_width;
  int screen_height;
  int window_width;
  int window_height;
  int status_bar_height;
  int screen_density;
  char* vendor_os_name;
  char* vendor_os_version;
  char* device_type;
  int screen_refresh_rate;
} BDevice_DeviceInfo;
```


](#%E5%86%85%E5%AE%B9%E8%AF%B4%E6%98%8E)
#### 内容说明


| 内容 | 类型 | 说明 |
| --- | --- | --- |
| brand | char* | 设备品牌 |
| manufacturer | char* | 设备生产商 |
| model | char* | 设备型号 |
| product | char* | 设备代号 |
| os_type | char* | 操作系统名称 |
| os_version_name | char* | 操作系统版本名称 |
| os_version_code | int | 操作系统版本号 |
| platform_version_name | char* | 运行平台版本名称 |
| platform_version_code | int | 运行平台版本号 |
| language | char* | 系统语言 |
| device_name | char* | 设备名称 |
| hardware_version | char* | 硬件版本 |
| software_version | char* | 软件版本 |
| region | char* | 系统地区 |
| screen_width | int | 屏幕宽度 |
| screen_height | int | 屏幕高度 |
| window_width | int | 可使用窗口宽度 |
| window_height | int | 可使用窗口高度 |
| status_bar_height | int | 状态栏高度 |
| screen_density | int | 设备的屏幕密度 |
| vendor_os_name | char* | 手表系统的名称，如 BlueOS |
| vendor_os_version | char* | 手表系统的版本号 |
| device_type | char* | 当前 vivo 手表引擎的设备类型，手表版为'watch' |
| screen_refresh_rate | int | 获取屏幕显示刷新率(获取帧率可能不为 60, 90, 144 等标准帧率) |

---

## compress

> 原文路径：/native/file/compress/

](#%E5%8E%8B%E7%BC%A9%E8%A7%A3%E5%8E%8B)
# 压缩解压


头文件<storage/compress.h>


](#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89)
## 接口定义


](#%E8%A7%A3%E5%8E%8B)
### 解压


```ts
int BFile_decompress(
    const char* srcUri,
    const char* dstUri
);
```


](#%E5%8F%82%E6%95%B0)
#### 参数


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| srcUri | const char* | 源文件 uri |
| dstUri | const char* | 目标文件 uri |


](#%E8%BF%94%E5%9B%9E%E5%80%BC)
#### 返回值


| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| result | int | 操作状态（详见 《枚举 文件压缩相关操作状态》） |


](#%E6%9E%9A%E4%B8%BE)
## 枚举


](#%E6%96%87%E4%BB%B6%E5%8E%8B%E7%BC%A9%E7%9B%B8%E5%85%B3%E6%93%8D%E4%BD%9C%E7%8A%B6%E6%80%81)
### 文件压缩相关操作状态


| 枚举值 | 值 | 说明 |
| --- | --- | --- |
| BFILE_COMPRESS_OK | 0 | 文件压缩相关操作成功 |
| BFILE_COMPRESSE_RROR | -1 | 文件压缩相关操作失败 |

---

## filesystem

> 原文路径：/native/file/filesystem/

](#%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F)
# 文件系统


头文件<storage/filesystem.h>


](#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89)
## 接口定义


](#%E8%8E%B7%E5%8F%96%E7%BC%93%E5%AD%98%E7%9B%AE%E5%BD%95)
### 获取缓存目录


```ts
int BFileSystem_getCacheDir(
    const char* package,
    char* path
);
```


](#%E5%8F%82%E6%95%B0)
#### 参数


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| package | const char* | 应用包名 |
| path（输出） | char* | 缓存目录 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC)
#### 返回值


| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| result | int | 结果代码（详见 《枚举 操作结果代码》） |


](#%E5%A4%87%E6%B3%A8)
#### 备注


path 输出参数所需内存大小为 256。


](#%E8%8E%B7%E5%8F%96%E5%BA%94%E7%94%A8%E6%96%87%E4%BB%B6%E7%9B%AE%E5%BD%95)
### 获取应用文件目录


```ts
int BFileSystem_getFilesDir(
    const char* package,
    char* path
);
```


](#%E5%8F%82%E6%95%B0-1)
#### 参数


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| package | const char* | 应用包名 |
| path（输出） | char* | 应用文件目录 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC-1)
#### 返回值


| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| result | int | 结果代码（详见 《枚举 操作结果代码》） |


](#%E5%A4%87%E6%B3%A8-1)
#### 备注


path 输出参数所需内存大小为 256。


](#%E8%8E%B7%E5%8F%96-mass-%E7%9B%AE%E5%BD%95)
### 获取 mass 目录


```ts
int BFileSystem_getMassDir(
    const char* package,
    char* path
);
```


](#%E5%8F%82%E6%95%B0-2)
#### 参数


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| package | const char* | 应用包名 |
| path（输出） | char* | mass 目录 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC-2)
#### 返回值


| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| result | int | 结果代码（详见 《枚举 操作结果代码》） |


](#%E5%A4%87%E6%B3%A8-2)
#### 备注


path 输出参数所需内存大小为 256。


](#%E8%8E%B7%E5%8F%96%E4%B8%B4%E6%97%B6%E7%9B%AE%E5%BD%95)
### 获取临时目录


```ts
int BFileSystem_getTempDir(
    const char* package,
    char* path
);
```


](#%E5%8F%82%E6%95%B0-3)
#### 参数


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| package | const char* | 应用包名 |
| path（输出） | char* | 临时目录 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC-3)
#### 返回值


| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| result | int | 结果代码（详见 《枚举 操作结果代码》） |


](#%E5%A4%87%E6%B3%A8-3)
#### 备注


path 输出参数所需内存大小为 256。


](#%E8%8E%B7%E5%8F%96%E5%AD%98%E5%82%A8%E7%9B%AE%E5%BD%95)
### 获取存储目录


```ts
int BFileSystem_getStorageDir(
    const char* package,
    char* path
);
```


](#%E5%8F%82%E6%95%B0-4)
#### 参数


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| package | const char* | 应用包名 |
| path（输出） | char* | 存储目录（用于 mmkv 数据库） |


](#%E8%BF%94%E5%9B%9E%E5%80%BC-4)
#### 返回值


| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| result | int | 结果代码（详见 《枚举 操作结果代码》） |


](#%E5%A4%87%E6%B3%A8-4)
#### 备注


path 输出参数所需内存大小为 256。


](#%E6%9E%9A%E4%B8%BE)
## 枚举


| 枚举值 | 值 | 说明 |
| --- | --- | --- |
| BFILESYSTEM_OK | 0 | 操作成功 |
| BFILESYSTEM_ERROR | -1 | 操作失败 |

---

## geolocation

> 原文路径：/native/geolocation/geolocation/

](#%E5%9C%B0%E7%90%86%E4%BD%8D%E7%BD%AE)
# 地理位置


头文件<hardware/location/geolocation.h>


](#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89)
## 接口定义


](#%E8%8E%B7%E5%8F%96%E5%9C%B0%E7%90%86%E4%BD%8D%E7%BD%AE)
### 获取地理位置


```ts
int BGeolocation_getLocation(
    BGeolocation_RequestInfo info，
    BGeolocation_LocationCallback callback,
    void* user_data
);
```


](#%E5%8F%82%E6%95%B0)
#### 参数


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| info | BGeolocation_RequestInfo | 地理位置的请求信息（详见《结构体 地理位置请求信息》） |
| callbacks | BGeolocation_LocationCallback | 获取的地理位置结果回调 (详见《结构体 地理位置获取结果回调) |
| user_data | void* | 自定义数据 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC)
#### 返回值


| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| result | int | 地理位置请求相关操作状态（详见 《枚举 地理位置操作状态》） |


](#%E6%9D%83%E9%99%90)
#### 权限


需要 LOCATION 权限


](#%E8%AE%A2%E9%98%85%E5%9C%B0%E7%90%86%E4%BD%8D%E7%BD%AE)
### 订阅地理位置


```ts
BGeolocation_OperationStatus BGeolocation_subscribeLocation(
    BGeolocation_LocationListener listerner,
    void* user_data
);
```


](#%E5%8F%82%E6%95%B0-1)
#### 参数


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| listener | BGeolocation_LocationListener | 订阅地理位置变化数据的回调（详见《结构体 地理位置监听》） |
| user_data | void* | 自定义数据 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC-1)
#### 返回值


| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| result | int | 地理位置请求相关操作状态（详见 《枚举 地理位置操作状态》） |


](#%E6%9D%83%E9%99%90-1)
#### 权限


需要 LOCATION 权限


](#%E5%8F%96%E6%B6%88%E5%9C%B0%E7%90%86%E4%BD%8D%E7%BD%AE%E8%AE%A2%E9%98%85)
### 取消地理位置订阅


```ts
BGeolocation_OperationStatus BGeolocation_unsubscribeLocation(
    BGeolocation_LocationListener listerner,
    void* user_data
);
```


](#%E5%8F%82%E6%95%B0-2)
#### 参数


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| listener | BGeolocation_LocationListener | 订阅地理位置变化数据的回调（详见《结构体 地理位置监听》） |
| user_data | void* | 自定义数据 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC-2)
#### 返回值


| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| result | int | 地理位置请求相关操作状态（详见 《枚举 地理位置操作状态》） |


](#%E8%8E%B7%E5%8F%96%E6%94%AF%E6%8C%81%E7%9A%84%E5%9D%90%E6%A0%87%E7%B3%BB%E7%B1%BB%E5%9E%8B)
### 获取支持的坐标系类型


```ts
BGeolocation_OperationStatus BGeolocation_getSupportedCoordTypes(
    const char*** coord_types,
    int *coord_types_cnt
);
```


](#%E5%8F%82%E6%95%B0-3)
#### 参数


| 参数(输出) | 类型 | 说明 |
| --- | --- | --- |
| coord_types | const char *** | 支持的坐标系类型字符串数组 |
| coord_types_cnt | int* | 支持的坐标系类型数量 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC-3)
#### 返回值


| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| result | int | 地理位置请求相关操作状态（详见 《枚举 地理位置操作状态》） |


](#%E6%9E%9A%E4%B8%BE)
## 枚举


](#%E5%9C%B0%E7%90%86%E4%BD%8D%E7%BD%AE%E6%93%8D%E4%BD%9C%E7%8A%B6%E6%80%81)
### 地理位置操作状态


| 枚举值 | 值 | 说明 |
| --- | --- | --- |
| BGEOLOCATION_OPERATION_OK | 0 | 地理位置相关操作成功 |
| BGEOLOCATION_ERROR | -1 | 地理位置相关操作失败 |


](#%E7%BB%93%E6%9E%84%E4%BD%93)
## 结构体


](#%E5%9C%B0%E7%90%86%E4%BD%8D%E7%BD%AE%E8%AF%B7%E6%B1%82%E4%BF%A1%E6%81%AF-bgeolocation_locationrequestinfo)
### 地理位置请求信息 BGeolocation_LocationRequestInfo


```ts
struct BGeolocation_LocationRequestInfo {
    const char* coord_type;
    int timeout;
}
```


](#%E5%86%85%E5%AE%B9%E8%AF%B4%E6%98%8E)
#### 内容说明


| 内容 | 类型 | 说明 |
| --- | --- | --- |
| coord_type | const char* | 请求的坐标系类型 |
| timeout | int | 请求的超时时间 |


](#%E5%9C%B0%E7%90%86%E4%BD%8D%E7%BD%AE%E6%95%B0%E6%8D%AE-bgeolocation_locationdata)
### 地理位置数据 BGeolocation_LocationData


```ts
struct BGeolocation_LocationData {
    double longitude;
    double latitude;
    float accuracy;
    double time;
}
```


](#%E5%86%85%E5%AE%B9%E8%AF%B4%E6%98%8E-1)
#### 内容说明


| 内容 | 类型 | 说明 |
| --- | --- | --- |
| longitude | double | 经度 |
| latitude | double | 纬度 |
| accuracy | float | 精度 |
| time | double | 时间 |


](#%E5%9C%B0%E7%90%86%E4%BD%8D%E7%BD%AE%E7%9B%91%E5%90%AC-bgeolocation_locationlistener)
### 地理位置监听 BGeolocation_LocationListener


包含用于监听位置数据回调的结构体。


```ts
struct BGeolocation_LocationListener {
    onLocationChanged location_changed;
}
```


](#%E5%9C%B0%E7%90%86%E4%BD%8D%E7%BD%AE%E8%8E%B7%E5%8F%96%E7%BB%93%E6%9E%9C%E5%9B%9E%E8%B0%83-bgeolocation_locationcallback)
### 地理位置获取结果回调 BGeolocation_LocationCallback


包含获取地理位置信息的结果回调的结构体。


```ts
struct BGeolocation_LocationCallback {
    onLocationResult location_result;
}
```


](#%E5%9B%9E%E8%B0%83)
## 回调


](#%E5%9C%B0%E7%90%86%E4%BD%8D%E7%BD%AE%E7%9B%91%E5%90%AC%E5%9B%9E%E8%B0%83-onlocationchanged)
### 地理位置监听回调 onLocationChanged


```ts
void(* onLocationChanged )(BGeolocation_LocationData data, void *user_data);
```


](#%E5%8F%82%E6%95%B0-4)
#### 参数


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| data | BGeolocation_LocationData | 变化的地理位置数据（详见《结构体 地理位置数据》） |
| user_data | void* | 自定义数据 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC-4)
#### 返回值


无


](#%E5%9C%B0%E7%90%86%E4%BD%8D%E7%BD%AE%E8%8E%B7%E5%8F%96%E7%BB%93%E6%9E%9C%E5%9B%9E%E8%B0%83-onlocationresult)
### 地理位置获取结果回调 onLocationResult


```ts
void(* onLocationResult )(int code, BGeolocation_LocationData data, void *user_data);
```


](#%E5%8F%82%E6%95%B0-5)
#### 参数


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| code | int | 获取地理位置的结果代码 |
| data | BGeolocation_LocationData | 变化的地理位置数据（详见《结构体 地理位置数据》） |
| user_data | void* | 自定义数据 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC-5)
#### 返回值


无

---

## download

> 原文路径：/native/network/download/

](#%E4%B8%8A%E4%BC%A0%E4%B8%8B%E8%BD%BD)
# 上传下载


头文件<network/download.h>


](#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89)
## 接口定义


](#%E5%8F%91%E8%B5%B7%E4%B8%8B%E8%BD%BD%E8%AF%B7%E6%B1%82)
### 发起下载请求


```ts
int BNetwork_download(
    BNetwork_DownloadConfig *config,
    BNetwork_DownloadRequestCallbacks callbacks,
    void* user_data
);
```


](#%E5%8F%82%E6%95%B0)
#### 参数


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| config | BNetwork_DownloadConfig* | 下载配置信息（详见《结构体 下载请求配置》） |
| callbacks | BNetwork_DownloadRequestCallbacks | 下载请求的结果监听回调（详见《结构体 下载请求结果监听》） |
| user_data | void* | 自定义数据 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC)
#### 返回值


| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| result | int | 下载请求相关操作状态值。（详见《枚举 Download 请求状态》） |


](#%E6%B3%A8%E5%86%8C%E4%B8%8B%E8%BD%BD%E7%BB%93%E6%9E%9C%E5%9B%9E%E8%B0%83)
### 注册下载结果回调


```ts
int BNetwork_registerDownloadListener(
    const char *token,
    BNetwork_DownloadCallbacks callbacks,
    void* user_data
);
```


](#%E5%8F%82%E6%95%B0-1)
#### 参数


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| token | const char* | 下载请求成功时返回的唯一标识符 |
| callbacks | BNetwork_DownloadCallbacks | 下载结果的监听回调（详见《结构体 下载执行结果监听》） |
| user_data | void* | 自定义数据 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC-1)
#### 返回值


| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| result | int | 下载请求相关操作状态值。（详见《枚举 Download 请求状态》） |


](#%E7%BB%88%E6%AD%A2%E4%B8%8B%E8%BD%BD%E8%AF%B7%E6%B1%82)
### 终止下载请求


```ts
int BNetwork_abortDownload(
    const char* token,
    BNetwork_AbortDownloadCallbacks callbacks,
    void* user_data
);
```


](#%E5%8F%82%E6%95%B0-2)
#### 参数


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| token | const char* | 下载请求成功时返回的唯一标识符 |
| callbacks | BNetwork_AbortDownloadCallbacks | 终止下载的结果回调（详见《回调 终止下载执行结果》） |
| user_data | void* | 自定义数据 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC-2)
#### 返回值


| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| result | int | 下载请求相关操作状态值。（详见《枚举 Download 请求状态》） |


](#%E6%9E%9A%E4%B8%BE)
## 枚举


](#download-%E8%AF%B7%E6%B1%82%E7%8A%B6%E6%80%81)
### Download 请求状态


| 枚举值 | 值 | 说明 |
| --- | --- | --- |
| BNETWORK_DOWNLOAD_OK | 0 | 下载请求相关操作成功 |
| BNETWORK_DOWNLOAD_ERROR | -1 | 下载请求相关操作失败 |


](#%E7%BB%93%E6%9E%84%E4%BD%93)
## 结构体


](#%E4%B8%8B%E8%BD%BD%E8%AF%B7%E6%B1%82%E9%85%8D%E7%BD%AE-bdownloadconfig)
### 下载请求配置 BDownloadConfig


用于发起下载请求。


```ts
struct BNetwork_DownloadConfig {
    const char* url;
    const char* header;
    const char* description;
    const char* filename;
}
```


](#%E5%86%85%E5%AE%B9%E8%AF%B4%E6%98%8E)
#### 内容说明


| 内容 | 类型 | 说明 |
| --- | --- | --- |
| url | const char* | 请求地址 |
| header | const char* | 请求 header |
| description | const char* | 下载描述，用于显示（默认为文件名） |
| filename | const char* | 下载保存的文件名，默认从 Http 请求/URL 中获取 |


](#%E4%B8%8B%E8%BD%BD%E8%AF%B7%E6%B1%82%E7%BB%93%E6%9E%9C%E7%9B%91%E5%90%AC-bnetwork_downloadrequestcallbacks)
### 下载请求结果监听 BNetwork_DownloadRequestCallbacks


包含下载请求结果回调的结构体，需设置“成功”、“失败”、“完成”三种回调。（详见《回调 下载请求结果》）


```ts
struct BNetwork_DownloadRequestCallbacks {
    onDownloadRequestSucceeded succeeded_cb;        // 下载请求成功
    onDownloadRequestFailed failed_cb;              // 下载请求失败
    onDownloadRequestCompleted completed_cb;        // 下载请求完成
};
```


](#%E4%B8%8B%E8%BD%BD%E6%89%A7%E8%A1%8C%E7%BB%93%E6%9E%9C%E7%9B%91%E5%90%AC-bnetwork_downloadcallbacks)
### 下载执行结果监听 BNetwork_DownloadCallbacks


包含下载结果回调的结构体，需设置“成功”、“失败”两种回调。（详见《回调 下载执行结果》）


```ts
struct BNetwork_DownloadCallbacks {
    onDownloadSucceeded succeeded_cb;      //  下载成功
    onDownloadFailed failed_cb;            //  下载失败
}
```


](#%E7%BB%88%E6%AD%A2%E4%B8%8B%E8%BD%BD%E6%89%A7%E8%A1%8C%E7%BB%93%E6%9E%9C%E7%9B%91%E5%90%AC-bnetwork_abortdownloadcallbacks)
### 终止下载执行结果监听 BNetwork_AbortDownloadCallbacks


包含终止下载结果回调的结构体，需设置”成功“，”失败“两种回调。（详见《回调 终止下载执行结果》）


```ts
struct BNetwork_AbortDownloadCallbacks {
    onAbortDownloadSucceeded succeeded_cb;    //  终止下载成功
    onAbortDownloadFailed failed_cb;          //  终止下载失败
}
```


](#%E5%9B%9E%E8%B0%83)
## 回调


](#%E4%B8%8B%E8%BD%BD%E8%AF%B7%E6%B1%82%E7%BB%93%E6%9E%9C)
### 下载请求结果


](#%E8%AF%B7%E6%B1%82%E6%88%90%E5%8A%9F)
#### 请求成功


```ts
void(* onDownloadRequestSucceeded)(const char* token, BNetwork_DownloadConfig* config, void* user_data);
```


](#%E5%8F%82%E6%95%B0-3)
##### 参数


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| token | const char* | 服务器端生成的一个唯一标识符，用于标识该次下载请求的身份和状态。作为终止下载及注册下载监听的参数。 |
| config | BNetwork_DownloadConfig* | 下载请求配置信息指针，用于进行资源释放等操作。 |
| user_data | void* | 自定义数据 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC-3)
##### 返回值


无


](#%E8%AF%B7%E6%B1%82%E5%A4%B1%E8%B4%A5)
#### 请求失败


```ts
void(* onDownloadRequestFailed)(int errCode, BNetwork_DownloadConfig* config, void* user_data);
```


](#%E5%8F%82%E6%95%B0-4)
##### 参数


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| errCode | int | 下载请求失败的错误码 |
| config | BNetwork_DownloadConfig* | 下载请求配置信息指针，用于进行资源释放等操作。 |
| user_data | void* | 自定义数据 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC-4)
##### 返回值


无


](#%E8%AF%B7%E6%B1%82%E5%AE%8C%E6%88%90)
#### 请求完成


```ts
void(* onDownloadRequestCompleted)(int opCode, BNetwork_DownloadConfig* config, void* user_data);
```


](#%E5%8F%82%E6%95%B0-5)
##### 参数


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| opCode | int | 下载请求完成的操作码 |
| config | BNetwork_DownloadConfig* | 下载请求配置信息指针，用于进行资源释放等操作。 |
| user_data | void* | 自定义数据 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC-5)
##### 返回值


无


](#%E4%B8%8B%E8%BD%BD%E6%89%A7%E8%A1%8C%E7%BB%93%E6%9E%9C)
### 下载执行结果


](#%E4%B8%8B%E8%BD%BD%E6%88%90%E5%8A%9F)
#### 下载成功


```ts
void(* onDownloadSucceeded)(const char* uri, void* user_data);
```


](#%E5%8F%82%E6%95%B0-6)
##### 参数


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| uri | const char* | 下载资源的 URI |
| user_data | void* | 自定义数据 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC-6)
##### 返回值


无


](#%E4%B8%8B%E8%BD%BD%E5%A4%B1%E8%B4%A5)
#### 下载失败


```ts
void(* onDownloadFailed)(int errCode, void* user_data);
```


](#%E5%8F%82%E6%95%B0-7)
##### 参数


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| errCode | int | 请求失败的错误码 |
| user_data | void* | 自定义数据 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC-7)
##### 返回值


无


](#%E7%BB%88%E6%AD%A2%E4%B8%8B%E8%BD%BD%E6%89%A7%E8%A1%8C%E7%BB%93%E6%9E%9C)
### 终止下载执行结果


](#%E7%BB%88%E6%AD%A2%E4%B8%8B%E8%BD%BD%E6%88%90%E5%8A%9F)
#### 终止下载成功


```ts
void(* onAbortDownloadSucceeded)(void *user_data);
```


](#%E5%8F%82%E6%95%B0-8)
##### 参数


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| user_data | void* | 自定义数据 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC-8)
##### 返回值


无


](#%E7%BB%88%E6%AD%A2%E4%B8%8B%E8%BD%BD%E5%A4%B1%E8%B4%A5)
#### 终止下载失败


```ts
void(*onAbortDownloadFailed)(int errCode, void* user_data)
```


](#%E5%8F%82%E6%95%B0-9)
##### 参数


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| errCode | int | 请求失败的错误码 |
| user_data | void* | 自定义数据 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC-9)
##### 返回值


无

---

## fetch

> 原文路径：/native/network/fetch/

](#%E6%95%B0%E6%8D%AE%E8%AF%B7%E6%B1%82)
# 数据请求


头文件<network/fetch.h>


](#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89)
## 接口定义


](#%E5%88%9B%E5%BB%BA-http-%E8%AF%B7%E6%B1%82-session)
### 创建 Http 请求 session


```ts
int BNetwork_fetchCreateSession(
    void **session
);
```


](#%E5%8F%82%E6%95%B0)
#### 参数


| 参数(输出) | 类型 | 说明 |
| --- | --- | --- |
| session | void** | 创建的 Http 请求的 session 指针，用于发起 Http 请求 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC)
#### 返回值


| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| result | int | Http 请求相关操作状态值。（详见《枚举 Http 请求状态》） |


](#%E9%94%80%E6%AF%81-http-%E8%AF%B7%E6%B1%82-session)
### 销毁 Http 请求 session


```ts
int BNetwork_fetchDestroySession(
    void *session
);
```


](#%E5%8F%82%E6%95%B0-1)
#### 参数


| 参数(输出) | 类型 | 说明 |
| --- | --- | --- |
| session | void* | 要销毁的 Http 请求的 session 指针 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC-1)
#### 返回值


| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| result | int | Http 请求相关操作状态值。（详见《枚举 Http 请求状态》） |


](#%E5%8F%91%E8%B5%B7-http-%E8%AF%B7%E6%B1%82)
### 发起 Http 请求


```ts
int BNetwork_fetch(
    void* session,
    BNetwork_FetchConfig *config,
    BNetwork_FetchCallbacks callbacks,
    void *user_data
);
```


](#%E5%8F%82%E6%95%B0-2)
#### 参数


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| session | void* | BNetwork_fetchCreateSession 创建的 session 指针 |
| config | BNetwork_FetchConfig* | Http 请求配置（详见《结构体 Http 请求配置》） |
| callbacks | BNetwork_FetchCallbacks | Http 请求结果回调（详见《结构体 请求结果监听》） |
| user_data | void* | 自定义数据 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC-2)
#### 返回值


| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| result | int | Http 请求相关操作状态值。（详见《枚举 Http 请求状态》） |


](#%E6%9E%9A%E4%B8%BE)
## 枚举


](#http-%E8%AF%B7%E6%B1%82%E7%8A%B6%E6%80%81)
### Http 请求状态


| 枚举值 | 值 | 说明 |
| --- | --- | --- |
| BNETWORK_FETCH_OK | 0 | Http 请求相关操作成功 |
| BNETWORK_FETCH_ERROR | -1 | Http 请求相关操作失败 |


](#%E7%BB%93%E6%9E%84%E4%BD%93)
## 结构体


](#http-%E8%AF%B7%E6%B1%82%E9%85%8D%E7%BD%AE-bnetwork_fetchconfig)
### Http 请求配置 BNetwork_FetchConfig


用于发起 http 请求。


```ts
struct BNetwork_FetchConfig {  
    const char* url;
    const char* header;
    const char* method;
    const char* data;
    size_t data_size;
}
```


](#%E5%86%85%E5%AE%B9%E8%AF%B4%E6%98%8E)
#### 内容说明


| 内容 | 类型 | 说明 |
| --- | --- | --- |
| url | const char* | 发起 HTTP 请求的 URL 地址 |
| method | const char* | 请求方式，默认为”GET“（当设置为”“(空)时，将以默认值发起请求） 支持”OPTIONS“，”GET“，”HEAD“，”POST“，”PUT“，”DELETE“，”TRACE“，”CONNECT“ |
| header | const char* | HTTP 请求头字段（JSON 格式字符串） 示例：{"Accept-Encoding": "gzip, deflate","Accept-Language": "zh-CN,en-US;q=0.8,en;q=0.6"} |
| data | const chat* | HTTP 请求的额外数据 |
| data_size | size_t | 额外数据的数据长度 |


](#http-%E8%AF%B7%E6%B1%82%E5%93%8D%E5%BA%94%E5%86%85%E5%AE%B9-bnetwork_fetchresponse)
### Http 请求响应内容 BNetwork_FetchResponse


http 请求成功时，该内容将作为参数传入成功回调中。


```ts
struct BNetwork_FetchResponse {
    int http_code;
    uint8_t* header;
    size_t header_size;
    uint8_t* data;
    size_t data_size;
    void* user_data;
    BNetwork_FetchConfig* config;
}
```


](#%E5%86%85%E5%AE%B9%E8%AF%B4%E6%98%8E-1)
#### 内容说明


| 内容 | 类型 | 说明 |
| --- | --- | --- |
| http_code | int | 请求状态 |
| header | uint8_t* | 响应头 |
| header_size | size_t | 响应头大小 |
| data | uint8_t* | 响应正文 |
| data_size | size_t | 响应正文大小 |
| user_data | void* | 用户自定义参数 |
| config | BNetwork_FetchConfig* | http 请求配置参数指针，回传用于进行资源释放等操作。 |


](#%E8%AF%B7%E6%B1%82%E7%BB%93%E6%9E%9C%E7%9B%91%E5%90%AC-bnetwork_fetchcallbacks)
### 请求结果监听 BNetwork_FetchCallbacks


包含 http 的请求结果回调的结构体，需设置“成功”、“失败”、“完成”三种回调。（详见《回调 fetch 请求结果》）


```ts
struct BNetwork_FetchCallbacks {
    onFetchSucceeded succeeded_cb;  // Http请求成功
    onFetchFailed failed_cb;        // Http请求失败
    onFetchCompleted completed_cb;  // Http请求完成
}
```


](#%E5%9B%9E%E8%B0%83)
## 回调


](#fetch-%E8%AF%B7%E6%B1%82%E7%BB%93%E6%9E%9C)
### fetch 请求结果


](#%E8%AF%B7%E6%B1%82%E6%88%90%E5%8A%9F)
#### 请求成功


```ts
void(* onFetchSucceeded)(void* session, BNetwork_FetchResponse *response);
```


](#%E5%8F%82%E6%95%B0-3)
##### 参数


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| session | void* | 此 http 请求创建的 session 指针 |
| response | BNetwork_FetchResponse * | fetch 请求响应结果（详见《结构体 Http 请求响应内容》） |


](#%E8%BF%94%E5%9B%9E%E5%80%BC-3)
##### 返回值


无


](#%E8%AF%B7%E6%B1%82%E5%A4%B1%E8%B4%A5)
#### 请求失败


```ts
void(* onFetchFailed)(void* session, int errCode, BNetwork_FetchResponse *response);
```


](#%E5%8F%82%E6%95%B0-4)
##### 参数


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| session | void* | 此 http 请求创建的 session 指针 |
| errCode | int | fetch 请求的错误代码 |
| response | BNetwork_FetchResponse * | fetch 请求响应结果（详见《结构体 Http 请求响应内容》） |


](#%E8%BF%94%E5%9B%9E%E5%80%BC-4)
##### 返回值


无


](#%E8%AF%B7%E6%B1%82%E5%AE%8C%E6%88%90)
#### 请求完成


```ts
void(* onFetchCompleted)(void* session, int opCode, BNetwork_FetchResponse *response);
```


](#%E5%8F%82%E6%95%B0-5)
##### 参数


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| session | void* | 此 http 请求创建的 session 指针 |
| opCode | int | fetch 请求完成操作码 |
| response | BNetwork_FetchResponse * | fetch 请求响应结果（详见《结构体 Http 请求响应内容》） |


](#%E8%BF%94%E5%9B%9E%E5%80%BC-5)
##### 返回值


无

---

## network

> 原文路径：/native/network/network/

](#%E7%BD%91%E7%BB%9C%E7%8A%B6%E6%80%81)
# 网络状态


头文件<network/network.h>


](#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89)
## 接口定义


](#%E8%8E%B7%E5%8F%96%E7%BD%91%E7%BB%9C%E7%B1%BB%E5%9E%8B)
### 获取网络类型


```ts
BNetwork_State BNetwork_getType();
```


](#%E5%8F%82%E6%95%B0)
#### 参数


无


](#%E8%BF%94%E5%9B%9E%E5%80%BC)
#### 返回值


| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| type | BNetwork_State | 网络状态类型。（详见《枚举 网络状态类型》） |


](#%E8%AE%A2%E9%98%85%E7%BD%91%E7%BB%9C%E7%8A%B6%E6%80%81%E7%9B%91%E5%90%AC)
### 订阅网络状态监听


```ts
int BNetwork_subscribe(
    BNetwork_StatusListener listener,
    void* user_data
)
```


](#%E5%8F%82%E6%95%B0-1)
#### 参数


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| listener | BNetwork_StatusListener | 订阅网络状态变化的回调（详见《结构体 网络状态监听》） |
| user_data | void* | 自定义数据 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC-1)
#### 返回值


| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| listenerId | int | 成功订阅的监听 Id 号 (<0：订阅失败) |


](#%E5%8F%96%E6%B6%88%E8%AE%A2%E9%98%85%E7%BD%91%E7%BB%9C%E7%8A%B6%E6%80%81%E7%9B%91%E5%90%AC)
### 取消订阅网络状态监听


```ts
int BNetwork_unsubscribe(int listener_id)
```


](#%E5%8F%82%E6%95%B0-2)
#### 参数


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| listenerId | int | 订阅时返回的监听 Id 号 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC-2)
#### 返回值


| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| result | int | 网络相关操作结果代码 |


](#%E6%9E%9A%E4%B8%BE)
## 枚举


](#%E7%BD%91%E7%BB%9C%E7%9B%B8%E5%85%B3%E6%93%8D%E4%BD%9C%E7%BB%93%E6%9E%9C%E4%BB%A3%E7%A0%81)
### 网络相关操作结果代码


| 枚举 | 值 | 说明 |
| --- | --- | --- |
| BNETWORK_OK | 0 | 网络相关操作成功 |
| BNETWORK_ERROR | -1 | 网络相关操作失败 |


](#%E7%BD%91%E7%BB%9C%E7%8A%B6%E6%80%81%E7%B1%BB%E5%9E%8B-bnetwork_state)
### 网络状态类型 BNetwork_State


| 枚举 | 值 | 说明 |
| --- | --- | --- |
| BNETWORK_2G | 0 | 2G 网络 |
| BNETWORK_3G | 1 | 3G 网络 |
| BNETWORK_4G | 2 | 4G 网络 |
| BNETWORK_5G | 3 | 5G 网络 |
| BNETWORK_BT | 4 | 蓝牙 BT 网络 |
| BNETWORK_WIFI | 5 | WIFI 网络 |
| BNETWORK_UNKNOWN | 6 | 未知类型 |


](#%E7%BB%93%E6%9E%84%E4%BD%93)
## 结构体


](#%E7%BD%91%E7%BB%9C%E7%8A%B6%E6%80%81%E7%9B%91%E5%90%AC-bnetwork_statuslistener)
### 网络状态监听 BNetwork_StatusListener


包含用于监听网络状态变化回调的结构体。


```ts
struct BNetwork_StatusListener {
   onNetworkChange state_listener;
}
```


](#%E5%9B%9E%E8%B0%83)
## 回调


```ts
void (*onNetworkChange)(BNetwork_State type, void* user_data);
```


](#%E5%8F%82%E6%95%B0-3)
#### 参数


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| type | BNetwork_State | 网络状态类型。（详见《枚举 网络状态类型》 |
| user_data | void* | 自定义数据 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC-3)
#### 返回值


无

---

## package

> 原文路径：/native/package/package/

](#%E5%8C%85%E7%AE%A1%E7%90%86)
# 包管理


头文件<package/package.h>


](#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89)
## 接口定义


](#%E8%8E%B7%E5%8F%96%E5%BA%94%E7%94%A8%E7%AD%BE%E5%90%8D%E6%91%98%E8%A6%81%E4%BF%A1%E6%81%AF)
### 获取应用签名摘要信息


```ts
char* BPackage_getSignatureDigests(const char* package);
```


](#%E5%8F%82%E6%95%B0)
#### 参数


| 参数 | 类型 | 说明 |
| --- | --- | --- |
| package | const char* | 应用包名 |


](#%E8%BF%94%E5%9B%9E%E5%80%BC)
#### 返回值


| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| digests | char* | 签名摘要信息（失败返回 nullptr） |


](#%E5%A4%87%E6%B3%A8)
#### 备注


操作成功时，使用完签名摘要信息后，需要对其进行释放。

---

## introduction

> 原文路径：/native/quickstart/introduction/

](#%E6%A6%82%E8%BF%B0)
# 概述


除了 JS API，我们还针对高性能的需求场景提供 Native API。当前，我们开放了部分能力的 Native API，并支持 C、C++标准库及标准 POSIX 接口。


现阶段，以定向合作的形式向合作方提供 Native 开发能力，合作方通过调用 Native API，作为系统能力的一部分提供给 JS 侧开发使用。 Native 能力将在后续版本逐步扩展。


定向合作请通过下方二维码联系我们。


![联系我们](/45a40611f1cb58543c21212feecb753f/vivo-service.png)

---

## stdlibsupport

> 原文路径：/native/stdlibsupport/stdlibsupport/

](#%E6%A0%87%E5%87%86%E5%BA%93%E6%94%AF%E6%8C%81)
# 标准库支持


](#%E6%A0%87%E5%87%86%E5%BA%93%E6%94%AF%E6%8C%81%E6%83%85%E5%86%B5)
## 标准库支持情况


| 名称 | 支持情况 |
| --- | --- |
| 标准 C 库 | C11 标准 C 库、POSIX.1 标准（部分支持） |
| 标准 C++库 | C++11、C++14、C++17（部分支持）、C++20（部分支持） |


](#%E6%A0%87%E5%87%86-posix-%E6%8E%A5%E5%8F%A3%E6%94%AF%E6%8C%81%E6%83%85%E5%86%B5)
## 标准 POSIX 接口支持情况


BlueOS 手表平台当前支持核心能力的标准 POSIX 接口，包含不依赖于内核的库函数实现，保证 Native 开发所需基础能力。


](#%E4%B8%BB%E8%A6%81%E6%A8%A1%E5%9D%97)
#### 主要模块


- 线程

- 信号量

- 标准输入输出

- 消息队列

- 网络

- 异步 I/O

- 轮询

- LOG 系统

- 串口 I/O

- 系统资源访问

- 数学计算

- 正则计算

- 参数解析

- 断言

](#%E4%B8%BB%E8%A6%81%E6%8E%A5%E5%8F%A3%E5%88%97%E8%A1%A8)
#### 主要接口列表


 
   
     
     
   
 
 
   
     
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
     
   
   
     
   
   
     
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
   
     
   
 

| 模块 | 接口名称 |
| --- | --- |
| 时间管理 | clock_getres |
| clock_gettime |
| clock_settime |
| clock |
| difftime |
| mktime |
| time |
| asctime |
| ctime |
| gmtime |
| localtime |
| strftime |
| strftime_l |
| ctime_r |
| gmtime_r |
| localtime_r |
| strptime |
| strptime_l |
| tzset |
| _tzset_r |
| __getdate_err |
| getdate |
| getdate_r |
| clock_settime |
| clock_gettime |
| clock_getres |
| timer_create |
| timer_delete |
| timer_settime |
| timer_gettime |
| timer_getoverrun |
| nanosleep |
| clock_nanosleep |
| clock_getcpuclockid |
| clock_setenable_attr |
| clock_getenable_attr |
| 文件系统 | mkdir |
| opendir |
| dirent |
| telldir |
| seekdir |
| rewinddir |
| closedir |
| open |
| close |
| read |
| write |
| lseek |
| rename |
| unlink |
| stat |
| fstat |
| fsync |
| fcntl |
| ioctl |
| ftruncate |
| rmdir |
| chdir |
| getcwd |
| statfs |
| access |
| pipe |
| mkfifo |
| copy |
| 标准输入输出 | getdelim |
| getline |
| 消息队列 | mq_close |
| mq_getattr |
| mq_notify |
| mq_open |
| mq_receive |
| mq_send |
| mq_unlink |
| 线程管理 | pthread_attr_destroy |
| pthread_attr_init |
| pthread_attr_setdetachstate |
| pthread_attr_getdetachstate |
| pthread_attr_setschedpolicy |
| pthread_attr_getschedpolicy |
| pthread_attr_setschedparam |
| pthread_attr_getschedparam |
| pthread_attr_setstacksize |
| pthread_attr_getstacksize |
| pthread_attr_setstackaddr |
| pthread_attr_getstackaddr |
| pthread_attr_setguardsize |
| pthread_attr_getguardsize |
| pthread_attr_setscope |
| pthread_attr_getscope |
| pthread_system_init |
| pthread_detach |
| pthread_join |
| pthread_self |
| pthread_exit |
| pthread_once |
| pthread_cleanup_pop |
| pthread_cleanup_push |
| pthread_cancel |
| pthread_testcancel |
| pthread_setcancelstate |
| pthread_setcanceltype |
| pthread_atfork |
| pthread_kill |
| pthread_mutex_init |
| pthread_mutex_destroy |
| pthread_mutex_lock |
| pthread_mutex_unlock |
| pthread_mutex_trylock |
| pthread_mutexattr_init |
| pthread_mutexattr_destroy |
| pthread_mutexattr_gettype |
| pthread_mutexattr_settype |
| pthread_mutexattr_setpshared |
| pthread_mutexattr_getpshared |
| pthread_condattr_destroy |
| pthread_condattr_init |
| pthread_cond_init |
| pthread_cond_destroy |
| pthread_cond_broadcast |
| pthread_cond_signal |
| pthread_cond_wait |
| pthread_rwlockattr_init |
| pthread_rwlockattr_destroy |
| pthread_rwlockattr_getpshared |
| pthread_rwlockattr_setpshared |
| pthread_rwlock_init |
| pthread_rwlock_destroy |
| pthread_rwlock_rdlock |
| pthread_rwlock_tryrdlock |
| pthread_rwlock_timedrdlock |
| pthread_rwlock_timedwrlock |
| pthread_rwlock_unlock |
| pthread_rwlock_wrlock |
| pthread_rwlock_trywrlock |
| pthread_spin_init |
| pthread_spin_destroy |
| pthread_spin_lock |
| pthread_spin_trylock |
| pthread_spin_unlock |
| pthread_barrierattr_destroy |
| pthread_barrierattr_init |
| pthread_barrierattr_getpshared |
| pthread_barrierattr_setpshared |
| pthread_barrier_destroy |
| pthread_barrier_wait |
| pthread_setspecific |
| pthread_getspecific |
| pthread_key_create |
| pthread_key_delete |
| 信号量 | sem_close |
| sem_destroy |
| sem_getvalue |
| sem_init |
| sem_open |
| sem_post |
| sem_timedwait |
| sem_trywait |
| sem_unlink |
| sem_wait |
| 网络通信 | accept |
| bind |
| shutdown |
| getpeername |
| getsockname |
| getsockopt |
| setsockopt |
| connect |
| listen |
| recvfrom |
| sendto |
| socket |
| closesocket |
| ioctlsocket |
| 串口I/O | cfgetospeed |
| cfgetispeed |
| cfsetospeed |
| cfsetispeed |
| tcgetattr |
| tcsetattr |
| tcsendbreak |
| tcdrain |
| tcflush |
| tcflow |
| tcgetsid |
| cfmakeraw |
| cfsetspeed |

---

# 其他

## build-env

> 原文路径：/reference/question-answer/build-env/

](#%E7%BC%96%E8%AF%91%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F)
# 编译环境变量


编译环境变量 `process.env.NODE_ENV` 用于在构建时判断生产环境或开发环境。它可以帮助在编译时去掉不必要构建的代码块。环境变量的一种使用场景是用于模拟器无法覆盖的能力，可以使用 JavaScript 来模拟这些情况。


](#%E7%BC%96%E8%AF%91%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F%E5%8F%96%E5%80%BC)
## 编译环境变量取值


| 环境 | 取值 |
| --- | --- |
| 开发环境 | development |
| 正式环境 | production |


](#%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B)
## 使用示例


```js
let musicList = []

if (process.env.NODE_ENV == 'development') {
  // 开发环境假数据模拟
  musicList = require('./musicList.js')
} else if (process.env.NODE_ENV == 'production') {
  // 正式环境获取真实数据
  musicList = getMuisc()
}

export default {
  onInit() {
    console.log(musicList)
  },
}
```

---

## i18n

> 原文路径：/reference/question-answer/i18n/

](#%E5%9B%BD%E9%99%85%E5%8C%96)
# 国际化


蓝河应用平台的能力会覆盖多个国家地区，平台支持国际化(i18n)的能力后，可以做到让一个蓝河应用产品（一个 RPK 文件）同时支持多个语言版本的切换，开发者无需开发多个不同语言的源码项目，避免给项目维护带来困难。


使用系统默认的语言，开发者配置国际化的方式非常简单，只需要`定义资源`与`引用资源`两个步骤即可；如果允许用户在蓝河应用中修改地区语言，请参考第三步`获取更新语言`；


](#%E5%AE%9A%E4%B9%89%E8%B5%84%E6%BA%90%E6%96%87%E4%BB%B6)
## 定义资源文件


资源文件用于存放多个语言的业务信息定义，与其它技术平台类似（它们使用`properties文件`或者`xml文件`的格式），蓝河应用平台使用`JSON文件`保存资源定义；


在项目源码`src目录`下定义`i18n文件夹`，内部放置每个语言地区下的资源定义文件即可；其中文件名定义为：`zh-CN.json`、`zh.json`；


每个 JSON 文件的内容格式如下：


```json
{
  "message": {
    "pageA": {
      "text": "pure-text-content",
      "format": {
        "object": "type-{name}",
        "array": "type-{0}"
      },
      "plurals": {
        "double": "car | cars",
        "three": "no apples | one apple | {count} apples",
        "format": {
          "object": "type-{name}",
          "array": "type-{0}"
        }
      }
    }
  }
}
```


页面中通过`message.pageA.text`类似的`path`引用对应内容`"pure-text-content"`；


](#%E9%A1%B5%E9%9D%A2%E4%B8%AD%E5%BC%95%E7%94%A8%E8%B5%84%E6%BA%90)
## 页面中引用资源


页面中 i18n 的使用语法，主要体现在 ViewModel 的几个函数上，如：`$t`，这些方法可以在`<template`或`<script>`中使用；


如下代码所示：


```html
<template>
  <div>
    <text>{{ $t('message.pageA.text') }}</text>
    <text>{{ $t('message.pageA.format.object', { name: 'arg-object' }) }}</text>
  </div>
</template>

<script>
  export default {
    onInit() {
      // 简单格式化：
      this.$t('message.pageA.text')
      this.$t('message.pageA.format.object', { name: 'arg-object' })
    },
  }
</script>
```


](#%E7%AE%80%E5%8D%95%E6%A0%BC%E5%BC%8F%E5%8C%96%E6%96%B9%E6%B3%95)
### 简单格式化方法


``


| 属性 | 类型 | 参数 | 描述 |
| --- | --- | --- | --- |
| $t | Function | path: String 资源路径arg0: object | array 格式化参数，非必要参数，根据系统语言完成简单的替换：this.$t('message.pageA.text') |


比如：


```ts
// 示例：无额外参数的格式化
// 输出："pure-text-content"
this.$t('message.pageA.text')
// 示例：额外参数为对象，替换引用内容中的绑定
// 输出："type-arg-object"
this.$t('message.pageA.format.object', { name: 'arg-object' })
```


](#%E5%8D%95%E5%A4%8D%E6%95%B0%E6%A0%BC%E5%BC%8F%E5%8C%96%E6%96%B9%E6%B3%95)
### 单复数格式化方法


``


| 属性 | 类型 | 参数 | 描述 |
| --- | --- | --- | --- |
| $tc | Function | path: String 资源路径count: number 要表达的值 | 根据系统语言完成单复数替换：this.$tc('message.plurals.double')，注意：定义资源的内容通过 | 分隔为多个选项 |


比如：


```ts
// 示例：message的值为两个选项时，传递数值不为单数
// 输出："cars"
this.$tc('message.pageA.plurals.double', 0)
// 示例：message的值为两个选项时，传递数值为单数
// 输出："car"
this.$tc('message.pageA.plurals.double', 1)
// 示例：message的值为两个选项时，传递数值不为单数
// 输出："cars"
this.$tc('message.pageA.plurals.double', 2)

// 示例：message的值为三个及以上的选项时，传递数值不为单数
// 输出："no apples"
this.$tc('message.pageA.plurals.three', 0)
// 示例：message的值为三个及以上的选项时，传递数值为单数
// 输出："one apple"
this.$tc('message.pageA.plurals.three', 1)
// 示例：message的值为三个及以上的选项时，传递数值不为单数
// 输出："10 apples"
this.$tc('message.pageA.plurals.three', 10)
```


](#manifest-%E4%B8%AD%E7%9A%84-name-%E7%9A%84%E5%9B%BD%E9%99%85%E5%8C%96)
### manifest 中的 name 的国际化


此时可使用字符串模板声明，形如：${appName}


例如下面：


```json
{
  "package": "com.example.i18n",
  "name": "${appName}",
  "versionName": "1.0.0",
  "versionCode": 1
}
```


此时 i18n 也必须有相应的配置信息


```json
// en.json
{
  "appName": "myApp"
}
```


```json
// zh-CN.json
{
  "appName": "我的应用"
}
```


](#%E8%8E%B7%E5%8F%96%E6%9B%B4%E6%96%B0%E8%AF%AD%E8%A8%80)
### 获取更新语言


上面的能力用于资源内容的格式化，在某些场景下开发者可能需要获取当前系统的地区语言`locale`并进行更改，来完成不同的逻辑处理：


- 比如：不同的 locale 对应的页面布局不同；

- 比如：开发者为用户提供设置某种语言的能力；

此时开发者，可以通过`blueos.app.configuration`接口来完成


比如：


```ts
import configuration from '@blueos.app.configuration'

// 获取locale，后续开发者可以将locale设置为VM中的data属性，并在模板中判断以区分不同的布局
const localeObject = configuration.getLocale()
// 转换为字符串格式，如：'zh'或者'zh-CN'
const locale = [localeObject.language, localeObject.countryOrRegion].filter((n) => !!n).join('-')

console.info(`获取当前locale：${locale}`)
```


设置多当前语言(setLocale)为系统接口，普通应用无法调用。


```ts
import configuration from '@blueos.app.configuration'

// 设置locale成功后，通过VM的生命周期函数 onConfigurationChanged 触发
configuration.setLocale({
  language: 'zh',
  countryOrRegion: 'CN',
})
```


](#%E4%BF%AE%E6%94%B9%E5%9C%B0%E5%8C%BA%E8%AF%AD%E8%A8%80%E5%90%8E%E7%9A%84%E5%9B%9E%E8%B0%83)
### 修改地区语言后的回调


当用户在系统设置或者通过 configuration.setLocale 切换地区语言，都会触发 onConfigurationChanged 回调，且返回来的 event.type 值为`locale`


示例代码


```ts
// 监听语言、地区变化
onConfigurationChanged(event) {
  if (event && event.type && event.type === 'locale') {
    console.log('locale or language changed!')
  }
}
```

---

## rtl

> 原文路径：/reference/question-answer/rtl/

](#%E5%9B%BD%E9%99%85%E5%8C%96rtl)
# 国际化（RTL）


](#1%E6%A6%82%E8%BF%B0)
## 1.概述


国际化（i18n，Internationalization）是系统层面提供的一种通用设计能力，用于支持多语言环境，使应用能够在不同国家和地区正常运行。


本地化（L10n，Localization）则是应用层面针对具体国家或地区进行的个性化调整，包括语言翻译、文化习惯和界面适配等，使用户获得符合当地使用习惯的体验。


蓝河系统已提供大部分语言的 i18n 能力，本方案旨在进一步补充对 RTL（Right-to-Left）语言的支持。


](#2-%E6%95%B4%E4%BD%93%E6%96%B9%E6%A1%88)
## 2. 整体方案


LTR 和 RTL 是阅读顺序 Left to Right (LTR) 和 Right to Left (RTL) 的简称。汉语、英语等世界主流语言均遵循从左到右的阅读顺序。而阿拉伯语、波斯语、乌尔都语、希伯来语等语言则使用从右到左的阅读顺序。


本方案从下面四个方面进行考虑设计：


- 提供全局和局部两种方式启用 RTL，使应用能够整体或局部跟随语言方向自动适配。

- 对布局、文字和图片使用与语言方向无关的属性，实现不同语言下的自动适配。

- 通过资源文件统一管理文本和图片，实现多语言动态加载和镜像处理。

- 当通用处理不足时，可采用局部特殊处理，针对字体、对齐或图标方向进行精细调整。

](#3-%E5%90%AF%E7%94%A8-rtl)
## 3. 启用 RTL


应用支持 **RTL（Right-to-Left，从右到左布局）** 的方式主要有两种：


- **系统语言触发**
当系统语言切换为阿拉伯语、维吾尔语等 RTL 语言，并且应用在配置中声明支持 RTL 时，应用会自动启用 RTL 布局。这种方式适用于大多数场景，无需额外干预。

- **局部组件显式设置**
对于应用内部的特定组件，可通过显式配置启用 RTL 布局。这种方式适用于特定页面或组件的特殊需求。


建议优先依赖系统语言触发方式，以实现全局统一的 RTL 适配；仅在局部布局有特殊需求时使用显式设置。


](#31-%E7%B3%BB%E7%BB%9F%E8%AF%AD%E8%A8%80%E5%88%87%E6%8D%A2)
### 3.1 系统语言切换


```ts
import configuration from '@blueos.app.configuration'
configuration.setLocale({
  language: 'ar',
  countryOrRegion: 'AE',
})
```


](#32-manifest-%E5%A3%B0%E6%98%8E%E6%94%AF%E6%8C%81rtl)
### 3.2 manifest 声明支持RTL


为了保证 RTL 的显示效果，需要应用自己声明了对 RTL 的支持后，系统才能根据语言调整布局/文本等方向来适配RTL。


**声明方式：**


```json
{
  "supportsRtl": true
}
```


- supportsRtl：是否支持RTL显示，默认值为false，只有应用显式的声明了才会根据语言自动切换RTL布局。

启用后系统会根据语言为应用设置全局方向（影响根容器的 dir 属性），应用未显式覆盖的地方将随之适配。


](#33-dir-%E5%B1%9E%E6%80%A7)
### 3.3 dir 属性


对某组件显式设置的 `dir` 会覆盖继承方向，不会被系统语言自动改写；未显式设置时，方向通常由祖先（常为根节点）决定，而根节点的方向可能由系统/应用语言配置设定。


它不仅影响视觉排版，还会影响文本光标移动、选择与复制、组件默认方向等行为。


```xml
<div dir="rtl">

</div>
```


设置元素布局模式，支持设置rtl、ltr和 auto 、空值四种属性值：


- "rtl"：使用从右往左布局模式。

- "ltr"：使用从左往右布局模式。

- "auto"：根据元素内容的首个强字符自动判定方向，与系统语言无关。（只对文本生效）

- 空值或不设置：继承最近祖先组件的方向（通常由根节点的 dir 决定）；若根节点也未设置，默认 LTR。

](#34-%E6%96%B9%E5%90%91%E5%86%B3%E7%AD%96%E9%93%BE)
### 3.4 方向决策链


- 局部元素显式 `dir`

- 最近祖先显式 `dir`

- 由系统语言 + `supportsRtl` 推导

- 默认：LTR

为方便应用获取方向，后面会提供返回根容器当前方向的方法`app.isLayoutRTL();`。


](#4%E5%B8%83%E5%B1%80%E7%BB%84%E4%BB%B6)
## 4.布局/组件


系统或框架提供与 RTL / LTR 无关的布局属性（如 `start`/`end`，Flexbox 的主/交叉轴属性），应用通过这些逻辑属性来实现多语言适配，无需为每种语言单独设计布局。布局方向会根据系统语言或手动设置自动调整。


](#41-flex%E5%B8%83%E5%B1%80)
### 4.1 Flex布局


Flex 布局本身支持 RTL。


- **方向属性**：`flex-direction`、`align-items`、`justify-content` 等标准属性不需要修改，但需要注意主轴方向和内容顺序在 RTL 下可能发生变化。

- **左右排版**：原本明确指定左右方向的布局，需要根据语言环境进行调整，以保证在 RTL 模式下视觉顺序正确。

垂直方向布局不受 RTL 影响。但如果后续涉及竖排文字布局，需要额外处理。


](#42-%E9%80%BB%E8%BE%91%E5%B1%9E%E6%80%A7)
### 4.2 逻辑属性


提供逻辑属性，应用不通过物理属性来描述具体方向。


- **物理属性**：直接描述具体方向，如 `margin-left`、`padding-right`、`border-right`。

- **逻辑属性**：描述**布局方向**而不是具体的物理方向，如：


- `margin-inline-start` → 左右方向的起始边（LTR: 左, RTL: 右）

- `margin-block-end` → 上下方向的结束边（块方向）


| 逻辑属性 | 说明 |
| --- | --- |
| margin-inline-start | 根据书写方向决定开始边距，LTR 中为左，RTL 中为右 |
| margin-inline-end | 根据书写方向决定结束边距，LTR 中为右，RTL 中为左 |
| margin-inline | 同时设置 start 和 end 边距 |
| padding-inline-start | 根据书写方向决定开始内边距，LTR 中为左，RTL 中为右 |
| padding-inline-end | 根据书写方向决定结束内边距，LTR 中为右，RTL 中为左 |
| padding-inline | 同时设置 start 和 end 内边距 |
| inset-inline-start | 对应 start 偏移，LTR 中为 left，RTL 中为 right |
| inset-inline-end | 对应 end 偏移，LTR 中为 right，RTL 中为 left |
| inset-inline | 同时设置 start 和 end 偏移 |
| border-inline-start | 起始边框，LTR 中对应左边，RTL 中对应右边 |
| border-inline-end | 结束边框，LTR 中对应右边，RTL 中对应左边 |
| border-inline-start-color | 起始边框颜色 |
| border-inline-end-color | 结束边框颜色 |
| border-inline-start-width | 起始边框宽度 |
| border-inline-end-width | 结束边框宽度 |
| text-align: start | 文本对齐到开始位置，LTR 为左，RTL 为右 |
| text-align: end | 文本对齐到结束位置，LTR 为右，RTL 为左 |


**CanvasRenderingContext2D.textAlign**


设置文字的对齐方式，需要适配RTL


**语法**


```ts
ctx.textAlign = align
```


**参数**


``


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| align | <string> | 'start'(默认),'end','left','center','right' |


**属性优先级说明：**


逻辑属性和物理属性没有特殊优先级，**都是普通 CSS 属性**，最终比较的是 `!important` → 权重 → 顺序。


``


| 优先级 | 示例 |
| --- | --- |
| 最高 | 带!important的声明 |
| 其次 | 选择器权重（行内样式 > ID > 类 > 元素） |
| 最后 | 同权重时，后写的覆盖先写的 |


**样式规范建议：**


- 同一规则中避免同时声明同语义的物理与逻辑属性；如需兼容存量，采用“物理属性先写、逻辑属性后写”的固定顺序，并加注释。

- 公共组件库对外暴露的主题变量统一使用逻辑属性命名，内部做映射。

- 建议配置样式扫描，识别物理/逻辑同语义并存的规则，提示潜在冲突。

](#43-%E5%9B%BE%E7%89%87%E9%95%9C%E5%83%8F)
### 4.3 图片镜像


为便捷处理方向性图标在 RTL 下的镜像，蓝河系统提供扩展图片样式属性 `mirroring`。


包含的组件有：image, svg-container


w3c 提供的 transform: scaleX(-1) 镜像方式，并不具备 auto 选项，且语义不强，故提供该扩展样式以便按方向自动处理。


```html
<div dir="ltr">
  <image src="arrow.png" class="arrow"/>
</div>
<style>
.arrow {
  mirroring: auto;
}
</style>
```


可选值：


```css
/* 值类型 */
mirroring: none | auto | always;
```


- none：不镜像翻转（默认行为）

- auto：在 RTL 环境下自动水平镜像

- always：始终水平镜像

也可通过资源替换实现镜像效果，参考第 5 章。


](#44-%E6%96%87%E5%AD%97%E6%8E%92%E7%89%88)
### 4.4 文字排版


在 RTL 模式下，文字会自动排版，并按照 Unicode 双向算法（Bidi Algorithm）处理 RTL/LTR 混排。


特殊情况：例如电话号码与阿拉伯文混排可能导致电话号码顺序异常，此时需要应用进行局部处理：


```html
<text>ولدت <span dir="ltr">(+86)138-3456-1000</span></text>
<text><span dir="ltr">ولدت</span> (+86)138-3456-1000</text>
```


](#5-%E8%B5%84%E6%BA%90%E6%96%87%E4%BB%B6)
## 5. 资源文件


资源文件用于对图片、文本等内容进行抽象处理，支持多语言和多区域的适配。应用通过切换配置文件（JSON）来实现不同语言的资源加载，无需修改布局或逻辑代码。


](#51-%E5%9B%BE%E7%89%87%E8%B5%84%E6%BA%90)
### 5.1 图片资源


当需要根据语言切换图片时，需要动态的引入图片资源。


其处理方法如下：


ar-SA.json


```json
{
  "logo": "/assets/image/ar-SA/logo.png",
  "hello": "ولدت"
}
```


zh-CN.json


```json
{
  "logo": "/assets/image/zh-CN/logo.png",
  "hello": "你好"
}
```


在布局文件中写法如下：


```html
<image src='{{$t("logo")}}'></image>
```


](#52-%E6%96%87%E6%9C%AC%E8%B5%84%E6%BA%90)
### 5.2 文本资源


```html
<text>{{$t("hello")}}</text>
```


](#6-%E5%B1%80%E9%83%A8%E7%89%B9%E6%AE%8A%E5%A4%84%E7%90%86)
## 6. 局部特殊处理


尽管大多数布局和文本可以通过逻辑属性、资源文件，自动适配 RTL/LTR，但在某些场景下仍需要局部定制处理。可通过 CSS 伪类、JS 判断或者框架提供的 API 对特定语言或方向进行样式或逻辑微调。


](#61-css%E4%B8%ADdir-%E4%BC%AA%E7%B1%BB)
### 6.1 css中:dir() 伪类


通过此伪类，定向调整RTL或者LTR的特殊处理。


可选择值：


```css
:dir(rtl) {
  /**rtl的样式**/
}
:dir(ltr) {
  /**ltr的样式**/
}
```


**示例：**


```html
<div dir="rtl">
  <text class="text">هذا نص من اليمين إلى اليسار (RTL)</text>
</div>
<style>
.text:dir(rtl) {
  background-color: #ffe0b2;
}
</style>
```


](#62-css%E4%B8%ADlang-%E4%BC%AA%E7%B1%BB)
### 6.2 css中:lang() 伪类


考虑到阿拉伯世界有许多不同的地区和文化，存在更细致的判断情况。


```css
/* 所有阿拉伯语（包括地区） */
.card:lang(ar) {
  font-family: 'Amiri', serif;
}

/* 只针对沙特阿拉伯的阿拉伯语 */
.card:lang(ar-SA) {
  background-color: #f0f0f0;
}

/* 英语（包括 en-GB、en-US） */
.card:lang(en) {
  color: blue;
}

/* 英式英语单独样式 */
.card:lang(en-GB) {
  color: green;
}
```


](#63-js-%E4%B8%AD%E5%88%A4%E6%96%ADrtl)
### 6.3 JS 中判断RTL


扩展`@blueos.app.context` 新增 isLayoutRTL 的判断。


```ts
import app from '@blueos.app.context'

const isRTL = app.isLayoutRTL();
```


](#64-rtl-%E7%8A%B6%E6%80%81%E5%8F%98%E5%8C%96%E5%88%A4%E6%96%AD)
### 6.4 RTL 状态变化判断


系统语言变化会触发onConfigurationChanged，此时在onConfigurationChanged中判断就可以了。


```ts
onConfigurationChanged(event) {
  if (event && event.type && event.type === 'locale') {
    const isRTL = app.isLayoutRTL();
    console.log('isRTL', isRTL)
  }
}
```


](#7-%E5%8D%95%E4%BD%8D%E6%97%A5%E6%9C%9F%E8%B4%A7%E5%B8%81%E6%97%B6%E9%97%B4%E7%AD%89)
## 7. 单位/日期/货币/时间等


需要应用自行实现，根据系统语言进行格式化。


](#8%E4%BA%A4%E4%BA%92%E5%8A%A8%E6%95%88)
### 8.交互/动效


API标准不涉及，这部分以交互为准。

---

# 应用配置

## file-organization

> 原文路径：/reference/configuration/file-organization/

](#%E6%96%87%E4%BB%B6%E7%BB%84%E7%BB%87)
# 文件组织


本文对项目的文件目录及相关内容进行了介绍，包括蓝河应用文件结构讲解，配置信息、新增页面等


](#%E9%A1%B9%E7%9B%AE%E4%BB%8B%E7%BB%8D)
## 项目介绍


通过 BlueOS Studio 新建一个项目，这个项目已经包含了**项目配置**与**示例页面**的初始代码，项目根目录主要结构如下：


```text
├── scripts                   工具脚本文件
├── src
│   ├── assets                公用资源
│   │   ├── images            图片资源
│   │   └── styles            应用样式
│   ├── pages                 页面目录
│   │   ├── Demo              应用首页
│   │   └── DemoDetail        应用详情页
│   ├── app.ux                app.ux文件。
│   └── manifest.json         项目配置文件，配置应用图标、页面路由等
└── jsconfig.json             js 配置文件，用于语法校验
└── package.json              定义项目需要的各种模块及配置信息
```


](#%E7%9B%AE%E5%BD%95%E7%9A%84%E7%AE%80%E8%A6%81%E8%AF%B4%E6%98%8E%E5%A6%82%E4%B8%8B)
### 目录的简要说明如下：


- **src**：项目源文件夹

- **app.ux** 文件用于全局 JavaScript 逻辑和应用生命周期管理，[详见](/api/extend/lifecycle/)

](#%E9%85%8D%E7%BD%AE%E4%BF%A1%E6%81%AF)
## 配置信息


每个应用都要有专属的名称，图标等，这些信息都需要在`manifest.json`文件中配置。详见文档[manifest 文件](/reference/configuration/manifest)


](#%E5%BA%94%E7%94%A8%E5%8C%85%E5%90%8Dpackage)
### 应用包名（package）


应用包名，是区别于其他应用的唯一标识


推荐采用 com.company.module 的格式，示例如下：


```json
{
  "package": "com.example.demo"
}
```


](#%E5%BA%94%E7%94%A8%E5%90%8D%E7%A7%B0name)
### 应用名称（name）


应用名称，6 个汉字以内，与应用商店保存的名称一致；框架提供保存到桌面的功能，桌面上显示的应用名即为此属性


示例如下：


```json
{
  "name": "发票小助手"
}
```


](#%E5%BA%94%E7%94%A8%E5%9B%BE%E6%A0%87icon)
### 应用图标（icon）


规则为正方形（不能是圆角），且务必无白边


```json
{
  "icon": "/assets/images/logo.png"
}
```


](#%E5%BA%94%E7%94%A8%E7%89%88%E6%9C%AC%E5%90%8D%E7%A7%B0%E7%89%88%E6%9C%AC%E5%8F%B7versionnameversioncode)
### 应用版本名称、版本号（versionName、versionCode）


应用版本名称、版本号为开发者的应用包维护的版本信息


应用版本名称为`主版本.次版本`格式


应用版本号为整数，从`1`开始，每次更新上架请自增 1


示例如下：


```json
{
  "versionName": "1.0",
  "versionCode": 1
}
```


](#%E9%85%8D%E7%BD%AE%E6%8E%A5%E5%8F%A3%E5%88%97%E8%A1%A8features)
### 配置接口列表（features）


在使用接口时，需要先在 manifest 中声明接口。在每个接口文档的顶部，都附有声明接口的配置代码


以 fetch 网络请求为例，示例如下：


```json
{
  "features": [{ "name": "blueos.communication.network.fetch" }]
}
```


](#%E6%96%B0%E5%A2%9E%E9%A1%B5%E9%9D%A2)
## 新增页面


新增及配置页面，需要依赖`manifest.json`中`router`配置


](#router)
### router


`router`，路由，用于定义页面的实际地址、跳转地址。如果 ux 页面没有配置路由，则不参与项目编译。一个目录下最多只能存在一个主页面文件（不包括组件文件）


](#%E9%A6%96%E9%A1%B5-routerentry)
#### 首页 (router.entry)


首页，即应用平台启动时默认打开的页面。首页需配置为应用中某页面的名称，即在`<ProjectName>/src`目录下，**页面目录的相对路径**


假设工程根目录如下所示


```text
└── src
    └── Demo                  页面目录，存放各自页面私有的资源文件和组件文件
        └── index.ux          页面文件，文件名不必与父文件夹相同（推荐index.ux）
```


假设首页为 Demo 目录下的 index.ux 文件，则首页对应的页面名称为`Demo`


```json
{
  "router": {
    "entry": "Demo"
  }
}
```


](#%E9%A1%B5%E9%9D%A2%E8%B7%AF%E7%94%B1%E5%AF%B9%E8%B1%A1routerpages)
#### 页面路由对象（router.pages）


页面路由对象，key 为页面名称（`<ProjectName>/src`目录下，**页面目录的相对路径**），value 为页面具体路由配置，key 不要重复


页面具体路由配置（router.pages 的 value）包括以下属性：


- **component**：页面对应的 ux 文件名

- **path**：页面路径，不填则默认为页面名称（`<ProjectName>/src`目录下，页面目录的**相对路径**）

示例如下：


假设工程根目录如下所示


```text
└── src
    |── Demo                  页面目录，存放各自页面私有的资源文件和组件文件
    |   └── index.ux          页面文件，文件名不必与父文件夹相同（推荐index.ux）
    └── Doc
        └── Layout            页面目录，存放各自页面私有的资源文件和组件文件
            └── index.ux      页面文件，文件名不必与父文件夹相同（推荐index.ux）
```


当页面名称（router.pages 的 key）为`Demo`时，对应的页面配置（router.pages 的 value）包括：


- **component**：页面对应的 ux 文件名`index`

- **path**：页面路径，默认为页面名称`Demo`


```json
{
  "router": {
    "pages": {
      "Demo": {
        "component": "index"
      },
      "Doc/Layout": {
        "component": "index"
      }
    }
  }
}
```


现在，开发者就可以通过`/Demo`访问到 Demo 目录下的 index.ux 页面了

---

## intro

> 原文路径：/reference/configuration/intro/

](#%E6%A1%86%E6%9E%B6%E7%AE%80%E4%BB%8B)
# 框架简介


蓝河应用框架采用了类 web 开发范式，具有学习成本低，开发效率高的特点。框架提供了丰富的 UI 组件与样式，开发者可以因此高效搭建界面。同时框架提供了两套 API 接口，开发者可以按需选择。


](#%E6%95%B0%E6%8D%AE%E7%BB%91%E5%AE%9A)
## 数据绑定


数据绑定可以让数据与视图非常简单地保持同步。当做数据修改的时候，只需要在逻辑层修改数据，视图层就会做相应的更新。数据绑定的具体使用参看[数据绑定](/reference/app-service/data-binding/) 。


](#%E8%B7%AF%E7%94%B1%E7%AE%A1%E7%90%86)
## 路由管理


框架负责管理整个应用的页面路由，实现页面间的无缝切换，管理每个页面的完整生命周期。开发者需要将页面在 manifest.json 中进行注册，在代码中通过框架提供的接口方法实现页面的切换。具体使用参看[manifest 文件](/reference/configuration/manifest)、[页面路由](/api/system/router)和[页面启动模式](/reference/extend/launch-mode)。


](#ui-%E7%BB%84%E4%BB%B6)
## UI 组件


提供了基础、表单，布局/容器、画布、导航、动画、系统风格等类型的一系列组件。通过参看[UI 组件](/component/common/rule/)，您可以了 UI 组件解更详细的信息。


](#api-%E6%8E%A5%E5%8F%A3)
## API 接口


蓝河应用提供了 JS API 和 Native API 两种接口，以支撑高效和高性能的开发场景。如果您需要了解更多关于这些开放能力的信息，请移步[JS 功能接口](/api/system/app/)与[Native API](/native/quickstart/introduction/)进行了解。


](#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F)
## 生命周期


生命周期是指在程序运行的过程中，程序从创建、运行到销毁的整个过程。在这个过程中，程序会经历多个状态和阶段，每个阶段都会触发一些特定的回调函数，用于执行相应的操作和处理，这些回调函数被称为生命周期函数。


蓝河应用提供了自定义组件、页面与应用的生命周期函数，让开发者有机会在特定阶段运行相应的代码。如果您需要了解更多关于生命周期的信息，请移步[生命周期](/api/extend/lifecycle/)

---

## manifest

> 原文路径：/reference/configuration/manifest/

](#manifest-%E6%96%87%E4%BB%B6)
# manifest 文件


manifest.json 文件中包含了应用描述、接口声明、页面路由信息


](#manifest)
## manifest


****


****


``


``**``**


[FeatureInfo](#featureinfo)


[Config](#config)


[Router](#router)


````````````


[Display](#display)


[PermissionInfo](#permissioninfo)


[AppCategory](#appcategory)


``


[DistrubuteRules](#distrubuterules)


[WidgetProvider](#widgetprovider)


| 属性 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| package | string | - | 是 | 应用包名，确认与原生应用的包名不一致，推荐采用 com.company.module 的格式，如：com.example.demo |
| name | string | - | 是 | 应用名称，6 个汉字以内，与应用商店保存的名称一致，用于在桌面图标、弹窗等处显示应用名称 |
| icon | string | - | 是 | 应用图标，提供 114x114 大小的即可 |
| versionName | string | - | 否 | 应用版本名称，如："1.0" |
| versionCode | number | - | 是 | 应用版本号，从1自增，推荐每次重新上传包时versionCode+1 |
| features | [] | - | 否 | 接口列表，绝大部分接口都需要在这里声明，否则不能调用，详见每个接口的文档说明 |
| config |  | - | 是 | 系统配置信息，详见下面说明 |
| router |  | - | 是 | 路由信息，详见下面说明 |
| deviceTypeList | Array<string> | watch | 否 | 可选值有：watch,watch-square,watch-round,tv,car,phone |
| display |  | - | 否 | UI 显示相关配置，详见下面说明 |
| permissions | [] | - | 否 | 权限申请示例:[{ "name": "watch.permission.LOCATION" }] |
| appCategory | [] | - | 是 | 应用类别,可选值详见下文应用类别说明,最多 2 个分类 |
| customData | Record<string, string> | - | 否 | 开发者自定义字段，限定不超过 30 个字符，可通过packageManager.getCustomData()方法读取 |
| distrubuteRules |  | - | 否 | 表示分发规则，定义包对应的细分设备规格的分发策略，以便在应用市场进行云端分发应用包时做精准匹配。该标签可配置的分发策略维度包括 minAPILevel |
| widgetProvider | [] | - | 否 | 注册和生命 widgetProvider，为蓝河智慧服务卡片提供数据 |


](#appcategory)
### AppCategory


appCategory 要求开发者必填，如有开发者未填，系统将设置为 ['other']。


| 取值 | 说明 |
| --- | --- |
| business | 商业类应用 |
| education | 教育类应用 |
| pastime | 娱乐类应用 |
| finance | 财务类应用 |
| games | 游戏类应用 |
| lifestyle | 生活方式类应用 |
| medical | 医疗类应用 |
| music | 音乐类应用 |
| news | 新闻类应用 |
| photography | 摄影类应用 |
| reference | 参考资料类应用 |
| social | 社交类应用 |
| sports | 体育类应用 |
| travel | 旅游类应用 |
| utilities | 实用工具类应用 |
| video | 视频类应用 |
| weather | 天气类应用 |
| navigation | 导航类应用 |
| book | 书籍类应用 |
| shopping | 购物类应用 |
| podcasts | 播客类应用 |
| audiobooks | 音频书籍类应用 |
| radio | 电台类应用 |
| other | 其它类应用 |


](#featureinfo)
### FeatureInfo


声明应用需要使用的 feature


| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| name | string | - | feature 名称，可在具体 feature 的说明文档中查阅 |


**示例：**


```json
{
  "name": "blueos.storage.file"
}
```


](#config)
### Config


用于定义系统配置和全局数据。


| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| designWidth | number | - | 页面设计基准宽度，根据实际设备宽度来缩放元素大小，建议使用 466 |


**示例：**


```json
{
  "designWidth": 466
}
```


](#router)
### Router


用于定义页面的组成和相关配置信息，如果页面没有配置路由信息，则在编译打包时跳过。


[Page](#page)


| 属性 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| entry | string | - | 是 | 首页名称 |
| pages | Record<string,> | - | 是 | 页面配置列表，key 值为页面名称（对应页面目录名，例如 Hello 对应'Hello'目录），value 为页面详细配置 page，详见下面说明 |


**示例：**


```json
{
  "entry": "Demo",
  "pages": {
    "Demo1": {
      "component": "index"
    },
    "Demo2": {
      "component": "index"
    }
  }
}
```


](#page)
### Page


用于定义单个页面路由信息。


``


[LaunchMode](#launchmode)


| 属性 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| component | string | - | 是 | 页面对应的组件名，与 ux 文件名保持一致，例如'hello' 对应 'hello.ux'，目前仅支持 index.ux |
| path | string | /<页面名称> | 否 | 页面路径，例如“/user”,不填则默认为/<页面名称>。path 必须唯一,不能和其他 page 的 path 相同。下面 page 的 path 因为缺失,会被设置为“/Index”："Index": {"component": "index"} |
| launchMode |  | standard | 否 | 声明页面的启动模式 |
| followHand | string | enable | 否 | 配置页面是否支持右滑跟手，disable：不支持；enable：支持 |


](#launchmode)
### LaunchMode


页面的启动模式


| 取值 | 说明 |
| --- | --- |
| singleTask | 每次打开目标页面都会打开已有的目标页面并回调 onRefresh 生命周期函数，清除该页面上打开的其他页面，没有打开过此页面时会创建新的目标页面实例。 |
| standard | 每次打开新的目标页面（多次打开目标页面地址时会存在多个相同页面） |


](#display)
### Display


用于定义与 UI 显示相关的配置。


如果在 display 对象下定义以下属性值，则生效范围为此蓝河应用全部页面；


| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| backgroundColor | string | #000 | 窗口背景颜色 |


**示例：**


```json
{
  "backgroundColor": "#ffffff"
}
```


](#permissioninfo)
### PermissionInfo


权限配置信息


[PermissionName](#permissionname)


| 属性 | 类型 | 默认值 | 含义 |
| --- | --- | --- | --- |
| name |  | - | 权限名 |


**示例：**


```json
{
  "name": "watch.permission.LOCATION"
}
```


](#distrubuterules)
### DistrubuteRules


分发规则详细信息


| 属性 | 类型 | 默认值 | 含义 |
| --- | --- | --- | --- |
| minAPILevel | number | 1 | 表示最低的 APILevel 要求，只有支持该 APILevel 的系统版本，才能被分发。 |


**示例：**


```json
{
  "minAPILevel": 2
}
```


](#widgetprovider)
### WidgetProvider


widgetProvider 详细配置信息


| 属性 | 类型 | 必填 | 默认值 | 含义 |
| --- | --- | --- | --- | --- |
| name | string | 是 | - | widgetProvider 名称 |
| path | string | 是 | - | widgetProvider 的 js 文件路径 |


**示例：**


```json
{
  "name": "music",
  "path": "/widgetProvider/index.js"
}
```


](#permissionname)
### PermissionName


权限名及模块接口信息，该信息也可以在具体的模块文档中查看。


| 权限名 | 模块 | 说明 | 权限错误码 |
| --- | --- | --- | --- |
| watch.permission.LOCATION | @blueos.hardware.geolocation | 位置信息 | 400 : 拒绝授予权限, 402: 权限错误（未声明该权限） |
| watch.permission.STEP_COUNTER | @blueos.hardware.sensor | 计步传感器 | 400 : 拒绝授予权限, 402: 权限错误（未声明该权限） |
| watch.permission.DEVICE_INFO | @blueos.hardware.device | 设备信息 | 400: 拒绝授予权限 , 402: 权限错误（未声明该权限） |
| watch.permission.RECORD | @blueos.multimedia.record | 录音 | 400: 拒绝授予权限, 401: 敏感权限不能在后台运行, 402: 权限错误（未声明该权限） |
| watch.permission.BLUETOOTH | @blueos.communication.bluetooth.bluetooth@vivo.bluetooth | 允许使用设备蓝牙 | 400 : 拒绝授予权限, 402: 权限错误（未声明该权限） |
| watch.permission.READ_HEALTH_DATA | @blueos.health.health@vivo.health | 读取健康数据 | 400 : 拒绝授予权限, 402: 权限错误（未声明该权限） |

---

## script

> 原文路径：/reference/configuration/script/

](#javascript-%E4%BB%A3%E7%A0%81)
# javascript 代码


用来定义页面数据和实现生命周期接口


](#%E8%AF%AD%E6%B3%95)
## 语法


支持 ES6 语法


](#%E6%A8%A1%E5%9D%97%E5%A3%B0%E6%98%8E)
### 模块声明


蓝河应用中支持`ES6`的`module`标准，使用`import`引入 js 依赖，同时支持 CommonJs 规范，使用`require`引入 js 依赖（具体参看功能接口部分文档说明）


```ts
// 首先在 `manifest.json` 中配置 `fetch` 接口

// require引入
const fetch = require('@blueos.communication.network.fetch')

// import引入
import fetch from '@blueos.communication.network.fetch'
```


](#%E4%BB%A3%E7%A0%81%E5%BC%95%E7%94%A8)
### 代码引用


JS 代码引用推荐使用 import 来导入, 例如：


```ts
import utils from '../Common/utils.js'
```


**注意**： 蓝河应用环境不是 node 环境，不要引用 node 原生模块，如 `import fs from 'fs'`


](#%E5%AF%B9%E8%B1%A1)
## 对象


蓝河应用的组件对象提供了一些属性和方法，用于控制组件的渲染、数据处理、组件逻辑等方面


](#%E9%A1%B5%E9%9D%A2%E7%BA%A7%E7%BB%84%E4%BB%B6%E5%AF%B9%E8%B1%A1)
### 页面级组件对象


| 属性 | 类型 | 描述 |
| --- | --- | --- |
| data | Object | Function | 页面级组件的数据模型，能够转换为 JSON 对象；属性名不能以$或_开头, 不要使用 for, if, show, tid 等保留字如果是函数，返回结果必须是对象，在组件初始化时会执行函数获取结果作为 data 的值使用 data 方式声明的属性会被外部数据覆盖，因此存在一定安全风险。 |


](#%E7%A4%BA%E4%BE%8B)
#### 示例


```ts
<template>
  <div class="wrapper">
    <text>{{title}]</text>
  </div>
</template>

<script>
export default {
  data: {
    title: 'Hello Word'
  },
}
</script>
```


](#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E5%AF%B9%E8%B1%A1)
### 自定义组件对象


``


| 属性 | 类型 | 描述 |
| --- | --- | --- |
| data | Object | Function | 自定义组件的数据模型，能够转换为 JSON 对象；属性名不能以$或_开头, 不要使用 for, if, show, tid 等保留字如果是函数，返回结果必须是对象，在组件初始化时会执行函数获取结果作为 data 的值 |
| props | Array | Object | 定义组件外部可传入的所有属性；属性名不能以$或_开头, 不要使用 for, if, show, tid 等保留字在模板代码中，请使用短横线分隔命名代替驼峰命名。如，属性定义 props: ['propA']，可通过<tag prop-a='xx'>方式传递到组件内部 |


](#%E7%A4%BA%E4%BE%8B-1)
#### 示例


```ts
<template>
  <div class="wrapper">
    <text>{{title}]</text>
    <text>{{name}]</text>
  </div>
</template>

<script>
export default {
  data: {
    title: 'child component'
  },
  props: ['name']
}
</script>
```


想了解更多信息可以参考[自定义组件](/d1fdaffab435ae87702643b278392a52/parent-child-component-communication.md)


](#%E5%85%AC%E5%85%B1%E5%AF%B9%E8%B1%A1)
### 公共对象


````


| 属性 | 类型 | 描述 |
| --- | --- | --- |
| $app | Object | 应用对象 |
| $page | Object | 页面对象 |
| $valid | Boolean | 页面对象是否有效 |
| $device | { deviceType: string } | 获取当前设备类型。watch-square：方形手表，watch-round：圆形手表 |


](#%E5%BA%94%E7%94%A8%E5%AF%B9%E8%B1%A1)
### 应用对象


可通过`$app`访问


````


| 属性 | 类型 | 描述 |
| --- | --- | --- |
| $def | Object | 使用this.$app.$def获取在app.ux中暴露的对象 |


](#%E6%96%B9%E6%B3%95)
## 方法


](#%E5%85%AC%E5%85%B1%E6%96%B9%E6%B3%95)
### 公共方法


``


| 属性 | 类型 | 参数 | 描述 |
| --- | --- | --- | --- |
| $element | Function | id: String 组件 id | 获取指定 id 的组件调用来对应的组件方法 |
| $set | Function | key: String 属性名称value: Any | 添加数据属性，用法：this.$set('key',value) |


](#%E4%BA%8B%E4%BB%B6%E6%96%B9%E6%B3%95)
### 事件方法


````


| 属性 | 类型 | 参数 | 描述 |
| --- | --- | --- | --- |
| $watch | Function | data: String 属性名, 支持'a.b.c'格式，不支持数组索引handler: String 事件句柄函数名, 函数的第一个参数为新的属性值，第二个参数为旧的属性值 | 动态添加属性/事件绑定，属性必须在 data 中定义，handler 函数必须在<script>定义；当属性值发生变化时事件才被触发用法：this.$watch('a','handler') |


](#%E5%BA%94%E7%94%A8%E6%96%B9%E6%B3%95)
### 应用方法


可通过`$app`访问


``


| 属性 | 类型 | 参数 | 描述 |
| --- | --- | --- | --- |
| exit | Function | 无 | 退出蓝河应用，结束应用生命周期。调用方法：this.$app.exit() |


该 feature 依赖 `blueos.app.app`, 请确保在 `manifest.json` 中引入


](#%E9%A1%B5%E9%9D%A2%E6%96%B9%E6%B3%95)
### 页面方法


可通过`$page`访问


``


| 属性 | 类型 | 参数 | 描述 |
| --- | --- | --- | --- |
| setStopGestureQuit | Function | Number | 是否屏蔽手势返回，1 - 屏蔽。0 - 不屏蔽。调用方法：this.$page.setStopGestureQuit(1) |


该 feature 依赖 `blueos.app.router`, 请确保在 `manifest.json` 中引入

---

## style-sheet

> 原文路径：/reference/configuration/style-sheet/

](#style-%E6%A0%B7%E5%BC%8F)
# style 样式


用于描述 template 模板的组件样式，决定组件应该如何显示


样式布局采用 CSS Flexbox（弹性盒）样式，针对部分原生组件，对 CSS 进行了少量的扩充以及修改


为了解决屏幕适配问题，所有与大小相关的样式（例如 width、font-size）均以基准宽度（默认 750px）为基础，根据实际屏幕宽度进行缩放


](#%E6%96%87%E4%BB%B6%E5%AF%BC%E5%85%A5)
## 文件导入


支持@import 导入外部文件


```html
<style>
  @import './style.css';
  .a {
  }
</style>
```


](#%E6%A8%A1%E6%9D%BF%E5%86%85%E9%83%A8%E6%A0%B7%E5%BC%8F)
## 模板内部样式


支持使用 style、class 属性来控制组件的样式


```html
<!-- 内联inline -->
<div style="color: #f00; margin: 10px;" />
<!-- class声明 -->
<div class="normal append" />
```


](#%E4%BC%AA%E7%B1%BB)
## 伪类


css 伪类是选择器中的关键字，用于指定要选择元素的特殊状态。


| 名称 | 支持组件 | 描述 |
| --- | --- | --- |
| :active | 通用 | 表示被用户激活的元素，如：被用户按下的按钮。 |


](#%E9%80%89%E6%8B%A9%E5%99%A8)
## 选择器


支持的选择器有：


| 选择器 | 样例 | 样例描述 |
| --- | --- | --- |
| .class | .intro | 选择所有拥有 class="intro" 的组件 |
| #id | #firstname | 选择拥有 id="firstname" 的组件 |
| tag | div | 选择所有 div 组件 |
| , | .a, .b | 选择所有 class=“.a” 以及 class=“.b”的组件 |
| #id .class tag | .page .body text | 支持 id,class,tag 的后代选择器，也可以使用">"表示直接后代 |


```html
<style>
  /* 单个选择器 */
  text {
  }
  .class-abc {
  }
  #idAbc {
  }
  /* 后代选择 */
  .doc-page #testTag div text {
  }
  .doc-page #test-class .class1 {
  }
  .doc-page #testId #testIdId1 {
  }
  /* 直接后代选择 */
  .doc-page #testTag .flex-column > text {
  }
  /* 同一样式适应多个选择器 */
  .font-text,
  .font-comma {
  }
</style>
```


注意，选择器声明的变化可能会导致元素重新绘制。为了减少选择器变化引起的 DOM 更新数量，**当前只支持：CSS 声明的多个选择器中最后一个规则的变更对 DOM 的更新**


```html
<template>
  <div class="{{docBody}}">
    <text class="{{rowDesc}}">描述内容</text>
  </div>
</template>

<style>
  .doc-body .row-desc1 {
    color: #ff0000;
  }
  .doc-body .row-desc2 {
    color: #0000ff;
  }
  .doc-body2 .row-desc1 {
    color: #00ff00;
  }
</style>

<script>
  export default {
    // 页面级组件的数据模型
    data: {
      rowDesc: 'row-desc1',
      docBody: 'doc-body',
    },
  }
</script>
```


以上的代码示例，当我们把`rowDesc变量`从`row-desc1`变为`row-desc2`时是通知 Native 更新节点样式，但是如果把`docBody变量`从`doc-body`变为`doc-body2`，是不会通知 DOM 更新的。


因为`doc-body`不是最后一个选择器，非末尾的选择器变更有可能影响很多 DOM 元素，从而影响到渲染性能


](#%E9%80%89%E6%8B%A9%E5%99%A8%E4%BC%98%E5%85%88%E7%BA%A7)
## 选择器优先级


当前样式的选择器的优先级计算保持与浏览器一致，是浏览器 CSS 渲染的一个子集（仅支持：inline, id, class, tag, 后代，直接后代）


多条 CSS 声明可以匹配到同一个元素 如 div，应用在该元素上的 CSS 声明总体优先级是：inline > #id > .class > tag，这四大类匹配到该元素的多个 CSS 声明，如：`#page .class-div`和`.page .class-div`，其优先级按照各选择器的权值高低之和来比较


-
`ID选择器`（例如: #hello）的权值为 10000


-
`类选择器`（例如: .example）的权值为 100


-
`类型选择器`（例如: h1）的权值为 1


css 的优先级计算文档也可以查看 [MDN 文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity) 入门


那么以下 CSS 声明计算的权值为：


-
`#page`的权值为：10000


-
`#page .class-div`的权值为：10100


-
`#page .class-div text`的权值为 10101


-
`#page #body .container div text`的权值为：20102


因此：


- `#page .class-div`和`.page .class-div`比较，权值不一样，权值高优先级高；如果权值相同，则按照声明顺序：后者覆盖前者

](#%E6%A0%B7%E5%BC%8F%E9%A2%84%E7%BC%96%E8%AF%91)
## 样式预编译


目前蓝河应用支持`less`与`sass`的预编译，具体教程也可以参考[[这里]](https://less.bootcss.com/)


```html
<!--导入外部文件, 代替style内部样式-->
<style lang="less" src="./lessFile.less"></style>

<!--合并外部文件-->
<style lang="less">
  @import './lessFile.less';
  .page-less {
    #testTag {
      .less-font-text,
      .less-font-comma {
        font-size: 60px;
      }
    }
  }
</style>
```


](#%E5%AA%92%E4%BD%93%E6%9F%A5%E8%AF%A2)
## 媒体查询


媒体查询（Media Query）在移动设备上应用十分广泛，开发者经常需要根据设备的大致类型或者特定的特征和设备参数（例如屏幕分辨率）来修改应用的样式。为此媒体查询提供了如下功能：


1.针对设备和应用的属性信息，可以设计出相匹配的布局样式。 2.当屏幕发生动态改变时（比如分屏、横竖屏切换），应用页面布局同步更新。


](#css-%E8%AF%AD%E6%B3%95%E8%A7%84%E5%88%99)
## CSS 语法规则


使用@media 来引入查询语句，具体规则如下：


```css
@media [media-type] [and|not|only] [(media-feature)] {
  CSS-Code;
}
```


](#%E4%B8%BE%E4%BE%8B)
## 举例：


```css
/* level3的写法, 表示：宽度小于30dp时生效 */
@media (max-width: 30) {  .box {
    background-color: red;
  }
}
/* level4的写法，比level3更清晰简洁，表示：宽度小于30dp时生效 */
@media (width <= 30) {  .box {
    background-color: red;
  }
}
/* 多条件写法，表示：宽度大于400dp且小于700dp时生效 */
@media screen and (min-width: 400) and (max-width: 700) {  .box {
    background-color: red;
  }
}
/* 多条件level4写法，表示：宽度大于400dp且小于700dp时生效  */
@media (400 <= width <= 700) {  .box {
    background-color: red;
  }
}
/* 多条件写法，表示：方表和手机上生效 */
@media screen and (device: watch-square) or screen and (device: phone) {  .box {
    background-color: red;
  }
}
```


](#%E9%A1%B5%E9%9D%A2%E4%B8%AD%E5%BC%95%E7%94%A8%E8%B5%84%E6%BA%90)
## 页面中引用资源


通过@import 方式引入媒体查询，具体使用方法如下：


```css
@import url [media-type] [and|not|only] [(media-feature) ];
```


例如：


```css
@import '../common/style.css' screen and (min-width: 600) and (max-width: 1200);
```


](#%E5%8A%A8%E6%80%81%E4%BF%AE%E6%94%B9%E6%A0%B7%E5%BC%8Fa-id%E5%8A%A8%E6%80%81%E4%BF%AE%E6%94%B9%E6%A0%B7%E5%BC%8Fa)
## 动态修改样式


动态修改样式有多种方式，包括但不限于以下：


- **修改 class**：更新组件的 class 属性中使用的变量的值

- **修改内联 style**：更新组件的 style 属性中的某个 CSS 的值

- **修改绑定的对象**：通过绑定的对象控制元素的样式

- **修改绑定的样式字符串**：通过样式字符串控制元素的样式

**示例如下：**


```html
<template>
  <div style="flex-direction: column;">
    <!-- 修改 class -->
    <text class="normal-text {{ className }}" onclick="changeClassName">点击我修改文字颜色</text>
    <!-- 修改内联 style -->
    <text style="color: {{ textColor }}" onclick="changeInlineStyle">点击我修改文字颜色</text>
    <!-- 修改绑定的对象 -->
    <text style="{{ styleObj }}" onclick="changeStyleObj">点击我修改文字颜色</text>
    <!-- 修改绑定的样式字符串  -->
    <text style="{{ styleText }}" onclick="changeStyleText">点击我修改文字颜色</text>
  </div>
</template>

<style>
  .normal-text {
    font-weight: bold;
  }
  .text-blue {
    color: #0faeff;
  }
  .text-red {
    color: #f76160;
  }
</style>

<script>
  export default {
    data: {
      className: 'text-blue',
      textColor: '#0faeff',
      styleObj: {
        color: '#f00',
      },
      styleText: 'color: #0f0',
    },
    changeClassName() {
      this.className = 'text-red'
    },
    changeInlineStyle() {
      this.textColor = '#f76160'
    },
    changeStyleObj() {
      this.styleObj = {
        color: '#00f',
      }
    },
    changeStyleText() {
      this.styleText = 'color: #0f0'
    },
  }
</script>
```


](#%E5%BC%95%E5%85%A5-lessscss-%E9%A2%84%E7%BC%96%E8%AF%91a-id%E5%BC%95%E5%85%A5lessscss%E9%A2%84%E7%BC%96%E8%AF%91a)
## 引入 less/scss 预编译


](#less-%E7%AF%87)
### less 篇


less 语法入门请参考[less 中文官网](https://less.bootcss.com/) 学习


使用 less 请先安装相应的类库：`less`、`less-loader`，


```bash
npm i less less-loader
```


在`<style>`标签上添加属性`lang="less"`


```html
<template>
  <div class="tutorial-page">
    <text id="title">less示例!</text>
  </div>
</template>
<style lang="less">
  /* 引入外部less文件 */
  @import './style.less';
  /* 使用less */
</style>
```


](#scss-%E7%AF%87)
### scss 篇


scss 语法入门请参考 [[scss 中文官网]](https://www.sasscss.com/)学习


使用 scss 请在蓝河应用项目下执行以下命令安装相应的类库：`node-sass`、`sass-loader`，


```bash
npm i node-sass sass-loader
```


在`<style>`标签上添加属性`lang="scss"` **示例如下：**


```html
<template>
  <div class="tutorial-page">
    <text id="title">less示例!</text>
  </div>
</template>

<style lang="scss">
  /* 引入外部scss文件 */
  @import './style.scss';
  /* 使用scss */
</style>
```


](#%E5%AA%92%E4%BD%93%E7%B1%BB%E5%9E%8B)
## 媒体类型


| 类型 | 说明 |
| --- | --- |
| screen | 按屏幕相关参数进行媒体查询。 |


](#%E5%AA%92%E4%BD%93%E9%80%BB%E8%BE%91%E6%93%8D%E4%BD%9C)
## 媒体逻辑操作


开发者可以使用逻辑操作符组合多个媒体特性的查询条件，编写复杂的媒体查询。


| 类型 | 说明 |
| --- | --- |
| and | and 运算符用于将多个媒体特性组合到一个单独的媒体查询中，要求每个链接的特性返回 true，则此时查询为真。 |
| not | not 运算符用于否定媒体查询，如果查询不返回 false，则返回 true。如果出现在逗号分隔的列表中，它只会否定应用它的特定查询。如果使用 not 运算符，则必须指定显式媒体类型。例如：not screen and (min-width: 400) and (max-width: 700)注：not 关键字不能用于否定单个功能表达式，它会作用于整个媒体查询。 |
| only | only 运算符仅用于整个查询匹配应用样式,蓝河应用处理以 only 开头的关键词时将会忽略 only。如果使用 only 运算符，必须指定媒体类型。例如：only screen and (min-width: 400) and (max-width: 700) |
| ,(逗号) | 逗号分隔效果等同于 or 逻辑操作符。当使用逗号分隔的媒体查询时，如果任何一个媒体查询返回真，样式就是有效的。例如：(orientation: landscape), (height >= 690)。 |
| or | or 运算符用于将多个媒体特性比较语句组合到一个媒体查询语句中，只要有其中一条媒体特性比较语句返回 true，查询成立。例如：(min-width: 400) or (max-width: 700) |
| <= | 小于等于。例如： (400 <= width)。 |
| >= | 大于等于。例如： (500 >= height)。 |
| < | 小于。例如： (400 < width)。 |
| > | 大于。例如： (500 > height)。 |


](#%E5%AA%92%E4%BD%93%E7%89%B9%E6%80%A7)
## 媒体特性


``````````````````


| 类型 | 说明 | 查询时是否带单位 | 支持单位 |
| --- | --- | --- | --- |
| height | 定义输出设备中的页面可视区域高度。 | 否 | dp |
| min-height | 定义输出设备中的页面可视区域最小高度。 | 否 | dp |
| max-height | 定义输出设备中的页面可视区域最大高度。 | 否 | dp |
| width | 定义输出设备中的页面可视区域宽度。 | 否 | dp |
| min-width | 定义输出设备中的页面可视区域最小宽度。 | 否 | dp |
| max-width | 定义输出设备中的页面可视区域最大宽度。 | 否 | dp |
| orientation | 定义屏幕处于横屏模式还是竖屏模式，支持属性：portrait（竖屏）、landscape（横屏）。 | 否 | 无 |
| aspect-ratio | 定义输出设备中的页面可见区域宽高比，比例值需要按照 x / y 的格式，例如 1 / 2。 | 否 | 无 |
| min-aspect-ratio | 定义输出设备中的页面可见区域最小宽高比，参数要求同上。 | 否 | 无 |
| max-aspect-ratio | 定义输出设备中的页面可见区域最大宽高比，参数要求同上。 | 否 | 无 |
| device | device 的可选值为:phone、watch、car、tv、pad、watch-square、watch-round，watch默认watch-square | 否 | 无 |

---

## ux-file

> 原文路径：/reference/configuration/ux-file/

](#ux-%E6%96%87%E4%BB%B6)
# UX 文件


APP、页面和自定义组件均通过 ux 后缀文件编写，ux 后缀文件由 [javascript 代码](/reference/configuration/script)、template 模板和[style 样式](/reference/configuration/style-sheet) 3 个部分组成，一个典型的页面 ux 后缀文件示例如下：


```html
<script>
  import router from '@blueos.app.router'

  export default {
    // 页面级组件的数据模型
    data: {
      title: '示例页面',
    },
    routeDetail() {
      // 跳转到应用内的某个页面，router用法详见：文档->接口->页面路由
      router.push({
        uri: '/DemoDetail',
      })
    },
  }
</script>

<template>
  <!-- template里只能有一个根节点 -->
  <div class="flex flex-col justify-center items-center">
    <text class="text-4xl text-center">欢迎打开{{title}}</text>
    <!-- 点击跳转详情页 -->
    <input class="w-[550px] h-[86px] mt-[75px] rounded-[43px] bg-[#09ba07] text-3xl text-white" type="button" value="跳转到详情页" onclick="routeDetail" />
  </div>
</template>

<style>
@tailwind utilities;
</style>
```


](#appux)
## app.ux


当前`app.ux`编译后会包含`manifest配置信息`，所以请不要删除`/**manifest**/`的注释内容标识。


您可以在`<script>`中引入一些公共的脚本，并暴露在当前 app 的对象上，如下所示，然后就可以在页面 ux 文件的 ViewModel 中，通过`this.$app.$def.util`访问。


```html
<script>
  /**
   * 应用级别的配置，供所有页面公用
   */
  import util from './util'

  export default {
    showMenu: util.showMenu,
    createShortcut: util.createShortcut,
    util,
  }
</script>
```

---

# 快速开始

## introduction

> 原文路径：/reference/quickstart/introduction/

](#%E6%A6%82%E8%BF%B0)
# 概述


蓝河应用开发采用类 web 开发范式，使用 UI 组件来搭建页面布局，使用样式来描述组件和页面的效果，使用 Javascript 来进行业务逻辑的开发。蓝河应用支持 MVVM（Model-View-ViewModel）的架构，通过数据绑定视图的方式，数据发生变化时，会自动触发 UI 的更新。


如果开发者是首次接触蓝河应用，并希望立即开始编写代码，请从 [构建首个蓝河应用](/reference/quickstart/quick-start) 开始。


](#%E8%93%9D%E6%B2%B3%E5%BA%94%E7%94%A8%E7%B3%BB%E7%BB%9F%E8%83%BD%E5%8A%9B%E5%BC%80%E6%94%BE%E6%A6%82%E8%A7%88)
## 蓝河应用系统能力开放概览


蓝河应用具备完备的开放能力，支持在健康、运动、出行、娱乐等全场景的应用的高效开发。


](#%E5%8D%81%E4%BA%8C%E5%A4%A7%E7%B3%BB%E7%BB%9F%E8%83%BD%E5%8A%9B)
### 十二大系统能力


| 系统能力 | 描述 |
| --- | --- |
| 应用框架 | 1. 功能组件：Page、Service、Widget；2. 通知能力：Event、Notification、Toast；3. 页面路由；4. 后台管理、窗口管理，包管理； |
| UI 组件 | 1. 基础组件、容器组件、表单组件、画布组件、导航组件；2. 系统风格 UI 组件；3. MVVM 编程模型；4. 弹性布局，自适应布局；5. 属性动画、SVG 矢量动画，帧动画； |
| AI 能力 | 1. AI 算法能力：视觉算法、语音算法、自然语言处理；2. AI 服务引擎：支持调用连接端的强算力设备上的端侧大模型和云端大模型；功能组件包括 Chain、Agent、Memory、Tools，LLM API、PromptTemplete; |
| 连接能力 | 1. 开放组件 Kit: HealthKit、ShareKit、KeyKit、RelayKit；2. BlueXlink: 发现、连接、传输、策略、协议适配； |
| 运动健康能力 | 1. 睡眠数据、运动数据 ；2. 健康数据：心率、卡路里；3. 运动识别：行走、跑步、骑行、游泳、跳绳... ；4. 姿态识别：久坐、站立； |
| 通信能力 | 1. 蓝牙、NFC ；2. 上传下载 ；3. 数据请求 ；4.WebSocket； |
| 多媒体能力 | 1. 原子音乐播放组件；2. 图像/音频编解码；3. 音频录制、播放；4. 音频管理； |
| 数据存储能力 | 1. 存储空间管理；2. K-V 存储；3. 文件存储；4. 数据共享； |
| 电话能力 | 1. 通话、短信；2. 蜂窝数据；3. 网络搜索；4. SIM 卡管理； |
| 基础硬件能力 | 1. 位置服务；2. 振动；3. 屏幕管理；4. 电源管理；5. 传感器：佩戴状态、抬腕、计步、罗盘、加速度、陀螺仪、气压； |
| 基础软件能力 | 1. 系统设置；2. 全球化；2. 解压缩、序列化； |
| 安全能力 | 1. 权限机制；2. 加解密算法库；3. 应用沙箱； |


](#%E4%B8%A4%E5%A5%97-api)
### 两套 API


为了兼顾高效开发和高性能，蓝河应用提供了两套 API，Javascript API 和 Native API


- Javascript API 提供了完整的开放能力， 支持开发者高效率地完成应用的开发。

- Native API 主要聚焦高性能场景，以及方便开发者对原有代码的复用。

](#%E4%B8%89%E7%A7%8D%E5%BA%94%E7%94%A8%E5%BD%A2%E6%80%81)
## 三种应用形态


蓝河应用支持应用、表盘、快捷卡片三种应用形态。


- 应用：它具有完整的功能，可以支持多页面，支持复杂的 UI 交互，支持应用间的跳转和数据交换。它可以在后台运行，在特定场景可以长期运行。

- 表盘：它具备装饰属性， 也代表了用户的个性化选择。支持普通和 AOD 两种显示模式，支持动态交互和 20 多种数据展示。支持三种开发方案：AI 生成、表盘设计工具制作、代码编程实现。

- 快捷卡片：是一种高效的信息展示方式，用户无需进入应用，在表盘界面只需左滑，即可查看信息和控制操作。


蓝河表盘是一种非常重要的应用形态，蓝河应用致力于为用户提供丰富的表盘。为此蓝河开发套件共提供三种开发表盘方案，开发者既可以通过自然语言交互快速生成表盘（即将开放）、也可以使用设计图配置生成表盘（即将开放）、还可以使用代码编程实现功能更丰富的表盘。如果您需要了解更多关于代码编程实现表盘的方式请移步 [表盘教程](/reference/extend/watchface/) 与 [UI 组件支持的表冠旋转](/component/common/ui-rotation/) 进行更详细的了解。


](#%E9%80%9A%E7%94%A8%E5%BC%80%E5%8F%91%E6%B5%81%E7%A8%8B)
## 通用开发流程


](#%E4%B8%80%E5%87%86%E5%A4%87%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83)
### 一、准备开发环境


BlueOS Studio 是面向蓝河应用开发推出的一款全新的一站式集成开发环境。开发者可以使用 BlueOS Studio 开发、调试和打包蓝河应用。BlueOS Studio 提供了丰富的功能和工具，可以极大地提高开发效率和代码质量。如果您想了解更多关于 BlueOS Studio 的功能和使用方法，请移步 [BlueOS Studio](https://studio.blueos.com.cn/) 的详细教程。同时，您也可以 [点击链接进入工具下载页面](https://studio.blueos.com.cn/install) ，安装 BlueOS Studio。


](#%E4%BA%8C%E5%BC%80%E5%8F%91-ui)
### 二、开发 UI


蓝河应用主要使用 UI 组件和样式进行界面的开发。UI 组件是蓝河应用 UI 开发的最小单元，蓝河应用提供了基础、表单，布局/容器、画布、导航、动画、系统风格等类型的一系列组件。 组件、样式、js 代码大部分都是写在 `.ux` 的文件中，您想进一步了解组件、样式、js 代码是如何组织的，可以移步 [ux 文件](/reference/configuration/ux-file/) 进行更详细的了解。


在组件开发基础之上，蓝河应用还提供了丰富的样式支持，因此开发者可以开发出包含自己独特风格的蓝河应用。样式可以声明在<style>标签内也可以通过 style 属性以内联样式的形式声明在组件标签上，如果您想了解更多关于样式的详细信息，请移步 [style 样式](/reference/configuration/style-sheet/) 。蓝河应用支持的通用样式情况的详细信息，可以移步了解 [通用样式支持](/component/common/common-styles/)


](#%E4%B8%89%E5%BC%80%E5%8F%91%E4%B8%9A%E5%8A%A1%E5%8A%9F%E8%83%BD)
### 三、开发业务功能


蓝河应用提供了 JS API 和 Native API 两种接口，以支撑高效和高性能的开发场景。开发者可以根据需要选择不同的接口进行开发，以获得更好的开发体验和应用性能。


1.JS API 提供了完整的开放能力， 支持开发者高效率地完成应用的开发。开发者可以实现应用生命周期监听、系统弹窗、多设备互联等操作，如果您需要了解更多关于这些开放能力的信息，请移步 [JS 功能接口](/api/system/app/) 进行了解。


2.Native API 主要聚焦高性能场景，支持 Posix API 以及部分系统能力如连接能力、数据存储能力、通信能力等。如果您需要了解 Native API 更详细的信息，请移步 [Native API](/native/quickstart/introduction/) 。


](#%E5%9B%9B%E5%BC%80%E5%8F%91%E8%B0%83%E8%AF%95)
### 四、开发调试


在开发的过程中，可以首先使用 BlueOS Studio 的 [实时预览](https://studio.blueos.com.cn/debug/preview/) 查看开发的界面效果。


此外，开发者经常会遇到到 UI 问题、网络问题、内存问题等。


BlueOS Studio 也提供了对应的分析面板，例如： [UI 调试](https://studio.blueos.com.cn/debug/devtools/#element-%E9%9D%A2%E6%9D%BF) 、 [网络调试](https://studio.blueos.com.cn/debug/devtools/#network-%E9%9D%A2%E6%9D%BF) 、 [内存调试](https://studio.blueos.com.cn/debug/devtools/#memory-%E9%9D%A2%E6%9D%BF) 、 [查阅日志](https://studio.blueos.com.cn/debug/console/) ，助力开发者更高效地定位问题。


开发完成后，开发人员需要对应用进行测试。BlueOS Studio 提供了 [自动化测试的功能](https://studio.blueos.com.cn/test/autotest/) ，助力开发者提高测试效率。


](#%E4%BA%94%E5%8F%91%E5%B8%83)
### 五、发布


开发测试完成后，就来到了最后的发布环节，开发者可以使用 BlueOS Studio 的打包功能，将开发的应用打成 rpk 包。


打包完成后，前往发布平台[发布](https://dev.vivo.com.cn/watchRpk/list)后，蓝河操作系统的用户即可使用到对应的蓝河应用。


](#%E5%85%AD%E5%BF%AB%E5%BA%94%E7%94%A8%E5%BC%80%E5%8F%91%E6%94%AF%E6%8C%81)
### 六、快应用开发支持


蓝河系统支持快应用标准，可以使用 BlueOS Studio 进行快应用的开发，快应用开发技术文档请参考[快应用官网](https://www.quickapp.cn)。

---

## quick-start

> 原文路径：/reference/quickstart/quick-start/

](#%E6%9E%84%E5%BB%BA%E9%A6%96%E4%B8%AA%E8%93%9D%E6%B2%B3%E5%BA%94%E7%94%A8)
# 构建首个蓝河应用


本文将从开发工具、新建项目、安装依赖、调试项目、打包等方面入手，让您学习后，可以构建首个蓝河应用。


](#%E5%BC%80%E5%8F%91)
## 开发


开发者可以使用 BlueOS Studio 开发、调试和打包蓝河应用。以下所有的操作均在 BlueOS Studio 中完成，开发者可以[点击链接进入工具下载页面](https://studio.blueos.com.cn/install)，先安装 BlueOS Studio 。


](#%E4%B8%80%E6%96%B0%E5%BB%BA%E9%A1%B9%E7%9B%AE)
### 一、新建项目


新建方法如下：


- 点击`欢迎页`「**新建工程**」、或`菜单栏`「**新建工程」**、或`快捷入口`处「**新建工程**」，打开新建工程界面；

- 点击「**下一步**」 ，填写项目名称、项目路径、应用名称和应用包名，点击「**完成**」，BlueOS Studio 会在项目路径下，新建项目并自动打开。

![createProject](/80d94f075f09e93fb0cec6fe3f76c089/createProject.png)
](#%E4%BA%8C%E5%AE%89%E8%A3%85%E4%BE%9D%E8%B5%96)
### 二、安装依赖


- 准备工作：安装并配置 [Node](https://nodejs.org/en) 环境。

- 在 BlueOS Studio，我们提供了方便的方式来安装依赖，如下图示，只要点击「**安装依赖**」按钮，即可。

- 安装完毕之后，点击「**重新启动编译**」按钮，即能重新编译；之后编写代码，就能在预览区实时查看效果，而无需其他任何操作。

![install](/8c2d3657ae88ced5aed9bd50519a699e/install.png)
](#%E4%B8%89%E6%96%87%E4%BB%B6%E7%BB%84%E7%BB%87%E8%AF%B4%E6%98%8E)
### 三、文件组织说明


```bash
├── scripts                   工具脚本文件
├── src
│   ├── assets                公用资源
│   │   ├── images            图片资源
│   │   └── styles            应用样式
│   ├── pages                 页面目录
│   │   ├── Demo              应用首页
│   │   └── DemoDetail        应用详情页
│   ├── app.ux                入口文件。
│   └── manifest.json         项目配置文件，配置应用图标、页面路由等
└── jsconfig.json             js 配置文件，用于语法校验
└── package.json              定义项目需要的各种模块及配置信息
```


](#%E5%9B%9B%E5%BC%80%E5%8F%91%E8%B0%83%E8%AF%95)
### 四、开发调试


- BlueOS Studio 支持实时预览功能，开发者只需保存修改后的代码，即可在右侧模拟器实时预览修改效果。你可以通过 BlueOS Studio 下方提供的 DevTools 面板，进行调试样式、查看请求等操作。

![simulatorPreview](/5ea041843d198cbfdd34f41b22751f85/simulatorPreview.png)


开发者可以跟着下面的步骤，一步步完成第一个蓝河应用的构建。


](#1%E6%9E%84%E5%BB%BA-ui)
#### 1.构建 UI


安装依赖后，即可打开 "src/pages/Demo/index.ux"文件，设置 `<template>` 标签内容，来构建页面 UI。`<template>` 标签示例如下：


```html
<template>
  <div class="wrapper">
    <text>Hello World</text>
  </div>
</template>
```


](#2%E8%AE%BE%E7%BD%AE%E9%A1%B5%E9%9D%A2%E6%A0%B7%E5%BC%8F)
#### 2.设置页面样式


在"src/pages/Demo/index.ux"文件中，新增`<style>`标签，对页面中文本、按钮等 UI 设置宽高、字体大小、间距等样式。`<style>`标签示例如下：


```html
<style>
  .wrapper {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  text {
    font-size: 50px;
    lines: 2;
  }
</style>
```


](#3%E5%A4%84%E7%90%86%E4%B8%9A%E5%8A%A1%E9%80%BB%E8%BE%91)
#### 3.处理业务逻辑


在"src/pages/Demo/index.ux"文件中，新增`<script>`标签处理业务逻辑。在初始`<template>`的基础上，我们添加一个 button 类型的 input 组件，作为按钮响应用户点击，从而实现业务逻辑。


```html
<script>
  export default {
    data: {},

    buttonClick(event) {
      console.log('click event fired')
    },
  }
</script>

<template>
  <div class="flex-col items-center p-20">
    <text>Hello World</text>
    <input type="button" class="w-[400px] h-[80px] text-white bg-[#1890ff] rounded-[15px] mt-10" value="click" onclick="buttonClick" />
  </div>
</template>

<style>
@tailwind utilities;
</style>
```


](#4%E5%9C%A8%E5%8F%B3%E4%BE%A7%E6%A8%A1%E6%8B%9F%E5%99%A8%E5%AE%9E%E6%97%B6%E9%A2%84%E8%A7%88%E7%AC%AC%E4%B8%80%E4%B8%AA%E9%A1%B5%E9%9D%A2%E6%95%88%E6%9E%9C%E5%A6%82%E4%B8%8B%E5%9B%BE%E6%89%80%E7%A4%BA)
#### 4.在右侧模拟器实时预览。第一个页面效果如下图所示：


![examplePreview](/e24babd21ad1f732f39504452429b6e8/examplePreview.png)
](#%E4%BA%94%E6%89%93%E5%8C%85)
### 五、打包


开发完成后，可以使用 BlueOS Studio 打包出应用 rpk 包，步骤如下：


- 点击顶部工具栏的「**打包** 」按钮，可以选择包类型和环境变量，包类型可选 release 和 debug，release 包需要填写信息生成签名后，再行打包；环境变量可选 production、development 和 test，根据环境不同可调用不同的后台接口而不用手动修改代码；

- 打包成功之后，会在 dist 目录下生成相应的 rpk 包，可以「打开 rpk 所在位置」；

- 打包成功之后，可以点击前往开放平台上传 rpk 包。

 ![package](/bca4efe3a2325b918bc3b75214f35e27/packageSettings.png)




![packageSuccess](/ab20807fa6e0c3863703cb8444912371/packageSuccess.png)

---

# 性能优化

## overview

> 原文路径：/reference/perf-guide/overview/

](#%E6%A6%82%E8%BF%B0)
# 概述


](#1-%E5%89%8D%E8%A8%80)
## 1 前言


本章节聚焦手表应用的性能优化，结合可穿戴设备资源受限、低功耗需求和小屏幕交互特点，提出切实可行的优化策略。我们将重点关注电池续航、显示功耗和交互流畅度，帮助开发者在蓝河应用框架下构建高效、稳定的智能穿戴产品。


](#2-%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E)
## 2 使用说明


文中示例提供了「正例」和「反例」，便于读者直观对比两种方案的优劣，迅速掌握规范要点。示例仅供说明，不代表可直接运行的完整项目代码。


](#3-%E6%8E%A8%E8%8D%90%E7%BA%A7%E5%88%AB)
## 3 推荐级别


【强烈】必须遵守的核心规范


【建议】除特殊场景外应优先采用的最佳实践


【鼓励】可选但有助于提升体验的优化手段


](#4-%E7%AB%A0%E8%8A%82%E6%8C%87%E5%BC%95)
## 4 章节指引


在深入阅读各章节前，您可参照下表快速定位所需内容：


| 章节 | 说明 |
| --- | --- |
| 响应式数据优化 | 针对响应式声明与使用进行精简与性能调优 |
| 减少代码体积 | 利用 Tree-shaking、按需加载等技术精简打包体积 |
| 减少初始化开销 | 通过 app.ux 优化和长页面分段渲染，提升首屏加载速度 |
| 运行时性能优化 | 优化模板结构与指令组合，降低运行时计算开销 |
| 避免高耗性能操作 | 规避常见高耗操作，提升应用响应与功耗效率 |
| 退出页面释放监听 | 规范页面销毁时的资源清理流程，防止内存泄漏 |
| 图片资源优化 | 合理选择与加载图片资源，提高渲染效率并压缩安装包大小 |
| 长列表性能优化 | 针对大规模列表渲染场景的方案 |
| 帧率优化指引 | 提升动画与滚动流畅度的实用方法 |

---

## perf-dangerous

> 原文路径：/reference/perf-guide/perf-dangerous/

](#%E9%81%BF%E5%85%8D%E9%AB%98%E8%80%97%E6%80%A7%E8%83%BD%E6%93%8D%E4%BD%9C)
# 避免高耗性能操作


在蓝河应用开发中，需特别注意以下高消耗性能操作，合理规避可显著提升渲染效率与运行时性能。


](#%E9%81%BF%E5%85%8D%E4%BD%BF%E7%94%A8%E5%90%8E%E4%BB%A3%E9%80%89%E6%8B%A9%E5%99%A8)
## 避免使用后代选择器


**推荐级别：强烈**


后代选择器在传统 Web 开发中能有效规避样式污染，但蓝河应用的页面与组件采用**天然样式隔离机制**，嵌套选择器会触发冗余的样式计算，导致渲染性能下降。


直接使用类名选择器，避免多级嵌套结构。


**反例**


```css
.list .item {
  color: red;
}
```


**正例**


```css
.item {
  color: red;
}
```


](#%E7%B2%BE%E7%AE%80%E6%89%93%E5%8D%B0%E6%97%A5%E5%BF%97)
## 精简打印日志


**推荐级别：强烈**


高频次、冗余的日志输出会引发以下问题：


- 增加运行时内存开销

- 干扰开发者调试关键信息

**优化方案**


- 仅记录核心调试信息

- 避免全量序列化复杂对象

**反例**


```ts
/* 反例：全量序列化大对象产生性能损耗 */
console.log(`sportInfo = ${JSON.stringify(sportInfo)}`)
```


**正例**


```ts
/* 正例：选择性输出关键字段 */
console.log(`运动ID: ${sportInfo.id}, 类型: ${sportInfo.type}`)
```


](#%E9%81%BF%E5%85%8D%E5%90%8E%E5%8F%B0%E6%B8%B2%E6%9F%93%E6%8C%87%E4%BB%A4%E5%A0%86%E7%A7%AF)
## 避免后台渲染指令堆积


常驻后台的应用频繁更新 UI 会导致：


- 渲染指令队列堆积

- 内存占用持续增长

- 应用恢复前台时出现 UI 抖动

**优化方案**


- 使用状态标志位控制渲染时机

- 结合生命周期管理数据更新


```js
// 临时变量暂存后台刷新数据
let tempData
export default {
  data: {
    bgData: [1, 2],
    showing: false,
  },
  onInit() {
    const evtId = event.subscribe({
      eventName: 'new_data',
      callback: (res) => {
        if (!this.showing) {
          tempData = res.data
        } else {
          this.bgData = res.data
        }
      },
    })
  },
  onShow() {
    this.showing = true
    if (tempData) {
      this.bgData = tempData
    }
  },
  onHide() {
    this.showing = false
  },
}
```

---

## perf-data

> 原文路径：/reference/perf-guide/perf-data/

](#%E5%93%8D%E5%BA%94%E5%BC%8F%E6%95%B0%E6%8D%AE%E4%BC%98%E5%8C%96)
# 响应式数据优化


蓝河框架基于 Proxy 实现响应式追踪机制，data 对象中的每个属性都会创建监听代理。优化数据层可显著降低内存消耗，提升渲染速度。


](#%E6%B6%88%E9%99%A4%E5%86%97%E4%BD%99%E5%93%8D%E5%BA%94%E5%BC%8F%E6%95%B0%E6%8D%AE)
## 消除冗余响应式数据


**推荐级别：强烈**


未使用的响应式数据仍会触发依赖收集，导致内存占用增加。


**优化方案**


- 采用普遍变量声明非响应式数据

**反例 1**


```html
<template>
  <text>{{a}}</text>
</template>

<script>
  export default {
    data: {
      a: 'hello',
      b: 'world',
    },
    onInit() {
      this.a = this.a + this.b
    },
  }
</script>
```


**正例 1**


```html
<template>
  <text>{{a}}</text>
</template>

<script>
  const b = 'world'
  export default {
    data: {
      a: 'hello',
    },
    onInit() {
      this.a = this.a + b
    },
  }
</script>
```


**反例 2**


```html
<template>
  <list>
    <list-item for="{{list}}">
      <text>{{ $item.name }}</text>
      <image src="{{ $item.icon }}"></image>
    </list-item>
  </list>
</template>

<script>
  const getSportsList = () => {
    return [
      {
        name: 'Football',
        description: 'A team sport played with ...',
        category: 'Team Sports',
        icon: 'football.png',
      },
      {
        name: 'Basketball',
        description: 'A team sport in which two teams, ...',
        category: 'Team Sports',
        icon: 'basketball.png',
      },
      {
        name: 'Tennis',
        description: 'A racket sport that can be ...',
        category: 'Individual Sports',
        icon: 'tennis.png',
      },
    ]
  }
  export default {
    data: {
      sports: [],
    },
    onInit() {
      this.sports = getSportsList()
    },
  }
</script>
```


**正例 2**


```html
<template>
  <list>
    <list-item for="{{list}}">
      <text>{{ $item.name }}</text>
      <image src="{{ $item.icon }}"></image>
    </list-item>
  </list>
</template>

<script>
  const getSportsList = () => {
    return [
      {
        name: 'Football',
        description: 'A team sport played with ...',
        category: 'Team Sports',
        icon: 'football.png',
      },
      {
        name: 'Basketball',
        description: 'A team sport in which two teams, ...',
        category: 'Team Sports',
        icon: 'basketball.png',
      },
      {
        name: 'Tennis',
        description: 'A racket sport that can be ...',
        category: 'Individual Sports',
        icon: 'tennis.png',
      },
    ]
  }
  export default {
    data: {
      sports: [],
    },
    onInit() {
      this.sports = getSportsList().map((item) => ({
        name: item.name,
        icon: item.icon,
      }))
    },
  }
</script>
```


](#%E9%9D%99%E6%80%81%E5%B1%9E%E6%80%A7%E8%AE%BF%E9%97%AE%E8%A7%84%E8%8C%83)
## 静态属性访问规范


**推荐级别：强烈**


**编译优化:** 动态属性访问会导致，阻碍编译时的优化分析。


**反例**


```html
<template>
  <div>
    <text>{{person.name}}</text>
    <text>{{person.location}}</text>
  </div>
</template>

<script>
  export default {
    data: {
      person: {
        name: 'Vance',
        location: 'shenzhen',
      },
    },
    onInit() {
      const location = 'location'
      this.person[location] = 'beijing'
    },
  }
</script>
```


**正例**


```html
<template>
  <div>
    <text>{{person.name}}</text>
    <text>{{person.location}}</text>
  </div>
</template>

<script>
  export default {
    data: {
      person: {
        name: 'Vance',
        location: 'shenzhen',
      },
    },
    onInit() {
      this.person.location = 'beijing'
    },
  }
</script>
```


](#%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E5%B1%82%E7%BA%A7%E4%BC%98%E5%8C%96)
## 数据结构层级优化


**推荐级别：鼓励**


对于动态绑定的数据，不宜嵌套层级过深，建议不超过 3 层。


**反例**


```html
<template>
  <div>
    <text>{{obj.a.name}}</text>
    <text>{{obj.b.name}}</text>
  </div>
</template>

<script>
  export default {
    data: {
      obj: {
        a: {
          name: 'name a',
        },
        b: {
          name: 'name b',
        },
      },
    },
  }
</script>
```


**正例**


```html
<template>
  <div>
    <text>{{obj.a}}</text>
    <text>{{obj.b}}</text>
  </div>
</template>

<script>
  export default {
    data: {
      obj: {
        a: 'name a',
        b: 'name b',
      },
    },
  }
</script>
```

---

## perf-frame-rate

> 原文路径：/reference/perf-guide/perf-frame-rate/

](#%E5%B8%A7%E7%8E%87%E4%BC%98%E5%8C%96%E6%8C%87%E5%BC%95)
# 帧率优化指引


本节介绍提升帧率的有效方法。


](#%E9%81%BF%E5%85%8D%E5%86%97%E4%BD%99%E8%83%8C%E6%99%AF%E5%A3%B0%E6%98%8E)
## 避免冗余背景声明


- 如背景色为黑色，则不需要另外设置黑色（默认背景色为黑色）

- 如父容器已经有背景颜色，则不需要单独给页面的容器设置一样的背景色

](#%E7%BB%99-div-%E7%BB%84%E4%BB%B6%E8%AE%BE%E7%BD%AE%E5%AE%BD%E9%AB%98)
## 给 div 组件设置宽高


- 横向布局至少设置高度

- 纵向布局至少设置宽度

](#%E4%BD%BF%E7%94%A8%E5%9B%BE%E7%89%87%E7%9A%84%E5%8E%9F%E5%A7%8B%E5%B0%BA%E5%AF%B8)
## 使用图片的原始尺寸


- image 组件上的宽高使用图片的原始尺寸

- background-image 上使用图片的原始尺寸

---

## perf-init

> 原文路径：/reference/perf-guide/perf-init/

](#%E5%87%8F%E5%B0%91%E5%88%9D%E5%A7%8B%E5%8C%96%E5%BC%80%E9%94%80)
# 减少初始化开销


应用初始化阶段的代码复杂度直接影响应用/页面实例的创建耗时，优化该阶段的执行效率能显著改善首屏渲染性能。


](#%E9%81%BF%E5%85%8D%E5%BC%95%E5%85%A5%E8%80%97%E6%97%B6%E8%87%AA%E6%89%A7%E8%A1%8C%E6%A8%A1%E5%9D%97)
## 避免引入耗时自执行模块


**推荐级别：强烈**


模块中的自执行逻辑会在导入时立即执行，导致页面加载阻塞。应将初始化逻辑移至生命周期钩子中按需执行。


**反例**


```js
// init.js 中的自执行逻辑会立即执行，延长加载时间
import './init.js' // 包含立即执行的复杂初始化逻辑
export default {}
```


**正例**


```js
export default {
  onInit() {
    // 将初始化逻辑移至生命周期钩子中按需执行
    this.performInitialization()
  },
  performInitialization() {
    // 具体的初始化操作
  },
}
```


](#%E4%BC%98%E5%8C%96-appux-%E6%95%B0%E6%8D%AE%E7%AE%A1%E7%90%86)
## 优化 app.ux 数据管理


**推荐级别：建议**


过度加载的全局数据会延长应用启动时间，建议遵循以下原则：


- 仅将全局共享状态存储在 app.ux

- 工具类方法按需在各页面独立引入

**反例**


```js
// app.ux
import utils from './utils' // 引入可能包含复杂逻辑的工具库

export default {
  utils, // 全局挂载非必要工具方法
  // ...其他全局配置
}
```


](#%E9%95%BF%E9%A1%B5%E9%9D%A2%E5%88%86%E6%AE%B5%E5%8A%A0%E8%BD%BD)
## 长页面分段加载


**推荐级别：建议**


对复杂长页面实施分阶段加载策略：


- 首屏优先加载关键数据/视图

- 可视区域外内容延迟加载

**正例 1**


```html
<template>
  <div>
    <div for="{{visibleItems}}">
      <text>{{$item}}</text>
    </div>
  </div>
</template>
<script>
  const fullDataset = [.../* 完整数据集 */]
  export default {
    data: {
      visibleItems: [],
    },
    onInit() {
      // 首屏加载前6条
     this.visibleItems = fullDataset.slice(0, 6)
    },
    onShow() {
      // onShow 后显示所有数据
      this.visibleItems = fullDataset
    },
  }
</script>
```


**正例 2**


```html
<template>
  <div>
    <!-- 首屏核心模块 -->
    <critical-module />

    <!-- 次要模块延迟加载 -->
    <secondary-module if="{{isSecondaryLoaded}}" />
  </div>
</template>
<script>
  export default {
    data: {
      isSecondaryLoaded: false,
    },
    onShow() {
      // 首屏渲染完成后加载次要模块
      this.isSecondaryLoaded = true
    },
  }
</script>
```

---

## perf-longlist

> 原文路径：/reference/perf-guide/perf-longlist/

](#%E9%95%BF%E5%88%97%E8%A1%A8%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96)
# 长列表性能优化


本文阐述了长列表场景下的性能优化方案，在开发过程中遇到长列表性能问题时，可参考下面优化方案。


](#%E5%88%86%E7%A6%BB%E5%9B%BA%E5%AE%9A%E6%A0%87%E9%A2%98%E4%B8%8E%E5%88%97%E8%A1%A8%E5%AE%B9%E5%99%A8)
## 分离固定标题与列表容器


当`<list>`组件滚动时，内部元素复杂度直接影响滚动性能。建议将固定标题等静态元素移出列表容器，采用绝对定位等方式处理。


**推荐级别：强烈**


**反例**


标题内嵌于列表容器，影响滚动性能：


```html
<template>
  <list title="true">
    <list-item type="title">
      <vw-title value="蔬菜列表" is-fixed="true"></vw-title>
    </list-item>
    <!-- 列表内容 -->
  </list>
</template>
```


**正例**


通过外层容器实现布局分离：


```html
<template>
  <div class="list-container">
    <vw-title value="蔬菜列表" is-fixed="true"></vw-title>
    <list>
      <!-- 列表内容 -->
    </list>
  </div>
</template>
```


](#%E9%81%BF%E5%85%8D%E6%A8%A1%E6%9D%BF%E5%86%85%E8%A1%A8%E8%BE%BE%E5%BC%8F)
## 避免模板内表达式


模板中的复杂表达式会频繁触发 JS 引擎执行，建议通过数据预处理替代模板运算。


**推荐级别：强烈**


**反例**


模板中使用条件表达式：


```html
<div for="{{foodList}}">
  <text>{{$item.vegetarian ? 'Vegetarian' : 'Non-Vegetarian'}}</text>
</div>
```


**正例**


预处理数据格式：


```ts
// Script部分
data: {
  foodList: foodList.map((item) => ({
    ...item,
    vegetarianStatus: item.vegetarian ? 'Vegetarian' : 'Non-Vegetarian',
  }))
}
```


](#%E8%A7%84%E9%81%BF%E5%88%97%E8%A1%A8%E5%BE%AA%E7%8E%AF%E4%B8%AD%E7%9A%84%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6)
## 规避列表循环中的自定义组件


**推荐级别：强烈**


列表项内使用自定义组件会创建大量 vm 实例，建议优先使用原生组件。


](#%E4%BF%9D%E6%8C%81%E5%88%97%E8%A1%A8%E6%95%B0%E6%8D%AE%E7%8B%AC%E7%AB%8B%E6%80%A7)
## 保持列表数据独立性


**推荐级别：强烈**


确保列表项仅依赖自身数据，避免引入外部响应式变量。


**反例**


依赖外部变量：


```html
<div for="{{list}}">
  <text class="{{$item.num > count ? 'red' : 'blue'}}">{{$item.num}}</text>
</div>
```


**正例**


预处理样式状态：


```ts
// 预处理时添加状态字段
list.map((item) => ({
  ...item,
  className: item.num > threshold ? 'red' : 'blue',
}))
```


](#%E5%88%86%E6%AE%B5%E6%87%92%E5%8A%A0%E8%BD%BD%E5%AE%9E%E7%8E%B0)
## 分段懒加载实现


**推荐级别：强烈**


结合滚动监听实现动态加载，分页大小控制在一屏可见就可以。


**正例**


```ts
let currentPage = 0;

async loadMore() {
  const newData = await fetchPageData(++currentPage);
  this.list = this.list.push(...newData);
}
```


](#%E5%85%B3%E6%B3%A8-oninit-%E7%9A%84%E6%89%A7%E8%A1%8C%E6%97%B6%E9%97%B4)
## 关注 onInit 的执行时间


**推荐级别：建议**


使用性能分析工具监控关键生命周期。

---

## perf-memory-leak

> 原文路径：/reference/perf-guide/perf-memory-leak/

](#js-%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F%E6%8E%92%E6%9F%A5)
# js 内存泄漏排查


在需要排查的场景先后进行两次 dump, 比如排查页面泄漏，在进入页面前 dump 一次，进入页面退出后再 dump 一次


导出泄漏可以分为两种情况


-
如果应用不需要底层能力支撑


比如不需要 `blueos.multimedia.audio`这些底层能力，可以直接在 BlueOS Studio 测试，在下图场景前后分别点击 `位置 4` 进行 dump


-
如果应用需要底层能力支持


​ 先安装具有能 dump js heap 的固件， `dump_js_heap /sdcard` , 然后拷贝到主机，来到 BlueOS Studio 的面板进行 `位置3`加载


下图为 js heap 分析和导出的在 BlueOS Studio 中位置`Devtool->Snapshot->Profile`


![sample_eg25](/9e5f013430e1f98818f8fc0642438567/sample_eg25.png)


](#%E5%88%86%E6%9E%90%E6%B3%84%E6%BC%8F)
## 分析泄漏


比如我们构造一个常见的泄漏，event 订阅了但没有取消 （npm 类库 [[eventEmitter3]](https://www.npmjs.com/package/eventemitter3)有类似的问题）


```js
  import event from '@blueos.app.event'
  onReady() {
    const that = this
    const evtId = event.subscribe({
      eventName: 'myEventName',
      callback: function MyEvent(res) {
        console.log(res.params)
        that.hello()
      },
    })
```


进入退出页面后，导出两份 snapshot，选中第二份 snapshot (标号 1), 在 `标号2` 处切换到 `comparison`试图，然后重点关注`标号3`的 Delta 部分， 增量即为泄漏


可以重点关注以下对象


- App, 每个应用有一个，如果新增，代表应用泄漏

- Page，对应一个页面或者表盘，有新增代表相关泄漏

- Vm，每个 Page 和自定义组件对应一个 Vm，List 的每个 Item 不触发 JIT 的情况也会有

- 自己 Page 中特有的对象和函数

![sample_eg26](/185e981127f6e4db7302928df73b0d86/sample_eg26.png)


](#%E5%85%B6%E4%BB%96%E8%AF%B4%E6%98%8E)
### 其他说明


-
标号 4 `_valid` 可以 Page 是否泄漏


-
标号 5 内容不为空（有右箭头），说明有 timer 泄漏


这个格式其实是 chrome 的 devtools 的标准格式

---

## perf-runtime

> 原文路径：/reference/perf-guide/perf-runtime/

](#%E8%BF%90%E8%A1%8C%E6%97%B6%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96)
# 运行时性能优化


本节提供的关键优化手段可显著提升页面渲染与更新效率。


](#%E9%81%BF%E5%85%8D%E5%9C%A8-css-%E4%B8%AD%E4%BD%BF%E7%94%A8-id-%E9%80%89%E6%8B%A9%E5%99%A8)
## 避免在 CSS 中使用 ID 选择器


**推荐级别：强烈**


如果只需要在 css 中给组件添加样式，建议使用 class 选择器，只有需要使用 js 操作组件时，才会给组件注册 ID。


**反例 1**


```html
<!-- 错误：在CSS中通过ID定义样式 -->
<template>
  <div id="red"></div>
</template>
<style>
  #red {
    color: red;
  } /* 存在选择器性能损耗 */
</style>
```


**正例 1**


```html
<!-- 正确：使用class类选择器 -->
<template>
  <div class="red"></div>
</template>
<style>
  .red {
    color: red;
  } /* 高效样式定义方式 */
</style>
```


**特殊场景说明**


```html
<!-- 当元素需被JS操作时保留id -->
<template>
  <!-- ID用于JS交互 -->
  <div id="root"></div>
</template>
<script>
  export default {
    onInit() {
      this.$element('root').animate() // 通过ID获取元素
    },
  }
</script>
```


](#%E9%81%BF%E5%85%8D%E5%BE%AA%E7%8E%AF%E6%8C%87%E4%BB%A4%E4%B8%8E%E6%9D%A1%E4%BB%B6%E6%8C%87%E4%BB%A4%E5%8F%A0%E5%8A%A0%E4%BD%BF%E7%94%A8)
## 避免循环指令与条件指令叠加使用


**推荐级别：建议**


若需在循环渲染时进行条件过滤，建议在 JavaScript 中预处理数据，而非在模板层混合`for`与`if`指令。此优化可减少模板解析复杂度，避免重复渲染计算。


**反例**


```html
<!-- 低效：模板中混合循环与条件判断 -->
<div for="{{foodList}}" if="{{$item.vegetarian}}">
  <text>{{$item.name}}</text>
  <text>{{$item.category}}</text>
</div>
```


**正例**


```html
<!-- 高效：数据层预过滤 -->
<!-- 直接渲染已过滤数据 -->
<div for="{{vegetarianFoods}}">
  <text>{{$item.name}}</text>
  <text>{{$item.category}}</text>
</div>
```


```ts
export default {
  data: { vegetarianFoods: [] },
  onInit() {
    this.vegetarianFoods = foodList.filter((food) => food.vegetarian)
  },
}
```


](#%E5%90%88%E7%90%86%E9%80%89%E6%8B%A9%E6%9D%A1%E4%BB%B6%E6%8C%87%E4%BB%A4)
## 合理选择条件指令


**推荐级别：建议**


`if`与`show`指令的本质差异在于 DOM 树操作机制：


- `if`指令：触发组件级 DOM 树动态构建/销毁，适合低频次状态变更场景

- `show`指令：通过 CSS display 属性控制可视性，DOM 结构保持稳定，适用于高频次显隐切换场景

最佳实践原则：


- 首屏不可见但需快速激活 → `if`指令（降低初始化开销）

- 高频交互元素（如 Tab 切换） → `show`指令（减少 DOM 操作损耗）

**反例 1**


```html
<!-- show指令导致隐藏元素参与首屏渲染，破坏分段加载设计 -->
<template>
  <div>
    <div>首屏核心模块</div>
    <div show="{{display}}">延迟加载模块</div>
  </div>
</template>
<script>
  export default {
    data: { display: false },
    onShow() {
      this.display = true // 触发CSS样式变更而非DOM操作
    },
  }
</script>
```


**正例 1**


```html
<template>
  <div>
    <div>首屏核心模块</div>
    <div if="{{display}}">动态加载模块</div>
  </div>
</template>
<script>
  export default {
    data: { display: false },
    onShow() {
      this.display = true // 触发DOM树动态构建
    },
  }
</script>
```


**反例 2**


```html
<!-- if指令导致高频DOM重建，引发布局抖动 -->
<template>
  <div>
    <text @click="changeView('A')">视图A</text>
    <text @click="changeView('B')">视图B</text>
    <div if="{{viewState == 'A'}">视图内容A</div>
    <div elif="{{viewState == 'B'}">视图内容B</div>
  </div>
</template>
```


**正例 2**


```html
<template>
  <div>
    <text @click="changeView('A')">视图A</text>
    <text @click="changeView('B')">视图B</text>
    <div show="{{viewState == 'A'}">视图内容A</div>
    <div show="{{viewState == 'B'}">视图内容B</div>
  </div>
</template>
```


](#%E7%BB%84%E4%BB%B6%E5%B1%82%E7%BA%A7%E7%B2%BE%E7%AE%80)
## 组件层级精简


**推荐级别：建议**


在页面布局中，尽量减少组件的嵌套，如 `list-item` 本身可以作为容器，不需在其内部要额外的 div 嵌套。


**反例**


冗余嵌套结构


```html
<template>
  <list>
    <list-item>
      <!-- 冗余包装容器 -->
      <div>
        <text>数据项标题</text>
        <image src="item.png"></image>
      </div>
    </list-item>
  </list>
</template>
```


**正例**


扁平化结构


```html
<template>
  <list>
    <list-item>
      <text>数据项标题</text>
      <image src="item.png"></image>
    </list-item>
  </list>
</template>
```


](#%E7%BB%84%E4%BB%B6%E6%8A%BD%E8%B1%A1%E5%B9%B3%E8%A1%A1%E6%B3%95%E5%88%99)
## 组件抽象平衡法则


**推荐级别：鼓励**


组件化需遵循以下原则：


- 单一页面自定义组件数 ≤ 3

- 简单元素组合（≤3 个基础组件）不建议抽象

**反例** 1


过度抽象


```html
<!-- 简单统计模块被过度拆分为独立组件 -->
<import src="./components/heartRateBlock.ux" name="heartRate"></import>
<import src="./components/calorieBlock.ux" name="calorie"></import>
```


**反例** 2


抽象组件滥用


```html
<!-- 独立心率数字展示无需组件化 -->
<import src="./components/heartRate.ux"></import>
<template>
  <heartRate></heartRate>
</template>
```


](#%E9%A1%B5%E9%9D%A2%E8%81%8C%E8%B4%A3%E5%8D%95%E4%B8%80%E5%8C%96%E5%8E%9F%E5%88%99)
## 页面职责单一化原则


**推荐级别：鼓励**


工程化实践要求：


- 功能模块隔离：独立业务状态使用独立页面承载

- 路由参数规范：仅传递必要标识参数，避免状态注入

- 页面体积控制：单文件源码 ≤ 1000 行（编译前）

**反例**


```html
<template>
  <!-- 多态视图混合实例 -->
  <div if="{{status === 1}}">
    <div>视图模块A</div>
    <!-- 50+ 相关节点 -->
  </div>
  <div if="{{status === 2}}">
    <div>视图模块B</div>
    <!-- 30+ 相关节点 -->
  </div>
</template>

<script>
  export default {
    data: {
      status: 1, // 状态维护成本随功能增加而上升
    },
  }
</script>
```


**正例**


采用路由级组件拆分：


```html
<!-- modules/module-a.ux -->
<template>
  <div class="optimized-view">
    <div>独立视图模块A</div>
    <!-- 功能隔离的节点树 -->
  </div>
</template>

<!-- modules/module-b.ux -->
<template>
  <div class="optimized-view">
    <div>独立视图模块B</div>
    <!-- 精简的独立节点树 -->
  </div>
</template>
```


](#%E6%8C%87%E5%AE%9A%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93%E6%A0%87%E8%AF%86)
## 指定列表渲染标识


**推荐级别：鼓励**


在动态列表场景中，通过`tid`属性指定唯一性标识，确保 Diff 算法准确执行节点复用。


**实施要点**


- 使用业务主键而非数组索引

- 确保`tid`值的全局唯一性

**正例**


```html
<template>
  <!-- 使用唯一业务标识 -->
  <text for="{{athleteList}}" tid="athleteId" class="sport-item">
    {{$item.rank}} {{$item.name}}
  </text>
</template>

<script>
  export default {
    data: {
      athleteList: [
        { athleteId: 1001, rank: '金牌', name: '张三' },
        { athleteId: 1002, rank: '银牌', name: '李四' },
      ],
    },
  }
</script>
```

---

## perf-src

> 原文路径：/reference/perf-guide/perf-src/

](#%E5%9B%BE%E7%89%87%E8%B5%84%E6%BA%90%E4%BC%98%E5%8C%96)
# 图片资源优化


本章为 UI 设计师提供界面资源设计规范，通过科学管理图片资源降低内存占用、提升渲染性能、优化安装包体积，适用于设计阶段至开发交付全流程。


](#%E5%9B%BE%E7%89%87%E5%B0%BA%E5%AF%B8%E9%80%82%E9%85%8D%E5%8E%9F%E5%88%99)
## 图片尺寸适配原则


**推荐级别：强烈**


图片物理尺寸必须与目标显示区域像素尺寸严格匹配，禁止使用超分辨率图片。大尺寸图片会导致内存占用激增，同时增加 GPU 渲染管线压力。


](#8-%E4%BD%8D%E8%89%B2%E6%B7%B1%E8%B5%84%E6%BA%90%E4%BC%98%E5%85%88)
## 8 位色深资源优先


**推荐级别：建议**


智能手表等穿戴设备屏幕色域有限，建议采用 8 位色深（256 色）PNG 格式：


- 通常可以提供足够的颜色范围

- 有助于减少的存储空间

- 支持透明度通道且无画质损失

](#png-%E5%9B%BE%E7%89%87%E6%9B%BF%E4%BB%A3-svg-%E5%9B%BE%E7%89%87)
## png 图片替代 svg 图片


**推荐级别：建议**


svg 只在有动画或动态修改属性等特殊场景时使用，一般情况下都使用 png 格式图片资源


**反例**


```html
<image src="/assets/images/logo.svg"></image>
```


**正例**


```html
<image src="/assets/images/logo.png"></image>
```


](#%E5%88%A0%E9%99%A4%E5%86%97%E4%BD%99%E5%9B%BE%E7%89%87)
## 删除冗余图片


**推荐级别：建议**


如果图片已经用不到了，需要及时的在项目中删除，否则冗余的图片会使得包体积增加。


](#%E8%B5%84%E6%BA%90%E5%A4%8D%E7%94%A8%E4%BD%93%E7%B3%BB)
## 资源复用体系


**推荐级别：鼓励**


设计的图片尽量实现共用，来减少存储占用。比如：确定、取消、返回、选中、未选中等使用频繁的按钮。

---

## perf-subscription

> 原文路径：/reference/perf-guide/perf-subscription/

](#%E9%80%80%E5%87%BA%E9%A1%B5%E9%9D%A2%E9%87%8A%E6%94%BE%E7%9B%91%E5%90%AC)
# 退出页面释放监听


在蓝河应用开发中，正确处理页面生命周期末端的资源释放是保障应用性能的关键。以下规范针对页面销毁阶段（onDestroy）必须执行的三类资源清理操作。


](#%E5%AE%9A%E6%97%B6%E5%99%A8%E8%B5%84%E6%BA%90%E9%87%8A%E6%94%BE)
## 定时器资源释放


**推荐级别：强烈**


所有通过 `setTimeout`/`setInterval` 创建的计时器，必须在页面销毁时通过 `clearTimeout`/`clearInterval` 进行匹配清除。


**反例**


```ts
export default {
  onInit() {
    // 未记录定时器引用
    setTimeout(() => {
      // 业务逻辑
    }, 1000)
    setInterval(() => {
      // 周期任务
    }, 1000)
  },
  onDestroy() {}, // 未执行清理
}
```


**正例**


```ts
// 声明模块级变量存储计时器ID
let timeoutId
let intervalId

export default {
  onInit() {
    timeoutId = setTimeout(() => {
      // 业务逻辑
    }, 1000)

    intervalId = setInterval(() => {
      // 周期任务
    }, 1000)
  },

  onDestroy() {
    // 精确清除计时器
    clearTimeout(timeoutId)
    clearInterval(intervalId)
  },
}
```


](#%E4%BA%8B%E4%BB%B6%E7%9B%91%E5%90%AC%E5%99%A8%E6%B3%A8%E9%94%80)
## 事件监听器注销


**推荐级别：强烈**


页面中使用的监听类接口(如 feature、C2JS 等)，页面退出时必须清除监听。原因同上。


**反例**


```ts
import event from '@blueos.app.event.eventManager'

export default {
  onInit() {
    // 未记录订阅ID
    event.subscribe({
      eventName: 'usual.event.SCREEN_AOD',
      callback: (res) => {
        // 事件处理
      },
    })
  },
  onDestroy() {}, // 监听器未注销
}
```


**正例**


```ts
import event from '@blueos.app.event.eventManager'

// 使用容器存储多订阅ID
const eventSubscriptions = []

export default {
  onInit() {
    const subscriptionId = event.subscribe({
      eventName: 'usual.event.SCREEN_AOD',
      callback: (res) => {
        // 事件处理
      },
    })
    eventSubscriptions.push(subscriptionId)
  },

  onDestroy() {
    // 批量注销所有事件监听
    eventSubscriptions.forEach((id) => event.unsubscribe({ id }))
    eventSubscriptions.length = 0 // 清空ID容器
  },
}
```

---

## perf-treeshaking

> 原文路径：/reference/perf-guide/perf-treeshaking/

](#%E5%87%8F%E5%B0%91%E4%BB%A3%E7%A0%81%E4%BD%93%E7%A7%AF)
# 减少代码体积


本节非常重要，优劣不同的写法会有明显的代码体积差异，而代码体积越小，会获得更快的加载速度。


](#js-%E5%B0%81%E8%A3%85%E8%A6%81%E6%94%AF%E6%8C%81-treeshaking)
## js 封装要支持 Treeshaking


**推荐级别：强烈**


统一支持 Treeshaking 是非常重要的，因为它可以在打包编译时移除未使用的代码，减小输出的文件大小。


在进行 JavaScript 封装时，请牢记以下两点：


-
在能使用函数实现的情况下，优先使用函数而非 class 或 Object。只有需要频繁创建实例的情况才需要考虑使用 class。


-
慎重使用 export default 导出。如果你的模块有多个导出，可以考虑逐个导出而非使用 default 导出，这样可以更好地遵循 Treeshaking 的原则，因为 default 导出整个模块会被引入，而逐个导出只会引入需要的部分。


**反例 1**


对象捆绑导出


```js
const a = 1
const b = () => {}
// 未使用的变量仍会被打包
export default { a, b }
```


**反例 2**


class 方法捆绑


```js
// 即使只使用单个方法也会引入整个类
export default class Utils {
  a() {}
  b() {}
}
```


**反例 3**


构造函数导出


```js
// 方法被绑定在实例上无法分离
export default function Utils() {
  this.a = () => {}
  this.b = () => {}
}
```


**反例 4**


返回对象函数


```js
// 方法仍会整体打包
export default function Utils() {
  return {
    a() {},
    b() {},
  }
}
```


**正例 1**


具名导出


```js
const a = 1
const b = () => {}
export { a, b }
```


**正例 2**


独立导出


```js
export const a = 1
export const b = () => {}
```


](#%E6%8C%89%E9%9C%80%E5%BC%95%E5%85%A5)
## 按需引入


**推荐级别：强烈**


精准导入所需内容，避免引入冗余代码。


**反例 1**


多引入未使用


```js
import { sayHi, sayBye } from './say.js'
sayHi('Vance') // sayBye 未被使用但仍会打包
```


**反例 2**


全量引入


```js
import * as say from './say.js'
say.sayHi('Vance') // 引入整个模块
```


**正例**


精准引入


```js
import { sayHi } from './say.js'
sayHi('Vance') // 仅引入必要方法
```


](#%E9%81%BF%E5%85%8D-commonjs-%E8%A7%84%E8%8C%83)
## 避免 CommonJS 规范


**推荐级别：强烈**


虽然平台支持 require，但应始终使用 ESM 规范以支持 TreeShaking。


**反例**


使用 require


```js
const userInfo = require('./userInfo.js') // 无法 TreeShaking
```


**正例**


ESM 导入


```js
import userInfo from './userInfo.js'
// 注意实际情况应避免全量导入，按需解构更佳
```


](#%E4%BD%BF%E7%94%A8%E5%B8%B8%E9%87%8F%E4%BC%98%E5%8C%96)
## 使用常量优化


**推荐级别：强烈**


常量更易维护且利于 TreeShaking 识别未使用变量。


**反例**


对象打包


```js
const a = { a1: 'a1', a2: 'a2', a3: 'a3' } // 全部属性会被打包
const b = ['a1', 'a2', 'a3'] // 数组元素无法分离
```


**正例**


独立常量


```js
const a1 = 'a1' // 未使用时可被 TreeShaking
const a2 = 'a2'
const a3 = 'a3'
const a = { a1, a2, a3 }
const b = [a1, a2, a3]
```


](#%E8%B0%A8%E6%85%8E%E5%BC%95%E5%85%A5%E7%AC%AC%E4%B8%89%E6%96%B9%E5%8C%85)
## 谨慎引入第三方包


**推荐级别：建议**


优先评估包体积，必要时进行源码裁剪。


**反例**


全量引入


```js
import _ from 'lodash' // 引入完整包（代码量大）
export default {
  onInit() {
    _.join(['a', 'b', 'c'], '~') // 仅使用单个方法
  },
}
```


**正例**


原生实现


```js
export default {
  onInit() {
    ;['a', 'b', 'c'].join('~') // 使用原生方法
  },
}
```


](#%E6%85%8E%E7%94%A8-import-%E6%A0%B7%E5%BC%8F)
## 慎用 @import 样式


**推荐级别：强烈**


避免全局样式引入导致冗余 CSS 打包。


**反例**


全量引入


```html
<template>
  <div class="yellow">黄色</div>
  <div class="black">黑色</div>
  <div class="green">绿色</div>
</template>
<style>
  @import './color.css'; /* 可能包含未使用的样式 */
</style>
```


**正例**


```html
<template>
  <div class="yellow">黄色</div>
  <div class="black">黑色</div>
  <div class="green">绿色</div>
</template>
<style>
  .yellow {
    background: yellow;
  }
  .black {
    background: black;
  }
  .green {
    background: green;
  }
</style>
```


](#%E9%A1%B5%E9%9D%A2%E6%A8%A1%E6%9D%BF%E6%8B%86%E5%88%86%E7%AD%96%E7%95%A5)
## 页面模板拆分策略


**推荐级别：鼓励**


采用模块化设计原则，建议将不同功能模块拆分为独立页面文件。避免在单个页面中使用条件渲染实现多状态视图，这会导致模板复杂度增长。


**反例**


模板臃肿


```html
<!-- 单一页面承载多状态视图 -->
<div>
  <div if="{{status === 1}}">
    <div>A功能视图组件</div>
    <!-- 50+ 嵌套节点 -->
  </div>
  <div if="{{status === 2}}">
    <div>B功能视图组件</div>
    <!-- 50+ 嵌套节点 -->
  </div>
</div>
```


**正例**


模块化拆分


```html
<!-- pageA.ux -->
<template>
  <div class="module-container">
    <text>A功能核心组件</text>
    <!-- 精简DOM结构 -->
  </div>
</template>

<!-- pageB.ux -->
<template>
  <div class="module-container">
    <text>B功能核心组件</text>
    <!-- 独立维护的视图 -->
  </div>
</template>
```


](#manifest-%E9%85%8D%E7%BD%AE%E7%B2%BE%E7%AE%80%E5%8E%9F%E5%88%99)
## Manifest 配置精简原则


**推荐级别：建议**


严格遵循最小权限原则，manifest.json 中应仅声明实际使用的 API 及权限。冗余配置会增加应用审核风险并影响启动性能。


](#%E5%9B%BD%E9%99%85%E5%8C%96%E8%B5%84%E6%BA%90%E4%BC%98%E5%8C%96)
## 国际化资源优化


**推荐级别：建议**


当应用仅支持单一语言时，建议直接使用硬编码文本而非国际化方案。多语言场景下应及时清理未使用的 i18n 键值。


](#%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0%E4%BC%98%E5%85%88%E5%8E%9F%E5%88%99)
## 箭头函数优先原则


**推荐级别：建议**


箭头函数相比传统函数表达式具有更简洁的语法结构，在代码压缩阶段能获得更好的优化效果。


**反例**


```js
function fetchData() {
  // 业务逻辑
}
```


**正例**


```js
const fetchData = () => {
  // 箭头函数实现
}
```


](#%E5%AF%B9%E8%B1%A1%E5%B1%9E%E6%80%A7%E5%91%BD%E5%90%8D%E4%BC%98%E5%8C%96)
## 对象属性命名优化


**推荐级别：建议**


对象属性名称应保持语义明确且简洁。由于 JavaScript 引擎无法对属性名进行 tree-shaking，建议采用短命名策略，特别是在高频使用的属性上。


**反例**


```js
const userProfile = {
  userIdentification: 'UXP-001',
  profileModificationDate: '2024-03',
}
```


**正例**


```js
const user = {
  id: 'UXP-001',
  update: '2024-03', // 上下文明确的短命名
}
```


](#%E7%8E%AF%E5%A2%83%E5%8C%BA%E5%88%86%E7%AD%96%E7%95%A5)
## 环境区分策略


**推荐级别：建议**


避免将调试阶段的数据、代码带到生产环境上，应该用编译时参数而非运行时参数来区分 [编译环境变量](/reference/question-answer/build-env/)


](#css-%E4%BB%A3%E7%A0%81%E5%A4%8D%E7%94%A8%E8%A7%84%E8%8C%83)
## CSS 代码复用规范


**推荐级别：鼓励**


采用原子化 CSS 设计模式，将高频样式声明抽象为可复用类。可以使用 Sass/Less 预处理工具管理样式资源。


**反例**


```html
<style>
  .component-a {
    width: 80px;
    margin: 16px;
    border-radius: 8px;
  }
  .component-b {
    width: 80px;
    padding: 16px;
    border-radius: 8px;
  }
</style>
```


**正例**


```html
<style>
  /* 基础原子类 */
  .full-width {
    width: 80px;
  }
  .padding-md {
    padding: 16px;
  }
  .margin-md {
    margin: 16px;
  }
  .rounded {
    border-radius: 8px;
  }

  /* 组件专属样式 */
  .component-b {
    background: #f0f2f5;
  }
</style>
```

---

# 智慧服务卡片

## js-widget

> 原文路径：/reference/widget/js-widget/

](#%E6%A0%87%E5%87%86%E5%8D%A1%E5%BC%80%E5%8F%91)
# 标准卡开发


标准卡和普通蓝河页面开发范式相同，包含下列常见能力：


- 生命周期

- 页面样式与布局

- 列表渲染

- 条件指令

- 应用跳转及参数传递

- 事件绑定

- 自定义组件

- 国际化多语言

**示例：**


```html
<script>
export default {
  data: {
    showSunny: false,
  },
  onInit() {
    // 这里可以添加初始化逻辑
  },
  onShow() {},
}
</script>

<template>
  <div class="weather-container">
    <text class="text-red-500 text-2xl">天气卡片</text>
    <text class="weather" if="{{ showSunny }}">晴</text>
    <text class="weather" else>雨</text>
  </div>
</template>

<style>
@tailwind utilities;
</style>
```

---

## lite-widget

> 原文路径：/reference/widget/lite-widget/

](#%E8%BD%BB%E5%8D%A1%E5%BC%80%E5%8F%91)
# 轻卡开发


轻卡不运行 JavaScript，因此其开发范式与标准卡片存在差异，具体细节将在本节中进一步介绍。


](#%E5%9F%BA%E6%9C%AC%E8%8C%83%E5%BC%8F)
## 基本范式


轻卡的开发 ux 文件开发分为`data`、`template`和`style`三个部分。


**例如：**


```xml
<data>
  {
   "uiData": {
    "content": "轻卡示例"
   }
  }
</data>

<template>
  <text class="text-xs">{{content}}</text>
</template>

<style>
@tailwind utilities;
</style>
```


](#%E6%95%B0%E6%8D%AE%E7%BB%91%E5%AE%9A)
## 数据绑定


在 data 标签中使用 uiData 声明数据，然后在 template 中使用`{{}}`来绑定数据。


```json
{
  "uiData": {
    "content": "Hello World!",
    "key1": "Hello",
    "key2": "World",
    "flag1": true,
    "flag2": false
  }
}
```


```xml
<template>
  <div class="container">
    <text>{{content}}</text>
    <!-- 输出：Hello World！-->
    <text>{{key1}} {{key2}}</text>
    <!-- 输出：Hello World-->
    <text>key1 {{key1}}</text>
    <!-- 输出：key1 Hello-->
    <text>{{flag1 && flag2}}</text>
    <!-- 输出：false-->
    <text>{{flag1 || flag2}}</text>
    <!-- 输出：true-->
    <text>{{!flag1}}</text>
    <!-- 输出：false-->
  </div>
</template>
```


**表达式支持**


卡片模版中支持表达式有以下几种：


````````````````

``


``


````````````````

``


``


````

````


``


| 操作符 | 描述 | 示例 |
| --- | --- | --- |
| +,-,*,/,%,++,--,** | 算术运算（+包含字符串拼接） | a + b |
| neg | 转负数 | -a |
| >=,<=,>,<,==,!=,===,!== | 比较运算 | a > b |
| &&, || | 逻辑运算 | a || b |
| ! | 取反运算 | !a |
| .,[] | 取属性运算 | item.name,arr[3] |
| ?: | 三目运算 | a > 0 ? 'good' : 'bad' |
| `` | 字符串拼接：1. 变量拼接变量；2. 常量拼接变量 | 1. { { key1 } } - { { key2 } }2. my name is { { name } } |


其中，表达式支持的数据类型：


- 基本数据类型：字符串（String）、数字（Number）、布尔（Boolean）、空（Null）

- 引用数据类型：对象（Object）、数组（Array）

](#%E6%9D%A1%E4%BB%B6%E6%B8%B2%E6%9F%93)
## 条件渲染


条件渲染分为 2 种实现：`if/elif/else` 和 `show`。


**if/elif/else**


`if/elif/else` 节点**必须是相邻的兄弟节点**，否则会导致编译失败。仅当条件成立时，对应的节点才会保留在虚拟 DOM（VDOM）中，其余节点会被移除。


```json
{
  "uiData": {
    "display": false
  }
}
```


```xml
<template>
  <div>
    <text if="{{display}}">Hello-1</text>
    <text elif="{{display}}">Hello-2</text>
    <text else>Hello-3</text>
  </div>
</template>
```


**show**


`show` 控制组件的可见性。被设置为 `false` 时，组件不会被渲染到界面上，但仍然保留在 VDOM 中，不会被移除。


```json
{
  "uiData": {
    "visible": false
  }
}
```


```xml
<template>
  <text show="{{visible}}">Hello</text>
</template>
```


](#%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93)
## 列表渲染


使用 `for` 指令可循环渲染数组数据。其语法支持多种形式（`{{}}` 可省略）：


**基础写法：**


```bash
for="{{list}}"
```


-
`list` 是数组类型数据。


-
默认数组元素变量为 `$item`，索引为 `$idx`。


**自定义变量名：**


```bash
for="{{value in list}}"
```


-
`value` 是自定义的数组元素变量名。


-
索引仍默认为 `$idx`。


**自定义索引和元素变量名：**


```bash
for="{{(index, value) in list}}"
```


- `index` 是索引变量名，`value` 是元素变量名。

**使用常数作为循环次数：**


你还可以使用一个常数作为数据源，表示循环执行的次数。等价于遍历从 `0` 到 `n - 1` 的索引。


```bash
for="{{value in 10}}"
for="{{(index, value) in 5}}"
```


-
等价于遍历 `[0, 1, 2, ..., n - 1]`。


-
可以搭配 `index` 和 `value` 使用。


**tid 属性:**


用于指定每个循环项的唯一 ID，用于 DOM 节点复用和性能优化。若未指定，默认使用 `$idx`。


```json
{
  "uiData": {
    "list": [
      { "name": "aa", "uniqueId": 1 },
      { "name": "bb", "uniqueId": 2 },
      { "name": "cc", "uniqueId": 3 }
    ]
  }
}
```


```xml
<div for="value in list" tid="uniqueId">
  <text>{{$idx}}.{{value.name}}</text>
</div>
```


](#%E4%BA%8B%E4%BB%B6%E7%BB%91%E5%AE%9A)
## 事件绑定


轻卡仅支持组件的通用事件 click，对于事件的响应动作需要在 data 模块下 actions 下提前声明。


```json
{
  "actions": {
    "onTextClick": {
      "type": "router",
      "url": "hap://app/com.example.quickapp/page",
      "params": {
        "param": "111"
      }
    }
  }
}
```


```html
<div>
  <!-- 标准格式 -->
  <text onclick="onTextClick"></text>
  <!-- 简写 -->
  <text @click="onTextClick"></text>
</div>
```


**事件绑定传参：** 支持默认参数 $event 和 for 指令循环中 $item


**示例 1：** 组件事件参数通过 $event 获取


```json
{
  "actions": {
    "onSwitchChange": {
      "type": "message",
      "params": {
        "checked": "{{$event.checked}}"
      }
    }
  }
}
```


```html
<switch @change="onSwitchChange"></switch>
```


**示例 2：** for 循环列表中可以通 $item 获取列表 item


```json
{
  "uiData": {
    "list": [
      { "name": "aa", "uniqueId": 1 },
      { "name": "bb", "uniqueId": 2 }
    ]
  },
  "actions": {
    "handleClick": {
      "type": "message",
      "params": {
        "name": "{{$item.name}}"
      }
    }
  }
}
```


```html
<div for="{{list}}" tid="uniqueId" @click="handleClick">
  <text>{{$item.name}}</text>
</div>
```


轻卡当前支持的事件响应动作有跳转和消息以及代理事件，事件响应动作格式定义如下:


****
****
****
****


``


| 参数 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| type | "router" | "message" | 是 | 事件类型，下面详细介绍 |
| url | string | string[] | 否 | 事件类型为 router 时必填，描述跳转页面链接，支持单条或多条 deeplink，支持变量形式。事件类型为 message 时不需要。 |
| params | Record<string, any> | 否 | 参数对象，支持在顶层字段中使用{{变量}}，嵌套对象或数组中的字段不支持变量绑定。 |


](#router)
### router


跳转事件是可以直接在卡片宿主里完成跳转动作, 示例如下：


支持主应用的页面跳转和公开的 scheme


```json
{
  "uiData": {
    "pageUrl": "hap://app/com.example.demo/page",
    "a": "pa"
  },
  "actions": {
    "routerEvent": {
      "type": "router",
      "url": "{{ pageUrl }}",
      "params": {
        "a": "{{a}}",
        "b": "b",
        "c": { "s": "sss" }
      }
    }
  }
}
```


**支持跳转的 deeplink 协议：**


```sh
{scheme}://{host}/{path}?{query}
```


](#message)
### message


消息事件是指事件发送给 widgetProvider 处理。


```json
{
  "uiData": {
    "name": "hello"
  },
  "actions": {
    "messageEvent": {
      "type": "message",
      "params": {
        "name": "{{name}}",
        "b": "b"
      }
    }
  }
}
```


此时在 widgetProvider 中收到的消息如下：


```ts
export default {
  onWidgetEvent(id, { event }) {
    /**
     * event 示例:
     * { action: "messageEvent", params: { name: "hello", b: "b" } }
     */
    console.log(`event`, event)
  },
}
```

---

## overview

> 原文路径：/reference/widget/overview/

](#%E6%A6%82%E8%BF%B0)
# 概述


本节介绍卡片的定义、分类、模块架构和运行原理。


](#%E4%BB%80%E4%B9%88%E6%98%AF%E5%8D%A1%E7%89%87)
## 什么是卡片


卡片是一种轻量的应用形态。它可以嵌入到各类场景应用的页面中（如负一屏，桌面，全搜，锁屏，浏览器，语音助手等），为用户提供快速、直观且高度关联的服务体验。通过精准和便捷地展示信息或功能，卡片不仅提高了用户获取服务的效率，也为应用带来了更多曝光机会和用户参与度。


![img](/a849fd2199dc608fbaca6abce2a81186/widget-demo.png)


](#%E5%8D%A1%E7%89%87%E5%88%86%E7%B1%BB)
## 卡片分类


蓝河系统卡片分为**标准卡**和**轻卡**，不同的卡片的特点和使用场景不一样，下面是两种卡片的对比说明。


| 分类 | 标准卡 | 轻卡 |
| --- | --- | --- |
| 介绍 | 功能完备，具备完整数据处理及逻辑闭环 | 轻量，依赖外部数据和逻辑支持 |
| 特点 | 1.有 JS 代码2.支持 UI 组件3.支持 JS 组件动画4.不支持外部提供数据 | 1. 无 JS 代码2. 支持 UI 组件3.不支持 JS 组件动画4.支持外部提供数据 |
| 适用场景 | UI 和交互上需求更复杂的卡片 | 由外部提供数据，动效和交互不复杂的场景 |


](#%E6%A8%A1%E5%9D%97%E6%9E%B6%E6%9E%84)
## 模块架构


![卡片整体模块架构图](/3b68224337551e20ec7f032be2d1f618/CAPTURE_2025514_94644.png)


**卡片提供方：** 包含卡片的应用，提供卡片的显示内容、布局以及控件点击处理逻辑


- **卡片页面：** 卡片 UI 模块，包含页面组件、布局、事件等显示和交互信息

- **widgetProvider:** 处理卡片的生命周期与回调方法，给卡片页面提供和更新数据。不同类型的卡片此模块有所区别：轻卡有此模块，标准卡中无此模块。

- **配置文件：** 配置卡片刷新时间、尺寸、名称等信息

- **卡片可跳转的页面：** 用户点击卡片内容可以拉起这些页面，此模块非必须。

**卡片使用方(Host)：** 如 launcher 应用的桌面页面，他是卡片的宿主应用，可以显示卡片内容，控制卡片展示的位置。


- **widget-container：** 用于渲染卡片的 UI 组件，可以在 Host 应用显示的卡片界面，卡片显示的内容可以交互，也可以刷新。


- **内容显示：** 显示不同尺寸规格的内容界面，将卡片页面挂在 Host 应用界面的节点上

- **跳转应用：** 点击卡片可以拉起卡片提供方应用的界面

- **刷新数据：** 卡片显示的数据内容，可以进行刷新，其中标准卡可以自主刷新，轻卡需要借助 widgetProvider 来完成


](#%E8%BF%90%E8%A1%8C%E5%8E%9F%E7%90%86)
## 运行原理


![卡片运行功能模块图](/78bea754092e89ee53fc0dc80f26f16b/CAPTURE_2025514_94844.png)


- **widgetProvider**


- **回调方法：** 由 Action 调起，用于响应 Action。

- **生命周期：** 卡片的创建、销毁等生命周期

- **widgetManager：** 用于更新卡片数据，可在生命周期和回调方法中使用


- **卡片页面**


- **组件/样式：** 用于卡片页面布局

- **uiData：** UI 数据，可由 widgetProvider 或卡片页面 JS 更新

- **javascript:**


- 标准卡：用于执行卡片所有业务逻辑。


- **Action：** 一个功能概念，可以触发以下操作：


- 页面跳转：跳转到卡片提供方页面。

- 事件传递：调起 widgetProvider 的回调方法。


从上也可以得出来**两种卡片类型特点：**


- **标准卡：** 功能完备，具备完整数据处理及逻辑闭环，但是不够轻量

- **轻卡：** 轻量，依赖外部数据和逻辑支持，但是无法执行复杂的 UI 交互

](#%E5%AD%98%E5%82%A8%E6%B2%99%E7%AE%B1)
## 存储沙箱


卡片的存储沙箱机制遵守蓝河系统沙箱机制，即：同一包名的应用共享同一个应用存储沙箱。


通常情况下，一个工程下的应用和卡片的应用沙箱存储共享，这意味着：


- 共用存储目录（files/preferences/）

- 共享数据库文件

- 共享 storage 存储的数据

- 共享缓存目录（cache/temp）

由于卡片与主应用共用包名时，可无缝访问主应用存储数据，因此需要注意以下事项：


- 敏感数据保护：应对重要数据进行加密处理，或采用独立包名机制

- 版本管理：需建立主应用与卡片间的数据版本协同更新机制

](#%E6%9D%83%E9%99%90)
## 权限


- 权限申请：


- 标准卡片由卡片应用向用户申请权限

- 轻卡无 js 逻辑，不存在权限申请


- 权限共享：


- 同一包名下已授权的权限可共享，可不用重复申请。

---

## project-config

> 原文路径：/reference/widget/project-config/

](#%E5%8D%A1%E7%89%87%E9%85%8D%E7%BD%AE)
# 卡片配置


本节介绍卡片配置及工程目录，通过示例展示了轻卡和标准卡的具体配置方法。


](#%E5%B7%A5%E7%A8%8B%E7%9B%AE%E5%BD%95)
## 工程目录


在代码工程中支持两种卡片工程目录组织方式：


- 一张卡片单独一个工程

- 多张卡片和普通应用在同一个工程下，卡片和普通应用分属不同的文件目录。

**仅卡片**


注意：卡片工程中不存在 app.ux 文件。


```bash
└── src
│   ├── widgets                 # 统一存放项目快应用卡片代码
│   │    ├── widget1            # 表示卡片1的目录
│   │    │     ├──i18n          # 卡片1的国际化资料目录
│   │    │     ├──assets        # 卡片1的资源文件（卡片使用的非代码资源必须放在卡片目录下）
│   │    │     └──index.ux      # 卡片的ux和逻辑实现文件
│   │    └── widget2            # 表示卡片2的目录
│   └── manifest.json           # 配置应用基本信息
└── package.json                # 定义项目需要的各种模块及配置信息
```


```bash
# 打包结果
- com.example.demo.rpks
  - com.example.demo_widgets.widget1.rpk
  - com.example.demo_widgets.widget2.rpk
```


**普通应用 + 卡片**


注意：为了保证卡片的打包体积最小化，卡片不得使用根目录下的 assets 资源文件。


```bash
└── src
│   ├── widgets                 # 统一存放项目快应用卡片代码
│   │    ├── widget1            # 表示卡片1的目录
│   │    │     ├──i18n          # 卡片1的国际化资料目录
│   │    │     ├──assets        # 卡片1的资源文件（卡片使用的非代码资源必须放在卡片目录下）
│   │    │     └──index.ux      # 卡片的ux和逻辑实现文件
│   │    └── widget2            # 表示卡片2的目录
│   ├── assets                  # 应用的资源(Images/Styles/字体...)
│   ├── helper                  # 项目自定义辅助各类工具
│   ├── pages                   # 统一存放项目快应用页面级代码
│   │    ├── page1              # 表示页面1的目录
│   │    │     └──index.ux      # 页面的ux和逻辑实现文件
│   │    └── page2              # 表示页面2的目录
│   ├── app.ux                  # 快应用应用程序代码的入口文件
│   └── manifest.json           # 配置应用基本信息
└── package.json                # 定义项目需要的各种模块及配置信息
```


```bash
# 打包结果
- com.example.demo.rpks
  - com.example.demo.rpk
  - com.example.demo_widgets.widget1.rpk
  - com.example.demo_widgets.widget2.rpk
```


](#manifest)
## manifest


标准卡和轻卡统一都在 manifest.json 下的 router.widgets 字段下配置，通过 type 区分


](#routerwidgets)
### router.widgets


卡片的定义通过 manifest.json 中的 router.widgets 字段进行定义。


****
[Widget](#widget)


| 属性 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| widgets | Record<string,> | 否 | 卡片信息，key 值为卡片名称，value 为卡片详细配置 widget |


例如： `widgets/Widget1` 对应 `widgets/Widget1`目录，它也是卡片访问路径和卡片的唯一标识


```json
{
  "router": {
    "widgets": {
      "widgets/widget1": {}
    }
  }
}
```


](#widget)
### Widget


用于定义卡片的路由信息。


````


``


````````


[FeatureInfo](#featureinfo)


[PermissionInfo](/reference/configuration/manifest/#permissioninfo)

``


[Size](#size)

``


[DeviceType](#devicetype)

``


[PreviewImage](#previewimage)


| 属性 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| type | js | lite | 是 | 卡片类型，js表示标准卡，lite表示轻卡 |
| name | string | 是 | 卡片名称 |
| description | string | 否 | 卡片描述 |
| component | string | 是 | 卡片对应的组件名，与 ux 文件名保持一致，例如'widget' 对应 'widget.ux' |
| minCardPlatformVersion | number | 是 | 支持的最小卡片平台版本号 |
| versionCode | number | 是 | 卡片版本号，如：2 |
| versionName | string | 是 | 卡片版本名称，如："1.0" |
| targetManufacturers | string[] | 否 | 目标厂商，若配置此字段，则需要指定对应厂商，如不指定，可能不能在对应的厂商上架。可选值vivo、OPPO、xiaomi、honor |
| features | [] | 否 | 卡片使用的 feature 列表，卡片的 feature 列表单独定义 |
| permissions | [] | 否 | 权限申请，示例:[{ "name": "watch.permission.LOCATION" }] |
| sizes | [] | 是 | 卡片支持的外观尺寸选项，如：["2x2","2x1"] |
| deviceTypeList | [] | 否 | 卡片支持的设备类型，如：["phone","watch"] |
| previewImages | [] | 是 | 卡片各个尺寸下预览图。如在普通应用中新建卡片，预览图应放在卡片工程目录中。 |


轻卡独有字段：


[ProviderUri](#provideruri)


| 属性 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| providerUri |  | 是 | widgetProvider 的 uri 标识 |
| providerPackage | string | 是 | widgetProvider 所在应用的包名 |
| minProviderVersion | number | 是 | widgetProvider 所在应用的最小版本号 |
| refreshDuration | number | 否 | 1、表示定时数据刷新间隔，以秒为单位2、此字段会影响卡片的刷新执行，两次曝光的间隔小于数据刷新间隔值时，数据不会被拉取3、支持运营配置4、默认值 30x60=1800 （30 分钟）（小于默认值，上架会审核） |
| scheduledRefreshTime | string[] | 否 | 1、表示卡片的定点刷新的时刻，采用 24 小时制，精确到分钟，如["10:30", "21:30"]。 2、和 refreshDuration 同时指定时，scheduledRefreshTime 优先，指定多个定点刷新时刻，时刻间隔需大于 refreshDuration。 |


](#devicetype)
### DeviceType


卡片支持的设备类型枚举，当前只支持 watch 和 phone


| 类型值 | 说明 |
| --- | --- |
| watch | 手表 |
| phone | 手机，暂不支持 |
| tv | 电视，暂不支持 |
| car | 汽车，暂不支持 |
| band | 手环，暂不支持 |


](#provideruri)
### ProviderUri


专用于轻卡平台的字段，代表 widgetProvider 的 URI 标识。


``


``


``


| 分类 | 规范 | 说明 |
| --- | --- | --- |
| 蓝河应用 | widget-provider://$packageName/$name | 蓝河应用提供数据 |
| 手机安卓应用 | content://$authority/$path/$id | 手机安卓应用提供数据 |
| 服务端 | https://$authority/$path | 服务端提供数据 |


](#featureinfo)
### FeatureInfo


需要使用的 feature 声明，例如：


```ts
{
  "name": "blueos.network.fetch"
}
```


](#size)
### Size


卡片在布局网格中的占位大小（宽度和高度，以栅格个数为单位），支持 "FULL"（全宽/全高）、"AUTO" (宽度/高度自适应)与具体数值的组合，并通过格式如 "2x2"、"FULLx4"、"1xFULL"、"4xAUTO"来定义。


**注意**：`2x2`中间没有空格。


](#previewimage)
### PreviewImage


卡片预览图


```json
{
  "size": "1x1",
  "images": ["/assest/a.png", "/assest/b.png"]
}
```


](#%E5%AE%9E%E8%B7%B5%E7%A4%BA%E4%BE%8B)
## 实践示例


](#%E6%A0%87%E5%87%86%E5%8D%A1)
### 标准卡


工程目录：


```sh
└── src
│   ├── widgets                 # 统一存放项目快应用卡片代码
│   │    └── widget1            # 表示卡片1的目录
│   │          ├──i18n          # 卡片1的国际化资料目录
│   │          ├──assets        # 卡片1的资源文件（卡片使用的非代码资源必须放在卡片目录下）
│   │          └──index.ux      # 卡片的ux和逻辑实现文件
│   └── manifest.json           # 配置应用基本信息
└── package.json                # 定义项目需要的各种模块及配置信息
```


对应的 manifest.json：


```json
{
  "router": {
    "widgets": {
      "widgets/widget1": {
        "type": "js",
        "name": "xx卡片",
        "description": "这是一个xx卡片",
        "component": "index",
        "features": [{ "name": "blueos.network.fetch" }],
        "minCardPlatformVersion": 2000,
        "sizes": ["2x2", "2x1"],
        "deviceTypeList": ["phone", "watch"],
        "previewImages": [
          {
            "size": "2x2",
            "images": ["/assest/a.png", "/assest/b.png"]
          },
          {
            "size": "2x1",
            "images": ["/assest/c.png", "/assest/d.png"]
          }
        ]
      }
    }
  }
}
```


](#%E8%BD%BB%E5%8D%A1)
### 轻卡


工程目录：


```bash
└── src
│   ├── widgets                 # 统一存放项目快应用卡片代码
│   │    └── widget1            # 表示卡片1的目录
│   │          ├──i18n          # 卡片1的国际化资料目录
│   │          ├──assets        # 卡片1的资源文件（卡片使用的非代码资源必须放在卡片目录下）
│   │          └──index.ux      # 卡片的ux和逻辑实现文件
│   └── manifest.json           # 配置应用基本信息
└── package.json                # 定义项目需要的各种模块及配置信息
```


对应的 manifest.json：


```json
{
  "router": {
    "widgets": {
      "widget/widget1": {
        "type": "lite",
        "name": "轻卡",
        "description": "这是一张轻卡",
        "component": "index",
        "providerUri": "widget-provider://com.example.demo/mymusic",
        "providerPackage": "com.example.demo",
        "minProviderVersion": 80801,
        "refreshDuration": 1800000,
        "scheduledRefreshTime": ["10:30", "21:30"],
        "minCardPlatformVersion": 2000,
        "sizes": ["2x2", "2x1"],
        "deviceTypeList": ["watch"],
        "previewImages": [
          {
            "size": "2x2",
            "images": ["/assest/a.png", "/assest/b.png"]
          },
          {
            "size": "2x1",
            "images": ["/assest/c.png", "/assest/d.png"]
          }
        ]
      }
    }
  }
}
```

---

## widget-provider

> 原文路径：/reference/widget/widget-provider/

](#widgetprovider-%E5%BC%80%E5%8F%91)
# widgetProvider 开发


本节将介绍 widgetProvider 的核心概念和三种实现方式。鉴于不同平台的开发方式各有差异，开发者可以做在具体文档中查阅。本节重点讲解 widgetProvider 的顶层概念，通过理解这些概念，您将更容易掌握不同实现方式之间的互通性。


](#%E6%A6%82%E8%BF%B0)
## 概述


](#widgetprovider-%E4%BB%8B%E7%BB%8D)
### widgetProvider 介绍


widgetProvider 是轻卡的核心组成部分，它负责执行轻卡页面的逻辑，并与轻卡页面进行数据传递。


根据数据来源的不同，widgetProvider 有三种不同的实现方式：


| 应用场景 | 实现方式 |
| --- | --- |
| 蓝河应用给轻卡提供数据 | 蓝河应用 |
| Android 手机应用给轻卡提供数据 | Android 应用 |
| 服务端接口通过网络请求给轻卡提供数据 | 服务端 |


![widgetProvider的实现](/4cce57f10d0ab3ca89c117f5ccc713d6/WX20241128-204446.png)
](#%E6%A0%B8%E5%BF%83%E7%BB%84%E6%88%90%E4%B8%8E%E4%BD%9C%E7%94%A8)
### 核心组成与作用


![widgetProvider组成](/ab6c2a8e9658a62dad7c3e3e9592683c/WX20241128-211907.png)
](#%E6%A0%B8%E5%BF%83%E7%BB%84%E6%88%90)
#### 核心组成


widgetProvider 的组成部分为**生命周期、回调方法和 widgetManager**。


- **回调方法：** 响应轻卡页面传递过来的数据。

- **生命周期：** 响应轻卡的创建、销毁等生命周期

- **widgetManager：** 用于更新卡片数据

](#%E5%93%8D%E5%BA%94%E5%8D%A1%E7%89%87%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F)
#### 响应卡片生命周期


widgetProvider 通过下面的生命周期，来执行轻卡的页面的业务逻辑。


- 创建：当卡片在入口被创建时触发

- 刷新：定时或定点条件满足时触发

- 销毁：销毁卡片时触发

- 系统语言变化：监听系统语言改变

**例如：**


```ts
export default {
  onWidgetCreate() {
    console.log('卡片创建')
  },
  onWidgetUpdate() {
    console.log('满足时刷新条件')
  },
  onWidgetDestroy() {
    console.log('销毁卡片')
  },
  onConfigurationChanged() {
    console.log('系统语言改变')
  },
}
```


](#%E5%93%8D%E5%BA%94%E5%8D%A1%E7%89%87%E9%A1%B5%E9%9D%A2%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BA%8B%E4%BB%B6)
#### 响应卡片页面自定义事件


widgetProvider 上的 onWidgetEvent 回调可以响应卡片页面发过来的自定义事件和事件数据。


**例如：**


widgetProvider 接受数据


```ts
export default {
  onWidgetEvent(id, event) {
    console.log('收到卡片页面的事件')
  },
}
```


卡片页面发送事件


```html
<text onclick="onTextClick">hello</text>
```


```json
{
  "actions": {
    "onTextClick": {
      "type": "message.md",
      "params": {
        "content": "hello"
      }
    }
  }
}
```


](#%E5%88%B7%E6%96%B0%E8%BD%BB%E5%8D%A1%E6%95%B0%E6%8D%AE)
#### 刷新轻卡数据


widgetProvider 还通过接口来刷新 轻卡 UI 页面中的 uiData 数据。


widgetProvider 发送数据给页面


```ts
import widgetManager from '@blueos.app.widgetManager'
export default {
  // 卡片创建时触发
  onWidgetCreate(id) {
    widgetManager.updateUiData({
      instanceId: id,
      uiData: { cityName: `Shenzhen` },
    })
  },
}
```


卡片页面编写


```html
<text>{{cityName}}</text>
```


```json
{
  "uiData": {
    "cityName": ""
  }
}
```


](#%E6%9D%83%E9%99%90%E4%B8%8E%E9%99%90%E5%88%B6)
### 权限与限制


**权限申请：** 当运行 widgetProvider 时需要用户授权，权限申请的主体应为 widgetProvider 所在的应用。


**跳转限制：** 为了防止 widgetProvider 随意启动应用并浪费系统资源，widgetProvider 中禁止跳转到其他应用页面。


](#%E5%BC%80%E5%8F%91%E5%AE%9E%E8%B7%B5)
## 开发实践


](#%E6%B3%A8%E5%86%8C-widgetprovider)
### 注册 widgetProvider


在蓝河应用的 manifest.json 中配置如下信息


```json
{
  "widgetProvider": [
    {
      "name": "mymusic",
      "path": "/widgetProvider/index.js"
    }
  ]
}
```


此时对应轻卡需存在配置如下： **注意：需要卡片应用签名和蓝河应用签名一致才可以提供数据**


```json
{
  "router": {
    "widgets": {
      "widget/lite_widget": {
        "providerUri": "widget-provider://com.example.demo/mymusic",
        "providerPackage": "com.example.demo"
      }
    }
  }
}
```


](#%E5%AE%9E%E7%8E%B0-widgetprovider)
### 实现 widgetProvider


需要在 `/widgetProvider/index.js` 完成 widgetProvider 功能。


可参考 [widgetProvider](/api/system/widget-provider/) 和 [widgetManager](/api/system/widget-manager/)


| 生命周期/回调 | 描述 |
| --- | --- |
| onWidgetCreate | 当卡片在入口被创建时触发 |
| onWidgetUpdate | 定时或定点条件满足时，卡片请求提供方刷新卡片 |
| onWidgetEvent | 当卡片页面触发 Action 的 message 事件时被调用 |
| onWidgetDestroy | 销毁卡片时触发，提供方可以做对应的释放 |
| onConfigurationChanged | 监听系统语言改变 |


**示例：**


下面示例实现了，点击播放/停止音乐，定位等功能。


widgetProvider/index.js


```ts
import widgetManager from '@blueos.app.widgetManager'
import geolocation from '@blueos.hardware.location'
import media from '@blueos.media.audio.mediaManager'

let audioPlayer

const getLocation = () => {
  return new Promise((resolve, reject) => {
    geolocation.getLocation({
      success: resolve,
      fail: reject,
    })
  })
}

export default {
  async onWidgetCreate(id) {
    // 初始化数据
    audioPlayer = media.createAudioPlayer()
  },
  async onWidgetUpdate(id) {
    // 实现定时更新位置功能
    const { longitude, latitude } = await getLocation()
    widgetManager.updateUiData({
      instanceId: id,
      uiData: { longitude, latitude },
    })
  },
  onWidgetEvent(id, { event }) {
    // 实现点击音乐播放的功能
    const { type } = event
    switch (type) {
      case 'play':
        audioPlayer.src = 'xxxx'
        audioPlayer.play()
        break
      case 'stop':
        audioPlayer.stop()
        break
    }
  },

  onWidgetDestroy(id) {
    audioPlayer.release()
  },

  onConfigurationChanged(id, event) {
    // 实现改变语言
    if (event && event.type && event.type === 'locale') {
      widgetManager.updateUiData({
        instanceId: id,
        uiData: { songTitle: 'flute solo' },
      })
    }
  },
}
```


对应卡片界面


```html
<div>
  <text>{{songTitle}}</text>
  <text>{{longitude}}, {{latitude}}</text>
  <text @click="play">play</text>
  <text @click="stop">stop</text>
</div>
```


```json
{
  "uiData": {
    "songTitle": "笛子独奏",
    "longitude": "",
    "latitude": ""
  },
  "actions": {
    "play": {
      "type": "message.md",
      "params": {
        "type": "play"
      }
    },
    "stop": {
      "type": "message.md",
      "params": {
        "type": "stop"
      }
    }
  }
}
```


](#%E5%85%B6%E4%BB%96%E5%B9%B3%E5%8F%B0-widgetprovider-%E5%AE%9E%E7%8E%B0)
## 其他平台 widgetProvider 实现


当手机 Android 应用或服务端需要为轻卡提供数据时，可以使用 Android 应用和服务端开发 widgetProvider。


这两种实现方式的原理与蓝河实现相同，可以参考[文档](https://www.quickapp.cn/document?menu=2%252C143&pathUrl=%252Fdoc%252Flitewidget%252Fguide%252Finterface%252Fintro.html)进行具体实现。

---

# 框架能力

## data-binding

> 原文路径：/reference/app-service/data-binding/

](#%E6%95%B0%E6%8D%AE%E7%BB%91%E5%AE%9A)
# 数据绑定


蓝河应用提供了数据绑定 UI 组件的方式，当数据发生变化时，会自动触发 UI 组件的更新。


](#%E7%BB%91%E5%AE%9A%E6%96%B9%E6%B3%95)
## 绑定方法


用法上，开发者可以在组件上使用 **"{{varname}}"** ，即双大括号内放置变量的形式，即可将变量绑定在 UI 组件上。


](#%E7%A4%BA%E4%BE%8B%E5%A6%82%E4%B8%8B)
### 示例如下


```html
<template>
  <div>
    <text>{{title}}</text>
    <input type="button" value="changeTitle" onclick="changeTitle" />
  </div>
</template>

<script>
  export default {
    data: {
      title: 'Hello World!',
    },
    changeTitle() {
      this.title = 'Hello 蓝河应用'
    },
  }
</script>
```


](#%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9)
## 注意事项


响应式数据必须先在 data 上静态声明或者使用 `this.$set` 动态添加，不能直接使用 `this.title = 'hello'` 添加。


](#%E9%94%99%E8%AF%AF%E7%A4%BA%E4%BE%8B)
### 错误示例


```html
<script>
  export default {
    data: {},
    onInit() {
      this.title = 'Hello 蓝河应用'
    },
  }
</script>
```

---

## event-on

> 原文路径：/reference/app-service/event-on/

](#%E6%A6%82%E8%BF%B0)
# 概述


通过在 UI 组件上绑定事件，开发者可以实现蓝河应用与用户之间的交互。


](#%E7%BB%91%E5%AE%9A%E4%BA%8B%E4%BB%B6)
## 绑定事件


用法上，开发者可以使用 on (可以用@简写代替) 来绑定事件，如：onclick,onchange 可简写成 @click,@change，并在事件触发时执行对应的 JavaScript 业务代码。


](#%E7%A4%BA%E4%BE%8B%E5%A6%82%E4%B8%8B)
### 示例如下


```html
<template>
  <div class="tutorial-page">
    <text id="elNode1" class="{{ elClassName + 1 }}" disabled="false" onclick="onClickHandler"
      >组件节点1</text
    >
    <text
      id="elNode2"
      class="class-static-1 {{ elClassName + 2 }}"
      onclick="onClickHandler2('参数1', argName)"
      >组件节点2</text
    >
  </div>
</template>

<style lang="less">
  .tutorial-page {
    flex-direction: column;
  }
</style>

<script>
  export default {
    data: {
      elClassName: 'class-dynamic',
      argName: '动态参数',
    },
    onClickHandler(evt) {
      console.info(`触发事件`)
    },
    onClickHandler2(arg1, arg2, evt) {
      console.info(`触发事件，参数： ${arg1}, ${arg2}`)
    },
  }
</script>
```


](#%E4%BA%8B%E4%BB%B6%E4%BC%A0%E5%8F%82)
### 事件传参


UI 组件可以向绑定的事件方法传递自定义参数。


](#%E7%A4%BA%E4%BE%8B%E5%A6%82%E4%B8%8B-1)
#### 示例如下


```html
<template>
  <div class="demo-page">
    <text for="{{list}}" key="{{$idx}}" onclick="handle($idx,$item,total)">{{$item}}</text>
  </div>
</template>

<script>
  export default {
    data: {
      list: [1, 2, 3, 4, 5],
      total: 0,
    },
    handle(idx, item, total, $evt) {
      console.log(idx)
      console.log(item)
      console.log(total)
      console.log($evt)
    },
  }
</script>
```


回调函数被调用时，会在参数列表末尾自动添加一个 evt 参数，通过 evt 参数开发者可以访问回调事件相关上下文数据。


UI 组件还支持许多其他的事件绑定，如果您想进一步了解，请移步[通用事件](/component/common/common-events/)。

---

## for

> 原文路径：/reference/app-service/for/

](#%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93)
# 列表渲染


使用 `for` 指令可循环渲染数组数据。其语法支持多种形式（`{{}}` 可省略）：


](#%E5%9F%BA%E7%A1%80%E5%86%99%E6%B3%95)
## 基础写法


```bash
for="{{list}}"
```


-
`list` 是数组类型数据。


-
默认数组元素变量为 `$item`，索引为 `$idx`。


](#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%8F%98%E9%87%8F%E5%90%8D)
## 自定义变量名


```bash
for="{{value in list}}"
```


-
`value` 是自定义的数组元素变量名。


-
索引仍默认为 `$idx`。


](#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%B4%A2%E5%BC%95%E5%92%8C%E5%85%83%E7%B4%A0%E5%8F%98%E9%87%8F%E5%90%8D)
## 自定义索引和元素变量名


```bash
for="{{(index, value) in list}}"
```


- `index` 是索引变量名，`value` 是元素变量名。

](#%E4%BD%BF%E7%94%A8%E5%B8%B8%E6%95%B0%E4%BD%9C%E4%B8%BA%E5%BE%AA%E7%8E%AF%E6%AC%A1%E6%95%B0)
## 使用常数作为循环次数


你还可以使用一个常数作为数据源，表示循环执行的次数。等价于遍历从 `0` 到 `n - 1` 的索引。


```bash
for="{{value in 10}}"
for="{{(index, value) in 5}}"
```


-
等价于遍历 `[0, 1, 2, ..., n - 1]`。


-
可以搭配 `index` 和 `value` 使用。


](#tid-%E5%B1%9E%E6%80%A7)
## tid 属性


用于指定每个循环项的唯一 ID，用于 DOM 节点复用和性能优化。若未指定，默认使用 `$idx`。


```xml
<div for="value in list" tid="uniqueId">
  <text>{{$idx}}.{{value.name}}</text>
</div>
<script>
  export default {
    data: {
      list: [
        { name: 'aa', uniqueId: 1 },
        { name: 'bb', uniqueId: 2 },
        { name: 'cc', uniqueId: 3 },
      ],
    },
    onInit() {
      console.log('指令for')
    },
  }
</script>
```


](#%E7%A4%BA%E4%BE%8B)
## 示例


```html
<template>
  <div class="tutorial-page">
    <!-- 方式1：默认$item代表数组中的元素, $idx代表数组中的索引 -->
    <div class="tutorial-row" for="{{list}}" tid="uniqueId">
      <text>{{$idx}}.{{$item.name}}</text>
    </div>
    <!-- 方式2：自定义元素变量名称 -->
    <div class="tutorial-row" for="value in list" tid="uniqueId">
      <text>{{$idx}}.{{value.name}}</text>
    </div>
    <!-- 方式3：自定义元素、索引的变量名称 -->
    <div class="tutorial-row" for="(personIndex, personItem) in list" tid="uniqueId">
      <text>{{personIndex}}.{{personItem.name}}</text>
    </div>
  </div>
</template>

<style lang="less">
  .tutorial-page {
    flex-direction: column;
    .tutorial-row {
      width: 85%;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
</style>

<script>
  export default {
    data: {
      list: [
        { name: 'aa', uniqueId: 1 },
        { name: 'bb', uniqueId: 2 },
        { name: 'cc', uniqueId: 3 },
      ],
    },
    onInit() {
      console.log('指令for')
    },
  }
</script>
```


示例代码中，在渲染页面时，`div.tutorial-row`的结构，会根据 script 中的数据 list 的定义，被循环的生成多个。tid="uniqueId"，数组元素的某个属性名，不一定叫 uniqueId。 它类似于 React 的 key={item.uniqueId}或 vue 的 track-by={ uniqueId }, 用于优化渲染速度。当数据修改时，数据不改变的 dom 不会被重新渲染，已经改变的数据所在的 dom 才会被重新渲染， 因此我们必须保证 uniqueId 这个属性值在每个数组元素都不一样。


](#%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9)
## 注意事项


for 指令只能循环数组，不能循环对象。当 for 指令与 if 指令共存于一个标签时， if 指令的优先级优于 for 指令。为了方便未看文档的新人快速上手项目，不建议这两个指令共存于同一个标签。自定义变量表示 for 指令的数组索引和数组元素时，变量名不可以用`$`或`_`开头；使用`tid属性`时应注意：


- `tid属性`指定的数据属性必须存在，否则可能导致运行异常

- `tid属性`指定的数据属性要保证唯一，否则可能导致性能问题

- `tid属性`目前不支持表达式。

---

## if-show

> 原文路径：/reference/app-service/if-show/

](#%E6%9D%A1%E4%BB%B6%E6%B8%B2%E6%9F%93)
# 条件渲染


条件渲染有 2 种：if/elif/else 和 show。它们的区别在于：if 为 false 时，组件会从 DOM 中移除，而 show 仅仅是渲染时不可见，组件依然存在于 DOM 中;


](#if-%E6%8C%87%E4%BB%A4)
## if 指令


if 条件渲染，是指 if/elif/else 这 3 个相关指令，用于控制是否增加或者删除组件；


if/elif/else 节点必须是相邻的兄弟节点


```html
<template>
  <div>
    <text if="{{display}}">Hello-1</text>
    <text elif="{{display}}">Hello-2</text>
    <text else>Hello-3</text>
  </div>
</template>

<script>
  export default {
    data: {
      display: false,
    },
  }
</script>
```


](#show-%E6%8C%87%E4%BB%A4)
## show 指令


show 指令，是指是否显示组件，用于控制组件的显示状态，并不会从 DOM 结构中删除;


show 等同于 visible=none, 主要用于在原生组件上声明；


show 指令开始支持在自定义组件上进行声明，当这样使用时，等同于在该自定义子组件的根节点上使用 show 指令；


对于之前版本，自定义组件不支持 show 指令的需求，可以通过 props 传入参数，在自己内部使用 show 来控制是否可见；


```html
<template>
  <text show="{{visible}}">Hello</text>
</template>

<script>
  export default {
    data: {
      visible: false,
    },
  }
</script>
```


](#if-%E4%B8%8E-show-%E5%8C%BA%E5%88%AB)
## if 与 show 区别


-
当 if/elif 指令的值为 false 时，节点会从页面中移除，当 if/elif 指令值为 true，组件会动态插入节点中；


-
当 show 指令的值为 true 时，节点可见， 当其值为 false 时，组件不可见，但节点仍会保留在页面 DOM 结构中

---

## page-style-and-layout

> 原文路径：/reference/app-service/page-style-and-layout/

](#%E9%A1%B5%E9%9D%A2%E5%B8%83%E5%B1%80)
# 页面布局


蓝河应用使用的是 Flex 布局方式。


](#%E7%9B%92%E6%A8%A1%E5%9E%8Ba-id%E7%9B%92%E6%A8%A1%E5%9E%8Ba)
## 盒模型


蓝河应用布局框架使用 border-box 模型，具体表现与宽高边距计算可参考 MDN 文档 [box-sizing](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-sizing)， 暂不支持 content-box 模型与手动指定 box-sizing 属性。


布局所占宽度 Width：


`Width = width(包含padding-left + padding-right + border-left + border-right)`


布局所占高度 Height:


`Height = height(包含padding-top + padding-bottom + border-top + border-bottom)`


](#%E9%95%BF%E5%BA%A6%E5%8D%95%E4%BD%8Da-id%E9%95%BF%E5%BA%A6%E5%8D%95%E4%BD%8Da)
## 长度单位


](#px)
### px


与传统 web 页面不同，`px`是相对于`项目配置基准宽度`的单位，已经适配了移动端屏幕，其原理类似于`rem`


开发者只需按照设计稿确定框架样式中的 px 值即可。


首先，我们需要定义`项目配置基准宽度`，它是项目的配置文件（`<ProjectName>/src/manifest.json`）中`config.designWidth`的值


然后， `设计稿1px`与`框架样式1px`转换公式如下：


```text
设计稿1px / 设计稿基准宽度 = 框架样式1px / 项目配置基准宽度
```


**示例如下：**


若设计稿宽度为 640px，元素 A 在设计稿上的宽度为 100px，实现的两种方案如下：


**方案一：**


修改`项目配置基准宽度`：将`项目配置基准宽度`设置为`设计稿基准宽度`，则`框架样式1px`等于`设计稿1px`


- 设置`项目配置基准宽度`，在项目的配置文件（`<ProjectName>/src/manifest.json`）中，修改`config.designWidth`：


```json
{
  "config": {
    "designWidth": 640
  }
}
```


- 设置元素 A 对应的框架样式：


```css
width: 100px;
```


**方案二：**


不修改`项目配置基准宽度`：若当前项目配置的`项目配置基准宽度`为 466，设元素 A 的框架样式 x`px`，由转换公式得：`100 / 640 = x / 466`


- 设置元素 A 对应的框架样式：


```css
width: 73px;
```


](#%E8%AE%BE%E7%BD%AE%E5%AE%9A%E4%BD%8Da-id%E8%AE%BE%E7%BD%AE%E5%AE%9A%E4%BD%8Da)
## 设置定位


position 将支持三种属性值：relative、absolute 和 fixed，并且默认值为 relative，入门可以参考[MDN 文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position)


](#%E8%AE%BE%E7%BD%AE%E6%A0%B7%E5%BC%8Fa-id%E8%AE%BE%E7%BD%AE%E6%A0%B7%E5%BC%8Fa)
## 设置样式


开发者可以使用`内联样式`、`tag选择器`、`class选择器`、`id选择器`来为组件设置样式


同时也可以使用`并列选择`、`后代选择器`设置样式


详细的文档可以查看[此处](/component/common/common-styles)


**注意:** template 的样式读取范围，只包括内联样式与当前 ux 文件的`<style>`标签内的样式与引入的 css/less/scss，如果一个 ux 文件被包装成自定义组件并被其他父组件引用，其样式并不能响应父组件的样式。


**示例如下：**


```html
<template>
  <div class="tutorial-page">
    <text style="color: #FF0000;">内联样式</text>
    <text id="title">ID选择器</text>
    <text class="title">class选择器</text>
    <text>tag选择器</text>
  </div>
</template>

<style>
  .tutorial-page {
    flex-direction: column;
  }
  /* tag选择器 */
  text {
    color: #0000ff;
  }
  /* class选择器（推荐） */
  .title {
    color: #00ff00;
  }
  /* ID选择器 */
  #title {
    color: #00a000;
  }
  /* 并列选择 */
  .title,
  #title {
    font-weight: bold;
  }
  /* 后代选择器 */
  .tutorial-page text {
    font-size: 42px;
  }
  /* 直接后代选择器 */
  .tutorial-page > text {
    text-decoration: underline;
  }
</style>
```


](#%E9%80%9A%E7%94%A8%E6%A0%B7%E5%BC%8Fa-id%E9%80%9A%E7%94%A8%E6%A0%B7%E5%BC%8Fa)
## 通用样式


通用样式如 margin,padding 等属性可以点击[此处](/component/common/common-styles)


](#flex-%E5%B8%83%E5%B1%80%E7%A4%BA%E4%BE%8Ba-idflex%E5%B8%83%E5%B1%80%E7%A4%BA%E4%BE%8Ba)
## Flex 布局示例


框架使用`Flex布局`，关于`Flex布局`可以参考外部文档[A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)


flex 布局的支持也可以在官网文档的[通用样式](/component/common/common-styles)查询


div 组件为最常用的 Flex 容器组件，具有 Flex 布局的特性；text、a、span、label 组件为文本容器组件，**其它组件不能直接放置文本内容**


**示例如下：**


```html
<template>
  <div class="tutorial-page">
    <div class="item">
      <text>item1</text>
    </div>
    <div class="item">
      <text>item2</text>
    </div>
  </div>
</template>

<style>
  .tutorial-page {
    /* 交叉轴居中 */
    align-items: center;
    /* 纵向排列 */
    flex-direction: column;
  }
  .tutorial-page > .item {
    /* 有剩余空间时，允许被拉伸 */
    /*flex-grow: 1;*/
    /* 空间不够用时，不允许被压缩 */
    flex-shrink: 0;
    /* 主轴居中 */
    justify-content: center;
    width: 200px;
    height: 100px;
    margin: 10px;
    background-color: #ff0000;
  }
</style>
```

---

## parent-child-component-communication

> 原文路径：/reference/app-service/parent-child-component-communication/

](#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6)
# 自定义组件


熟悉自定义组件的开发，了解父子组件之间的通信方式，如：props，data。


](#%E7%BB%84%E4%BB%B6%E8%87%AA%E5%AE%9A%E4%B9%89)
## 组件自定义


开发页面时开发者必须用到各种 UI 组件，如：`text`、`div`，这些组件是由蓝河系统提供的；如果开发一个复杂的页面，开发者把所有的 UI 部分写在一个文件的`<template>`，那代码的可维护性将会很低，并且模块之间容易产生不必要的耦合关系。


为了更好的组织逻辑与代码，可以把页面按照功能拆成多个模块，每个模块负责其中的一个功能部分，最后页面将这些模块引入管理起来，传递业务与配置数据完成代码分离，那么这就是`自定义组件`的意义。


自定义组件是开发者使用 `.ux` 文件编写的 UI 组件，可以对数据、事件、方法进行个性化管理。


**示例如下：**


```html
<template>
  <div class="tutorial-page">
    <text class="tutorial-title">自定义组件:</text>
    <text>{{ say }}</text>
    <text>{{ obj.name }}</text>
  </div>
</template>

<style lang="less">
  .tutorial-page {
    flex-direction: column;
    padding-top: 20px;

    .tutorial-title {
      font-weight: bold;
    }
  }
</style>

<script>
  // 子组件
  export default {
    data: {
      say: 'hello',
      obj: {
        name: '蓝河应用',
      },
    },
    /*
      data（）{
      return {
          say:'hello',
          obj:{
            name:'vivo手表应用'
          }
      }
      },
    */
    onInit() {
      console.log('我是子组件')
    },
  }
</script>
```


自定义组件中数据模型只能使用**data 属性**，data 类型可以是 Object 或 Function。如果是函数，返回结果必须是对象。


](#%E7%BB%84%E4%BB%B6%E4%BD%BF%E7%94%A8)
## 组件使用


](#%E7%BB%84%E4%BB%B6%E5%BC%95%E5%85%A5)
### 组件引入


蓝河应用中是通过`<import>标签`引入组件,如下面代码所示


```html
<import name="XXX" src="XXX"></import>
```


`<import>标签`中的的`src`属性指定自定义组件的地址，`name`属性指定在父组件中引用该组件时使用的**标签名称**


**示例如下：**


```html
<import name="comp-part1" src="./part1"></import>

<template>
  <div class="tutorial-page">
    <text class="tutorial-title">引入组件：</text>
    <comp-part1></comp-part1>
  </div>
</template>

<style lang="less">
  .tutorial-page {
    flex-direction: column;
    padding: 20px 10px;

    .tutorial-title {
      font-weight: bold;
    }
  }
</style>

<script>
  // 父组件
  export default {
    data: {},
    onInit() {
      console.log('引入组件')
    },
  }
</script>
```


](#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F)
## 自定义组件的生命周期


| 属性 | 类型 | 参数 | 返回值 | 描述 | 触发时机 |
| --- | --- | --- | --- | --- | --- |
| onInit | Function | 无 | 无 | 监听初始化 | 当数据驱动化完成时触发 |
| onReady | Function | 无 | 无 | 监听模板创建完成 | 当模板创建完成时触发 |
| onDestroy | Function | 无 | 无 | 监听组件销毁 | 当销毁时触发 |


](#%E7%88%B6%E5%AD%90%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1)
## 父子组件通信


](#%E7%88%B6%E7%BB%84%E4%BB%B6%E9%80%9A%E8%BF%87-prop-%E5%90%91%E5%AD%90%E7%BB%84%E4%BB%B6%E4%BC%A0%E9%80%92%E6%95%B0%E6%8D%AE)
### 父组件通过 Prop 向子组件传递数据


父组件向子组件传递数据，通过在子组件的`props`属性中声明对外暴露的属性名称，然后在`组件引用标签`上声明传递的父组件数据，详见[Props](/reference/app-service/props)


**示例如下：**


```html
<!-- 子组件 -->
<template>
  <div class="child-demo">
    <text class="title">子组件:</text>
    <text>{{ say }}</text>
    <text>{{ propObject.name }}</text>
  </div>
</template>
<script>
  export default {
    props: {
      say:{},
      propObject:{}
    }

    onInit() {
      console.info(`外部传递的数据：`, this.say, this.propObject)
    },
  }
</script>
```


```html
<!-- 父组件 -->
<import name="comp" src="./comp"></import>
<template>
  <div class="parent-demo">
    <comp say="{{say}}" prop-object="{{obj}}"></comp>
  </div>
</template>
<script>
  export default {
    data: {
      say:'hello'
      obj:{
        name:'child-demo'
      }
    }
  }
</script>
```


](#%E5%AD%90%E7%BB%84%E4%BB%B6%E5%AF%B9%E7%88%B6%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1)
### 子组件对父组件通信


当子组件对数据进行改造后，把最终数据交给父组件甚至往上，往往有以下办法


- 父组件传递的数据本身就是对象，子组件**直接修改对象中的属性**，父组件的值也会发生改变，不推荐这种;

- 子组件通过`$emit()`触发在 UI 组件上绑定的自定义事件来执行父组件的方法

](#emit-%E7%A4%BA%E4%BE%8B%E5%A6%82%E4%B8%8B)
#### emit 示例如下


父组件监听子组件事件


```html
<import name="comp" src="./comp.ux"></import>
<template>
  <div class="parent-demo">
    <text>我是父组件count:{{count}}</text>
    <comp count="{{count}}" @child-evt="emitEvt"></comp>
  </div>
</template>

<script>
  export default {
    data: {
      count: 20,
    },
    emitEvt(evt) {
      this.count = evt.count
    },
  }
</script>
```


子组件触发事件


```html
<template>
  <div class="child-demo">
    <text>我是子组件一count:{{compCount}}</text>
    <input type="button" @click='addHandler' value='add'></input>
  </div>
</template>
<script>
  export default {
    props: {
      count:{}
    },
    data(){
        return{
            compCount:this.count
        }
    },
    addHandler(){
        this.compCount ++
        this.$emit('childEvt',{
            count:this.compCount
        })
    },
  }
</script>
```

---

## props

> 原文路径：/reference/app-service/props/

](#props)
# props


](#prop-%E5%86%99%E6%B3%95)
## Prop 写法


Prop 属性名称使用 camelCase(驼峰命名法)命名法，在外部传递数据时请转化为以 kebab-case (短横线分隔命名) propObject 转换为 prop-object。


```html
<!-- 子组件 -->
<template>
  <div class="child-demo">
    <text>{{ propObject.name }}</text>
  </div>
</template>
<script>
  export default {
    props: {
      propObject: {},
    },
  }
</script>
```


```html
<!-- 父组件 -->
<import name="comp" src="./comp"></import>
<template>
  <div class="parent-demo">
    <comp prop-object="{{obj}}"></comp>
  </div>
</template>
<script>
  export default {
    data: {
      obj: {
        name: 'child-demo',
      },
    },
  }
</script>
```


](#%E5%B1%9E%E6%80%A7%E9%BB%98%E8%AE%A4%E5%80%BC)
## 属性默认值


子组件声明属性时，可以设置默认值。当调用子组件没有传入该数据时，将会自动设为默认值。


如果需要设置默认值，`props` 属性的写法必须要要写成 Object 形式，**不能**写成 Array 形式。


**示例如下：**


```html
<script>
  // 子组件
  export default {
    props: {
      prop1: {
        default: 'Hello', //默认值
      },
      prop2Object: {}, //不设置默认值
    },
    onInit() {
      console.info(`外部传递的数据：`, this.prop1, this.prop2Object)
    },
  }
</script>
```


](#%E6%95%B0%E6%8D%AE%E5%8D%95%E5%90%91%E6%80%A7)
## 数据单向性


父子间的数据传输是单向性的，父组件 prop 数据更新，子组件的数据会刷新为最新值;子组件的 prop 值发生改变，并不会改变父组件中值。


但是**prop 类型事数组或者对象，自组件变化会影响到父组件的值**，这意味着你不应该在一个子组件内部改变 prop 的值，这是危险性操作。


常见的三种操作 prop 值的方法：


**1.将 prop 传入的值作为初始值，用 data 接收**


```html
<script>
  export default {
    props: {
      say: {},
      propObject: {},
    },
    data() {
      return {
        obj: this.propObject.count,
      }
    },
    onInit() {
      console.info(`外部传递的数据：`, this.say, this.propObject)
    },
  }
</script>
```


**提示：**


- 如果你想用 data 直接接收 propObject 这个对象，可以采用**JSON.parse(JSON.stringify(propObject))**，将 prop 深度克隆。

**2.$watch 监控数据改变**


如果是监听对象中的属性，参数请使用`.`分割，如：`this.$watch('propSay.name', 'watchPropsChange') 才能生效`


**注意使用$watch,一般用于处理 data 里面的数据监听**


```html
<script>
  export default {
    data() {
      return {
        propSay: {
          name: 'app',
        },
      }
    },
    onInit() {
      // 监听数据变化
      this.$watch('propSay.name', 'watchPropsChange')
    },
    /**
     * 监听数据变化，你可以对数据处理后，设置值到data上
     * @param newV
     * @param oldV
     */
    watchPropsChange(newV, oldV) {
      console.info(`监听数据变化：`, newV, oldV)
      this.propSay = newV && newV.toUpperCase()
    },
  }
</script>
```

---

## switching-pages

> 原文路径：/reference/app-service/switching-pages/

](#%E9%A1%B5%E9%9D%A2%E8%B7%AF%E7%94%B1)
# 页面路由


了解如何打开页面、回退，并传递参数


](#%E7%BB%84%E4%BB%B6-a-%E5%88%87%E6%8D%A2%E9%A1%B5%E9%9D%A2)
## 组件 a 切换页面


](#%E5%88%87%E6%8D%A2%E9%A1%B5%E9%9D%A2)
### 切换页面


组件 a 可通过配置 href 属性跳转到应用内的页面


**示例如下：**


```html
<template>
  <div class="tutorial-page">
    <!-- 以'/'开头的应用内页面的路径 -->
    <a href="/PageParams/receiveparams">跳转到接收参数页面</a>
    <!-- 以非'/'开头的应用内页面的名称 -->
    <a href="PageParams/receiveparams">跳转到接收参数页面</a>
    <!-- 特殊的,如果uri的值是'/',则跳转到path为'/'的页,没有则跳转到首页-->
    <a href="/">跳转到首页</a>
  </div>
</template>
```


](#%E4%BC%A0%E9%80%92%E5%8F%82%E6%95%B0)
### 传递参数


通过组件 a 实现页面切换时，可以通过'?key=value'的方式添加参数，支持参数为变量


**示例如下：**


```html
<script>
  export default {
    data: {
      title: 'Hello, world!',
    },
    onInit() {
      console.log('组件a切换页面并传递参数')
    },
  }
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <!-- 添加参数 -->
    <a href="/PageParams/receiveparams?key=Hello, world!" class="mt-[75px] text-[30px] text-[#09ba07] underline">携带参数key1跳转</a>
    <!-- 添加变量参数 -->
    <a href="/PageParams/receiveparams?key={{title}}" class="mt-[75px] text-[30px] text-[#09ba07] underline">携带参数key2跳转</a>
  </div>
</template>

<style>
@tailwind utilities;
</style>
```


](#%E6%8E%A5%E5%8F%A3-router-%E5%88%87%E6%8D%A2%E9%A1%B5%E9%9D%A2)
## 接口 router 切换页面


](#%E5%88%87%E6%8D%A2%E9%A1%B5%E9%9D%A2-1)
### 切换页面


router 接口在使用前，需要先导入模块


`router.push(OBJECT)` / `router.replace(OBJECT)` 支持的参数 uri 与组件 a 的 href 属性完全一致


**示例如下：**


```html
<script>
  // 导入模块
  import router from '@blueos.app.router'

  export default {
    onInit () {
      console.log('接口router切换页面')
    },
    routePagePush () {
      // 跳转到应用内的某个页面
      router.push({
        uri: '/PageParams/receiveparams'
      })
    },
    routePageReplace () {
      // 跳转到应用内的某个页面，当前页面无法返回
      router.replace({
        uri: '/PageParams/receiveparams'
      })
    },
    routePageBack () {
      // 返回上一页面
      router.back()
    },
    routePageClear () {
      // 清空所有历史页面记录，仅保留当前页面
      router.clear()
    }
  }
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <input class="w-[550px] h-[86px] mt-[75px] rounded-[43px] bg-[#09ba07] text-[30px] text-white" type="button" value="跳转到接收参数页面" onclick="routePagePush"></input>
    <input class="w-[550px] h-[86px] mt-[75px] rounded-[43px] bg-[#09ba07] text-[30px] text-white" type="button" value="跳转到接收参数页面，当前页面无法返回" onclick="routePageReplace"></input>
    <input class="w-[550px] h-[86px] mt-[75px] rounded-[43px] bg-[#09ba07] text-[30px] text-white" type="button" value="返回上一页" onclick="routePageBack"></input>
    <input class="w-[550px] h-[86px] mt-[75px] rounded-[43px] bg-[#09ba07] text-[30px] text-white" type="button" value="清空页面记录，仅保留当前页面" onclick="routePageClear"></input>
  </div>
</template>

<style>
@tailwind utilities;
</style>
```


](#%E4%BC%A0%E9%80%92%E5%8F%82%E6%95%B0-1)
### 传递参数


router 接口的参数 params 可配置页面跳转时需要传递的参数


**示例如下：**


```html
<script>
  // 导入模块
  import router from '@blueos.app.router'

  export default {
    data: {
      title: 'Hello, world!'
    },
    onInit () {
      console.log('接口router切换页面并传递参数')
    },
    routePagePushWithParams () {
      // 跳转到应用内的某个页面
      router.push({
        uri: '/PageParams/receiveparams',
        params: { key: this.title }
      })
    },
    routePageReplaceWithParams () {
      // 跳转到应用内的某个页面，当前页面无法返回
      router.replace({
        uri: '/PageParams/receiveparams',
        params: { key: this.title }
      })
    }
  }
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <input class="w-[550px] h-[86px] mt-[75px] rounded-[43px] bg-[#09ba07] text-[30px] text-white" type="button" value="携带参数跳转页面" onclick="routePagePushWithParams"></input>
    <input class="w-[550px] h-[86px] mt-[75px] rounded-[43px] bg-[#09ba07] text-[30px] text-white" type="button" value="携带参数跳转页面，当前页面无法返回" onclick="routePageReplaceWithParams"></input>
  </div>
</template>

<style>
@tailwind utilities;
</style>
```


](#%E6%8E%A5%E6%94%B6%E5%8F%82%E6%95%B0)
## 接收参数


现在，开发者已经掌握了通过组件 a 和接口 router 在页面之间传递参数的方法，如何接收参数呢？


其实很简单，组件 a 和接口 router 传递的参数的接收方法完全一致：在页面的 ViewModel 的`data属性`中声明使用的属性


**示例如下：**


```html
<script>
  export default {
    data: {
      key: '',
    },
    onInit() {
      console.log('接收参数')

      // js中输出页面传递的参数
      console.info('key: ' + this.key)
    },
  }
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <text>page</text>
    <!-- template中显示页面传递的参数 -->
    <text>{{key}}</text>
  </div>
</template>

<style>
@tailwind utilities;
</style>
```

---

# 组件-其他

## canvas

> 原文路径：/component/others/canvas/

](#canvas)
# canvas


画布组件，通过使用 JavaScript 中的脚本，可以在 canvas 上绘制图形，文字等。


](#%E5%AD%90%E7%BB%84%E4%BB%B6)
### 子组件


不支持


](#%E5%B1%9E%E6%80%A7)
### 属性


支持[通用属性](../common/common-attributes)


](#%E6%A0%B7%E5%BC%8F)
### 样式


支持[通用样式](../common/common-styles)


](#%E6%96%B9%E6%B3%95)
### 方法


](#canvasgetcontext)
#### canvas.getContext()


创建 canvas 绘图上下文


](#%E5%8F%82%E6%95%B0)
##### 参数


``


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| contextType | <string> | 目前支持传入'2d' |


](#%E8%BF%94%E5%9B%9E%E5%80%BC)
##### 返回值


``
[CanvasRenderingContext2D](#context2d)


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| '2d' | CanvasRenderingContext2D | 返回一个 CanvasRenderingContext2D 对象，用于 2D 绘制，请参考对象 |


](#%E7%A4%BA%E4%BE%8B)
##### 示例


```js
const canvas = this.$element('canvasid')
const ctx = canvas.getContext('2d')
```


---

](#a-idcontext2d-canvasrenderingcontext2d-a)[ CanvasRenderingContext2D


通过 CanvasRenderingContext2D 可以在 canvas 上绘制矩形、文本和其他对象。可以在 canvas 上调用 getContext('2d') 来获取 CanvasRenderingContext2D 的对象。


](#%E6%96%B9%E6%B3%95%E5%92%8C%E5%B1%9E%E6%80%A7)
### 方法和属性


](#%E5%A1%AB%E5%85%85%E5%92%8C%E6%8F%8F%E8%BE%B9%E6%A0%B7%E5%BC%8F)**
#### 填充和描边样式**


](#canvasrenderingcontext2dfillstyle)
#### CanvasRenderingContext2D.fillStyle


设置填充色


](#%E8%AF%AD%E6%B3%95)
##### 语法


```js
ctx.fillStyle = color
```


](#%E5%8F%82%E6%95%B0-1)
##### 参数


``


``
[CanvasGradient](#canvasgradient)


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| color | <string> | CSS color |
| gradient | CanvasGradient | 参考对象，可通过 CanvasRenderingContext2D.createLinearGradient() 方法创建 |


](#canvasrenderingcontext2dstrokestyle)
#### CanvasRenderingContext2D.strokeStyle


设置边框颜色


](#%E8%AF%AD%E6%B3%95-1)
##### 语法


```js
ctx.strokeStyle = color
```


](#%E5%8F%82%E6%95%B0-2)
##### 参数


``


``
[CanvasGradient](#canvasgradient)


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| color | <string> | CSS color |
| gradient | CanvasGradient | 参考对象，可通过 CanvasRenderingContext2D.createLinearGradient() 方法创建 |


](#%E6%B8%90%E5%8F%98%E5%92%8C%E5%9B%BE%E6%A1%88)**
#### 渐变和图案**


](#canvasrenderingcontext2dcreatelineargradient)
#### CanvasRenderingContext2D.createLinearGradient()


创建一个线性的渐变颜色


](#%E8%AF%AD%E6%B3%95-2)
##### 语法


```js
ctx.createLinearGradient(x0, y0, x1, y1)
```


](#%E5%8F%82%E6%95%B0-3)
##### 参数


``


``


``


``


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| x0 | <number> | 起点的 x 坐标 |
| y0 | <number> | 起点的 y 坐标 |
| x1 | <number> | 终点的 x 坐标 |
| y1 | <number> | 终点的 y 坐标 |


](#%E8%B7%AF%E5%BE%84)**
#### 路径**


](#canvasrenderingcontext2dbeginpath)
#### CanvasRenderingContext2D.beginPath()


开始创建一个新路径


](#%E8%AF%AD%E6%B3%95-3)
##### 语法


```js
ctx.beginPath()
```


](#canvasrenderingcontext2dclosepath)
#### CanvasRenderingContext2D.closePath()


封闭一个路径


](#%E8%AF%AD%E6%B3%95-4)
##### 语法


```js
ctx.closePath()
```


](#canvasrenderingcontext2dmoveto)
#### CanvasRenderingContext2D.moveTo()


把路径移动到画布中的指定点


](#%E8%AF%AD%E6%B3%95-5)
##### 语法


```js
ctx.moveTo(x, y)
```


](#%E5%8F%82%E6%95%B0-4)
##### 参数


``


``


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| x | <number> | 目标位置的 x 坐标 |
| y | <number> | 目标位置的 y 坐标 |


](#canvasrenderingcontext2dlineto)
#### CanvasRenderingContext2D.lineTo()


使用直线连接子路径的终点到 x，y 坐标


](#%E8%AF%AD%E6%B3%95-6)
##### 语法


```js
ctx.lineTo(x, y)
```


](#%E5%8F%82%E6%95%B0-5)
##### 参数


``


``


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| x | <number> | 目标位置的 x 坐标 |
| y | <number> | 目标位置的 y 坐标 |


](#canvasrenderingcontext2darc)
#### CanvasRenderingContext2D.arc()


画一条弧线


](#%E8%AF%AD%E6%B3%95-7)
##### 语法


```js
ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise)
```


](#%E5%8F%82%E6%95%B0-6)
##### 参数


``


``


``


``


``


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| x | <number> | 圆心的 x 坐标 |
| y | <number> | 圆心的 y 坐标 |
| radius | <number> | 圆的半径 |
| startAngle | <number> | 起始弧度， x 轴方向开始计算，单位以弧度表示。 |
| endAngle | <number> | 终止弧度 |
| anticlockwise | Boolean | 可选。如果为 true，逆时针绘制圆，反之，顺时针绘制 |


](#canvasrenderingcontext2darcto)
#### CanvasRenderingContext2D.arcTo()


根据控制点和半径绘制圆弧路径


](#%E8%AF%AD%E6%B3%95-8)
##### 语法


```js
ctx.arcTo(x1, y1, x2, y2, radius)
```


](#%E5%8F%82%E6%95%B0-7)
##### 参数


``


``


``


``


``


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| x1 | <number> | 第一个控制点的 x 轴坐标 |
| y1 | <number> | 第一个控制点的 y 轴坐标 |
| x2 | <number> | 第二个控制点的 x 轴坐标 |
| y2 | <number> | 第二个控制点的 y 轴坐标 |
| radius | <number> | 圆弧的半径 |


](#canvasrenderingcontext2dbeziercurveto)
#### CanvasRenderingContext2D.bezierCurveTo()


绘制三次贝塞尔曲线路径


](#%E8%AF%AD%E6%B3%95-9)
##### 语法


```js
ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
```


](#%E5%8F%82%E6%95%B0-8)
##### 参数


``


``


``


``


``


``


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| cp1x | <number> | 第一个贝塞尔控制点的 x 坐标 |
| cp1y | <number> | 第一个贝塞尔控制点的 y 坐标 |
| cp2x | <number> | 第二个贝塞尔控制点的 x 坐标 |
| cp2y | <number> | 第二个贝塞尔控制点的 y 坐标 |
| x | <number> | 结束点的 x 坐标 |
| y | <number> | 结束点的 y 坐标 |


](#canvasrenderingcontext2dquadraticcurveto)
#### CanvasRenderingContext2D.quadraticCurveTo()


创建二次贝塞尔曲线路径


](#%E8%AF%AD%E6%B3%95-10)
##### 语法


```js
ctx.quadraticCurveTo(cpx, cpy, x, y)
```


](#%E5%8F%82%E6%95%B0-9)
##### 参数


``


``


``


``


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| cpx | <number> | 贝塞尔控制点的 x 坐标 |
| cpy | <number> | 贝塞尔控制点的 y 坐标 |
| x | <number> | 结束点的 x 坐标 |
| y | <number> | 结束点的 y 坐标 |


](#canvasrenderingcontext2drect)
#### CanvasRenderingContext2D.rect()


创建一个矩形


](#%E8%AF%AD%E6%B3%95-11)
##### 语法


```js
ctx.rect(x, y, width, height)
```


](#%E5%8F%82%E6%95%B0-10)
##### 参数


``


``


``


``


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| x | <number> | 矩形路径左上角的 x 坐标 |
| y | <number> | 矩形路径左上角的 y 坐标 |
| width | <number> | 矩形路径的宽度 |
| height | <number> | 矩形路径的高度 |


](#%E7%BA%BF%E5%9E%8B)**
#### 线型**


](#canvasrenderingcontext2dlinewidth)
#### CanvasRenderingContext2D.lineWidth


设置线条的宽度


](#%E8%AF%AD%E6%B3%95-12)
##### 语法


```js
ctx.lineWidth = lineWidth
```


](#%E5%8F%82%E6%95%B0-11)
##### 参数


``


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| lineWidth | <number> | 线条的宽度 |


](#canvasrenderingcontext2dlinecap)
#### CanvasRenderingContext2D.lineCap


设置线条的端点样式


](#%E8%AF%AD%E6%B3%95-13)
##### 语法


```js
ctx.lineCap = lineCap
```


](#%E5%8F%82%E6%95%B0-12)
##### 参数


``


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| lineCap | <string> | 'butt'(默认)、'round'、'square' |


](#%E7%BB%98%E5%88%B6%E8%B7%AF%E5%BE%84)**
#### 绘制路径**


](#canvasrenderingcontext2dfill)
#### CanvasRenderingContext2D.fill()


对当前路径中的内容进行填充


](#%E8%AF%AD%E6%B3%95-14)
##### 语法


```js
ctx.fill()
```


](#canvasrenderingcontext2dstroke)
#### CanvasRenderingContext2D.stroke()


画出当前路径的边框


](#%E8%AF%AD%E6%B3%95-15)
##### 语法


```js
ctx.stroke()
```


](#%E7%BB%98%E5%88%B6%E7%9F%A9%E5%BD%A2)**
#### 绘制矩形**


](#canvasrenderingcontext2dclearrect)
#### CanvasRenderingContext2D.clearRect()


清除画布上在该矩形区域内的内容(矩形区域大于等于 canvas 组件时，清除之前绘制内容；小于 canvas 组件时，清除区域默认为黑色，可通过设置 canvas 背景色更改)


](#%E8%AF%AD%E6%B3%95-16)
##### 语法


```js
ctx.clearRect(x, y, width, height)
```


](#%E5%8F%82%E6%95%B0-13)
##### 参数


``


``


``


``


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| x | <number> | 矩形区域左上角的 x 坐标 |
| y | <number> | 矩形区域左上角的 y 坐标 |
| width | <number> | 矩形区域的宽度 |
| height | <number> | 矩形区域的高度 |


](#canvasrenderingcontext2dfillrect)
#### CanvasRenderingContext2D.fillRect()


填充一个矩形


](#%E8%AF%AD%E6%B3%95-17)
##### 语法


```js
ctx.fillRect(x, y, width, height)
```


](#%E5%8F%82%E6%95%B0-14)
##### 参数


``


``


``


``


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| x | <number> | 矩形路径左上角的 x 坐标 |
| y | <number> | 矩形路径左上角的 y 坐标 |
| width | <number> | 矩形路径的宽度 |
| height | <number> | 矩形路径的高度 |


](#canvasrenderingcontext2dstrokerect)
#### CanvasRenderingContext2D.strokeRect()


画一个非填充矩形


](#%E8%AF%AD%E6%B3%95-18)
##### 语法


```js
ctx.strokeRect(x, y, width, height)
```


](#%E5%8F%82%E6%95%B0-15)
##### 参数


``


``


``


``


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| x | <number> | 矩形路径左上角的 x 坐标 |
| y | <number> | 矩形路径左上角的 y 坐标 |
| width | <number> | 矩形路径的宽度 |
| height | <number> | 矩形路径的高度 |


](#%E6%96%87%E6%9C%AC%E6%A0%B7%E5%BC%8F)**
#### 文本样式**


](#canvasrenderingcontext2dfont)
#### CanvasRenderingContext2D.font


设置当前字体样式的属性


](#%E8%AF%AD%E6%B3%95-19)
##### 语法


```js
ctx.font = value
```


](#%E5%8F%82%E6%95%B0-16)
##### 参数


``


| 参数 | 描述 | 类型 |
| --- | --- | --- |
| value | 支持字重与字体大小，可以独立设置字重和字体，如果同时设置字重和字体需要空格分割，字重在前面。默认值为 "normal 30px" | <string> |


](#value-%E5%80%BC)
###### Value 值


| 可选值 | 是否必填 | 说明 |
| --- | --- | --- |
| font-weight | 否 | 规定字体的粗细。可能的值：normalboldbolderlighter100200300400500600700800900默认为 normal |
| font-size | 否 | 规定字号，以像素计。默认 30 px |


](#canvasrenderingcontext2dtextalign)
#### CanvasRenderingContext2D.textAlign


设置文字的对齐方式


](#%E8%AF%AD%E6%B3%95-20)
##### 语法


```js
ctx.textAlign = align
```


](#%E5%8F%82%E6%95%B0-17)
##### 参数


``


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| align | <string> | 'start'(默认),'end','left','center','right' |


](#canvasrenderingcontext2dtextbaseline)
#### CanvasRenderingContext2D.textBaseline


设置文字的水平对齐


](#%E8%AF%AD%E6%B3%95-21)
##### 语法


```js
ctx.textBaseline = textBaseline
```


](#%E5%8F%82%E6%95%B0-18)
##### 参数


``


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| textBaseline | <string> | 'alphabetic'(默认),'middle','top','hanging','bottom','ideographic' |


](#%E7%BB%98%E5%88%B6%E6%96%87%E6%9C%AC)**
#### 绘制文本**


](#canvasrenderingcontext2dfilltext)
#### CanvasRenderingContext2D.fillText()


填充文本


](#%E8%AF%AD%E6%B3%95-22)
##### 语法


```js
ctx.fillText(text, x, y)
```


](#%E5%8F%82%E6%95%B0-19)
##### 参数


``


``


``


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| text | <string> | 在画布上输出的文本 |
| x | <number> | 绘制文本的左上角 x 坐标位置 |
| y | <number> | 绘制文本的左上角 y 坐标位置 |


](#canvasrenderingcontext2dfillarctext)
#### CanvasRenderingContext2D.fillArcText()


填充弧形文本


](#%E8%AF%AD%E6%B3%95-23)
##### 语法


```js
ctx.fillArcText(text, x, y, radius, startAngle)
```


](#%E5%8F%82%E6%95%B0-20)
##### 参数


``


``


``


``


``


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| text | <string> | 要绘制的文本 |
| x | <number> | 文本起始点的 x 轴坐标 |
| y | <number> | 文本起始点的 y 轴坐标 |
| radius | <number> | 圆的半径 |
| startAngle | <number> | 起始弧度， y 轴方向开始计算，单位以弧度表示。 |


](#%E5%8F%98%E6%8D%A2)**
#### 变换**


](#canvasrenderingcontext2drotate)
#### CanvasRenderingContext2D.rotate()


顺时针旋转当前坐标轴


](#%E8%AF%AD%E6%B3%95-24)
##### 语法


```js
ctx.rotate(angle)
```


](#%E5%8F%82%E6%95%B0-21)
##### 参数


``


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| rotate | <number> | 顺时针旋转的弧度。如果你想通过角度值计算，可以使用公式： degree * Math.PI / 180 。旋转中心点一直是 canvas 的起始点。 如果想改变中心点，可以通过 translate() 方法移动 canvas. |


](#canvasrenderingcontext2dscale)
#### CanvasRenderingContext2D.scale()


据 x 水平方向和 y 垂直方向，为 canvas 单位添加缩放变换。


](#%E8%AF%AD%E6%B3%95-25)
##### 语法


```js
ctx.scale(x, y)
```


](#%E5%8F%82%E6%95%B0-22)
##### 参数


``


``


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| x | <number> | 水平方向的缩放因子 |
| y | <number> | 垂直方向的缩放因子 |


](#canvasrenderingcontext2dtranslate)
#### CanvasRenderingContext2D.translate()


对当前坐标系的原点(0, 0)进行变换


](#%E8%AF%AD%E6%B3%95-26)
##### 语法


```js
ctx.translate(x, y)
```


](#%E5%8F%82%E6%95%B0-23)
##### 参数


``


``


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| x | <number> | 水平坐标平移量 |
| y | <number> | 竖直坐标平移量 |


](#canvasrenderingcontext2dshear)
#### CanvasRenderingContext2D.shear()


据 x 水平方向和 y 垂直方向，为 canvas 单位添加错切变换。


](#%E8%AF%AD%E6%B3%95-27)
##### 语法


```js
ctx.shear(x, y)
```


](#%E5%8F%82%E6%95%B0-24)
##### 参数


``


``


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| x | <number> | 水平坐标错切量 |
| y | <number> | 竖直坐标错切量 |


---

](#a-idcanvasgradient-canvasgradient-a)[ CanvasGradient


渐变对象，通过 CanvasRenderingContext2D.createLinearGradient() 创建


](#%E8%AF%AD%E6%B3%95-28)
### 语法


```js
const gradient = ctx.createLinearGradient(0, 0, 200, 0)
gradient.addColorStop(0, '#ff0000')
gradient.addColorStop(1, '#0000ff')
```


](#%E6%96%B9%E6%B3%95-1)
### 方法


](#canvasgradientaddcolorstop)
#### CanvasGradient.addColorStop()


该方法在 CanvasGradient 对象上添加一个由偏移值和颜色值指定的断点


](#%E8%AF%AD%E6%B3%95-29)
##### 语法


```js
gradient.addColorStop(offset, color)
```


](#%E5%8F%82%E6%95%B0-25)
##### 参数


``
````


``


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| offset | <number> | 0到1之间的值，表示渐变点在起点和终点中的位置 |
| color | <string> | CSS Color |

---

# 组件-基础组件

## a

> 原文路径：/component/basic/a/

](#a)
# a


超链接（默认不带下划线）。文本内容写在标签内容区，支持转义字符`"\"`


](#%E5%AD%90%E7%BB%84%E4%BB%B6)
### 子组件


支持[<span>](/component/basic/span)


](#%E5%B1%9E%E6%80%A7)
### 属性


支持[通用属性](../common/common-attributes)


``


[页面路由](/api/system/router)

- ``
-
``
``


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| href | <string> | - | 否 | 支持的格式参见中的 uri 参数。额外的:href 还可以通过“?param1=value1”的方式添加参数，参数可以在页面中通过this.param1的方式使用。href 暂不支持加载网页示例:<a href="About?param1=value1">关于</a><a href="/about?param1=value1">关于</a><br/ |


](#%E6%A0%B7%E5%BC%8F)
### 样式


支持[<text>样式](/component/basic/text)


支持[通用样式](../common/common-styles)


``


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| font-family | <string> | - | 否 | 文本字体。可设置一个有先后顺序的，由字体名或者字体族名组成的列表，以逗号分隔。列表中第一个已安装的字体，会被选中作为文本的字体。 |


](#%E4%BA%8B%E4%BB%B6)
### 事件


支持[通用事件](../common/common-events)

---

## animated-vector

> 原文路径：/component/basic/animated-vector/

](#animated-vector)
# animated-vector


](#%E6%A6%82%E8%BF%B0)
### 概述


animated-vector 组件，用于解析渲染安卓 xml 动画资源。


xml 动画通过将矢量可绘制对象资源与属性动画资源通过 AAPT 内嵌资源格式在 xml 文件中定义来实现，可在[安卓开发者文档](https://developer.android.com/guide/topics/graphics/vector-drawable-resources?hl=zh_cn)中了解更多。


animated-vector 组件提供配置 xml 动画，进行播放，暂停等操作的能力，只支持单个 xml 文件结构的矢量可绘制对象资源。


](#%E5%AD%90%E7%BB%84%E4%BB%B6)
### 子组件


不支持


](#%E5%B1%9E%E6%80%A7)
### 属性


支持[通用属性](/7f1027fb1f5bbd82dc6e706045e05803/common-attributes.md)


``


``


``


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| src | <uri> | - | 是 | xml 源文件的位置，仅支持本地单 xml 文件 |
| loop | <boolean> | false | 否 | 配置动画是否循环播放 |
| autoplay | <boolean> | true | 否 | 配置动画是否自动播放 (不能动态设置，只能首次设置) |


](#%E6%A0%B7%E5%BC%8F)
### 样式


支持[通用样式](/9e6c0f774490d9ce4167d66873f59361/common-events.md)


](#%E6%96%B9%E6%B3%95)
### 方法


| 名称 | 参数 | 描述 |
| --- | --- | --- |
| start | - | 播放动画，如果动画正在播放则无效 |
| pause | - | 暂停播放动画 |
| resume | - | 继续播放动画 |
| stop | - | 停止播放动画 |


](#%E4%BA%8B%E4%BB%B6)
### 事件


| 名称 | 参数 | 描述 |
| --- | --- | --- |
| animationEnd | - | 在一轮动画播放完毕或停止播放后，触发此回调 |


](#%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81)
### 示例代码


```html
<template>
  <div>
    <animated-vector
      id="xml_id"
      src="common/xml/ex.xml"
      @animationEnd="animationEnd"
    ></animated-vector>
  </div>
</template>
<script>
  export default {
    animationEnd() {
      prompt.showToast({
        message: 'animation end!',
      })
    },
    start() {
      this.$element('xml_id').start()
    },
    pause() {
      this.$element('xml_id').pause()
    },
    resume() {
      this.$element('xml_id').resume()
    },
    stop() {
      this.$element('xml_id').stop()
    },
  }
</script>
```

---

## animation-overview

> 原文路径：/component/basic/animation-overview/

](#%E6%A6%82%E8%BF%B0)
# 概述


提供用于实现页面元素动画效果的 UI 组件，通常用于增强用户交互体验，吸引用户的注意力，提高页面的美观度和可视化效果。


](#%E5%8A%A8%E7%94%BB%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D)
## 动画组件介绍


| 组件 | 简述 |
| --- | --- |
| svg-container | 渲染 svg 图片，可以动态修改 svg 属性 |
| image-animator | 图片帧动画播放器 |
| animated-vector | animated-vector 组件，用于解析渲染安卓 xml 动画资源 |

---

## arc-text

> 原文路径：/component/basic/arc-text/

](#arc-text)
# arc-text


弧形文本，文本内容展示在 arc-text 组件盒模型内最大且居中的圆周上，超出的内容将会被截断。


如下图示例


 
    弧
    形
    文
    本
 


.arc-text-eg {
  width: 150px;
  height: 100px;
  border: 1px solid #000;
  display: flex;
  justify-content: center;
}
.arc-text-eg-in {
  width: 98px;
  height: 98px;
  border: 1px solid #4761f6;
  border-radius: 98px;
  color: red;
}
.arc-text-eg-in-text {
  color: red;
}

](#%E5%AD%90%E7%BB%84%E4%BB%B6)
### 子组件


不支持


](#%E5%B1%9E%E6%80%A7)
### 属性


支持[通用属性](../common/common-attributes)


](#%E6%A0%B7%E5%BC%8F)
### 样式


支持[通用样式](../common/common-styles)


``


``


``


``


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| color | <color> | #000000 | 否 | 文本颜色 |
| font-size | <length> | 30px | 否 | 文本尺寸 |
| font-weight | normal | bold | lighter | border |<number> | normal | 否 | 当前平台仅支持 normal 与 bold 两种效果 |
| direction | clockwise | counterclockwise | clockwise | 否 | 文本绘制方向，clockwise 顺时针方向，counterclockwise 逆时针方向。 |
| start-angle | <deg> | 0deg | 否 | 文本绘制起始角度，以时钟 0 点为基线，取值范围为 0 到 360。 |


](#%E4%BA%8B%E4%BB%B6)
### 事件


支持[通用事件](../common/common-events)

---

## barcode

> 原文路径：/component/basic/barcode/

](#barcode)
# barcode


条形码，将文本内容转换为条形码展示。


](#%E5%AD%90%E7%BB%84%E4%BB%B6)
### 子组件


不支持


](#%E5%B1%9E%E6%80%A7)
### 属性


支持[通用属性](../common/common-attributes)


``


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| value | <string> | - | 是 | 条形码内容，码制为 Code128 码，长度小于等于 20 字节 |


](#%E6%A0%B7%E5%BC%8F)
### 样式


支持[通用样式](../common/common-styles)


](#%E4%BA%8B%E4%BB%B6)
### 事件


支持[通用事件](../common/common-events)

---

## image-animator

> 原文路径：/component/basic/image-animator/

](#image-animator)
# image-animator


图片帧动画播放器。


](#%E5%B1%9E%E6%80%A7)
### 属性


支持[通用属性](../common/common-attributes)还支持如下属性：


``


``


``


``


``


``


``


[属性值](#motion)


``


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| images | Array<ImageFrame> | - | 是 | 设置图片帧信息集合。每一帧的帧信息包含图片路径、图片大小和图片位置信息。目前支持的图片格式为 png。 |
| predecode | Number | 0 | 否 | 是否启用预解码，默认值为 0，即不启用预解码，如该值设为 2，则播放当前页时会提前加载后面两张图片至缓存以提升性能 |
| iteration | number | string | infinite | 否 | 设置帧动画播放次数。number 表示固定次数，infinite 枚举表示无限次数播放。 |
| reverse | boolean | false | 否 | 设置播放顺序。false 表示从第 1 张图片播放到最后 1 张图片； true 表示从最后 1 张图片播放到第 1 张图片。 |
| fixedsize | boolean | true | 否 | 设置图片大小是否固定为组件大小。true 表示图片大小与组件大小一致，此时设置图片的 width 、height 、top 和 left 属性是无效的。false 表示每一张图片的独设置。 |
| duration | String | - | 是 | 每一帧图片的播放时长，单位支持[s(秒)或者 ms(毫秒)]，默认单位为 ms。示例:'1000ms' |
| fillmode | String | forwards | 否 | 指定帧动画执行结束后的状态。可选项有：none：恢复初始状态。forwards：保持帧动画结束时的状态 |
| transition-timing-function | String | linear | 否 | 运动曲线的。 |
| poster | String | first | 否 | 设置帧动画不执行时的展示。可选项有：first：展示第一帧图片；last：展示最后一帧图片 |


ImageFrame 说明


``


``


``


``


``


``


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| src | <uri> | - | 是 | 图片路径，图片格式为 png。 |
| width | <length> | 0 | 否 | 图片宽度。示例:'100px' |
| height | <length> | 0 | 否 | 图片高度。 示例:'100px' |
| top | <length> | 0 | 否 | 图片相对于组件左上角的纵向坐标。示例:'100px' |
| left | <length> | 0 | 否 | 图片相对于组件左上角的横向坐标。 示例:'100px' |
| duration | Number | - | 否 | 每一帧图片的播放时长，单位毫秒。示例:100 |


](#a-idmotiontransition-timing-function-%E5%B1%9E%E6%80%A7%E5%80%BCa)[transition-timing-function 属性值:


| 值 | 描述 |
| --- | --- |
| linear | 规定以相同速度开始至结束的过渡效果（等于 cubic-bezier(0,0,1,1)）。 |
| ease | 规定慢速开始，然后变快，然后慢速结束的过渡效果（cubic-bezier(0.25,0.1,0.25,1)）。 |
| ease-in | 规定以慢速开始的过渡效果（等于 cubic-bezier(0.42,0,1,1)）。 |
| ease-out | 规定以慢速结束的过渡效果（等于 cubic-bezier(0,0,0.58,1)）。 |
| ease-in-out | 规定以慢速开始和结束的过渡效果（等于 cubic-bezier(0.42,0,0.58,1)）。 |
| cubic-bezier(n,n,n,n) | 在 cubic-bezier 函数中定义自己的值。可能的值是 0 至 1 之间的数值。 |


](#%E6%A0%B7%E5%BC%8F)
### 样式


支持[通用样式](../common/common-styles)


](#%E4%BA%8B%E4%BB%B6)
### 事件


支持[通用事件](../common/common-events)外，还支持如下事件：


| 名称 | 参数 | 描述 |
| --- | --- | --- |
| start | - | 帧动画启动时触发。 |
| pause | - | 帧动画暂停时触发。 |
| stop | - | 帧动画结束时触发。 |
| resume | - | 帧动画恢复时触发。 |
| updatetime | {currentTime} | 帧动画播放过程中触发。 |


](#%E6%94%AF%E6%8C%81%E5%A6%82%E4%B8%8B%E6%96%B9%E6%B3%95)
### 支持如下方法


| 名称 | 参数 | 描述 |
| --- | --- | --- |
| start | - | 开始播放图片帧动画。再次调用，重新从第 1 帧开始播放。 |
| pause | - | 暂停播放图片帧动画。 |
| stop | - | 停止播放图片帧动画。 |
| resume | - | 继续播放图片帧。 |
| getState | - | 获取播放状态。playing：播放中。paused：已暂停 stopped：已停止。 |


](#%E7%A4%BA%E4%BE%8B)
### 示例


```html
<template>
  <div class="container">
    <image-animator class="animator" id="animator" images="{{frames}}" />
    <div class="btn-box">
      <input class="btn" type="button" value="start" onclick="handleStart" />
      <input class="btn" type="button" value="stop" onclick="handleStop" />
      <input class="btn" type="button" value="pause" onclick="handlePause" />
      <input class="btn" type="button" value="resume" onclick="handleResume" />
    </div>
  </div>
</template>

<script>
  export default {
    data: {
      frames: [
        {
          src: '/common/asserts/heart78.png',
        },
        {
          src: '/common/asserts/heart79.png',
        },
      ],
    },
    onReady() {
      let state = this.$element('animator').getState()

      switch (state) {
        case 'playing':
          //实现具体的业务逻辑
          break
        case 'paused':
          //实现具体的业务逻辑
          break
        case 'stopped':
          //实现具体的业务逻辑
          break
      }
    },
    handleStart() {
      this.$element('animator').start()
    },
    handlePause() {
      this.$element('animator').pause()
    },
    handleResume() {
      this.$element('animator').resume()
    },
    handleStop() {
      this.$element('animator').stop()
    },
  }
</script>
```

---

## image

> 原文路径：/component/basic/image/

](#image)
# image


渲染图片，不支持子组件、事件、方法


](#%E5%B1%9E%E6%80%A7)
### 属性


支持[通用属性](../common/common-attributes)


``


``


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| src | <uri> | - | 否 | 图片的 uri，支持本地图片和网络图片，支持的图片格式包括静态类型(png, svg, .9, gif) |
| alt | <uri>| 'blank' | - | 否 | 加载时显示的占位图；只支持本地图片资源(png)。 |


注意：alt 属性详情如下：


a.如果 Image 组件没有设置 alt 值，终端会加上默认的灰色占位图。


b.src 为本地图片地址时，不会有占位图


c.src 为远程图片地址时，如果之前已经成功加载过图片，有本地缓存，则不会有占位图


d.src 为远程图片地址时，且 Image 组件 的 alt 值传入字符串 "blank" 值，不会有占位图。（可避免一些远程地址的小图标第一次加载时瞬间闪烁的现象）


e.设置 alt 为本地图片地址时，占位图缩放模式由原来的居中不缩放改为居中保持宽高比缩放，减少了占位图资源文件的分辨率与体积大小


](#svg-%E5%9B%BE%E7%89%87%E6%A0%BC%E5%BC%8F%E8%AF%B4%E6%98%8E)
#### SVG 图片格式说明


``


``


``


``


``


``


``


``


``


``


| 完全支持的标签 | 描述 |
| --- | --- |
| <path> | 绘制路径。 |
| <rect> | 用于绘制矩形、圆角矩形。 |
| <circle> | 圆形形状。 |
| <ellipse> | 椭圆形状。 |
| <line> | 绘制线条。 |
| <polyline> | 绘制折线。 |
| <polygon> | 绘制多边形。 |
| <linearGradient> | 线性渐变。 |
| <stop> | 可縮放矢量圖形。 |
| <g> | 用于对其他 SVG 元素进行分组的容器。 |


``


``


``


| 受限制支持的标签 | 只支持的属性 |
| --- | --- |
| <svg> | width,height,viewBox 。 |
| <defs> | 只支持渐变的定义。 |
| <style> | 只支持部分属性。 |


``


``


``


``


``


``


``


``


``


``


``


``


| 暂时完全不支持的标签 | 描述 |
| --- | --- |
| <radialGradient> | 不支持文本，字体，动画，滤镜 |
| <use> | 不支持文本，字体，动画，滤镜 |
| <image> | 不支持文本，字体，动画，滤镜 |
| <clipPath> | 不支持文本，字体，动画，滤镜 |
| <desc> | 不支持文本，字体，动画，滤镜 |
| <marker> | 不支持文本，字体，动画，滤镜 |
| <mask> | 不支持文本，字体，动画，滤镜 |
| <switch> | 不支持文本，字体，动画，滤镜 |
| <symbol> | 不支持文本，字体，动画，滤镜 |
| <title> | 不支持文本，字体，动画，滤镜 |
| <view> | 不支持文本，字体，动画，滤镜 |
| <pattern> | 不支持文本，字体，动画，滤镜 |


](#%E6%A0%B7%E5%BC%8F)
### 样式


支持[通用样式](../common/common-styles)


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| object-fit | contain | cover | fill | none | scale-down | cover | 否 | 图片的缩放类型 |


object-fit ，参数列表如下：


````


| 类型 | 描述 |
| --- | --- |
| contain | 保持宽高比，缩小或者放大，使得图片完全显示在显示边界内，居中显示 |
| cover | 保持宽高比，缩小或者放大，使得两边都大于或等于显示边界，居中显示 |
| fill | 不保存宽高比，填充满显示边界 |
| none | 居中，无缩放 |
| scale-down | 保持宽高比，缩小或保持不变，取contain和none中显示较小的一个，居中显示 |


](#%E5%B1%9E%E6%80%A7-1)
#### 属性


``


``


``


``


``


``


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| id | <string> | - | 否 | 唯一标识 |
| style | <string> | - | 否 | 样式声明 |
| class | <string> | - | 否 | 引用样式表 |
| for | <array> | - | 否 | 根据数据列表，循环展开当前标签 |
| if | <boolean> | - | 否 | 根据数据 boolean 值，添加或移除当前标签 |
| src | <uri> | - | 否 | 图片的 uri，同时支持本地，支持的图片格式包括静态类型（png, svg, .9, gif） |


](#%E6%A0%B7%E5%BC%8F-1)
#### 样式


``


``


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| width | <length> | - | 否 | 图片的宽度，不设置时使用图片原始的宽度 |
| height | <length> | - | 否 | 图片的高度，不设置时使用图片原始的高度 |

---

## marquee

> 原文路径：/component/basic/marquee/

](#marquee)
# marquee


跑马灯组件，用于展示一段滚动文字，默认为单行显示。


](#%E5%AD%90%E7%BB%84%E4%BB%B6)
### 子组件


不支持子组件。


](#%E5%B1%9E%E6%80%A7)
### 属性


支持[通用属性](../common/common-attributes)


``


``


``


````


``


``


``


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| scrollamount | <number> | 1 | 否 | 每秒滚动的距离，单位：px。 |
| loop | <number> | 3 | 否 | 滚动的次数，默认值为 3。 |
| direction | <string> | left | 否 | 滚动方向，可选值：left，right |
| text-offset | <number> | 0 | 否 | 设置内容首尾相接时的间距，需为大于 0 的整数，单位：px。 |
| double-ended-shadow | <bool> | true | 否 | 是否显示两端阴影效果。 |
| double-ended-shadow-color | <color> | rgb(0,0,0) | 否 | 两端阴影的颜色 |


](#%E6%A0%B7%E5%BC%8F)
### 样式


支持[通用样式](../common/common-styles)


``


``


``


``


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| color | <color> | rgba(0, 0, 0, 0.54) | 否 | 文字颜色。 |
| font-size | <length> | 30px | 否 | 文字大小。 |
| font-family | <string> | - | 否 | 字体名称，当前仅支持HYQiHei-65S。 |
| text-align | left | center | right | left | 否 | 文字水平对齐方式。 |


](#%E4%BA%8B%E4%BB%B6)
### 事件


支持[通用事件](../common/common-events)


````


| 名称 | 参数 | 描述 |
| --- | --- | --- |
| bounce | - | 当 marquee 滚动至末尾时触发 |
| finish | - | 当 marquee 按照loop属性设置的次数滚动完成时触发。仅当loop设置为大于 0 的数值时有效。 |
| start | - | 当 marquee 开始滚动时触发 |


](#%E6%96%B9%E6%B3%95)
### 方法


| 名称 | 参数 | 描述 |
| --- | --- | --- |
| start | - | 开始滚动 marquee |
| stop | - | 停止滚动 marquee |


](#%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81)
### 示例代码


```html
<template>
  <div class="container">
    <marquee>这段文字展示跑马灯效果默认连续滚动ABCDEFGHIJKLMN</marquee>
    <marquee id="marquee" loop="1" onbounce="bounce" onfinish="finish" onstart="start">
      这段文字展示跑马灯效果滚动一次ABCDEFGHIJKLMN
    </marquee>
    <input type="button" class="btn" @click="startHandler" value="start" />
    <input type="button" class="btn" @click="stopHandler" value="stop" />
  </div>
</template>

<script>
  import prompt from '@system.prompt'
  export default {
    startHandler() {
      this.$element('marquee').start()
    },
    stopHandler() {
      this.$element('marquee').stop()
    },
    bounce() {
      prompt.showToast({
        message: 'bounce',
      })
    },
    finish() {
      prompt.showToast({
        message: 'finish',
      })
    },
    start() {
      prompt.showToast({
        message: 'start',
      })
    },
  }
</script>

<style>
  .container {
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  marquee {
    width: 500px;
    height: 80px;
    color: #9acd32;
    font-size: 50px;
    margin: 20px 0;
  }
  .btn {
    width: 300px;
    height: 80px;
    text-align: center;
    border-radius: 5px;
    color: #ffffff;
    font-size: 30px;
    background-color: #0faeff;
    margin: 20px;
  }
</style>
```

---

## overview

> 原文路径：/component/basic/overview/

](#%E6%A6%82%E8%BF%B0)
# 概述


作为组成复杂组件和应用的基础模块，基本的 UI 展示功能通常包括文本框、链接和图片等元素。这些 UI 组件是构建用户界面的重要基础，通过这些基本元素的组合与拼接，可以实现丰富多彩、充满个性化的 UI 设计。蓝河系统提供了这些基本 UI 展示功能的实现和支持，以帮助您快速构建和部署丰富多样的用户界面和互动性应用。


](#%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D)
# 基础组件介绍


](http://localhost:8000/component/basic/text)


| 组件 | 简述 |
| --- | --- |
| a | 超链接 |
| image | 渲染图片，不支持子组件、事件、方法 |
| text | 文本，文本内容写在标签内容区 |
| span | 格式化的文本，只能作为子组件，不支持事件，目前不支持换行 |
| marquee | 跑马灯，用于插入一段滚动的文字，默认为单行 |
| progress | 进度条，不支持子组件 |
| arc-text | 弧形文本，文本内容展示在 arc-text 组件盒模型内最大且居中的圆周上，超出的内容将会被截断 |
| barcode | 条形码，将文本内容转换为条形码展示 |
| qrcode | 二维码，将文本内容转换为二维码展示 |
| canvas | 画布组件，通过使用 JavaScript 中的脚本，可以在 canvas 上绘制图形，文字等 |

---

## physics-space

> 原文路径：/component/basic/physics-space/

](#physics-engine)
# physics-engine


](#%E6%A6%82%E8%BF%B0)
## 概述


物理引擎是一种用于模拟现实世界物理规律的能力，包括重力、碰撞、摩擦、弹性、刚体运动等，使应用中的物体行为更加自然、真实。


**基本概念：**


**空间 (Space)**


**空间**是物理引擎中用于模拟物理效果的容器。


在一个空间中，可以添加多个刚体（Body）和形状（Shape）。


每个 `physics-engine` 组件对应一个独立的空间实例。


**刚体 (Body)**


**刚体**用于描述物体的物理属性，例如质量、位置、旋转和速度等。


刚体本身没有形状，需要通过附加形状（Shape）来定义其外观和碰撞范围。


在一个 `physics-engine` 组件中，每个子组件都表示一个刚体。


**形状 (Shape)**


**形状**定义物体的表面属性，如摩擦力和弹性。


当形状附加到刚体上时，二者共同构成具有物理特性和几何形状的对象。


当前，每个刚体仅能绑定一个形状。


](#%E5%AD%90%E7%BB%84%E4%BB%B6)
## 子组件


支持，子组件作为刚体载体，每个子组件映射为一个 Body。


](#%E5%B1%9E%E6%80%A7)
## 属性


支持[通用属性](/7f1027fb1f5bbd82dc6e706045e05803/common-attributes.md)


](#%E6%A0%B7%E5%BC%8F)
## 样式


支持[通用样式](/9e6c0f774490d9ce4167d66873f59361/common-events.md)


](#%E6%96%B9%E6%B3%95)
## 方法


](#initspace)
### initSpace()


初始化空间，初始化属性及对应的值，可以同时设置多种属性


**参数**：


参数以下格式的 JSON 字符串，具体信息参考 [SpaceAttr](#spaceattr)


```ts
{
  space: {
    attribute_0: value_0,
    attribute_1: value_1,
    ...
  }
}
```


**示例**：


```typescript
this.$element('engine').initSpace(
  JSON.stringify({
    space: {
      gravityX: 0, //重力方向
      gravityY: 200, //重力方向为Y轴正方向，大小为200像素每秒
      touch: true, //可以通过touch修改刚体位置
      crown: 'scale', //对space中的刚体进行缩放
    },
  })
)
```


](#setspaceattr)
### setSpaceAttr()


设置空间属性及对应的值，可以同时设置多种属性。


**参数**：


参数以下格式的 JSON 字符串，具体信息参考 [SpaceAttr](#spaceattr)


```ts
{
  attribute_0: value_0,
  attribute_1: value_1,
  ...
}
```


**示例**：


```ts
this.$element('engine_test').setSpaceAttr(
  JSON.stringify({
    friction: 1,
  })
)
```


](#initbody)
### initBody()


刚体初始化，可以同时完成多个参数的初始化


刚体初始化的顺序必须和 xml 中组件对象的顺序一致，否则会顺序错误


**参数**：


参数为以下格式的JSON字符串，具体body信息参考[BodyAttr](#bodyattr)


```ts
{
  init:[
    {
      //body_0 相关属性
    },
    {
      //body_1 相关属性
    },
    ...
  ]
}
```


**示例**：


```typescript
this.$element('engine_test').initBody(JSON.stringify({
  init: [
    {
      shape: 'circle',
      originX: 188,
      originY: 200,
      radius: 66,
      mass: 1,
      elasticity: 0.8,
      name: 'weather',
    },
    {
      shape: 'circle',
      originX: 200,
      originY: 200,
      radius: 85,
      mass: 1,
      elasticity: 0.8,
      name: 'pressure',
    },
  ],
}))
```


](#setbodyattr)
### setBodyAttr()


设置空间属性及对应的值，可以同时设置多种属性


**参数**：


参数为以下格式的JSON字符串，具体body信息参考[BodyAttr](#bodyattr)


```ts
{
    bodyName: {
        attribute_0: value_0,
        attribute_1: value_1,
        ......
    }
}
```


**示例**：


```ts
// 设置名称为sleep的刚体 的enableRotation 属性为false
this.$element('engine_test').setBodyAttr(
  JSON.stringify({
    sleep: {
      enableRotation: false,
    },
  })
)
```


](#getbodyposition)
### getBodyPosition()


获取刚体的实时位置


**参数**：


[BodyPosition](#bodyposition)


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bodyName | string | 是 | 指定获取位置的刚体名称 |
| callback | CommonCallback<> | 是 | 结果回调，返回刚体位置 |


**示例**：


```ts
// 获取名称为bird的刚体实时位置
this.$element('engine_test').getBodyPosition('bird', {
  success: (position) => {
    // 成功获取位置数据
  },
  fail: (data, code) => {
    // 获取失败
  },
})
```


](#getbodyvelocity)
### getBodyVelocity()


获取刚体的实时速度


**参数**：


[BodyVelocity](#bodyvelocity)


| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bodyName | string | 是 | 指定获取速度的刚体名称 |
| callback | CommonCallback<> | 是 | 结果回调，返回刚体速度 |


**示例**：


```ts
// 获取名称为bird的刚体实时速度
this.$element('engine_test').getBodyVelocity('bird', {
  success: (velocity) => {
    // 成功获取速度数据
  },
  fail: (data, code) => {
    // 获取失败
  },
})
```


](#%E6%95%B0%E6%8D%AE%E5%AF%B9%E8%B1%A1)
## 数据对象


](#spaceattr)
### SpaceAttr


空间属性对象，下面属性都为非必填。


****


****


****


****


****


| 属性 | 类型 | 范围 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| iteration | uint32_t | >0 | 10 | 用来设置物理空间(space)计算的精度，数值大则会占用更多的 CPU，数值小则计算精度变差，默认 10 可以满足大部分需求，一般不建议修改 |
| gravityX | number(浮点数) | - | 0 | X 轴方向上重力的大小，当 gravityX 大于 0 时，表示空间(space)中所有普通刚体(body)都会受到 X 轴正方向的重力，反之则为 X 轴负方向的重力 |
| gravityY | number(浮点数) | - | 0 | Y 轴方向上重力的大小，当 gravityY 大于 0 时，表示空间(space)中所有普通刚体(body)都会受到 Y 轴正方向的重力，反之则为 Y 轴负方向的重力 |
| damping | number(浮点数) | >0 | 1 | 应用于空间(space)的简单阻尼量。值为 0.9 表示每个刚体(body)每秒将损失 10% 的速度。默认为 1。与重力一样，它可以在每个刚体(body)的基础上进行覆盖。 |
| collisionSlop | number(浮点数) | >0 | 0.1 | 允许的形状(shape)间重叠量。为了提高稳定性，请将其设置为尽可能高，但不要出现明显的重叠。默认值为 0.1。 |
| originX | number(浮点数) | - | 0 | 空间(space)原点 X 轴坐标。 |
| originY | number(浮点数) | - | 0 | 空间(space)原点 Y 轴坐标。 |
| height | number(浮点数) | >0 | 200 | 空间(space)的高度，仅设置为空间(space)为方形时有效 |
| width | number(浮点数) | >0 | 200 | 空间(space)的宽度，仅设置为空间(space)为方形时有效 |
| radius | number(浮点数) | >0 | 233 | 空间(space)的半径，仅设置为空间(space)为圆形时有效 |
| polygonSides | number(无符号 32 位整数) | >2 | 12 | 空间(space)的边数，仅设置为空间(space)为圆形时有效，因为空间(space)不能真正的设置为圆形，所以使用正多边形模拟圆形效果，从实际效果上看，边数为 12 时效果就很好了，边数太多会增大 CPU 计算开销 |
| elasticity | number(浮点数) | [0,1] | 1 | 空间(space)边界的弹性，值为 0.0 时不会产生弹跳，而值为 1.0 时会产生“完美”的弹跳。 |
| friction | number(浮点数) | >= 0 | 1 | 空间(space)边界的摩擦系数。Chipmunk 使用库仑摩擦模型，值为 0.0 表示无摩擦。 |
| touch | boolean | - | false | 表示是否可以使用手指触摸的方式移动刚体(body)，默认为 false |
| crown | string | - | scale | 旋转表冠缩放空间(space)中的刚体(body) |
|  |  | - | gravity_up | 旋转表冠改变空间(space)中的重力大小 |
|  |  | - | gravity_angle | 旋转表冠改变空间(space)中的重力方向 |
| scaleMax | number(浮点数) | >=100 | 110 | 空间(space)中的刚体(body)最大放大的百分比，默认最大放大 110% |
| scaleMin | number(浮点数) | <=100 | 90 | 空间(space)中的刚体(body)最小缩小的百分比，默认最小缩小 90% |
| scale | number(浮点数) | >0 | 100 | 将空间(space)中的刚体(body)缩放到指定百分比，默认为 100% |
| running | boolean | - | true | 表示空间(space)是否是运行状态，当值为 false 时，不会进行任何计算 |
| shape | string | - | circle | 表示空间(space)是圆形 |
|  |  | - | rect | 表示空间(space)是方形 |
| feature | string | - | planet | 表示特殊功能 planet，所有刚体(body)的重力方向指向空间(space)原点 |


](#bodyattr)
### BodyAttr


刚体属性对象，下面属性都为非必填。


****


****


****


****


****


****


****


****


****


****


****
****


| 属性 | 类型 | 范围 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| shape | string |  | circle | 表示该刚体(body)绑定一个圆形形状(shape) |
|  |  |  | segment | 表示该刚体(body)绑定一个线段/条形状(shape)，可以用来做矩形 |
|  |  |  | poly | 表示该刚体(body)绑定一个多边形形状(shape)，不建议使用，性能很差，因为多边形的逻辑是由多个线段形状(shape)组合而成，所以一个四边型相当于 4 个线段形状(shape) |
| originX | number(浮点数) | - | 0 | 刚体(body)原点 X 轴坐标。 |
| originY | number(浮点数) | - | 0 | 刚体(body)原点 Y 轴坐标。 |
| mass | number(浮点数) | >= 0 | 0 | 刚体(body)质量，碰撞计算时需要。 |
| height | number(浮点数) | >= 0 | 0 | 刚体(body)的高度，仅设置刚体(body)为线段形状时有效 |
| width | number(浮点数) | >= 0 | 0 | 刚体(body)的宽度，仅设置刚体(body)为线段形状时有效 |
| pivotX | number(浮点数) | - | - | 刚体(body)重心的 X 轴坐标，默认值为刚体(body)的中心，坐标轴的位置为以刚体中心为坐标轴原点的笛卡尔坐标系 |
| pivotY | number(浮点数) | - | - | 刚体(body)重心的 Y 轴坐标，默认值为刚体(body)的中心，坐标轴的位置为以刚体中心为坐标轴原点的笛卡尔坐标系 |
| velocityX | number(浮点数) | - | 0 | 刚体(body)在 X 轴的速度 |
| velocityY | number(浮点数) | - | 0 | 刚体(body)在 Y 轴的速度 |
| angularVelocity | number(浮点数) | - | 0 | 刚体(body)的旋转角速度，值大于 0 时是以刚体(body)重心顺时针旋转，值小于 0 时是以刚体(body)重心逆时针旋转。 |
| angle | number(浮点数) | - | 0 | 刚体(body)的旋转角度 |
| elasticity | number(浮点数) | 0-1 | 1 | 刚体(body)的弹性，值为 0.0 时不会产生弹跳，而值为 1.0 时会产生“完美”的弹跳。 |
| friction | number(浮点数) | >0 | 1 | 刚体(body)的摩擦系数。内部使用库仑摩擦模型，值为 0.0 表示无摩擦。 |
| name | string | - | item_N | 刚体(body)的名称，可以用来查找刚体，如果不设置，则会被设置为"item_" + 当前空间(space)中刚体(body)的编号。 |
| type | string | - | static | static 刚体(body) 不会受空间(space)和约束计算的影响，可以把它看为一堵墙或一个柱子，因为不会移动和旋转等，所以对性能的影响很小。 |
|  |  |  | kinematic | kinematic 刚体(body) 只受代码逻辑的影响不受空间(space)计算的影响，不受重力影响，质量无限大，因此不会对与其他刚体(body)的碰撞或力做出反应。kinematic 刚体(body)通过设置速度来控制，这将导致它们移动。kinematic 刚体(body)的典型例子可能包括移动平台等。接触或连接到 kinematic 刚体(body)的刚体(body)永远不会进入休眠状态，所以对性能影响较大 |
|  |  |  | 其他 | 普通刚体(body)，受空间(space)计算的影响。 |
| radius | number(浮点数) | >0 | 20 | 刚体(body)的半径，仅设置刚体(body)为圆形时有效 |
| collisionType | number(无符号 32 位整数) | string | uint32_t：1-1000， string取值:oneWayUp, oneWayDown, oneWayLeft, oneWayRight | - | 刚体(body)碰撞类型，应用层可以设置一个值方便监听。 当使用 1-1000 的数值时，表示用户自定义的碰撞监听，js 端可以接收到返回的数据。 当使用 string 类型是，表示用户使用引擎内置的特殊碰撞方式的监听。oneWayUp：其他刚体(body)从上往下可以和本刚体发生碰撞，其他方向的刚体(body)会穿透过去。oneWayDown：其他刚体(body)从下往上可以和本刚体发生碰撞，其他方向的刚体(body)会穿透过去。oneWayLeft：其他刚体(body)从左往右可以和本刚体发生碰撞，其他方向的刚体(body)会穿透过去。oneWayRight：其他刚体(body)从右往左可以和本刚体发生碰撞，其他方向的刚体(body)会穿透过去。 |
| enableRotation | boolean | - | true | 刚体(body)碰撞/移动后，内部的子组件是否需要旋转，仅设置刚体(body)为圆形时有效 |
| vertsCount | number(无符号 32 位整数) | >2 | - | 刚体(body)形状(shape)的顶点数量，仅设置刚体(body)为多边形时有效 |
| verts | {x,y} 均为 number(浮点数) | - | - | 刚体(body)形状(shape)的顶点坐标值，仅设置刚体(body)为多边形时有效 |
| variable | boolean | - | true | 刚体(body)是否会被一些通用逻辑影响，目前只对通用放大 scale 产生影响，后续可能会增加。variable 为 false 时，空间(space)属性 crown 为 scale 时，刚体(body)不受旋转表冠的影响 |
| pivotJoint | {x,y} 均为 number(浮点数) | - | {0,0} | 刚体(body)可以设置一个旋转静态约束关节，坐标轴的位置为以刚体中心为坐标轴原点的笛卡尔坐标系(其他坐标系都是屏幕坐标系)。x, y 的值为 float 类型。 |
| dampedSpring | { p0_x, p0_y, p1_x, p1_y, restLength, stiffness, damping } 均为 number(浮点数) | - | { 0, 0, 0, 0, 0, 0, 10, } | 刚体(body)可以设置一个阻尼弹簧;p0_x , p0_y : 以刚体(body)中心为坐标轴原点的笛卡尔坐标系(其他坐标系都是屏幕坐标系)，弹簧的一个端点。p1_x , p1_y : 以空间(space)中心为坐标轴原点的笛卡尔坐标系(其他坐标系都是屏幕坐标系)，弹簧的另一个端点。restLength: 弹簧的复位长度。stiffness: 弹簧的刚性。damping: 弹簧的阻尼量。 |


](#bodyposition)
### BodyPosition


刚体在空间中的位置


| 名称 | 属性 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | 刚体在 x 轴的位置 |
| y | number | 是 | 刚体在 y 轴的位置 |


](#bodyvelocity)
### BodyVelocity


刚体在空间中的速度


| 名称 | 属性 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | 刚体在 x 轴的速度 |
| y | number | 是 | 刚体在 y 轴的位置 |


](#%E4%BA%8B%E4%BB%B6)
## 事件


| 名称 | 参数 | 描述 |
| --- | --- | --- |
| change | - | 碰撞事件，当有刚体碰撞时，触发此回调 |


](#%E7%A4%BA%E4%BE%8B)
## 示例


](#%E5%88%9D%E5%A7%8B%E5%8C%96)
### 初始化


```html
<template>
  <physics-engine id="space">
    <stack id="weather">
      <image></image>
    </stack>

    <stack id="kcal">
      <image></image>
      <text>calorie</text>
    </stack>
  </physics-engine>
</template>

<script>
  // space 属性参数
  let spaceConfig = {
    space: {
      //重力方向
      gravityX: 0,
      gravityY: 199,
      crown: 'scale',
      scaleMax: 105,
      scaleMin: 80,
      friction: 0.1,
    },
  }

  // 刚体属性参数
  let bodyConfig = {
    init: [
      {
        shape: 'circle', //圆形
        originX: 348, // 初始X轴坐标
        originY: 200, // 初始Y轴坐标
        radius: 60, // 圆形半径
        mass: 1, // 刚体质量
        elasticity: 0.3, // 弹性系数
        friction: 0.1,
        name: 'weather', // 刚体名称
      },
      {
        shape: 'segment', //条形
        originX: 180, // 初始X轴坐标
        originY: 385, // 初始Y轴坐标
        width: 143, // 宽度143
        height: 0, // 高度为0 ，表示为水平方向，高度通过下面的radius来设置
        radius: 39, // 半径为45意味着height为90
        mass: 1, // 刚体质量
        elasticity: 0.3, // 弹性系数
        friction: 0.1,
        name: 'kcal', // 刚体名称
      },
    ],
  }

  export default {
    onShow() {
      this.$element('space').initSpace(JSON.stringify(spaceConfig)) //初始化物理引擎space参数
      this.$element('space').initBody(JSON.stringify(bodyConfig)) //初始化物理引擎刚体参数
      this.spaceRunning()
    },
    spaceRunning() {
      // 将刚体running 属性设置为true，使物理引擎运行起来
      this.$element('space').setSpaceAttr(
        JSON.stringify({
          space: {
            running: true,
          },
        })
      )
    },
  }
</script>
```


](#%E7%9B%91%E5%90%AC%E7%A2%B0%E6%92%9E%E4%BA%8B%E4%BB%B6)
### 监听碰撞事件


碰撞回调


```html
<template>
  <physics-engine  @change="onCollision" />
</template>
<script>
  export default {
    onCollision(evt) {
      let event = JSON.parse(evt["info"])
      }
  }
</script>
```


返回数据分为两种，根据 collisionType 的类型来区分：


- 用户自定义碰撞，返回碰撞监听编号

- 系统内置碰撞类型，返回特殊的碰撞状态

当刚体(body)的 collision_type 为用户自定义的碰撞监听时，以上示例中 event 的值为：


```ts
{
  x: XXX //碰撞点的X轴坐标
  y: XXX //碰撞点的Y轴坐标
  collision_type: XXX // 用户自定义的碰撞监听编号，1-1000
  bodyA: XXX // 碰撞刚体A的名称
  bodyB: XXX // 碰撞刚体B的名称
}
```


当刚体(body)的 collision_type 为系统内置(onway_up/onway_down/onway_left/onway_right)的碰撞监听时，onCollision 将会在两个刚体(body)开始碰撞和分离时分别收到 event。


当刚体(body)发生碰撞时：


```ts
{
    bodyA: XXX // 碰撞刚体A的名称
    bodyB: XXX // 碰撞刚体B的名称
    collisionType: XXX // 系统内置的碰撞监听string名称
    action： "colliding" // 两个刚体碰撞开始
    flag： XXX // 表示两个刚体是否要发生碰撞，false表示需要发生碰撞，true表示不需要发生碰撞，两个刚体会发生穿透
}
```


当刚体(body)分离时：


```ts
{
    bodyA: XXX // 碰撞刚体A的名称
    bodyB: XXX // 碰撞刚体B的名称
    collisionType: XXX // 系统内置的碰撞监听string名称
    action： "separate"// 两个刚体开始分离
}
```


**注意：当刚体碰撞到空间(space)的边缘时，bodyB 为"edge"。**

---

## progress

> 原文路径：/component/basic/progress/

](#progress)
# progress


进度条，不支持子组件，支持[通用事件](../common/common-events)


](#%E5%B1%9E%E6%80%A7)
### 属性


支持[通用属性](../common/common-attributes)


``


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| percent | <number> | 0 | 否 | 当前进度 |
| type | horizontal | arc | horizontal | 否 | 进度条类型，不支持动态修改 |


](#%E6%A0%B7%E5%BC%8F)
### 样式


支持[通用样式](../common/common-styles)


horizontal progress 底色为(136, 136, 136)


arc progress 默认宽高为 32px，宽高设置不一致时，arc 图标为宽高的较小值


``
``


``


``
``
``


``
``


``


``


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| color | <color> | #33b4ff | 否 | 进度条的颜色 |
| stroke-width | <length> | 32px | 否 | 进度条的宽度 |
| background-colordeprecated | <color> | #f0f0f0 | 否 | 进度条的背景颜色，该属性已经废弃，仅手表设备有支持 |
| layer-color | <color> | #f0f0f0 | 否 | 进度条的背景颜色 |
| start-angle | <deg> | - | 否 | 弧形进度条起始角度，以时钟 0 点为基线，取值范围为 0 到 360（顺时针）。 |
| total-angle | <deg> | - | 否 | 弧形进度条总长度，范围为-360 到 360，负数标识起点到终点为逆时针。 |


](#%E6%96%B9%E6%B3%95)
### 方法


| 名称 | 参数 | 描述 |
| --- | --- | --- |
| progressTo | Object | 设置进度条到指定进度 |


**progressTo 的参数说明:**


``


``


| 名称 | 类型 | 是否必选 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| progress | Number | 是 | 无 | 进度条的目标进度 |
| foreground | <color> | 否 | 无 | 进度条的目标颜色 |
| background | <color> | 否 | 无 | 进度条背景的目标颜色 |
| duration | Number | 否 | 500 | 动画持续时间，单位为 ms |
| timingFunction | String | 否 | ease | 绘制进度条的动画速度曲线，支持 linear |ease |ease-in |ease-out | ease-in-out |cubic-bezier(<number>, <number>, <number>, <number>) |


**timingFunction 说明**


| 值 | 说明 |
| --- | --- |
| linear | 表示动画以匀速运动 |
| ease | 表示动画在中间加速，在结束时减速 |
| ease-in | 表示动画一开始较慢，随着动画属性的变化逐渐加速，直至完成 |
| ease-out | 表示动画一开始较快，随着动画的进行逐渐减速 |
| ease-in-out | 表示动画属性一开始缓慢变化，随后加速变化，最后再次减速变化 |
| cubic-bezier(<number>, <number>, <number>, <number>) | 开发者自定义的三次贝塞尔曲线，其中第一位参数和第三位参数的值必须在 0 到 1 的范围内 |

---

## qrcode

> 原文路径：/component/basic/qrcode/

](#qrcode)
# qrcode


二维码，将文本内容转换为二维码展示。


](#%E5%AD%90%E7%BB%84%E4%BB%B6)
### 子组件


不支持


](#%E5%B1%9E%E6%80%A7)
### 属性


支持[通用属性](../common/common-attributes)


``


``


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| value | <string> | - | 是 | 二维码内容，长度小于等于 400 字节 |
| eclevel | <number> | 1 | 否 | 二维码纠错等级 取值范围为 0 到 3 |
| type | normal | circle | normal | 否 | 二维码样式设置 normal 常规样式，circle 圆点样式 |


](#%E6%A0%B7%E5%BC%8F)
### 样式


支持[通用样式](../common/common-styles)


](#%E4%BA%8B%E4%BB%B6)
### 事件


支持[通用事件](../common/common-events)

---

## span

> 原文路径：/component/basic/span/

](#span)
# span


格式化的文本，只能作为[<text>](/component/basic/text)子组件，不支持事件，目前不支持换行。


](#%E5%B1%9E%E6%80%A7)
### 属性


支持[通用属性](../common/common-attributes)


](#%E6%A0%B7%E5%BC%8F)
### 样式


``


``


``


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| color | <color> | #000000 | 否 | 文本颜色 |
| font-size | <length> | 30px | 否 | 文本尺寸 |
| font-weight | normal | bold | lighter | border |<number> | normal | 否 | 当前平台仅支持 normal 与 bold 两种效果 |

---

## svg-container

> 原文路径：/component/basic/svg-container/

](#svg-container)
# svg-container


渲染 svg 图片，可以动态修改 svg 属性


](#%E5%AD%90%E7%BB%84%E4%BB%B6)
### 子组件


无


](#%E5%B1%9E%E6%80%A7)
### 属性


支持[通用属性](../common/common-attributes)


``


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| src | <uri> | - | 是 | 只支持本地 uri |


](#%E6%94%AF%E6%8C%81%E5%8A%A8%E6%80%81%E4%BF%AE%E6%94%B9%E7%9A%84%E5%B1%9E%E6%80%A7%E8%AF%B4%E6%98%8E)
#### 支持动态修改的属性说明：


](#%E5%9F%BA%E6%9C%AC%E5%9B%BE%E5%BD%A2%E5%B1%9E%E6%80%A7)
##### 基本图形属性


| 标签 | 属性 | 描述 | 备注 |
| --- | --- | --- | --- |
| rect | x | 横坐标 |  |
|  | y | 纵坐标 |  |
|  | rx | 水平角半径 |  |
|  | ry | 垂直角半径 |  |
|  | width | 宽度 |  |
|  | height | 高度 |  |
| circle | cy | 圆心纵坐标 |  |
|  | cx | 圆心横坐标 |  |
|  | r | 圆的半径 |  |
| ellipse | cy | 圆心纵坐标 |  |
|  | cx | 圆心横坐标 |  |
|  | rx | 水平半径 |  |
|  | ry | 垂直半径 |  |
| line | x1 | 起点横坐标 |  |
|  | y1 | 起点纵坐标 |  |
|  | x2 | 终点横坐标 |  |
|  | y2 | 终点纵坐标 |  |


](#%E6%B8%90%E5%8F%98%E5%B1%9E%E6%80%A7)
##### 渐变属性


| 标签 | 属性 | 描述 |
| --- | --- | --- |
| <linearGradient> | x1 | 线性渐变起点横坐标 |
|  | y1 | 线性渐变起点纵坐标 |
|  | x2 | 线性渐变终点横坐标 |
|  | y2 | 线性渐变终点纵坐标 |
|  | gradientUnits | 渐变作用域 |
|  | spreadMethod | 渐变扩散模式 |
| <stop> | offset | 渐变颜色位置 |
|  | stop-color | 渐变色 |
|  | stop-opacity | 渐变透明度 |


](#%E9%80%9A%E7%94%A8%E5%B1%9E%E6%80%A7)
##### 通用属性


``


``


``


``


``


``


``


``


``


``


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| fill | <color> | black | 否 | 使用简写属性设置元素的填充色。 |
| fill-opacity | number | 1 | 否 | 填充色的透明度，取值范围为 0 到 1，1 表示为不透明，0 表示为完全透明。 |
| fill-rule | <string> | nonzero | 否 | nonzero:非零规则; evenodd:奇偶规则 |
| opacity | number | 1 | 否 | 元素的透明度，取值范围为 0 到 1，1 表示为不透明，0 表示为完全透明。 |
| stroke | <color> | - | 否 | 设置形状轮廓的颜色。 |
| stroke-linejoin | <string> | miter | 否 | 进行描边时在路径的拐角处使用的形状。bevel：使用斜角连接路径段；miter：使用尖角连接路径段；round：使用圆角连接路径段。 |
| stroke-linecap | <string> | butt | 否 | 路径描边时在它们的结尾处使用的形状。butt：不在路径两端扩展；round：在路径的末端延伸半个圆，直径等于线度。square：在路径的末端延伸半个圆，宽度等于线宽的一半，高度等于线宽。 |
| stroke-miterlimit | number | 4 | 否 | 设置将锐角绘制成斜角的极限值。 |
| stroke-opacity | number | 1 | 否 | 轮廓线条的透明度，取值范围为 0 到 1，1 表示为不透明，0 表示为完全透明。 |
| stroke-width | <length> | 1 | 否 | 设置轮廓线条的宽度。 |


](#%E6%A0%B7%E5%BC%8F)
### 样式


支持[通用样式](../common/common-styles)


](#%E6%96%B9%E6%B3%95)
### 方法


| 名称 | 参数 | 描述 |
| --- | --- | --- |
| setSvgAttr | Object | 设置属性 |


](#setsvgattr-%E7%9A%84%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E)
#### setSvgAttr 的参数说明


``


``


``


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| id | <string> | 无 | 是 | svg 元素的 ID |
| name | <string> | 无 | 是 | 属性名 |
| value | <string> | 无 | 是 | 属性值 |


](#%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81)
### 示例代码：


```html
<template>
  <div>
    <svg-container
      id="svgId"
      src="../common/svg/a.svg"
      @animationEnd="animationEnd"
    ></svg-container>
  </div>
</template>
<script>
  export default {
    onInit() {
      this.$element('svgId').setSvgAttr({
        id: 'text',
        name: 'fill',
        value: 'red',
      })
    },
    animationEnd() {
      console.log('animationEnd')
    },
  }
</script>
```

---

## text

> 原文路径：/component/basic/text/

](#text)
# text


文本，文本内容写在标签内容区


](#%E5%AD%90%E7%BB%84%E4%BB%B6)
### 子组件


支持[<span>](/component/basic/span)


](#%E5%B1%9E%E6%80%A7)
### 属性


支持[通用属性](../common/common-attributes)


](#%E6%A0%B7%E5%BC%8F)
### 样式


支持[通用样式](../common/common-styles)


````


````


````


````


``


``
``


``


``


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| min-width | <length>|<percentage> | - | 否 | 指定元素的最小宽度 |
| min-height | <length>|<percentage> | - | 否 | 指定元素的最小高度 |
| max-width | <length>|<percentage> | - | 否 | 指定元素的最大宽度 |
| max-height | <length>|<percentage> | - | 否 | 指定元素的最大高度 |
| lines | <number> | -1 | 否 | 文本行数，-1 代表不限定行数 |
| color | <color> | #757575 | 否 | 文本颜色 |
| font-size | <length> | 30px | 否 | 文本尺寸 |
| font-weight | normal | bold | lighter | border | | normal | 否 | 当前平台仅支持 normal 与 bold 两种效果 |
| text-decoration | underline | line-through | none | none | 否 | 用于设置文本的修饰线外观 |
| text-align | left | center | right | left | 否 | 文本的水平对齐方式。 |
| line-height | <length> | - | 否 | 行高设置 |
| text-overflow | clip | ellipsis | clip | 否 | 在设置了行数的情况下生效 |


](#%E4%BA%8B%E4%BB%B6)
### 事件


支持[通用事件](../common/common-events)

---

# 组件-容器组件

## div

> 原文路径：/component/container/div/

](#div)
# div


基本容器，支持子组件，支持[通用属性](/component/common/common-attributes)，支持[通用样式](/component/common/common-styles)，支持[通用事件](/component/common/common-events)


](#%E6%A0%B7%E5%BC%8F)
### 样式


````


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| flex-direction | column | row | column-reverse | row-reverse | row | 否 | 默认为横向row，父容器为<div>、<list-item>时生效 |
| flex-wrap | nowrap | wrap | wrap-reverse | nowrap | 否 | 规定 flex 容器是单行或者多行，同时横轴的方向决定了新行堆叠的方向 |
| justify-content | flex-start | flex-end | center | space-between | space-around | flex-start | 否 | 设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式 |
| align-items | stretch | flex-start | flex-end | center | stretch | 否 | 定义 flex 子项在 flex 容器的当前行的侧轴（纵轴）方向上的对齐方式 |
| align-content | stretch | flex-start | flex-end | center | space-between | space-around | stretch | 否 | 属性在弹性容器内的各项没有占用交叉轴上所有可用的空间时对齐容器内的各项（垂直），容器内必须有多行的项目，该属性才能渲染出效果 |

---

## list-item

> 原文路径：/component/container/list-item/

](#list-item)
# list-item


`[<list>`](/component/container/list)的子组件，用来展示列表具体 item，宽度默认充满 list 组件，支持子组件，支持[通用属性](/component/common/common-attributes)，支持[<div>样式](/0f4779940f452650bf63aba189b042aa/div.md)，不支持 position 样式，支持[通用样式](/component/common/common-styles)，支持[通用事件](/component/common/common-events)


](#%E5%B1%9E%E6%80%A7)
### 属性


``


****


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| type | <string> | - | 是 | list-item 类型，值为自定义的字符串，如'loadMore'。相同的 type 的 list-item 必须具备完全一致的 DOM 结构。因此，在 list-item 内部需谨慎使用 if 和 for，因为 if 和 for 可能造成相同的 type 的 list-item 的 DOM 结构不一致，从而引发错误 |


](#%E6%A0%B7%E5%BC%8F)
### 样式


``


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| column-span | <number> | 1 | 否 | list-item 在 list 中所占列数，一般用于 list 多列显示时。 |


](#slots)
### Slots


| name | 描述 |
| --- | --- |
| right | 左滑后，在右端显示 |

---

## list

> 原文路径：/component/container/list/

](#list)
# list


列表视图容器，仅支持`[<list-item>`](/component/container/list-item)子组件，支持[通用属性](/component/common/common-attributes)，支持[通用样式](/component/common/common-styles)


](#%E5%B1%9E%E6%80%A7)
### 属性


``


``


``


``


``


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| type | normal|fisheye|grid | normal | 否 | 设置列表的的布局方式，默认为普通的 list 布局；fisheye 是类似鱼眼镜头效果布局；grid 是网格布局。该属性不可动态变更 |
| scrollbar | <boolean> | false | 否 | 是否启用滚动条 |
| title | <boolean> | false | 否 | 值为 true <list-item> 的第一个元素将会作为 list 的标题，标题位置固定在 list 开头，向上滑动时标题会渐渐消失（透明度逐渐变为完全透明) |
| circular | <boolean> | false | 否 | 是否循环展示 <list-item>, 值为 true 时部分滚动事件不可用。 |
| alignmentnum | <number> | 3 | 否 | 鱼眼 list 一屏幕 <list-item> 对齐数量，type 为 fisheye 时生效，设置范围：3-7，超出范围则自动设置为默认值 |
| bounces | <boolean> | true | 否 | 是否启用回弹 |


](#%E6%A0%B7%E5%BC%8F)
### 样式


``


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| flex-direction | column | row | column | 否 | - |
| columns | <number> | 1 | 否 | list 显示列数 |


](#%E4%BA%8B%E4%BB%B6)
### 事件


| 名称 | 参数 | 描述 |
| --- | --- | --- |
| scrollbottom | - | 列表滑动到底部 |
| scrolltop | - | 列表滑到到顶部 |
| scrollindex | {first, last} | 返回 list 可视范围的索引范围。first:可视范围第一个 item 的索引；last:可视范围最后一个 item 的索引。 |


](#%E6%96%B9%E6%B3%95)
### 方法


| 名称 | 参数 | 描述 |
| --- | --- | --- |
| scrollTo | Object | list 滚动到指定 item 位置 |


**scrollTo 的参数说明:**


| 名称 | 类型 | 是否必选 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| index | number | 是 | 无 | list 滚动的目标 item 位置 |
| behavior | smooth|instant|auto | 否 | auto | 是否平滑滑动，支持参数 smooth (平滑滚动)，instant (瞬间滚动)，默认值 auto，效果等同于 instant |

---

## overview

> 原文路径：/component/container/overview/

](#%E6%A6%82%E8%BF%B0)
# 概述


布局/容器组件是实现 UI 布局的核心模块之一，不仅可以提供独立的布局功能，还可以多个容器组合，实现更为复杂的布局模式和视觉效果。布局容器还能够为其它 UI 组件提供适当的间距及排列方式，使得整个页面更加美观，构建更丰富的 UI 界面。


](#%E5%B8%83%E5%B1%80%E5%AE%B9%E5%99%A8%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D)
## 布局/容器组件介绍


`[<list-item>`](/component/container/list-item)


`[<list>`](/component/container/list)


| 组件 | 简述 |
| --- | --- |
| div | 基本容器 |
| list | 列表视图容器，仅支持子组件 |
| list-item | 的子组件，用来展示列表具体 item，宽度默认充满 list 组件 |
| stack | 基本容器，子组件排列方式为层叠排列，每个直接子组件按照先后顺序依次堆叠，覆盖前一个子组件 |
| swiper | 滑块视图容器 |
| scroll | 滚动视图容器。竖向或水平方向滚动容器，竖向滚动需要设置定高，水平滚动需要设置定宽 |

---

## scroll

> 原文路径：/component/container/scroll/

](#scroll)
# scroll


滚动视图容器。竖向或水平方向滚动容器，竖向滚动需要设置定高，水平滚动需要设置定宽。


](#%E5%AD%90%E7%BB%84%E4%BB%B6)
## 子组件


支持，也支持嵌套 `scroll`。


](#%E5%B1%9E%E6%80%A7)
## 属性


支持[通用属性](/component/common/common-attributes)


``


````````


``


````````


| 属性 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
| scroll-x | Boolean | false | 否 | 是否允许横向滚动 |
| scroll-y | Boolean | false | 否 | 是否允许纵向滚动 |
| scroll-top | Number/String |  | 否 | 设置竖向滚动条位置，内容顶部到 scroll 顶部的距离，如果有滚动吸附效果则先执行scroll-top再吸附。 |
| scroll-bottom | Number/String |  | 否 | 设置竖向滚动条位置，内容底部到 scroll 底部的距离，如果有滚动吸附效果则先执行scroll-bottom再吸附。同时设置scroll-top和scroll-bottom以scroll-top为准 |
| scroll-left | Number/String |  | 否 | 设置横向滚动条位置，内容左侧到 scroll 左侧的距离，如果有滚动吸附效果则先执行scroll-left再吸附。 |
| scroll-right | Number/String |  | 否 | 设置横向滚动条位置，内容右侧到 scroll 右侧的距离，如果有滚动吸附效果则先执行scroll-right再吸附。同时设置scroll-left和scroll-right以scroll-left为准 |
| bounces | Boolean | false | 否 | 是否边界回弹 |


](#%E6%A0%B7%E5%BC%8F)
## 样式


支持[通用样式](/component/common/common-styles)


scroll 组件暂不支持 margin, padding 相关样式


````
````
``````````


````
``
``
``


``````


| 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| scroll-snap-type | - |  | 作用在scroll组件上，表示scroll的滚动吸附类型。第一个参数为x或y，表示水平方向上滚动或竖直方向上滚动；第二个参数为mandatory或proximity。mandatory表示选择距离最近的锚点吸附，proximity距离吸附锚点不到容器高度的 30% 时才会吸附。默认为proximity； |
| scroll-snap-align | none | start | center | end | none | 作用在scroll子组件上，表示子组件和scroll的对齐形式；start：表示组件和scroll顶部对齐。center: 表示组件和scroll底部对齐。end：表示组件和scroll中心对齐。none：无需对齐，默认值。 |
| scroll-snap-stop | - | normal | 作用在scroll组件上，是否允许滚动容器“越过”可能的捕捉位置；normal可以越过捕捉位置，always不能越过捕捉位置 |


](#%E4%BA%8B%E4%BB%B6)
## 事件


``
``


| 名称 | 参数 | 描述 |
| --- | --- | --- |
| scrolltop |  | 滚动到顶部触发 |
| scrollbottom |  | 滚动到底部触发 |
| scroll | { scrollX，scrollY } | 滚动触发scrollX表示滚动的水平距离；scrollY表示滚动的垂直距离； |


](#%E6%96%B9%E6%B3%95)
## 方法


| 名称 | 描述 |
| --- | --- |
| getScrollRect | 获取滚动内容的尺寸 |
| revealScrollbar | 短暂显示滚动条。仅当内容超出滚动容器（scroll 容器）时生效。 |


](#getscrollrect)
### getScrollRect


获取滚动内容的尺寸


```ts
function getScrollRect(options: {
  success?: (res: { width: number; height: number }) => void
  fail?: (data: string, code: number) => void
}): void
```


**返回值说明：**


````


````


| 属性 | 类型 | 描述 |
| --- | --- | --- |
| width | Number | 滚动内容的宽度，包含border和padding |
| height | Number | 滚动内容的高度，包含border和padding |


**示例：**


```ts
this.$element('scroll').getScrollRect({
  success({ width, height }) {
    console.log('宽度', width)
    console.log('高度', height)
  },
  fail(data, code) {},
})
```


](#revealscrollbar)
### revealScrollbar


短暂显示滚动条。仅当内容超出滚动容器（scroll 容器）时生效。


```ts
function revealScrollbar(options: {
  success?: () => void
  fail?: (data: string, code: number) => void
}): void
```


**示例：**


```ts
this.$element('scroll').revealScrollbar({
  success() {},
  fail(data, code) {},
})
```

---

## stack

> 原文路径：/component/container/stack/

](#stack)
# stack


基本容器，子组件排列方式为层叠排列，每个直接子组件按照先后顺序依次堆叠，覆盖前一个子组件，支持子组件，支持[通用属性](../common/common-attributes)


](#%E6%A0%B7%E5%BC%8F)
### 样式


支持[<div> 样式](/component/container/div)，支持[通用样式](../common/common-styles)


](#%E4%BA%8B%E4%BB%B6)
### 事件


支持[通用事件](../common/common-events)

---

## swiper

> 原文路径：/component/container/swiper/

](#swiper)
# swiper


滑块视图容器，支持子组件


](#%E5%B1%9E%E6%80%A7)
### 属性


支持[通用属性](../common/common-attributes)


``


``


``


``


``


``


``


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| index | <number> | 0 | 否 | 当前显示的子组件索引 |
| indicator | <boolean> | true | 否 | 是否启用 indicator，默认 true |
| scrollbar | <boolean> | false | 否 | 是否启用滚动条，如果 indicator 启用，则滚动条不会启用 |
| vertical | <boolean> | false | 否 | 滑动方向是否为纵向，纵向时 indicator 也为纵向 |
| previousmargin | <string> | 0px | 否 | 前边距，可用于露出前一项的一小部分，支持单位：px 和% |
| nextmargin | <string> | 0px | 否 | 后边距，可用于露出后一项的一小部分，支持单位：px 和% |
| enableswipe | <boolean> | true | 否 | 是否支持手势滑动 swiper |
| effect | scroll | fade | scroll | 否 | 滑动动效类型， scroll 为滚动动效，fade 为淡入淡出动效 |


**备注**：`previousmargin`和`nextmargin`的总和不应该超过整个 swiper 大小的 1/2，超过部分将会被截取。


](#%E6%A0%B7%E5%BC%8F)
### 样式


支持[通用样式](../common/common-styles)


``


``


``


````


``


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| indicator-type | normal | arc | normal | 否 | indicator 排列形状（普通或者弧形） |
| indicator-color | <color> | rgba(255, 255, 255, 0.4) | 否 | indicator 填充颜色 |
| indicator-selected-color | <color> | #ffffff 或者 rgb(255, 255, 255) | 否 | indicator 选中时的颜色 |
| indicator-size | <length> | 12px | 否 | indicator 组件的直径大小 |
| indicator-[top|left|right|bottom] | <length>|<percentage> | - | 否 | indicator 相对于 swiper 的位置，indicator-type 为 arc 时，该样式无效 |
| indicator-spacing | <number> | - | 否 | indicator 间距，indicator-type 为 normal 时指间隔距离，indicator-type 为 arc 时指间隔角度 |


](#%E4%BA%8B%E4%BB%B6)
### 事件


支持[通用事件](../common/common-events)


| 名称 | 参数 | 描述 |
| --- | --- | --- |
| change | {index:currentIndex} | 当前显示的组件索引变化时触发 |
| scrollbottom | - | 滑动到底部或者最右边 |
| scrolltop | - | 滑动到顶部或者最左边 |


](#%E6%96%B9%E6%B3%95)
### 方法


| 名称 | 参数 | 描述 |
| --- | --- | --- |
| swipeTo | Object | swiper 滚动到 index 位置 |


](#swipeto-%E7%9A%84%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E)
#### swipeTo 的参数说明:


| 名称 | 类型 | 是否必选 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| index | number | 是 | 无 | swiper 滚动到 index 位置 |
| behavior | smooth|instant|auto | 否 | auto | 是否平滑滑动，支持参数 smooth (平滑滚动)，instant (瞬间滚动)，默认值 auto，效果等同于 instant |

---

# 组件-拓展组件

## cellular-list

> 原文路径：/component/extend/cellular-list/

](#cellular-list)
# cellular-list


蜂窝列表组件，将指定结构的数组渲染成蜂窝状列表。


```text
 * 排列方式
 *     19___20
 *      |
 *      |  7___8___9
 *      |  |        \
 *     18  | 1___2   10
 *    /    |  \   \   \
 *   17    6   0   3   11
 *    \     \     /   /
 *     16    5___4   12
 *      \           /
 *       15___14___13
```


](#%E5%AD%90%E7%BB%84%E4%BB%B6)
### 子组件


不支持


](#%E5%B1%9E%E6%80%A7)
### 属性


支持[通用属性](../common/common-attributes)


``


``


``


| 名称 | 类型 | 默认值 | 必 |  |
| --- | --- | --- | --- | --- |
| content | <array> | - | 是 | 蜂窝列表数据内容，详见content-item数据结构 |
| center-index | <number> | - | 否 | 居中图标位置索引，不填写则居中索引为 0 的图标 |


content-item 数据结构


``


``


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| name | <string> | - | 否 | 图标名称 |
| image | <string> | - | 是 | 图标图片地址，仅支持本地图片 |


](#%E6%A0%B7%E5%BC%8F)
### 样式


支持[通用样式](../common/common-styles)


``


``


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| outer-radius | <length> | 80px | 否 | 图标外半径，用来控制图标与图标之间的距离 |
| inner-radius | <length> | 64px | 否 | 图标内半径，用来控制图标的大小 |


](#%E4%BA%8B%E4%BB%B6)
### 事件


支持[通用事件](../common/common-events)


[ICON_EVENT](#ICON_EVENT)


[ICON_EVENT](#ICON_EVENT)


| 名称 | 参数 | 描述 |
| --- | --- | --- |
| iconclick |  | 当前图标被点击时触发，返回索引位置和名称 |
| wheelfocus |  | 中心图标放大到最大时触发，返回索引位置和名称 |


](#a-idicon_eventicon_eventa)[ICON_EVENT


``


``


| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| index | <Integer> | 当前被点击图标索引位置 |
| name | <String> | 当前被点击图标名称 |

---

## drawer-navigation

> 原文路径：/component/extend/drawer-navigation/

](#drawer-navigation)
# drawer-navigation


[<drawer>](./drawer)的子组件，用来展示具体的抽屉内容


](#%E5%AD%90%E7%BB%84%E4%BB%B6)
### 子组件


支持


](#%E5%B1%9E%E6%80%A7)
### 属性


支持[通用属性](../common/common-attributes)


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| direction | start | end | up | down | start | 否 | drawer-navigation 的滑出方向，支持 start/end/up/down。如果多个 drawer-navigation 重复设置同样的值，则添加第一个 drawer-navigation。 |
| enable-blur | boolean | true | 否 | 是否启用高斯模糊 |


](#%E6%A0%B7%E5%BC%8F)
### 样式


支持[通用样式](../common/common-styles)

---

## drawer

> 原文路径：/component/extend/drawer/

](#drawer)
# drawer


抽屉容器，抽屉默认隐藏。可通过边缘滑动，支持 flex 布局。


](#%E5%AD%90%E7%BB%84%E4%BB%B6)
### 子组件


支持,包括 [<drawer-navigation>](./drawer-navigation) 子组件


](#%E5%B1%9E%E6%80%A7)
### 属性


支持[通用属性](../common/common-attributes)


](#%E6%A0%B7%E5%BC%8F)
### 样式


支持[通用样式](../common/common-styles)


](#%E4%BA%8B%E4%BB%B6)
### 事件


支持[通用事件](../common/common-events)


| 名称 | 参数 | 描述 |
| --- | --- | --- |
| change | {direction:directionValue, state: stateValue} | 抽屉打开关闭时回调。direction：抽屉的位置，值为 start 或 end 或 up 或 down。 start：左边，end：右边，up：上边，down：下边。state:打开或者关闭状态。0：关闭，1：打开 |


](#%E6%96%B9%E6%B3%95)
### 方法


| 名称 | 参数 | 描述 |
| --- | --- | --- |
| openDrawer | Object | 打开指定方向的抽屉 |
| closeDrawer | Object | 关闭指定方向的抽屉 |


openDrawer 的参数说明:


| 属性 | 类型 | 是否必选 | 描述 |
| --- | --- | --- | --- |
| direction | start | end | up | down | 否 | 可选参数 direction 可指定为 start | end | up | down。 如果未设置 direction 的值，且只存在一个 drawer-navigation 时，默认打开这个 drawer-navigation；如果多个 drawer-navigation 都存在，则按照左、右、上、下的次序打开。当指定的 direction 与实际的 drawer-navigation 的 direction 的值不匹配时不生效。 |


closeDrawer 的参数说明:


| 属性 | 类型 | 是否必选 | 描述 |
| --- | --- | --- | --- |
| direction | start | end | up | down | 否 | 可选参数 direction 可指定为 start | end | up | down。如果未设置 direction 的值，且只存在一个 drawer-navigation 时，默认关闭这个 drawer-navigation；如果多个 drawer-navigation 都存在，则按照左、右、上、下的次序关闭。当指定的 direction 与实际的 drawer-navigation 的 direction 的值不匹配时不生效。 |

---

## overview

> 原文路径：/component/extend/overview/

](#%E6%A6%82%E8%BF%B0)
# 概述


用于简化页面导航的 UI 组件，通过提供直观的导航形式、清晰的页面路径和视觉创意等，提供了便捷的导航体验


](#%E5%AF%BC%E8%88%AA%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D)
## 导航组件介绍


| 组件 | 简述 |
| --- | --- |
| drawer | 抽屉容器，抽屉默认隐藏。可通过边缘滑动，支持 flex 布局 |
| drawer-navigation | <drawer>的子组件，用来展示具体的抽屉内容 |
| cellular-list | 蜂窝列表组件，将指定结构的数组渲染成蜂窝状列表 |

---

# 组件-系统风格组件

## overview

> 原文路径：/component/global/overview/

](#%E6%A6%82%E8%BF%B0)
# 概述


提供基于蓝河应用的特定的设计规范和标准所设计的 UI 组件，这些组件具有统一的设计风格、布局、图标元素和字体字号等，旨在为用户提供全面的业务场景下的界面设计需求。


](#%E7%B3%BB%E7%BB%9F%E9%A3%8E%E6%A0%BC%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D)
## 系统风格组件介绍


| 组件 | 简述 |
| --- | --- |
| vw-alert | 弹窗组件，此组件为应用内主动触发的信息、操作确认弹窗 |
| vw-button | 一种基础的组件，点击后可执行对应（按钮表意）的操作。包含“文字按钮”“图标按钮”两类 |
| vw-empty | 页面无用户生成的内容时，显示空白页控件元素 |
| vw-icon | 提供一套常用图标 |
| vw-slide | 用来快速调节设置值，如音量、亮度、色彩饱和度等. 用户通过点击左侧/右侧按钮的方式增加/降低数值. |
| vw-title | 标题显示在页面顶部，作为关键导航信息，用来告知用户当前在哪里 |
| vw-list | 列表包含一系列连续的列表项，可以呈现文本、图标等内容。 |
| vw-list-item | 列表选项可以作为列表的子项，当列表的每一项不同时可以用列表选项拼接实现 |
| vw-loading | loading 用于定性地指示一种过程状态，多用于数据加载过程，如加载应用列表，或从网络端获取内容的过程 |

---

## vw-alert

> 原文路径：/component/global/vw-alert/

](#vw-alert)
# vw-alert


控件定义：弹窗组件，此组件为应用内主动触发的信息、操作确认弹窗（注意：此组件不包含应用外的系统通知提醒弹窗）


](#%E5%B1%9E%E6%80%A7)
### 属性


``


``


``


``


``


``


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| icon | <string> | - | 否 | 图标 |
| title | <string> | - | 否 | 标题 |
| content | <string> | - | 是 | 正文 |
| des | <string> | - | 否 | 副文本/辅助信息 |
| buttons | <Array> | - | 是 | 按钮 |
| type | <string> | ALERT | 否 | 弹窗类型，根据视图布局上差异，可选值为ALERT，NOTICE |


](#buttons-array-%E7%B1%BB%E5%9E%8B)
#### buttons Array 类型


``


``


``


``


``


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| eventType | <string> | - | 是 | 按钮点击事件类型。支持自定义事件名，例如 confirm:确定，cancel:忽略 |
| type | <string> | - | 是 | 按钮类型。plain,primary,success,warning,danger |
| value | <string> | - | 否 | 按钮文本，同vw-button定义 |
| color | <string> | - | 否 | 按钮颜色，同vw-button定义 |
| bgColor | <string> |  | 否 | 按钮背景颜色，同vw-button定义 |

---

## vw-button

> 原文路径：/component/global/vw-button/

](#vw-button)
# vw-button


一种基础的组件，点击后可执行对应（按钮表意）的操作。包含“文字按钮”“图标按钮”两类；


](#%E5%B1%9E%E6%80%A7)
### 属性


``


``


``


``


``


``


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| type | <string> | plain | 否 | 类型包括以下五种类型： plain,primary,success,warning,danger |
| value | <string> | - | 是 | 按钮文本 |
| disabled | <boolean> | false | 否 | 按钮禁用状态 |
| color | <string> | - | 否 | 文字颜色 |
| bg-color | <string> | - | 否 | 按钮颜色 |
| text-size | <string> | - | 否 | 文本字号 |


](#%E4%BA%8B%E4%BB%B6)
### 事件


| 名称 | 参数 | 描述 |
| --- | --- | --- |
| click | MouseEvent | 组件被点击时触发 |

---

## vw-empty

> 原文路径：/component/global/vw-empty/

](#vw-empty)
# vw-empty


控件定义：页面无用户生成的内容时，显示空白页控件元素：


- （1） 图标

- （2） 正文

- （3） 辅助信息

](#%E5%B1%9E%E6%80%A7)
### 属性


``


``


``


``


``


``


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| icon | <string> | - | 否 | icon 名称/自定义路径定义 |
| content | <string> | - | 是 | 正文描述 |
| des | <string> | - | 否 | 辅助信息描述 |
| content-color | <string> | - | 否 | 正文的文字颜色，默认:#ffffff; |
| des-color | <string> | - | 否 | 辅助信息的文字颜色，默认:#888888; |
| is-loading | <bool> | false | 否 | 与icon 互斥，显示加载中状态 |


](#vw-empty-%E7%94%A8%E6%B3%95)
### vw-empty 用法


```html
<vw-empty
  icon="delete"
  content="正文这"
  des="辅助信息"
  content-color="#ff0000"
  des-color="#888888"
></vw-empty>
<vw-empty icon="delete" content="正文这"></vw-empty>
<vw-empty icon="/assets/images/icon.png" content="正文这" des="辅助信息"></vw-empty>
<vw-empty is-loading="true" content="正文这" des="辅助信息"></vw-empty>

```

---

## vw-icon

> 原文路径：/component/global/vw-icon/

](#vw-icon)
# vw-icon


控件定义：提供一套常用图标


](#%E5%B8%B8%E7%94%A8-icon-%E5%88%97%E8%A1%A8)
### 常用 icon 列表


| icon | 描述 |
| --- | --- |
| delete | 删除 |
| arrow-left | 左箭头 |
| arrow-right | 右箭头 |
| plus | 加号 |
| minus | 减号 |
| warn | 警告 |
| finish | 完成 |
| arrow-right-black | 指向右边的黑色箭头 |
| info-light | 浅色信息图标 |
| info-dark | 深色信息图标 |
| setup | 设置 |


](#%E5%B1%9E%E6%80%A7)
### 属性


``


``


``


``


``


``


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| icon | <string> | - | 否 | icon 名称 |
| [path] | <string> | - | 否 | 应用内部路径，可选 |
| [size] | <number> | 72 | 否 | 推荐尺寸参考下方 icon 尺寸表 |
| [width] | <number> | - | 否 | 自定义宽度，单位 px |
| [height] | <number> | - | 否 | 自定义高度，单位 px |
| [disabled] | <boolean> | false | 否 | 禁用状态(opacity:0.4) |


](#icon-%E5%B0%BA%E5%AF%B8%E8%A1%A8)
### icon 尺寸表


| 尺寸 | 描述 |
| --- | --- |
| xs | 36px * 36px |
| sm | 48px * 48px |
| normal | 72px * 72px |
| md | 96px * 96px |
| lg | 114px * 114px |
| xl | 198px * 198px |

---

## vw-list-item

> 原文路径：/component/global/vw-list-item/

](#vw-list-item)
# vw-list-item


列表选项可以作为列表的子项，当列表的每一项不同时可以用列表选项拼接实现。 list-item 代表一类组件，命名上我们用 li 缩写代替 list-item


参考当前需求，将列表选项分为以下几种：


vw-li: 通用列表子项，（itemData 必填属性为 title ，可填属性 des ，icon ，inputType，checked），通过以下随机组合可以实现以下几种布局


1.只有标题 （（itemData 仅设置 title）


2.带辅助文本的列表子项（itemData 设置属性为 title、des）


3.带图标的列表子项（itemData 设置属性为 title、icon）


4.带图标、描述文本的列表子项（itemData 设置属性为 icon、title、des）


5.带辅助文本和开关（或单选、多选）的列表子项（itemData 设置属性为 title、des、inputType、checked）


6.带图标、描述文本和开关（或单选、多选）的列表子项（itemData 设置属性为 icon、title、des、inputType、checked）


注意：带 radio 的列表子项，在选项变化时需要同时更新其他选项绑定的的 checked 标志位，否则会出现诸多显示问题


](#%E5%B1%9E%E6%80%A7)
### 属性


``


``


``


``


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| item-data | <Object> | - | 是 | 列表子项对象 |
| disabled | <boolean> | false | 否 | 列表选项是否为禁用状态 |
| remind | <boolean> | false | 否 | 是否显示红点 |
| widget-disabled | <boolean> | false | 否 | inputType配置switch/radio/checkbox 时，用来禁用右侧的部件但文字不会置灰 |


](#itemdata-%E9%9C%80%E8%A6%81%E5%A1%AB%E5%93%AA%E4%BA%9B%E5%BF%85%E5%A1%AB%E5%B1%9E%E6%80%A7%E6%A0%B9%E6%8D%AE%E7%B1%BB%E5%9E%8B%E7%A1%AE%E5%AE%9A%E5%8F%AF%E4%BB%A5%E5%8C%85%E5%90%AB%E7%9A%84%E5%B1%9E%E6%80%A7%E6%9C%89)
#### itemData 需要填哪些必填属性根据类型确定，可以包含的属性有：


``


``


``


``


``


``


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| icon | <string> | - | 否 | 列表项的图标路径 |
| title | <string> | - | 是 | 列表项的标题 |
| des | <string> | - | 否 | 列表项的辅助文本 |
| subIcon | <string> | - | 否 | 列表项的右侧图标路径 |
| checked | <boolean> | true | 否 | 当inputType配置 switch/radio/checkbox生效，表示开关状态 |
| inputType | <string> | - | 否 | 可枚举值为 switch/radio/checkbox，控制列表项右侧显示控件类型 |


](#%E4%BA%8B%E4%BB%B6)
### 事件


| 名称 | 回调参数 | 说明 |
| --- | --- | --- |
| itemclick | - | 列表选项点击事件 |
| widgetclick | { event} | 右边小组件点击事件（只在有 checkbox、radio、switch 组件的时候有此参数，event 和对应的原生组件点击事件一致） |
| animationend |  | 单选点击事件（目前只有带 radio 的 list-item 有） |


](#vw-list-item-%E7%94%A8%E6%B3%95)
### vw-list-item 用法


**vw-list**


```html
<template>
  <list>
    <list-item type="liIconArrow">
      <vw-li item-data="{{listArray[0]}}" onitemclick="handleClick"></vw-li>
    </list-item>
    <list-item type="liIconSw">
      <vw-li item-data="{{listArray[1]}}" onwidgetclick="handleWidgetClick"></vw-li>
    </list-item>
    <list-item type="liIcon">
      <vw-li item-data="{{listArray[2]}}"></vw-li>
    </list-item>
    <list-item type="liIconDesSw">
      <vw-li
        item-data="{{listArray[3]}}"
        onwidgetclick="handleWidgetClick"
      ></vw-li>
    </list-item>
    <list-item type="li">
      <vw-li item-data="{{listArray[4]}}"></vw-li>
    </list-item>
    <list-item type="liDes">
      <vw-li item-data="{{listArray[5]}}"></vw-li>
    </list-item>

    <list-item type="liSw">
      <vw-li item-data="{{listArray[6]}}" onwidgetclick="handleWidgetClick"></vw-li>
    </list-item>
    <list-item type="liDesSw">
      <vw-li item-data="{{listArray[7]}}" onwidgetclick="handleWidgetClick"></vw-li>
    </list-item>
    <list-item type="liRadio">
      <vw-li item-data="{{listArray[8]}}"></vw-li>
    </list-item>
  </list>
</template>

<script>
  export default {
    data: {
      listArray: [
        {
          icon: '/assets/images/logo.png',
          title: '图标+标题+箭头',
        },
        {
          icon: '/assets/images/logo.png',
          title: '图标+标题+开关',
          inputType: 'switch',
          checked: true,
        },
        {
          icon: '/assets/images/logo.png',
          title: '图标+标题',
        },
        {
          icon: '/assets/images/logo.png',
          title: '图标+标题+辅助文本+开关',
          des: '辅助文本超长示例辅助文本超长示例辅助文本超长示例',
          inputType: 'switch',
          checked: true,
        },
        {
          title: '只有标题',
        },
        {
          title: '标题+辅助文本',
          des: '辅助文本',
        },
        {
          title: '标题+开关',
          inputType: 'switch',
          checked: true,
        },
        {
          title: '标题+开关+辅助文本',
          des: '辅助文本',
          checked: true,
        },
        {
          title: '标题+单选+辅助文本',
          des: '辅助文本',
          inputType: 'radio',
          checked: true,
        }
      ],
    },
    handleWidgetClick() {},
    handleClick() {},
  }
</script>
```

---

## vw-list

> 原文路径：/component/global/vw-list/

](#vw-list)
# vw-list


列表包含一系列连续的列表项，可以呈现文本、图标等内容。 list 只提供每个选项相同的列表，如果每个选项不同可使用 list-item 类组件进行实现。


参考当前需求，将列表分为以下几种：


1.vw-list:最常用的列表，包含图标、标题、箭头（listArray 子项必填选项为 icon、title，list 属性可选 type 为 normal 或 fisheye）


2.vw-list-radio:右侧带单选按钮的列表（listArray 子项必填选项为 title、checked）


3.vw-list-icon-radio:左侧为图标，右侧带单选按钮的列表（listArray 子项必填选项为 icon、title、checked）


4.vw-list-radio-left:左侧带单选按钮的列表（listArray 子项必填选项为 title、checked）


5.vw-list-des-radio-left:左侧带单选按钮且带辅助文本的列表（listArray 子项必填选项为 title、des、checked）


6.vw-list-checkbox:右侧带多选按钮的列表（listArray 子项必填选项为 title、checked）


7.vw-list-icon-checkbox:左侧为图标，右侧带多选按钮的列表（listArray 子项必填选项为 icon、title、checked）


](#%E5%B1%9E%E6%80%A7)
### 属性


``


``


``


``


``


``


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| title | <string> | 列表 | 是 | 列表的标题 |
| listArray | <Array> | - | 是 | 列表数据数组 |
| scrollbar | <boolean> | true | 否 | 是否启用滚动条 |
| type | <string> | normal | 否 | 设置列表的的布局方式，值为 normal（正常列表）或 fisheye（鱼眼列表）（只有 vw-list 生效） |
| remind | <boolean> | false | 否 | 是否显示红点（只有 vw-list 支持） |
| buttons | <Array> | - | 是 | 按钮（只有 vw-list-checkbox 和 vw-list-icon-checkbox 支持） |


](#listarray-%E7%9A%84%E6%88%90%E5%91%98%E4%B8%BA-object%E9%9C%80%E8%A6%81%E5%A1%AB%E5%93%AA%E4%BA%9B%E5%BF%85%E5%A1%AB%E5%B1%9E%E6%80%A7%E6%A0%B9%E6%8D%AE-list-%E7%B1%BB%E5%9E%8B%E7%A1%AE%E5%AE%9A%E5%8F%AF%E4%BB%A5%E5%8C%85%E5%90%AB%E7%9A%84%E5%B1%9E%E6%80%A7%E6%9C%89)
#### listArray 的成员为 Object，需要填哪些必填属性根据 list 类型确定，可以包含的属性有：


``


``


``


``


``


``


``


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| icon | <string> | - | 根据 list 类型确定 | 列表选项的图标路径 |
| title | <string> | - | 是 | 列表选项的标题 |
| des | <string> | - | 根据 list 类型确定 | 列表选项的辅助文本 |
| checked | <boolean> | true | 根据 list 类型确定 | 列表选项的 switch/radio/checkbox 开关状态 |
| index | <number> | - | 根据 list 类型确定 | 列表选项的序号 |
| disabled | <boolean> | false | 否 | 列表选项是否为禁用状态 |
| widgetDisabled | <boolean> | false | 否 | 列表右侧有 switch/radio/checkbox 时，用来仅禁用右侧的部件但文字不会置灰 |


](#%E4%BA%8B%E4%BB%B6)
### 事件


| 名称 | 回调参数 | 说明 |
| --- | --- | --- |
| itemclick | {index} | 列表选项点击事件 |
| widgetclick | {index, event} | 右边小组件点击事件（只在有 checkbox、radio、switch 组件的时候有此事件，event 和对应的原生组件点击事件一致） |
| back | 无 | 列表标题点击事件 |
| animationend | {index} | 单选点击事件（目前只有带 radio 的 list 有） |


](#vw-list-%E7%94%A8%E6%B3%95)
### vw-list 用法


**vw-list**


```html
<template>
  <vw-list
    list-array="{{listArray}}"
    onitemclick="handleClick"
    title="列表"
    onback="handleBack"
    onscrollbottom="handleBottom"
  ></vw-list>
</template>

<script>
  export default {
    data: {
      listArray: [
        {
          icon: '/assets/images/setupSound.png',
          title: '图标+标题+箭头',
        },
        {
          icon: '/assets/images/setupSound.png',
          title: '图标+标题+箭头',
        },
        {
          icon: '/assets/images/setupSound.png',
          title: '图标+标题+箭头',
        },
      ],
    },
  }
</script>
```


**vw-list-radio**


```html
<template>
  <vw-list-radio
    list-array="{{listArray}}"
    onitemclick="handleClick"
    onwidgetclick="handleWidgetClick"
    title="单选列表"
    onback="handleBack"
    onscrollbottom="handleBottom"
  ></vw-list-radio>
</template>
<script>
  export default {
    data: {
      listArray: [
        {
          title: '无图标单选',
          checked: false,
        },
        {
          title: '无图标单选',
          checked: true,
        },
        {
          title: '无图标单选',
          checked: false,
        },
      ],
    },
  }
</script>
```


**vw-list-icon-radio**


```html
<template>
  <vw-list-icon-radio
    list-array="{{listArray}}"
    onitemclick="handleClick"
    onwidgetclick="handleWidgetClick"
    title="有图标单选列表"
    onback="handleBack"
    onscrollbottom="handleBottom"
  ></vw-list-icon-radio>
</template>
<script>
  export default {
    data: {
      listArray: [
        {
          icon: '/assets/images/setupSound.png',
          title: '有图标单选列表',
          checked: false,
        },
        {
          icon: '/assets/images/setupSound.png',
          title: '有图标单选列表',
          checked: true,
        },
        {
          icon: '/assets/images/setupSound.png',
          title: '有图标单选列表',
          checked: false,
        },
      ],
    },
  }
</script>
```


**vw-list-radio-left**


```html
<template>
  <vw-list-radio-left
    list-array="{{listArray}}"
    onitemclick="handleClick"
    onwidgetclick="handleWidgetClick"
    title="左侧单选列表"
    onback="handleBack"
    onscrollbottom="handleBottom"
  ></vw-list-radio-left>
</template>
<script>
  export default {
    data: {
      listArray: [
        {
          title: '左侧单选',
          checked: false,
        },
        {
          title: '左侧单选',
          checked: true,
        },
        {
          title: '左侧单选',
          checked: false,
        },
      ],
    },
  }
</script>
```


**vw-list-des-radio-left**


```html
<template>
  <vw-list-des-radio-left
    list-array="{{listArray}}"
    onitemclick="handleClick"
    onwidgetclick="handleWidgetClick"
    title="左侧单选辅助文本列表"
    onback="handleBack"
    onscrollbottom="handleBottom"
  ></vw-list-des-radio-left>
</template>
<script>
  export default {
    data: {
      listArray: [
        {
          title: '左侧单选带辅助文本',
          checked: false,
          des: '辅助文本',
        },
        {
          title: '左侧单选带辅助文本',
          checked: true,
          des: '辅助文本',
        },
        {
          title: '左侧单选带辅助文本',
          checked: false,
          des: '辅助文本',
        },
      ],
    },
  }
</script>
```


**vw-list-checkbox**


```html
<template>
  <vw-list-checkbox
    list-array="{{listArray}}"
    onitemclick="handleClick"
    onwidgetclick="handleWidgetClick"
    title="多选列表"
    onback="handleBack"
    onscrollbottom="handleBottom"
  ></vw-list-checkbox>
</template>
<script>
  export default {
    data: {
      listArray: [
        {
          title: '无图标多选',
          checked: true,
        },
        {
          title: '无图标多选',
          checked: true,
        },
        {
          title: '无图标多选',
          checked: false,
        },
      ],
    },
  }
</script>
```


**vw-list-icon-checkbox**


```html
<template>
  <vw-list-icon-checkbox
    list-array="{{listArray}}"
    onitemclick="handleClick"
    onwidgetclick="handleWidgetClick"
    title="有图标多选列表"
    onback="handleBack"
    onscrollbottom="handleBottom"
  ></vw-list-icon-checkbox>
</template>
<script>
  export default {
    data: {
      listArray: [
        {
          icon: '/assets/images/setupSound.png',
          title: '有图标多选',
          checked: true,
        },
        {
          icon: '/assets/images/setupSound.png',
          title: '有图标多选',
          checked: true,
        },
        {
          icon: '/assets/images/setupSound.png',
          title: '有图标多选',
          checked: false,
        },
      ],
    },
  }
</script>
```

---

## vw-loading

> 原文路径：/component/global/vw-loading/

](#vw-loading)
# vw-loading


用于定性地指示一种过程状态，多用于数据加载过程，如加载应用列表，或从网络端获取内容的过程


](#%E5%B1%9E%E6%80%A7)
### 属性


``


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| size | <number> | - | 是 | loading 控件的大小 |

---

## vw-slide

> 原文路径：/component/global/vw-slide/

](#vw-slide)
# vw-slide


滑动条组件用来快速调节设置值，如音量、亮度、色彩饱和度等. 用户通过点击左侧/右侧按钮的方式增加/降低数值.


](#%E5%B1%9E%E6%80%A7)
### 属性


``


``


``


``


``


``


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| type | <string> | 'normal' | 是 | 类型，普通(normal)和栅格(grid) |
| value | <number> | - | 是 | 当前进度数值 |
| maxValue | <number> | - | 是 | 数值范围的最大值 |
| minValue | <number> | - | 是 | 数值范围的最小值 |
| step | <number> | - | 是 | 步数间距 |
| focusing | <boolean> | - | 是 | 是否处于聚焦状态 |


](#%E4%BA%8B%E4%BB%B6)
### 事件


| 名称 | 参数 | 描述 |
| --- | --- | --- |
| touchstart | 请参考通用事件中的 TouchEvent | 手指刚触摸组件时触发 |
| touchmove | 请参考通用事件中的 TouchEvent | 手指触摸后移动时触发 |
| touchend | 请参考通用事件中的 TouchEvent | 手指触摸动作结束时触发 |
| touchcancel | 请参考通用事件中的 TouchEvent | 手指触摸动作被打断时触发 |


](#vw-slide-%E7%94%A8%E6%B3%95)
### vw-slide 用法


```html
<vw-slide
  style="margin-top:20px"
  type="normal"
  value="{{valueA}}"
  min-value="45"
  max-value="255"
  step="42"
  focusing="{{true}}"
  ontouchstart="onStartA"
  ontouchend="onEnd"
  ontouchmove="onEnd"
  ontouchcancel="onEnd"
></vw-slide>
```

---

## vw-title

> 原文路径：/component/global/vw-title/

](#vw-title)
# vw-title


标题显示在页面顶部，作为关键导航信息，用来告知用户当前在哪里。


](#%E5%B1%9E%E6%80%A7)
### 属性


``


``


``


``


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| value | <string> | - | 是 | 标题文本内容 |
| is-fixed | <boolean> | true | 否 | 标题是否固定顶部 |
| icon-left | <string> | - | 否 | 标题左侧图标（仅方表生效） |
| icon-right | <string> | - | 否 | 标题右侧图标（仅方表生效） |
| level | Number | 2 | 否 | 值为1:一级标题，值为2:二级标题 |


](#%E4%BA%8B%E4%BB%B6)
### 事件


| 名称 | 回调参数 | 说明 |
| --- | --- | --- |
| back | 无 | 点击事件，只在有返回按钮时生效 |
| iconleftclick | 无 | 点击标题左侧icon事件，仅icon-left 配置后生效 |
| iconrightclick | 无 | 点击标题右侧icon事件，仅icon-right配置后生效 |


](#vw-title-%E7%94%A8%E6%B3%95)
### vw-title 用法


**标题类型**


```html
<vw-title level="1" value="一级标题" onback="handleClick"></vw-title>
<vw-title value="二级标题"" onback="handleClick"></vw-title>

<!--仅方表支持-->
<vw-title
      icon-left="/assets/images/brightness_on.png"
      icon-right="/assets/images/brightness_on.png"
      oniconleftclick="onIconLeftClick"
      oniconrightclick="onIconRightClick"
      value="标题+左右按钮"">
</vw-title>


```

---

# 组件-表单组件

## artboard

> 原文路径：/component/table/artboard/

](#artboard)
# artboard


提供可交互的界面，接收用户的笔画输入


](#%E5%AD%90%E7%BB%84%E4%BB%B6)
### 子组件


不支持


](#%E5%B1%9E%E6%80%A7)
### 属性


支持[通用属性](../common/common-attributes)


](#%E6%A0%B7%E5%BC%8F)
### 样式


支持[通用样式](../common/common-styles)


``


``


````


````


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| default-pen-color | <color> | #000 | 否 | 画笔颜色 |
| default-pen-size | <length> | 24px | 否 | 画笔尺寸 |
| width | <length>|<percentage> | - | 否 | 组件宽度 |
| height | <length>|<percentage> | - | 否 | 组件高度 |


](#%E4%BA%8B%E4%BB%B6)
### 事件


支持[通用事件](../common/common-events)


| 名称 | 参数 | 描述 |
| --- | --- | --- |
| changewritepanel | number[] | 轨迹点数据，格式为：[x1,y1,x2,y2,...,xn,yn,-1,0,-1,-1]，其中最后四位 -1,0,-1,-1 为笔画结束符 |


](#%E6%96%B9%E6%B3%95)
### 方法


| 名称 | 参数 | 描述 |
| --- | --- | --- |
| clearData | 无 | 清除轨迹 |

---

## input

> 原文路径：/component/table/input/

](#input)
# input


提供可交互的界面，接收用户的输入，默认为单行


](#%E5%AD%90%E7%BB%84%E4%BB%B6)
### 子组件


不支持


](#%E5%B1%9E%E6%80%A7)
### 属性


支持[通用属性](/7f1027fb1f5bbd82dc6e706045e05803/common-attributes.md)


````


``


``


``


``


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| type | button | checkbox | radio | text | date | speak | text | 否 | 支持动态修改，text为输入法录入，speak为语音录入 |
| checked | <boolean> | false | 否 | 当前组件的 checked 状态，可触发 checked 伪类，type 为 checkbox 时生效 |
| name | <string> | - | 否 | input 组件名称 |
| value | <string> | - | 否 | input 组件的值 |
| placeholder | <string> | - | 否 | 提示文本的内容，type 为 text | date | speak 时生效 |


](#%E6%A0%B7%E5%BC%8F)
### 样式


支持[通用样式](/765adcab7a96981138e6554a6888befc/common-styles.md)


``


``


``


``


``


````


````


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| color | <color> | #000 | 否 | 文本颜色 |
| caret-color | <color> | #000 | 否 | 光标颜色 |
| font-size | <length> | 43.2px | 否 | 文本尺寸 |
| text-decoration | <string> | underline | 否 | 文本下划线，目前只支持 underline |
| placeholder-color | <color> | #000 | 否 | 提示文本的颜色，type 为 text | date | speak 时生效 |
| width | <length>|<percentage> | - | 否 | 组件宽度 |
| height | <length>|<percentage> | - | 否 | 组件高度 |


](#%E4%BA%8B%E4%BB%B6)
### 事件


支持[通用事件](/9e6c0f774490d9ce4167d66873f59361/common-events.md)


| 名称 | 参数 | 描述 |
| --- | --- | --- |
| change | 不同 type 参数不同，具体见下方 change 事件参数 | input 组件的值、状态发生改变时触发，type 为 button 时无 change 事件 |
| focus | index | 获取光标返回的下标值 |


](#change-%E4%BA%8B%E4%BB%B6%E5%8F%82%E6%95%B0)
#### change 事件参数


| 参数 | text | speak | checkbox | radio | 备注 |
| --- | --- | --- | --- | --- |
| name |  | √ | √ |  |
| value | √ | √ | √ |  |
| checked |  | √ |  |  |


](#%E6%96%B9%E6%B3%95)
### 方法


| 名称 | 参数 | 描述 |
| --- | --- | --- |
| setSpan | Object | 动态设置文字样式，方法的入参不是必填项 目前只支持设置 color 和 text-decoration |
| focus | 无 | type 为 text | speak 时 生效。speak 可拉起语音输入，text 可拉起文字输入法 |


setSpan 参数说明如下:


| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| start | Number | - | 指定开始的位置 |
| end | Number | - | 指定结束的位置 |
| style | Object | - | 设置文字样式 ，不设置样式默认组件本身的样式 |


](#%E7%A4%BA%E4%BE%8B)
### 示例


```html
<template>
    <div style="flex-direction:column;">
       <input id="input" value="{{value}}" onfocus="focus"></input>
    </div>
    <div onclick="setSpan">设置文字样式</div>
</template>

<script>
  export default {
    data:{
      value:'input'
    },

    //组件获取光标后的回调值，在对应的位置插入值
    focus(index){

       //把输入框的值转为数组
       let data = String(this.value).split('')

       //在对应的位置插入对应的值
       data.splice(index,0,'插入input的值')

       //把转换后的值赋值回去给input组件的value
       this.value = data.join('');
    },

    setSpan(){
       //设置文字样式
       this.$element('input').setSpan({
          start:0,
          end:10,
          style:{
            'text-decoration':'underline',
            'color':'#000'
          }
       });
    }
  }
</script>
```


](#%E7%A4%BA%E4%BE%8B-1)
### 示例


修改 checkbox 组件的颜色


```html
<template>
    <div style="flex-direction:column;">
       <input checked="{{checked}}"  color='#a52a2a'  type='checkbox'></input>
    </div>
</template>

<script>
  export default {
     data:{
       checked:true
     }
  }
</script>
```


](#%E7%A4%BA%E4%BE%8B-2)
### 示例


修改 radio 组件的颜色


```html
<template>
    <div style="flex-direction:column;">
       <input checked="{{checked}}"  color="#399FFF"  type="radio"> </input>
    </div>
</template>

<script>
  export default {
     data:{
       checked:true
     }
  }
</script>
```

---

## label

> 原文路径：/component/table/label/

](#label)
# label


为 [input](/243cfb621699ee56fd958427779e1fcb/input.md) 组件定义标注


](#%E5%AD%90%E7%BB%84%E4%BB%B6)
### 子组件


不支持


](#%E5%B1%9E%E6%80%A7)
### 属性


支持[通用属性](/7f1027fb1f5bbd82dc6e706045e05803/common-attributes.md)


``


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| target | <string> | - | 否 | 目标 input 组件 id |


](#%E6%A0%B7%E5%BC%8F)
### 样式


支持[通用样式](../common/common-styles)


支持[text 样式](../basic/text)


](#%E4%BA%8B%E4%BB%B6)
### 事件


点击 label 组件，触发 target 绑定 id 的 checkbox 或者 radio 组件点击事件，扩大点击范围

---

## overview

> 原文路径：/component/table/overview/

](#%E6%A6%82%E8%BF%B0)
# 概述


用于收集和展示用户的信息，以便后续的处理。可通过搭配使用不同的表单组件，实现不同的业务需求，比如登录、注册和信息填写等


](#%E8%A1%A8%E5%8D%95%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D)
## 表单组件介绍


[input](https://developers-watch.vmic.xyz/component/table/input/)


| 组件 | 简述 |
| --- | --- |
| input | 提供可交互的界面，接收用户的输入，默认为单行 |
| label | 为组件定义标注 |
| picker | 滚动选择器，支持四种选择器，普通选择器，日期选择器，时间选择器，弧形选择器 |
| slider | 滑动型输入器 |
| switch | 开关选择 |
| artboard | 提供可交互的界面，接收用户的笔画输入 |

---

## picker

> 原文路径：/component/table/picker/

](#picker)
# picker


滚动选择器，支持四种选择器，普通选择器，日期选择器，时间选择器，索引栏选择器。


](#%E5%AD%90%E7%BB%84%E4%BB%B6)
### 子组件


不支持


](#%E5%B1%9E%E6%80%A7)
### 属性


支持[通用属性](/7f1027fb1f5bbd82dc6e706045e05803/common-attributes.md)


**普通选择器**


``


``


``


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| type | text | - | 是 | 不支持动态修改 |
| range | <array> | - | 否 | 选择器的取值范围 |
| selected | <string> | 0 | 否 | 选择器的默认取值，取值为 range 的索引 |
| loop | <boolean> | false | 是 | 是否开启循环模式，选项数量大于 2 时生效 |


**日期选择器**


``


``


``


``


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| type | date | - | 是 | 不支持动态修改 |
| start | <time> | 1970-1-1 | 否 | 起始时间，格式为 yyyy-MM-dd |
| end | <time> | 2100-12-31 | 否 | 结束时间，格式为 yyyy-MM-dd |
| selected | <string> | 当前时间 | 否 | 选择器的默认取值，格式为 yyyy-MM-dd |
| loop | <boolean> | false | 是 | 是否开启循环模式，选项数量大于 2 时生效 |


**时间选择器**


``


``


``


``


``````


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| type | time | - | 是 | 不支持动态修改 |
| selected | <string> | 当前时间 | 否 | 选择器的默认取值，格式为 "HH:mm:ss" |
| format | <string> | HH:mm:ss | 否 | 展示的时间格式，默认 24 小时制，12 小时制目前支持"h:mm A"，不支持"h:mm:ss A" |
| loop | <boolean> | false | 是 | 是否开启循环模式，选项数量大于 2 时生效 |
| snap-interval | <number> | 1 | 否 | 用户快速滑动分/秒选择器时，惯性滚动可能导致停止在非标值（如23秒、58秒）。通过改属性可以对齐到固定间隔（如5秒），能保证数据规则性（如计时器、运动记录等场景） |


**索引栏选择器**


``


``


``


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| type | index-bar | - | 是 | 不支持动态修改 |
| range | <array> | - | 否 | 选择器的取值范围。建议每个选项内容为 1 个字符。 |
| selected | <string> | 0 | 否 | 选择器的默认取值，取值为 range 的索引 |


](#%E6%A0%B7%E5%BC%8F)
### 样式


支持[通用样式](/765adcab7a96981138e6554a6888befc/common-styles.md)


``


``


``


``


``


``


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| font-size | <length> | 40px | 否 | 未选中项文本尺寸 |
| selected-font-size | <length> | 56px | 否 | 选中项文本尺寸 |
| color | <color> | #ffffffff | 否 | 未选中项文本颜色 |
| selected-color | <color> | #ffffffff | 否 | 选中项文本颜色 |
| selected-background-color | <color> | #ff415fff | 否 | 选中项背景颜色 |
| linecolor | <color> | - | 否 | 下划线的颜色 |


](#%E4%BA%8B%E4%BB%B6)
### 事件


不支持 click 事件，支持[通用事件](/9e6c0f774490d9ce4167d66873f59361/common-events.md)


**普通选择器**


| 名称 | 参数 | 描述 |
| --- | --- | --- |
| change | {newValue:newValue, newSelected:newSelected} | 滚动选择器选择值后触发（newSelected 为索引） |


**日期选择器**


| 名称 | 参数 | 描述 |
| --- | --- | --- |
| change | {year:year, month:month, day:day} | 滚动选择器选择值后触发 |


**时间选择器**


| 名称 | 参数 | 描述 |
| --- | --- | --- |
| change | {hour:hour, minute:minute,second:second} | 滚动选择器选择值后触发 |


**索引栏选择器**


| 名称 | 参数 | 描述 |
| --- | --- | --- |
| change | {newValue:newValue, newSelected:newSelected} | 滚动选择器选择值后触发（newSelected 为索引） |


](#%E6%96%B9%E6%B3%95)
### 方法


**索引栏选择器**


| 名称 | 参数 | 描述 |
| --- | --- | --- |
| scrollTo | { index: number } | 索引栏选择器平滑的滚动到 index 位置，index 为选项值的序号(从 0 开始)，调用后会触发 change 事件。scrollTo 和赋值属性 selected 的区别：selected 赋值是瞬间到达索引位置，scrollTo 方法是平滑的到索引位置 |

---

## slider

> 原文路径：/component/table/slider/

](#slider)
# slider


滑动型输入器


](#%E5%AD%90%E7%BB%84%E4%BB%B6)
### 子组件


不支持


](#%E5%B1%9E%E6%80%A7)
### 属性


支持[通用属性](../common/common-attributes)


``


``


``


``


``


``


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| min | <number> | 0 | 否 | - |
| max | <number> | 100 | 否 | - |
| value | <number> | 0 | 否 | - |
| type | <string> | 无 | 否 | type =vertical为垂直方向，不设置为水平 |
| show-block | <boolean> | true | 否 | 配置滑块是否展示，默认为 true 展示滑块，值为 false 隐藏滑块 |


](#%E6%A0%B7%E5%BC%8F)
### 样式


支持[通用样式](../common/common-styles)


``


``


``


``


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| color | <color> | #f0f0f0 | 否 | 背景条颜色 |
| selected-color | <color> | #009688 | 否 | 已选择颜色 |
| block-color | <color> | - | 否 | 滑块的颜色 |
| padding-[left|right] | <length> | 32px | 否 | 左右边距 |


](#%E4%BA%8B%E4%BB%B6)
### 事件


支持[通用事件](../common/common-events)


| 名称 | 参数 | 描述 |
| --- | --- | --- |
| change | {progress:progressValue, isFromUser:isFromUserValue } | 拖动过程中触发的事件isFromUser 说明:该事件是否由于用户拖动触发 |

---

## switch

> 原文路径：/component/table/switch/

](#switch)
# switch


开关选择


](#%E5%AD%90%E7%BB%84%E4%BB%B6)
### 子组件


不支持


](#%E5%B1%9E%E6%80%A7)
### 属性


支持[通用属性](../common/common-attributes)


``


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| checked | <boolean> | false | 否 | 可触发 checked 伪类 |


](#%E6%A0%B7%E5%BC%8F)
### 样式


支持[通用样式](../common/common-styles)


``
``


``
``


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| thumb-color | <color> | #009385 | 否 | 滑块颜色 |
| track-color | <color> | #009385 | 否 | 滑轨颜色 |


](#%E4%BA%8B%E4%BB%B6)
### 事件


支持[通用事件](../common/common-events)


| 名称 | 参数 | 描述 |
| --- | --- | --- |
| change | {checked:checkedValue} | checked 状态改变时触发 |

---

# 组件-通用能力

## animation-styles

> 原文路径：/component/common/animation-styles/

](#%E5%8A%A8%E7%94%BB%E6%A0%B7%E5%BC%8F)
# 动画样式


蓝河应用支持开发者制作动画，提供了`transform`类、`animation`类的动画样式属性，且参数格式与 CSS 对齐，更方便开发者上手适配动画


`transform`可参考此 [文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform) 入门


`animation`可参考此 [文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation) 入门


**动画样式列表**


``


``


``


``


``


````

``


````````


[文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-direction)


| 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| transform-origin | <position> | 0px 0px | 变换原点位置，单位目前仅支持 px，格式为：50px 100px |
| transform | <string> | - | 见下面 transform 操作 |
| animation-name | <string> | - | 与@keyframes 的 name 相呼应，见下面@keyframes 属性 |
| animation-delay | <time> | 0 | 目前支持的单位为[ s(秒) | ms(毫秒) ] |
| animation-duration | <time> | 0 | 目前支持的单位为[ s(秒) | ms(毫秒) ] |
| animation-iteration-count | <integer>|infinite | 1 | 定义动画播放的次数，可设置为infinite无限次播放 |
| animation-timing-function | linear | ease | ease-in | ease-out | ease-in-out | cubic-bezier(<number>,<number>,<number>,<number>) | step-start | step-end | steps(number_of_steps[, step-direction]?) | ease | 规定动画的速度曲线 |
| animation-fill-mode | none | forwards | none | 规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式 |
| animation-direction | normal | reverse | alternate | alternate-reverse | normal | 定义动画播放的方向，详情请看 |


**注**：


- animation-timing-function 类型

cubic-bezier(`<number>`, `<number>`, `<number>`, `<number>`) | step-start | step-end | steps(number_of_steps[, step-direction]?) 后支持 。其中：


steps(number_of_steps，step-direction)


``


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| number_of_steps | <integer> | - | 是 | 表示等间隔步数的正整数 |
| step-direction | jump-start | jump-end | jump-none | jump-both | start | end | end | 否 | 指示函数左连续或右连续的关键字 |


- cubic-bezier(x1, y1, x2, y2)

参数 x1, y1, x2, y2 是 `<number>` 类型的值，代表当前定义的立方贝塞尔曲线中的 P1 和 P2 点的横坐标和纵坐标，x1 和 x2 必须在 [0，1] 范围内，否则当前值无效。


](#transform)
## transform


````


````


````


``


``


``


``


| 名称 | 类型 |
| --- | --- |
| translate | <length>|<percent> |
| translateX | <length>|<percent> |
| translateY | <length>|<percent> |
| scale | <number> |
| scaleX | <number> |
| scaleY | <number> |
| rotate | <deg> |


](#animation-fill-mode)
## animation-fill-mode


animation-fill-mode 属性规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式。


默认情况下，CSS 动画在第一个关键帧播放完之前不会影响元素，在最后一个关键帧完成后停止影响元素。animation-fill-mode 属性可重写该行为。


``


``


| 值 | 描述 |
| --- | --- |
| none | 默认值。动画在动画执行之前和之后不会应用任何样式到目标元素。 |
| forwards | 在动画结束后（由 animation-iteration-count 决定），动画将应用该属性值。 |
| backwards暂不支持 | 动画将应用在 animation-delay 定义期间启动动画的第一次迭代的关键帧中定义的属性值。 |
| both暂不支持 | 动画遵循 forwards 和 backwards 的规则。 |


](#animation-name)
## animation-name


指定所采用的一系列动画，属性值的每个名称代表一个由 @keyframes 属性定义的关键帧序列。该属性支持在组件中应用单个动画或多个动画 ，应用多个动画时动画同时开始执行。


示例代码：


```css
/* 单个动画 */
animation-name: Color;
animation-name: translate;
animation-name: rotate;

/* 多个动画 */
animation-name: Color, Opacity;
animation-name: Width, translate, rotate;
```


](#keyframes)
## @keyframes


``


``


``


``


| 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| background-color | <color> | - | - |
| opacity | <number> | - | - |
| width/height | <length> | - | 暂不支持百分比 |
| transform | <string> | - | - |


**注**：


暂时不支持起始值(0%)或终止值(100%)缺省的情况，都需显式指定。

---

## color

> 原文路径：/component/common/color/

](#%E9%A2%9C%E8%89%B2%E6%A0%B7%E5%BC%8F)
# 颜色样式


蓝河应用支持[颜色值类型](/component/common/common-styles)


开发者可参考 [MDN 文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value) 了解更多颜色值的入门知识


](#%E9%A2%9C%E8%89%B2%E5%80%BC%E6%A0%BC%E5%BC%8F%E7%A4%BA%E4%BE%8B)
## 颜色值格式示例


- `'#f0f'` (#rgb)

- `'#ff00ff'` (#rrggbb)

- `'#ff00ff13'` (#rrggbbaa)

- `rgb(255, 0, 255)`

- `rgba(255, 255, 255, 1.0)`

- `black,white`

---

## common-attributes

> 原文路径：/component/common/common-attributes/

](#%E9%80%9A%E7%94%A8%E5%B1%9E%E6%80%A7)
# 通用属性


通用属性，即所有组件都支持的属性。


开发者可以在所有的组件标签上都使用`通用属性`


](#%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81)
## 示例代码


```html
<template>
  <div>
    <text id="text1" class="text-normal">line 1</text>
    <text id="text2" class="text-normal red">line 2</text>
  </div>
</template>
```


](#%E5%B8%B8%E8%A7%84%E5%B1%9E%E6%80%A7)
## 常规属性


``


``


``


``


| 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| id | <string> | - | 唯一标识 |
| style | <string> | - | 样式声明 |
| class | <string> | - | 引用样式表 |
| disabled | <boolean> | false | 表明当前组件是否可用 |


](#%E6%B8%B2%E6%9F%93%E5%B1%9E%E6%80%A7)
## 渲染属性


``


``


``


| 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| for | <array> | - | 根据数据列表，循环展开当前标签 |
| if | <boolean> | - | 根据数据 boolean 值，添加或移除当前标签 |
| show | <boolean> | - | 根据数据 boolean 值，显示或隐藏当前标签，相当于控制{ display: flex | none } |


渲染属性工作方式详见[ux 文件](/reference/configuration/ux-file)


注意：属性和样式不能混用，不能在属性字段中进行样式设置

---

## common-events

> 原文路径：/component/common/common-events/

](#%E9%80%9A%E7%94%A8%E4%BA%8B%E4%BB%B6)
# 通用事件


通用事件指所有组件均支持的事件回调。


开发者可以在组件标签上通过 `on{eventName}`（如 `onclick`）或 `@{eventName}`（如 `@click`）的形式注册事件处理函数。 两种写法的效果一致，其中 `@event` 是语法糖，更适用于框架风格的开发方式。


有关事件绑定的更多说明，请参考 [事件绑定](/reference/app-service/event-on) 文档。


](#%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81)
## 示例代码


```html
<template>
  <div>
    <text onclick="clickFunction1">line 1</text>
    <text @click="clickFunction2">line 2</text>
  </div>
</template>
```


注：请确保 `clickFunction1` 和 `clickFunction2` 在组件的逻辑代码中有相应定义。


](#%E9%80%9A%E7%94%A8%E4%BA%8B%E4%BB%B6-1)
## 通用事件


[TouchEvent](#touchevent)


[TouchEvent](#touchevent)


[TouchEvent](#touchevent)


[TouchEvent](#touchevent)


[MouseEvent](#mouseevent)


[MouseEvent](#mouseevent)


| 名称 | 参数 | 描述 | 冒泡 |
| --- | --- | --- | --- |
| touchstart |  | 手指刚触摸组件时触发 | 支持 |
| touchmove |  | 手指触摸后移动时触发 | 支持 |
| touchend |  | 手指触摸动作结束时触发 | 支持 |
| touchcancel |  | 触摸操作被系统中断时触发，如来电、弹窗等 | 支持 |
| click |  | 用户点击组件时触发 | 支持 |
| longpress |  | 用户长按组件时触发 | 支持 |


](#%E4%BA%8B%E4%BB%B6%E5%AF%B9%E8%B1%A1)
## 事件对象


](#touchevent)
### TouchEvent


[Touch](#touch)


| 属性 | 类型 | 说明 |
| --- | --- | --- |
| type | string | 事件名称，如 touchstart、touchmove、click 等 |
| touches | [] | 当前停留在屏幕中的触摸点信息的数组 |


](#touch)
### Touch


| 属性 | 类型 | 说明 |
| --- | --- | --- |
| clientX | number | 距离可见区域左边沿的 X 轴坐标，不包含任何滚动偏移。 |
| clientY | number | 距离可见区域上边沿的 Y 轴坐标，不包含任何滚动偏移以及状态栏和 titlebar 的高度。 |
| pageX | number | 距离可见区域左边沿的 X 轴坐标，包含任何滚动偏移。 |
| pageY | number | 距离可见区域上边沿的 Y 轴坐标，包含任何滚动偏移。（不包含状态栏和 titlebar 的高度） |
| offsetX | number | 距离事件触发对象左边沿 X 轴的距离 |
| offsetY | number | 距离事件触发对象上边沿 Y 轴的距离 |


](#mouseevent)
### MouseEvent


与 TouchEvent 中属性相同，表示鼠标事件相关的坐标信息。


| 属性 | 类型 | 说明 |
| --- | --- | --- |
| clientX | number | 距离可见区域左边沿的 X 轴坐标，不包含任何滚动偏移。 |
| clientY | number | 距离可见区域上边沿的 Y 轴坐标，不包含任何滚动偏移以及状态栏和 titlebar 的高度。 |
| pageX | number | 距离可见区域左边沿的 X 轴坐标，包含任何滚动偏移。 |
| pageY | number | 距离可见区域上边沿的 Y 轴坐标，包含任何滚动偏移。（不包含状态栏和 titlebar 的高度） |
| offsetX | number | 距离事件触发对象左边沿 X 轴的距离 |
| offsetY | number | 距离事件触发对象上边沿 Y 轴的距离 |


](#%E5%AE%9E%E6%88%98%E7%A4%BA%E4%BE%8B)
## 实战示例


如下示例在一个 `div` 元素上绑定了 `click` 和 `touchmove` 事件，触发时打印事件信息：


```html
<script>
  export default {
    data: {},
    click(event) {
      console.log('click event fired')
    },
    move(event) {
      console.log('move event touches:' + JSON.stringify(event.touches))
    },
  }
</script>

<template>
  <div class="w-full h-full flex justify-center items-center bg-white">
    <div
      class="w-4/5 h-1/5 bg-gray-700"
      onclick="click"
      ontouchmove="move"></div>
  </div>
</template>

<style>
@tailwind utilities;
</style>
```


**打印结果如下，click 事件：**


```javascript
move event touches:[
  {
    "offsetX": 296,
    "identifier": 0,
    "offsetY": 113.48148345947266,
    "clientY": 113.48148345947266,
    "clientX": 360,
    "pageY": 113.48148345947266,
    "pageX": 360
  }
]
```


```text
click event fired
```

---

## common-methods

> 原文路径：/component/common/common-methods/

](#%E9%80%9A%E7%94%A8%E6%96%B9%E6%B3%95)
# 通用方法


通用方法，提供给所有组件调用的方法


在组件使用`id`标记 id 属性后，开发者可通过`this.$element('idName')`获取 dom 节点，再调用以下列举的`通用方法`


`id`属性赋值可以查看此[文档](/component/common/common-attributes/#%E5%B8%B8%E8%A7%84%E5%B1%9E%E6%80%A7)入门


`this.$element`可以查看此[文档](/reference/configuration/script/#%E5%85%AC%E5%85%B1%E6%96%B9%E6%B3%95)入门


](#getboundingclientrectobject-object)
## getBoundingClientRect(Object object)


返回元素的大小及其相对于视窗的位置


](#%E5%8F%82%E6%95%B0)
### 参数


Object object


| 属性 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| success | function |  | 否 | 接口调用成功的回调函数 |
| fail | function |  | 否 | 接口调用失败的回调函数 |


](#objectsuccess-%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0)
#### object.success 回调函数


](#%E5%8F%82%E6%95%B0-1)
##### 参数


Object rect


| 属性 | 类型 | 描述 |
| --- | --- | --- |
| left | number | 元素的左边界坐标 |
| right | number | 元素的右边界坐标 |
| top | number | 元素的上边界坐标 |
| bottom | number | 元素的下边界坐标 |
| width | number | 元素的宽度 |
| height | number | 元素的高度 |


](#%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81)
### 示例代码


```html
<template>
  <div>
    <div id="box1" class="box-normal"></div>
    <div id="box2" class="box-normal"></div>
  </div>
</template>
<script>
  export default {
    onShow() {
      this.$element('box1').getBoundingClientRect({
        success: function (data) {
          const { top, bottom, left, right, width, height } = data
          prompt.showToast({
            message: `getBoundingClientRect结果： width:${width}, height:${height},
                         top:${top}, bottom:${bottom}, left:${left}, right:${right}`,
          })
        },
        fail: (errorData, errorCode) => {
          prompt.showToast({
            message: `错误原因：${JSON.stringify(errorData)}, 错误代码：${errorCode}`,
          })
        },
        complete: function () {
          console.info('complete')
        },
      })
    },
  }
</script>
```

---

## common-styles

> 原文路径：/component/common/common-styles/

](#%E9%80%9A%E7%94%A8%E6%A0%B7%E5%BC%8F)
# 通用样式


通用样式，即所有组件都可以支持的样式


它们均与 css 的属性样式用法保持一致，开发者可写在`内联样式`或`<style>`标签里，实现组件样式的定制化


关于组件样式的设置，可以参考此[文档](/reference/configuration/style-sheet)入门


](#%E7%B1%BB%E5%9E%8B%E8%AF%B4%E6%98%8E)
## 类型说明


](#%E9%95%BF%E5%BA%A6%E7%B1%BB%E5%9E%8B)
### 长度类型


| 名称 | 类型定义 | 描述 |
| --- | --- | --- |
| length | String |Number | 用于描述尺寸单位，输入为 number 类型时，使用 px 单位；输入为 string 类型时，需要显式指定像素单位，当前支持的像素单位有： px：逻辑尺寸单位。 |
| percentage | String | 百分比尺寸单位，如“50%”。 |


](#%E9%A2%9C%E8%89%B2%E7%B1%BB%E5%9E%8B)
### 颜色类型


[颜色枚举字符串](#TypeColor)


| 名称 | 类型定义 | 描述 |
| --- | --- | --- |
| color | String | | 用于描述颜色信息。字符串格式如下：'rgb(255, 255, 255)''rgba(255, 255, 255, 1.0)'HEX 格式：'#rrggbb'，'#aarrggbb'枚举格式：'black'，'white'。 |


](#a-idtypecolor%E5%BD%93%E5%89%8D%E6%94%AF%E6%8C%81%E7%9A%84%E9%A2%9C%E8%89%B2%E6%9E%9A%E4%B8%BEa)[当前支持的颜色枚举


| 枚举名称 | 对应颜色 | 颜色 |
| --- | --- | --- |
| aliceblue | #f0f8ff |  |
| antiquewhite | #faebd7 |  |
| aqua | #00ffff |  |
| aquamarine | #7fffd4 |  |
| azure | #f0ffff |  |
| beige | #f5f5dc |  |
| bisque | #ffe4c4 |  |
| black | #000000 |  |
| blanchedalmond | #ffebcd |  |
| blue | #0000ff |  |
| blueviolet | #8a2be2 |  |
| brown | #a52a2a |  |
| burlywood | #deB887 |  |
| cadetblue | #5f9ea0 |  |
| chartreuse | #7fff00 |  |
| chocolate | #d2691e |  |
| coral | #ff7f50 |  |
| cornflowerblue | #6495ed |  |
| cornsilk | #fff8dc |  |
| crimson | #dc143c |  |
| cyan | #00ffff |  |
| darkblue | #00008b |  |
| darkcyan | #008b8b |  |
| darkgoldenrod | #b8860b |  |
| darkgray | #a9a9a9 |  |
| darkgreen | #006400 |  |
| darkgrey | #a9a9a9 |  |
| darkkhaki | #bdb76b |  |
| darkmagenta | #8b008b |  |
| darkolivegreen | #556b2f |  |
| darkorange | #ff8c00 |  |
| darkorchid | #9932cc |  |
| darkred | #8b0000 |  |
| darksalmon | #e9967a |  |
| darkseagreen | #8fbc8f |  |
| darkslateblue | #483d8b |  |
| darkslategray | #2f4f4f |  |
| darkslategrey | #2f4f4f |  |
| darkturquoise | #00ced1 |  |
| darkviolet | #9400d3 |  |
| deeppink | #ff1493 |  |
| deepskyblue | #00bfff |  |
| dimgray | #696969 |  |
| dimgrey | #696969 |  |
| dodgerblue | #1e90ff |  |
| firebrick | #b22222 |  |
| floralwhite | #fffaf0 |  |
| forestgreen | #228b22 |  |
| fuchsia | #ff00ff |  |
| gainsboro | #dcdcdc |  |
| ghostwhite | #f8f8ff |  |
| gold | #ffd700 |  |
| goldenrod | #daa520 |  |
| gray | #808080 |  |
| green | #008000 |  |
| greenyellow | #adff2f |  |
| grey | #808080 |  |
| honeydew | #f0fff0 |  |
| hotpink | #ff69b4 |  |
| indianred | #cd5c5c |  |
| indigo | #4b0082 |  |
| ivory | #fffff0 |  |
| khaki | #f0e68c |  |
| lavender | #e6e6fa |  |
| lavenderblush | #fff0f5 |  |
| lawngreen | #7cfc00 |  |
| lemonchiffon | #fffacd |  |
| lightblue | #add8e6 |  |
| lightcoral | #f08080 |  |
| lightcyan | #e0ffff |  |
| lightgoldenrodyellow | #fafad2 |  |
| lightgray | #d3d3d3 |  |
| lightgreen | #90ee90 |  |
| lightpink | #ffb6c1 |  |
| lightsalmon | #ffa07a |  |
| lightseagreen | #20b2aa |  |
| lightskyblue | #87cefa |  |
| lightslategray | #778899 |  |
| lightslategrey | #778899 |  |
| lightsteelblue | #b0c4de |  |
| lightyellow | #ffffe0 |  |
| lime | #00ff00 |  |
| limegreen | #32cd32 |  |
| linen | #faf0e6 |  |
| magenta | #ff00ff |  |
| maroon | #800000 |  |
| mediumaquamarine | #66cdaa |  |
| mediumblue | #0000cd |  |
| mediumorchid | #ba55d3 |  |
| mediumpurple | #9370db |  |
| mediumseagreen | #3cb371 |  |
| mediumslateblue | #7b68ee |  |
| mediumspringgreen | #00fa9a |  |
| mediumturquoise | #48d1cc |  |
| mediumvioletred | #c71585 |  |
| midnightblue | #191970 |  |
| mintcream | #f5fffa |  |
| mistyrose | #ffe4e1 |  |
| moccasin | #ffe4b5 |  |
| navajowhite | #ffdead |  |
| navy | #000080 |  |
| oldlace | #fdf5e6 |  |
| olive | #808000 |  |
| olivedrab | #6b8e23 |  |
| orange | #6b8e23 |  |
| orchid | #da70d6 |  |
| palegoldenrod | #eee8aa |  |
| palegreen | #98fb98 |  |
| paleturquoise | #afeeee |  |
| palevioletred | #db7093 |  |
| papayawhip | #ffefd5 |  |
| peachpuff | #ffdab9 |  |
| peru | #cd853f |  |
| pink | #ffc0cb |  |
| plum | #dda0dd |  |
| powderblue | #b0e0e6 |  |
| purple | #800080 |  |
| rebeccapurple | #663399 |  |
| red | #ff0000 |  |
| rosybrown | #bc8f8f |  |
| royalblue | #4169e1 |  |
| saddlebrown | #8b4513 |  |
| salmon | #fa8072 |  |
| sandybrown | #f4a460 |  |
| seagreen | #2e8b57 |  |
| seashell | #fff5ee |  |
| sienna | #a0522d |  |
| silver | #c0c0c0 |  |
| skyblue | #87ceeb |  |
| slateblue | #6a5acd |  |
| slategray | #708090 |  |
| slategrey | #708090 |  |
| snow | #fffafa |  |
| springgreen | #00ff7f |  |
| steelblue | #4682b4 |  |
| tan | #d2b48c |  |
| teal | #008080 |  |
| thistle | #d8Bfd8 |  |
| tomato | #ff6347 |  |
| turquoise | #40e0d0 |  |
| violet | #ee82ee |  |
| wheat | #f5deb3 |  |
| white | #ffffff |  |
| whitesmoke | #f5f5f5 |  |
| yellow | #ffff00 |  |
| yellowgreen | #9acd32 |  |


](#%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81)
## 示例代码


```html
<template>
  <div>
    <div class="box-normal" style="background-color: #f00"></div>
    <div class="box-normal"></div>
  </div>
</template>
<style>
  .box-normal {
    background-color: #ff0;
    width: 100px;
    height: 100px;
  }
</style>
```


](#%E5%B1%9E%E6%80%A7%E5%88%97%E8%A1%A8)
## 属性列表


**注**：


通用样式均为非必填项。


````


````


``

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding)


``


``

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin)


``


``

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-width)


``


``

[颜色配置](/component/common/color)


``

[颜色配置](/component/common/color)


````


````


``


``

[颜色配置](/component/common/color)


``

[颜色配置](/component/common/color)


``


````


````


``


````


``


``

````


| 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| width | <length>|<percentage> | - | 未设置时使用组件自身内容需要的宽度 |
| height | <length>|<percentage> | - | 未设置时使用组件自身内容需要的高度 |
| padding | <length> | 0 | 简写属性，在一个声明中设置所有的内边距属性，该属性可以有 1 到 4 个值，具体请参考文档 |
| padding-[left|top|right|bottom] | <length> | 0 | 设置一个元素的某个方向的内边距，padding 区域指一个元素的内容和其边界之间的空间，该属性不能为负值。 |
| margin | <length> | 0 | 简写属性，在一个声明中设置所有的外边距属性，该属性可以有 1 到 4 个值，具体请参考文档 |
| margin-[left|top|right|bottom] | <length> | 0 | 设置一个元素的某个方向的外边距，该属性不能为负值 |
| border | - | 0 | 简写属性，在一个声明中设置所有的边框属性，可以按顺序设置属性 width style color，不设置的值为默认值 |
| border-[left|top|right|bottom] | - | 0 | 简写属性，在一个声明中设置对应位置的所有边框属性，可以按顺序设置属性 width style color，不设置的值为默认值 |
| border-style | solid | solid | 暂时仅支持 1 个值，为元素的所有边框设置样式 |
| border-width | <length> | 0 | 简写属性，在一个声明中设置元素的所有边框宽度，或者单独为各边边框设置宽度，具体请参考文档 |
| border-[left|top|right|bottom]-width | <length> | 0 | 为元素的某个方向的边框设置边框宽度 |
| border-color | <color> | black | 简写属性，在一个声明中设置元素的所有边框颜色，或者单独为各边边框设置颜色，颜色值的填入请参考 |
| border-[left|top|right|bottom]-color | <color> | black | 颜色值的填入请参考 |
| border-radius | <length>|<percentage> | 0 | border-radius 属性允许你设置元素的外边框圆角。设置时需要同时设置 border-width、border-color，单独设置 border-[left|top|right|bottom]-width，border-[left|top|right|bottom]-color 时 border-radius 无效 |
| border-[top|bottom]-[left|right]-radius | <length>|<percentage> | 0 | 设置四个角的圆角弧度 |
| background | <linear-gradient> | - | 暂时不能与 background-color、background-image 同时使用 |
| background-color | <color> | - | 颜色值的填入请参考 |
| color | <color> | - | 颜色值的填入请参考 |
| background-image | <uri> | - | 暂时不支持与 background-color，border-color 同时使用；支持本地图片资源；暂不支持网络图片资源 |
| background-size | contain | cover | auto |<length>|<percentage> | auto auto | 设置背景图片大小 |
| background-repeat | repeat-x | repeat-y | no-repeat | repeat | repeat | 设置是否及如何重复绘制背景图像 |
| background-position | <length>|<percentage>| left | right | top | bottom | center | 0px 0px | 描述了背景图片在容器中绘制的位置，支持 1-4 个参数 |
| opacity | <number> | 1 | opacity 属性指定了一个元素的透明度。 |
| display | flex | none | flex | 蓝河应用只支持 flex 布局；将当前元素的 display 设置为 none 蓝河应用页面将不渲染此元素 |
| visibility | visible | hidden | visible | visibility 属性控制显示或隐藏元素而不更改文档的布局 |
| flex-direction | column | row | column-reverse | row-reverse | row | 默认为横向row，父容器为<div>、<list-item>时生效 |
| align-items | stretch | flex-start | flex-end | center | flex-start | align-items 定义了伸缩项目可以在伸缩容器的当前行的侧轴上对齐方式。flex-start(默认值)：伸缩项目在侧轴起点边的外边距紧靠住该行在侧轴起始的边。flex-end：伸缩项目在侧轴终点边的外边距靠住该行在侧轴终点的边 。center：伸缩项目的外边距盒在该行的侧轴上居中放置。stretch：伸缩项目拉伸填充整个伸缩容器。 |
| justify-content | flex-start | flex-end | center | space-between | space-around | flex-start | justify-content 定义了伸缩项目沿着主轴线的对齐方式。flex-start(默认值)：伸缩项目向一行的起始位置靠齐。flex-end：伸缩项目向一行的结束位置靠齐。center：伸缩项目向一行的中间位置靠齐。space-between：伸缩项目会平均地分布在行里。第一个伸缩项目一行中的最开始位置，最后一个伸缩项目在一行中最终点位置。space-around：伸缩项目会平均地分布在行里，两端保留一半的空间。 |
| position | fixed | absolute | relative | relative | 父容器为<list>、<swiper>时不生效，scroll 不支持 。 |
| [left|top|right|bottom] | <length> | - | 一般配合fixed或absolute布局使用 |


**注意**：


flex 布局仅支持上面列出的样式，w3c 中的其他标准切勿使，如 `flex: 1;`，否则将会产生无法预知的布局问题。

---

## component-animation

> 原文路径：/component/common/component-animation/

](#%E7%BB%84%E4%BB%B6%E5%8A%A8%E7%94%BB)
# 组件动画


除了提供常规的 CSS 样式动画，蓝河应用还具备 JS 组件动画的方法。相比于 CSS 样式动画，这种动画方式拥有更为灵活、个性化的逻辑控制能力。


](#elementanimate)
## Element.animate()


创建一个 `Animation` 对象实例；调用其 `play` 方法，即可执行动画，表现为一系列变换 （位置、大小、旋转角度、背景颜色和不透明度）。


](#%E8%AF%AD%E6%B3%95)
### 语法


```ts
const element = this.$element('elementIdName')
const animation = element.animate(keyframes, options)
animation.play()
```


](#%E5%8F%82%E6%95%B0)
### 参数


](#keyframes-%E5%85%B3%E9%94%AE%E5%B8%A7)
#### keyframes 关键帧


关键帧：动画序列中定义关键帧的样式来控制 CSS 动画序列中的中间步骤。


代表关键帧的一个数组集合，支持的属性有：


| 名称 | 类型 | 必填 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| time | number | 是 | - | 表示在哪个阶段触发这个帧所包含的样式，0 表示开始时刻，100 表示结束时刻。 |
| width | number | 否 | - | 组件宽度 |
| height | number | 否 | - | 组件高度 |
| left/right/top/bottom | number | 否 | - | 组件定位值，当组件设置了 position 样式时生效，left 优先于 right，top 优先于 bottom |
| opacity | number | 否 | 1 | 组件不透明度 |
| transform | object | 否 | - | 变换类型，支持下表列出的属性。 |
| transformOrigin | string | 否 | '50% 50%' | 变化中心点和 transform 搭配使用，第一个参数代表 x 轴位置，第二个参数代表 y 轴位置，单位 px 或百分比值；如："0 0"或者"10px 10px"或者"30% 50%" |


如上 `transform` 参数说明如下：


``````


````````


``


| 参数名 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| translate/translateX/translateY | string | - | 指定元素要移动到的位置，例如:translate: 10px 10px,translateX: 10px,translateY: 10px |
| scale/scaleX/scaleY | number | - | 按比例放大或缩小元素，例如：scale: 1.5,scale: 1.5 2,scaleX: 2,scaleY: 2 |
| rotate | string | - | 指定元素将被旋转的角度，例如：rotate: 45deg |


**示例 1：中心旋转**


```js
[
  {
    time: 0,
    transform: {
      rotate: '0deg',
    },
  },
  {
    time: 100,
    transform: {
      rotate: '360deg',
    },
  },
]
```


**示例 2：左上角为中心旋转**


```js
[
  {
    time: 0,
    transform: {
      rotate: '0deg',
    },
    transformOrigin: '0px 0px',
  },
  {
    time: 100,
    transform: {
      rotate: '360deg',
    },
    transformOrigin: '0px 0px',
  },
]
```


](#options-%E5%8F%AF%E9%80%89%E9%A1%B9)
#### options 可选项


``


``


``


``


| 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| id | <string> | 从'0'开始自减的 string | 动画 id。为减小内存消耗，请开发者尽可能使用该字段复用动画。注：1. 复用动画后，被复用的前一个动画的 onfinish 等实例事件将被清除，不被触发； 2. 请勿使用从'0'开始自减的 string 作为 id，以免与引擎内部 id 重复。 |
| delay | <number> | 0 | 延迟动画开始的毫秒数。 |
| fill | "forwards" | "none" | "none" | 在动画完成播放（"forwards"）之后保留，"none" 动画执行前后不会应用任何样式到目标元素 |
| duration | <number> | 0 | 每次迭代动画完成所需的毫秒数。如果此值为 0，则不会运行动画。 |
| easing | linear | ease | ease-in | ease-out | ease-in-out | 自定义 cubic-bezier，例如cubic-bezier(0.42, 0, 0.58, 1) | linear | 动画的变化率，随着时间的推移而变化。 |


](#%E5%AE%9E%E4%BE%8B%E6%96%B9%E6%B3%95)
### 实例方法


| 方法 | 参数 | 描述 |
| --- | --- | --- |
| play | - | 开始执行动画 |
| finish | - | 结束动画 |
| pause | - | 暂停动画 |
| cancel | - | 取消动画 |
| reverse | - | 反转动画执行方向 |


](#%E5%AE%9E%E4%BE%8B%E4%BA%8B%E4%BB%B6)
### 实例事件


| 事件 | 描述 | 示例 |
| --- | --- | --- |
| cancel | 动画被取消 | animation.oncancel = () => { //do something } |
| finish | 动画执行结束 | animation.onfinish = () => { //do something } |


](#%E7%A4%BA%E4%BE%8B-demo)
### 示例 Demo


```html
<script>
  const keyframes1 = [
    {
      time: 0,
      width: 100,
      opacity: 1,
      transform: {
        translateY: '0',
      },
    },
    {
      time: 50,
      width: 300,
      opacity: 0.5,
      transform: {
        translateY: '-150',
      },
    },
    {
      time: 100,
      width: 100,
      opacity: 1,
      transform: {
        translateY: '0',
      },
    },
  ]

  const keyframes2 = [
    {
      time: 0,
      transform: {
        rotate: '0deg',
      },
    },
    {
      time: 100,
      transform: {
        rotate: '360deg',
      },
    },
  ]

  const keyframes3 = [
    {
      time: 0,
      transform: {
        rotate: '0deg',
      },
      transformOrigin: '0px 0px',
    },
    {
      time: 100,
      transform: {
        rotate: '360deg',
      },
      transformOrigin: '0px 0px',
    },
  ]

  const options = {
    duration: 1500,
    easing: 'cubic-bezier(0.140, 0.640, 0.710, 0.240)',
    delay: 0,
  }
  export default {
    animate1() {
      const element = this.$element('animate')
      const animation = element.animate(keyframes1, options)
      animation.play()
    },
    animate2() {
      const element = this.$element('animate')
      const animation = element.animate(keyframes2, options)
      animation.play()
    },
    animate3() {
      const element = this.$element('animate')
      const animation = element.animate(keyframes3, options)
      animation.onfinish = () => {
        console.log('onfinish')
      }
      animation.play()
    },
  }
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <div class="w-[100px] h-[100px] bg-[#ff0000]" id="animate"></div>
    <input class="w-[450px] h-[80px] rounded-[40px] bg-[#09ba07] text-white text-[30px] mt-[80px]" type="button" value="跳跃" onclick="animate1" />
    <input class="w-[450px] h-[80px] rounded-[40px] bg-[#09ba07] text-white text-[30px] mt-[80px]" type="button" value="旋转(默认中心点)" onclick="animate2" />
    <input class="w-[450px] h-[80px] rounded-[40px] bg-[#09ba07] text-white text-[30px] mt-[80px]" type="button" value="旋转(变换中心点)" onclick="animate3" />
  </div>
</template>

<style>
  @tailwind utilities;
</style>
```

---

## font-face-style

> 原文路径：/component/common/font-face-style/

](#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AD%97%E4%BD%93%E6%A0%B7%E5%BC%8F)
# 自定义字体样式


font-face 用于定义字体样式。当需要为文本组件设置自定义字体时，可以在 style 中定义 font-face 作为自定义字体，然后在 font-family 中可以引用该字体。


自定义字体可以是从项目中的字体文件或网络字体文件中加载的字体。


注： 只支持 ttf 和 otf 格式的字体。


](#%E5%AE%9A%E4%B9%89-font-face)
## 定义 font-face


```css
@font-face {
  font-family: myfont;
  src: url('http://www.example.com/myfont.ttf');
}
```


](#font-family)
### font-family


自定义字体的名称。


](#src)
### src


自定义字体的来源。


目前支持的字体来源有 3 种：


- 项目中的字体文件: 通过 url 指定项目中的字体文件路径(只支持绝对路径)

- 网络字体文件：通过 url 指定网络字体的地址

- 系统字体：通过 local 指定系统字体名称

](#%E4%BD%BF%E7%94%A8-font-face)
## 使用 font-face


在 style 中定义了 font-face 后，我们可以在文本组件的 font-family 样式中指定 font-face 的名称，该组件即可应用 font-face 定义的字体。 font-face 中暂不支持设置多个 src 。


](#%E7%A4%BA%E4%BE%8B)
#### 示例


```html
<template>
  <!-- template里只能有一个根节点 -->
  <div class="demo-page">
    <text class="font">测试自定义字体 test custom font</text>
  </div>
</template>

<style>
  @font-face {
    font-family: myfont;
    src: url('http://www.example.com/myfont.ttf');
  }
  .demo-page {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .font {
    font-family: myfont, serif;
  }
</style>
```


](#%E5%9B%BE%E6%A0%87%E5%AD%97%E4%BD%93-icon-font)
## 图标字体 icon-font


将图标制作成字体文件，保存到项目文件中（如:src/Common/iconfont.ttf），在 style 中定义一个 font-face ，然后在需要使用图标字体的地方使用该 font-face 作为组件的字体，组件的内容为字体文件中我们需要使用的图标的字符。


```html
<template>
  <!-- template里只能有一个根节点 -->
  <div class="demo-page">
    <text>测试text中嵌套iconfont<span class="icon-font-span">&#xe822;</span>test icon font</text>
  </div>
</template>

<style>
  @font-face {
    font-family: iconfont;
    src: url('/Common/iconfont.ttf');
  }
  .demo-page {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .icon-font-span {
    font-family: iconfont;
    font-size: 40px;
    color: #ff0000;
  }
</style>
```

---

## gradient-styles

> 原文路径：/component/common/gradient-styles/

](#%E6%B8%90%E5%8F%98%E6%A0%B7%E5%BC%8F)
# 渐变样式


渐变 (gradients) 可以在两个或多个指定的颜色之间显示平稳的过渡，用法与 CSS 渐变一致。


当前框架支持以下渐变效果：


- 线性渐变 (linear-gradient)

- 重复线性渐变 (repeating-linear-gradient)

](#%E7%BA%BF%E6%80%A7%E6%B8%90%E5%8F%98--%E9%87%8D%E5%A4%8D%E7%BA%BF%E6%80%A7%E6%B8%90%E5%8F%98)
## 线性渐变 / 重复线性渐变


创建一个线性渐变，需要定义两类数据：1) 过渡方向；2) 过渡颜色，因此需要指定至少两种颜色。


- 过渡方向：通过`direction`或者`angle`两种形式指定

- 过渡颜色：支持方式：`#FF0000`、`#F00`


- direction: 方向渐变


```css
background: linear-gradient(direction, color-stop1, color-stop2, ...);
background: repeating-linear-gradient(direction, color-stop1, color-stop2, ...);
```


](#%E5%8F%82%E6%95%B0)
### 参数


````
``````````
``

``


``````


````


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| direction | to<side-or-corner><side-or-corner>= [left|right] || [top|bottom] | to bottom(从上到下渐变) | 否 | 例如：to right(从左向右渐变) |
|  |  |  |  |  |
| color-stop | <color>[<length>|<percentage>] |  | 是 | 从起点到stop的区域显示的背景色为color |


](#%E7%A4%BA%E4%BE%8B)
### 示例


```css
#gradient {
  height: 100px;
  width: 200px;
}
```


```css
/* 从顶部开始渐变。起点是红色，慢慢过渡到蓝色 */
background: linear-gradient(#f00, #00f);
```


![gradientTop](/7a6a6ec851205bddd62ad5ffc091a61b/gradientTop.png)


```css
/* 从左向右渐变，在距离左边90px和距离左边120px (200*0.6) 之间30px宽度形成渐变*/
background: linear-gradient(to right, #f00 90px, #00f 60%);
```


![gradientTop](/c3840778f9e5ffc721b716b3cd892885/gradientThree.png)

---

## rule

> 原文路径：/component/common/rule/

](#%E6%A6%82%E8%BF%B0)
# 概述


UI 组件是编写整个界面的基础。蓝河系统的组件拥有多项核心能力，包括属性、样式、事件和方法，同时还支持表冠旋转相关的事件处理和复杂动画，让您的界面更加生动有趣。


](#%E9%80%9A%E7%94%A8%E8%83%BD%E5%8A%9B%E4%BB%8B%E7%BB%8D)
## 通用能力介绍


| 能力 | 简述 |
| --- | --- |
| 通用事件 | 即所有组件都支持的事件回调 |
| 通用属性 | 即所有组件都支持的属性。开发者可以在所有的组件标签上都使用通用属性 |
| 通用样式 | 即所有组件都可以支持的样式，它们均与 css 的属性样式用法保持一致 |
| 通用方法 | 提供给所有组件调用的方法 |
| UI 组件支持的表冠旋转 | 提供支持表冠旋转的 UI 组件与对应属性 |
| 颜色样式 | 支持颜色值类型 |
| 动画样式 | 支持开发者制作动画，提供了 transform 类、animation 类的动画样式属性，且参数格式与 CSS 对齐 |
| 渐变样式 | 渐变 (gradients) 可以在两个或多个指定的颜色之间显示平稳的过渡，用法与 CSS 渐变一致 |
| 组件动画 | 提供一个新的执行动画的便捷方法，创建一个 Animation 对象实例 |

---

## ui-rotation

> 原文路径：/component/common/ui-rotation/

](#ui-%E7%BB%84%E4%BB%B6%E6%94%AF%E6%8C%81%E7%9A%84%E8%A1%A8%E5%86%A0%E6%97%8B%E8%BD%AC)
# UI 组件支持的表冠旋转


作为手表上非常重要的交互按钮，表冠在蓝河系统中得到了充分的支持。我们严格遵守了只有在获得表冠焦点后才能响应表冠事件的规则，在此前提下，蓝河系统提供了丰富的表冠响应方式，并支持开发者进行自定义和个性化的表冠响应。这些支持和机制的存在，可以让开发人员更加便捷地使用 UI 组件和表冠交互控制，提高表冠的交互性和可用性。


](#ui-%E7%BB%84%E4%BB%B6%E8%A1%A8%E5%86%A0%E7%84%A6%E7%82%B9)
## UI 组件表冠焦点


为实现 UI 组件随表冠的旋转而滑动，务必确保 UI 组件处于获焦状态。同时，页面中只允许有一个组件获得焦点。


默认焦点分配在最外层的最后一个可响应表冠的组件上。


](#%E8%87%AA%E5%AE%9A%E4%B9%89-ui-%E7%BB%84%E4%BB%B6%E5%AF%B9%E6%97%8B%E8%BD%AC%E8%A1%A8%E5%86%A0%E7%9A%84%E5%93%8D%E5%BA%94)
## 自定义 UI 组件对旋转表冠的响应


开发者可以根据实际情况对组件响应旋转表冠事件进行自定义处理。


](#%E9%BB%98%E8%AE%A4%E6%94%AF%E6%8C%81%E7%9A%84%E8%A1%A8%E5%86%A0%E7%BB%84%E4%BB%B6%E5%A6%82%E4%B8%8B)
## 默认支持的表冠组件如下：


默认支持表冠的组件，其响应表冠选择和手指操作一致，组件上该触发的生命周期都会触发。


| 组件名称 | 类型 |
| --- | --- |
| list | 用来呈现连续、多行数据的组件，包含一系列相同类型的列表项。 |
| swiper | 一种带滚动功能的组件，它采用滑动的方式在有限的区域内显示更多的内容。 |
| picker | 滚动选择器，允许用户从预定义范围中进行选择。当前支持时间选择器、日期选择器。 |
| slider | 滑动型输入器。 |
| scroll | 滚动视图容器。竖向或水平方向滚动容器，竖向滚动需要设置定高，水平滚动需要设置定宽。 |


](#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89)
## 接口定义


](#%E5%B1%9E%E6%80%A7)
## 属性


](#%E4%BB%A5%E4%B8%8B%E5%B1%9E%E6%80%A7%E9%83%BD%E6%98%AF%E7%BB%84%E4%BB%B6%E7%9A%84%E9%80%9A%E7%94%A8%E5%B1%9E%E6%80%A7)
### 以下属性都是组件的通用属性


| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| vibration-effectEnabled | Boolean | true | 否 | 表冠旋转的时候是否具有振动的效果，true 表示有振动效 果，false 表示没有振动效果 |
| rotation-sensitivity | Number | 1 | 否 | 表冠灵敏度数值可设置为 高，正常，低以及默认的灵敏 度 1:低级，2:正常，3:高级 |
| touch-focusable | Boolean | false | 否 | 设置组件在触摸模式下是否可以接收对焦 。 |


](#%E4%BA%8B%E4%BB%B6)
## 事件


| 事件名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| rotation | Function | - | 否 | 组件监听表冠旋转的回调事件，组件的通用事件。 |


](#%E4%BA%8B%E4%BB%B6%E5%8F%82%E6%95%B0%E8%BF%94%E5%9B%9E%E5%80%BC-object-%E5%AF%B9%E8%B1%A1%E7%9A%84%E5%85%B7%E4%BD%93%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E%E5%A6%82%E4%B8%8B)
### 事件参数返回值 Object 对象的具体参数说明如下:


| 接收参数 | 类型 | 说明 |
| --- | --- | --- |
| direction | Boolean | 旋转方向，表冠逆时针是正转返回 true，顺时针是反转返回 false。 |
| delta | delta | 单次旋转变化量，重新旋转时会清零，正常低速情况下变化量的绝对值恒为 1，正 负代表旋转方向，正转为正，反转为负，单位为旋转事件的最小刻度。 |
| velocity | Number | 旋转速度，方向之分与 delta 相同，单位为刻度/秒。 |
| duration | Number | 事件时间间隔，本次和上一次事件触发时的时间间隔，首次触发事件时时间为 0， 单位为毫秒。 |
| state | Number | 表冠旋转的状态，可取的值为 1:开始旋转，2:旋转中 ，3:旋转结束。 |


](#%E6%96%B9%E6%B3%95)
## 方法


| 方法名称 | 类型 | 说明 |
| --- | --- | --- |
| requestFocus | Boolean | 设置当前要获取焦点的组件，入参为 true 让当前组件抢占焦点，优先级最 高。此方法也是组件的通用方法。 |


](#%E7%A4%BA%E4%BE%8B)
### 示例


](#%E4%BB%A5-picker-%E7%BB%84%E4%BB%B6%E6%98%AF%E9%BB%98%E8%AE%A4%E6%94%AF%E6%8C%81%E8%A1%A8%E5%86%A0%E6%97%8B%E8%BD%AC%E7%9A%84%E6%97%8B%E8%BD%AC%E8%A1%A8%E5%86%A0%E7%BB%84%E4%BB%B6%E8%81%9A%E7%84%A6%E8%AE%BE%E7%BD%AE%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81%E5%A6%82-%E4%B8%8B)
#### 以 Picker 组件是默认支持表冠旋转的，旋转表冠组件聚焦设置示例代码如 下:


```html
<script>
  export default {
    onReady() {
      const picker = this.$element('picker')
      picker.requestFocus(true)
    },
  }
</script>

<template>
  <picker class="w-[750px] h-[750px] bg-black" id="picker" type="time"></picker>
</template>

<style>
@tailwind utilities;
</style>
```


](#%E8%87%AA%E5%AE%9A%E4%B9%89-ui-%E7%BB%84%E4%BB%B6%E6%94%AF%E6%8C%81%E8%A1%A8%E5%86%A0%E6%97%8B%E8%BD%AC)
#### 自定义 UI 组件支持表冠旋转


```html
<script>
  export default {
    rotationHandler(ev){
      console.log('表冠事件输出'+ev )
      // 改变亮度
    },
    onReady () {
      const div = this.$element("div")
      div.requestFocus(true)
    }
  }
</script>

<template>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <div class="w-60 h-60 bg-black" id="div" @rotation="rotationHandler">
  </div>
</template>

<style>
@tailwind utilities;
</style>
```

---

