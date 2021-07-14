import gensim
import random

badWords = ["青姦","アル中","淫売","クンニ","殺す","支那","土人","知恵遅れ","チョン","白痴","キモイ","マンコ","デブ","ブス","エロ","阿呆","池沼","カス","ホモ","消えろ","蛆虫","厨","タダゲ","キチガイサヨク","エッチ","殺さ","失せろ","きえろ","いきがんな","スベタ","殺し","ガチキチ","テョン","専系","ビョーキ","殺そ","潮吹き","ゴキブリ","殺せよ","鮮人","ｽｸﾂ","専熟","チョソ","ヴァカ","ゴミクズニート","ゲイ","巨乳","娼婦","ゴミチョン","エロロリ","ゲロブス","廚二","しねよ","キチガイジジイ","街娼","気狂い","愚民","莫迦","アナル","屑","廚","ブサイク","鬱病","ﾁｮﾝ","アホ","愚鈍","死ねよ","殺せる","オマンコ","フェラ","支邦","エロイ","キッチンドランカー","フェラチオ","ウジムシ","愛撫","チンコ","クンニ","ニゲー","チャンコロ","魯鈍","テョン","中共","間抜け","オナニー","チンカス","飲んべえ","ショタホモ","チビデブ","援交","ディープスロート","ドブス","ヒトモドキ","ガチホモ","うせろ","土民","売笑","マイニコ","ｶｽ","死ね","バカ","マムコ","クソチョン","売女","クズ","莫迦","デブデブ","気違い","ガチブス","売春","ガチキチ","キチガイババア","ゴミニート","男妾","チャンコロ","チョンコ","アソコ","えろ","キチガイレベル","チョンカス","ハクチ","チョンコロ","ノンケ","うじ虫","ブスブサイク","同性愛","チョーセン","パイパンオマンコ","蒙昧","同人","殺せ","ガイジ","パイパンマンコ","消えうせろ","キメエ","ぶっ殺す","デブス","糞蝿","ホモレズ","シナ","ポケリスト"]



def evaluation(tweetList:list):
    print("start evaluation")
    isBadTweet = {}
    for n in range(len(tweetList)):
        count = 0
        for m in tweetList[n]:
            if m in badWords:
                count += 1
        if count != 0:
            isBadTweet[n] = count
    
    print("finish evaluation")
    return isBadTweet

def eval_similar_mean(model:gensim.models,tweetList:list):
    maybeBadTweet = {}
    
    k = random.randrange(140)
    for n in range(len(tweetList)):
        maybeBadWords = []
        for m in tweetList[n]:
            for s in range(5):
                if model.most_similar([tweetList[n][m], badWords[k]],topn=1)[1] > 0.75:
                    maybeBadWords.append(tweetList[n][m])
        maybeBadTweet[n] = maybeBadWords

    return maybeBadTweet