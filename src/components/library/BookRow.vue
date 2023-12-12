<template>
    <div style="margin-top: 35px">
        <el-row :gutter="20" type="flex" justify="center" v-for="(gridData, rowindex) in displayedBooks" :key="rowindex" style="margin-top: 30px;">
            <el-col v-for="(book, index) in gridData" :key="index" :span="8">
            <div class="image-with-text" style="width: 90%;">
                <el-card :body-style="{ padding: '0px'}" shadow="never">
                <div style="display: flex;">
                    <img :src="book.image" alt="image" width="100px" height="130px" style="border-radius: 5px">
                    <div class="text">
                    <div class="title">
                        <a :href="book.link" target="_blank">{{ book.title }}</a>
                    </div>
                    <div class="desc">
                        <span>作者：<span>{{ book.author }}</span></span>
                    </div>
                    <div class="desc">
                        <span>连载中 · <span>{{ book.words }} · <span>{{ book.readers }}</span></span></span>
                    </div>
                    <div class="desc">{{ book.note }}</div>
                    </div>
                </div>
                </el-card>
            </div>
            </el-col>
        </el-row>
        <div style="margin-top: 80px">
            <div style="display: flex ;justify-content: center;">
                <el-pagination
                    background
                    :page-size="18"
                    :pager-count="6"
                    layout="prev, pager, next"
                    :current-page="currentPage"
                    @current-change="handlePageChange"
                    :total="36">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'BookRow',
    data() {
      return {
        currentPage: 1, // 当前页码
        pageSize: 18, // 每页显示的数据条数
        books:
        [ 
            [
                {
                    image: "https://p3-reading-sign.fqnovelpic.com/novel-pic/4900f950c7af7f82fdc14cf528e0e288~tplv-resize:200:260.image?x-expires=1704942895&x-signature=hJFn%2Bt8LHDT34RCoL5BFHqRK0zE%3D",
                    title: "十日终焉",
                    link: "https://fanqienovel.com/page/7143038691944959011",
                    author: "杀虫队队员",
                    words: "150.9万字",
                    readers: "228.2万人在读",
                    note: "（不后宫，不套路，不无敌，不系统，不无脑，不爽文，介意者慎入。）"
                },
                {
                    image: "https://p6-reading-sign.fqnovelpic.com/novel-pic/c5397e4a514736bb1c6754663dbee3db~tplv-resize:200:260.image?x-expires=1704953535&x-signature=ekUlxbFng4g2M0JFIrsxZ1BpkqI%3D",
                    title: "我在精神病院学斩神",
                    link: "https://fanqienovel.com/page/6982529841564224526",
                    author: "三九音域",
                    words: "425.9万字",
                    readers: "204.7万人在读",
                    note: "你是否想过，在霓虹璀璨的都市之下潜藏着来自古老神话的怪物？"
                },
                {
                    image: "https://p9-reading-sign.fqnovelpic.com/novel-pic/p2odb1d8d52526f87ca2da80619b8738509~tplv-resize:200:260.image?x-expires=1704942973&x-signature=NXOIQW9sPKtZOVeMnPDHAK94YwE%3D",
                    title: "冰河末世，我囤积了百亿物资",
                    link: "https://fanqienovel.com/page/7180279419959774247?enter_from=stack-room",
                    author: "记忆的海",
                    words: "227.4万字",
                    readers: "182.6万人在读",
                    note: "末世+重生+爆囤物资+苟+无限空间+黑化复仇不圣母 全球进入冰河时代，寒冰末世来临，星球95%的人类全部丧生！ 上一世，张奕因为心地善良，结果被自己帮助过的人杀死了。"
                },
            ],
            [
                {
                    image: "https://p9-reading-sign.fqnovelpic.com/novel-pic/64edf69fff667e457733a0f89b51f12f~tplv-resize:200:260.image?x-expires=1704973610&x-signature=aF0FUbFel2upkWal2NQdI9xVP5Q%3D",
                    title: "天渊",
                    link: "https://fanqienovel.com/page/7138249318909086727",
                    author: "沐潇三生",
                    words: "196.6万字",
                    readers: "189.4万人在读",
                    note: "百年前，陈青源进入了一个名为天渊的禁区，魂灯熄灭，世人皆认为他死了。 今日，陈青源虽然活着走出了禁区，但是修为尽废，灵根断裂。 面对红颜的悔婚，各宗的欺压，陈青源该如何是好？ “陈青源，我给你两个选择：一，娶我;二......” 天渊内生活着一个红裙姑娘，眸若星辰，声音轻柔。 “我选择二。” 没等红裙姑娘说完话，陈青源毅然决然的做出了选择。 （主角腹黑+无系统+幽默+传统玄幻+简介无力，请看正文）"
                },
                {
                    image: "https://p3-reading-sign.fqnovelpic.com/novel-images/27527752c4615e1082095e2789da1212~tplv-resize:200:260.image?x-expires=1704973610&x-signature=2vPfv6gjn35dQxSWC3BZXHGJPfI%3D",
                    title: "我的26岁女房客",
                    link: "https://fanqienovel.com/page/6569997839437401101",
                    author: "超级大坦克科比",
                    words: "205.4万字",
                    readers: "171.0万人在读",
                    note: "酒吧疯狂一夜，被美女讹上，落魄青年喜当爹。屋漏偏逢连夜雨，租住的房子换了主人，就要被扫地出门，不过新房东是个美女啊！要不要考虑合租？只见美女轻飘飘说了一个字，滚！ 因租房问题而起的情感纠葛。"
                },
                {
                    image: "https://p6-reading-sign.fqnovelpic.com/novel-pic/baa65a198607b52168aa1338740642f8~tplv-resize:200:260.image?x-expires=1704973610&x-signature=Dkv0Zq29FQr7H25dmVHhQrWcvG4%3D",
                    title: "开局长生万古，苟到天荒地老",
                    link: "https://fanqienovel.com/page/7147596144942517284",
                    author: "紫灵风雪",
                    words: "231.8万字",
                    readers: "161.6万人在读",
                    note: "【非爽文+平淡日常+轻松诙谐+无女主+无刀子+苟王】入坑谨慎。 一本以长生者视角跨越几个修仙大时代的长生文，从平凡小山村走出小界域，跨入修仙大世，经历修仙界蓬勃发展时代、黄金鼎盛时代、规则崩灭时代，黑暗大动乱时代，万灵皆寂时代…… 陈浔穿越到浩瀚无垠的修仙界，觉醒长生系统，竟然还送了一头长生灵兽为伴。 我陈浔对打打杀杀没有兴趣，也不想招惹任何人，只想带着老牛看遍世间繁华。 一个不经意，他露出了腰间的三把开山"
                },
            ],
            [
                {
                    image: "https://p6-reading-sign.fqnovelpic.com/novel-pic/p2ofc90f727bba92bbcacbe7357281cf9d5~tplv-resize:200:260.image?x-expires=1704973610&x-signature=mmOPMV56hq5Td%2FgwhRNwkEJbebE%3D",
                    title: "神话擂台，开局召唤千古一帝",
                    link: "https://fanqienovel.com/page/7258583820620794942",
                    author: "愤怒的鸡哥",
                    words: "60.9万字",
                    readers: "156.5万人在读",
                    note: "神话擂台降临，各国本土神明接踵而至。 小樱花有天照，天竺有湿婆，鹰酱有奥丁… 唯独华夏神系缺失，华夏战败。 然而命运的齿轮开始倒退，苏铭重生了，手握华夏完整神谱。 可曾听闻千古一帝嬴政，以人类之躯斩杀西方神王…… 美猴王应召而来，众生皆呼，只认傲来齐天圣，不识西天斗战佛！ 诗仙李白，剑气纵横三万里，一剑光寒十四洲，那一剑竟真的开了天门…… ps：非纯粹无脑爽文，慎者勿入"
                },
                {
                    image: "https://p3-reading-sign.fqnovelpic.com/novel-pic/8dec9dbb6421eca1cb19d4746028c87d~tplv-resize:200:260.image?x-expires=1704973610&x-signature=Xha6L%2FGmY8BiVr1yhWu4JFYfP3M%3D",
                    title: "贾二虎的妖孽人生",
                    link: "https://fanqienovel.com/page/7130541832936623144",
                    author: "已知天命",
                    words: "237.6万字",
                    readers: "155.3万人在读",
                    note: "不是猛龙不过江！ 24年前的弃婴王者归来，神挡杀神，魔挡除魔，大佬跪求放过，仇人闻风而逃，最终成为一代枭雄！"
                },
                {
                    image: "https://p3-reading-sign.fqnovelpic.com/novel-pic/4b7453494dc0b940b8f4530a3477065a~tplv-resize:200:260.image?x-expires=1704973610&x-signature=832MfyzJcYHmfxh50DTw6tR1LHQ%3D",
                    title: "高手下山，我家师姐太宠我了",
                    link: "https://fanqienovel.com/page/7112656623956397088",
                    author: "求求你让我火吧",
                    words: "226.4万字",
                    readers: "154.4万人在读",
                    note: "【无敌文，每一个字都爽，剧情节奏爆快，不拖拉，杀伐果断】毕业酒席上，父母兄弟惨死，遭遇追杀，侥幸逃生，昆仑山上习武五年，我强势归来！ 　　“你是顶尖阔少，我惹不起你？我师父一巴掌可以拍死！” 　　“你是中医之王？我师父乃鬼门传人，十三针定天下人生死！” 　　“你是宗师武者，一人之下，万人之上？我师父坐镇昆仑，天下宗师来拜！” 　　“你是江南王，权倾天下？我师父曾为帝师，是你上司的上司！” 　　“你亿万家产，左右世界金"
                },
            ],
            [
                {
                    image: "https://p3-reading-sign.fqnovelpic.com/novel-pic/p2ofd1c5e7f658aa80697e4455ad326c6c0~tplv-resize:200:260.image?x-expires=1704973610&x-signature=4XV6AGhXBCLIz5wWBrJAzhsBn8U%3D",
                    title: "上班摸鱼被抓，反手拉女总裁下水",
                    link: "https://fanqienovel.com/page/7282046097365666875",
                    author: "汐豆",
                    words: "65.9万字",
                    readers: "153.7万人在读",
                    note: "大学实习的秦寻进入一家才创办的营销公司，成了一名光荣的策划师助理。 　当天绑定摸鱼系统，只要上班摸鱼就能积攒摸鱼值，获得奖励。 　正当他顶着优秀员工的名头，躲在公司无人注意的角落，摸鱼摸得风生水起的时候。 　一个新来的高冷女同事，被人事主管安排到了他身边。 　“秦寻，这是新来的同事，你带她熟悉下公司环境，教一下她规矩。” 　美女同事高贵，清冷，生人勿进。 　秦寻感觉被监视了，摸鱼大计受到重创。 　忽然。 　他发"
                },
                {
                    image: "https://p3-reading-sign.fqnovelpic.com/novel-images/61623795d3874c0d0bdb62532f1609a9~tplv-resize:200:260.image?x-expires=1704973610&x-signature=j%2BXCIOrerU%2BCyeCXmt30ZoLuGt0%3D",
                    title: "我做老千那些年",
                    link: "https://fanqienovel.com/page/7020290000730197029",
                    author: "马小虎",
                    words: "312.8万字",
                    readers: "143.3万人在读",
                    note: "我是老千。 赌桌上，翻云覆雨的老千 但我想用我的经历，告诉你一个最朴素的道理，远离赌博。 因为，十赌九诈，十赌十输！"
                },
                {
                    image: "https://p3-reading-sign.fqnovelpic.com/novel-pic/p2o99ffbfd13492eb9953715959db26ed9b~tplv-resize:200:260.image?x-expires=1704973610&x-signature=TsLsscMueuyU2okLjugn1DKplWA%3D",
                    title: "我不是戏神",
                    link: "https://fanqienovel.com/page/7276384138653862966",
                    author: "三九音域",
                    words: "48.3万字",
                    readers: "133.0万人在读",
                    note: "赤色流星划过天际后，人类文明陷入停滞。 从那天起，人们再也无法制造一枚火箭，一颗核弹，一架飞机，一台汽车……近代科学堆砌而成的文明金字塔轰然坍塌，而灾难，远不止此。 灰色的世界随着赤色流星降临，像是镜面后的鬼魅倒影，将文明世界一点点拖入无序的深渊。 在这个时代，人命渺如尘埃； 在这个时代，人类灿若星辰。 大厦将倾，有人见一戏子屹立文明废墟之上，红帔似血，时笑时哭， 时代的帘幕在他身后缓缓打开，他张开双臂，对"
                },
            ],
            [
                {
                    image: "https://p9-reading-sign.fqnovelpic.com/novel-pic/p2oeb5c7a5f69792afefe3b0866485fb995~tplv-resize:200:260.image?x-expires=1704973610&x-signature=9SEtRMbKc8KbVFaEzarejZcccVo%3D",
                    title: "网游：我有超神级天赋",
                    link: "https://fanqienovel.com/page/7255936586997566505",
                    author: "撼动猩",
                    words: "87.7万字",
                    readers: "128.0万人在读",
                    note: "【常规虚拟网游+超神级天赋+杀伐果决+剧情流+技术流】 　　重生回到诸神黄昏开服之前，一切都还有重新来过的机会，曾经的遗憾，都将一一弥补。 　　前世十年未曾觉醒的天赋，如今凭借前世记忆，获得神级天赋觉醒石，开启超神级天赋！ 　　每次普攻永久增加一点生命值！ 　　普攻造成自身最大生命值1%的真伤！ 　　有此天赋，何人能挡！ 　　当普通玩家还在想着怎么快速升到10级的时候，林天浩已经开始筹备摧毁新手村了。 　　当普通"
                },
                {
                    image: "https://p3-reading-sign.fqnovelpic.com/novel-pic/p2o7c216b47aa21d1ef1b486c34d2dd1fc1~tplv-resize:200:260.image?x-expires=1704973610&x-signature=SQCbp17PXHGuhEq3LgtkkqoXKlo%3D",
                    title: "全家流放：我带着嫂夫人去逃荒！",
                    link: "https://fanqienovel.com/page/7260147674416942135",
                    author: "一抹涟漪",
                    words: "91.0万字",
                    readers: "127.1万人在读",
                    note: "刚穿越过来，燕云父亲、大哥、二哥，就因为功高震主，被皇帝以蓄意谋反之罪，斩首边关！ 但念及父兄三人战功赫赫，饶恕其家人。 死罪可逃，活罪难免！ 流放全家老小至蛮荒之地！ 流放就就放吧！ 偏偏大哥二哥，给他留下几个嫂夫人。 沃特？ 带着嫂夫人逃荒？？ 燕云表示自己有些心慌！ 我该怎么办？？ 十万分火急…… 在线恭候各位道友出谋划策，指点江山……"
                },
                {
                    image: "https://p3-reading-sign.fqnovelpic.com/novel-pic/b6abd9ad5ffd64830d20382601f52de8~tplv-resize:200:260.image?x-expires=1704973610&x-signature=yBgjYxTB9uLusSTfokEXLi7XqP0%3D",
                    title: "大叔，你的娇气包哭了要贴贴",
                    link: "https://fanqienovel.com/page/7102266757917707279",
                    author: "梨花满园",
                    words: "105.3万字",
                    readers: "120.1万人在读",
                    note: "（双洁+甜宠+治愈）京都第一豪门司家少爷司伯珩，三十岁都不曾有过一段恋情，外界揣测他不是身体有问题，就是取向有问题，直到司家忽然多了一位年龄很小的少奶奶。 　　据说这位少奶奶还在上大学，据说少奶奶是故意在酒吧卖惨勾引到了司少，一众拥有豪门梦的女人纷纷嫉妒的捶胸顿足，这样也行？ 　　因此，这位小少奶奶也收获了一批黑粉，她们不遗余力的爆料着她在司家的悲惨生活，被司少的小三小四小五等暴揍，被家族旁支当众羞辱，跟"
                },
            ],
            [
                {
                    image: "https://p6-reading-sign.fqnovelpic.com/novel-pic/p2o6b7fbb6b335a6037e4a6dcb3e3a8ed01~tplv-resize:200:260.image?x-expires=1704973610&x-signature=m0am0mgYIdzugEacgrwv68RBJEA%3D",
                    title: "满门炮灰读我心后，全家造反了",
                    link: "https://fanqienovel.com/page/7266411377009364008",
                    author: "超爱小螃蟹",
                    words: "75.7万字",
                    readers: "119.6万人在读",
                    note: "【读心术+系统+团宠+穿书+扮猪吃虎】乔娇娇上辈子功德太满，老阎王许她带着记忆投胎，还附加一个功德商城金手指。 乔娇娇喜滋滋准备迎接新的人生，结果发现她不是投胎而是穿书了！穿成了古早言情里三岁早夭，戏份少到只有一句话的路人甲。 而她全家满门忠臣皆是炮灰，全部不得好死! 【爹啊，你是一心为国为民的大英雄，最后沦为政治斗争的牺牲品，被午门斩首啊！】 【娘啊，你被有心之人算计，与爹爹离心，最后思虑过重，抑郁而亡"
                },
                {
                    image: "https://p3-reading-sign.fqnovelpic.com/novel-pic/p2oc6513b99c2a342630b312a4a83d0ea10~tplv-resize:200:260.image?x-expires=1704973610&x-signature=dsvEL5fZ4oUAgu3umRBBqyY5kNc%3D",
                    title: "全家反派读我心后，人设都崩了",
                    link: "https://fanqienovel.com/page/7248901031478692868",
                    author: "喵金金",
                    words: "106.8万字",
                    readers: "114.0万人在读",
                    note: "原书名：全家反派读我心后，人设都崩了【穿书+全家读心术+团宠+架空+暴君+甜宠+发疯+无脑】尉迟曦穿书了，穿成了出生就被亲娘抛弃，后期苟活却被抓回宫成为女主垫脚石的大炮灰。 尉迟曦生无可恋的等着被亲娘抛弃，结果，亲娘留下了她？ 尉迟曦看着亲娘，叹气，“娘啊，你马上就要死了！德妃要来害你了！” 娴妃：…… 然后娴妃反杀了。 尉迟曦看着暴君，“爹爹啊，想不到吧，你三年以后就会被你的大儿子搞死！你现在都是在帮他打下基业。"
                },
                {
                    image: "https://p9-reading-sign.fqnovelpic.com/novel-pic/p2o0c908ac5db8c1a6ffa0f51e80983f2c7~tplv-resize:200:260.image?x-expires=1704973610&x-signature=0cSn9OyWYs8lDAvXZNMrvqkD5cE%3D",
                    title: "开局混沌剑体，打造不朽仙族",
                    link: "https://fanqienovel.com/page/7273040793923750952",
                    author: "幽十七",
                    words: "56.8万字",
                    readers: "113.8万人在读",
                    note: "【系统+无敌+爽文+培养家族+不服直接干！】 顾长青穿越玄幻世界，觉醒多子多福系统，开局迎娶未来女帝，开启无敌路！ 根骨不行？【叮！恭喜宿主子嗣诞生，觉醒紫霄蚀雷体，返还宿主混沌剑体！】 功法不行？【叮！恭喜宿主子嗣诞生，身怀至尊仙骨，返还宿主无上神通一卷！】 没有底牌？【叮！恭喜宿主子嗣诞生，身怀朱雀血脉，奖励宿主狱火真凤坐骑一只！实力堪比大帝巅峰！】 就这样，若干年后。 “那个顾家是怎么回事？随便一个"
                },
            ],
            [
                {
                    image: "https://p9-reading-sign.fqnovelpic.com/novel-pic/p2o7129fcd663af5d51c4bb36bb330a98e9~tplv-resize:200:260.image?x-expires=1704982551&x-signature=ku7Iltj75NDsFuWClhADZ65mFK0%3D",
                    title: "穿书女频，大婚当日被女主杀死",
                    link: "https://fanqienovel.com/page/7282235053952732175",
                    author: "孤山放牛娃",
                    words: "45.8万字",
                    readers: "111.3万人在读",
                    note: "【扮猪吃虎+杀伐果断+阴险狡诈+同级无敌】 叶凌天穿越到一本女频权谋小说中，成为大周反派三皇子，开局便要和女主凤惑君成婚？ 洞房花烛夜的时候，疯批女主竟然要置我于死地，原因是她爱我入骨？ 当涂有剧毒的匕首插入我的心脏之时，我知道自己凉了，我这个反派竟然真的活不过三集。 临死之际，我绑定了长生抽奖系统，只要抽奖就能变强。 “恭喜宿主获得体质百毒不侵。” “恭喜宿主获得过目不忘本领。” “......” 很好，接下来我要开始猥琐"
                },
                {
                    image: "https://p9-reading-sign.fqnovelpic.com/novel-pic/p2o827e3fceac29179db4bd44df66000302~tplv-resize:200:260.image?x-expires=1704982551&x-signature=yhgpsIAsrXoLk4T5UZDSf5YPh8A%3D",
                    title: "你们都追女主？那女魔头我娶走了",
                    link: "https://fanqienovel.com/page/7280384971217308734",
                    author: "纸包",
                    words: "33.1万字",
                    readers: "110.3万人在读",
                    note: "（单女主-日常贴贴-保证糖够-有修炼体系-背景宏大） 沈亦安穿越某网站不规范小说之中，成为头顶大草原的男主一号，大乾王朝六皇子，楚王殿下！ 一个女主，N个男主，这难道不是汤姆猫多重奏，不是对纯爱战士的亵渎！ 好好好，你们都去追女主，你们都喜欢草原放牧，都喜欢策马奔腾。 那女魔头我就娶走了。 你们还在为女主争风吃醋时，女魔头已经在我怀里哼哼唧唧让我别欺负她。 你们以为自己即将成功时，女魔头已经和我结婚一周年。 女主"
                },
                {
                    image: "https://p3-reading-sign.fqnovelpic.com/novel-pic/p2obb133cb5a48be531dcd0fbad46a5ef34~tplv-resize:200:260.image?x-expires=1704982551&x-signature=0aFYLzhzmlGe1I7zUT%2BrEuqJLlg%3D",
                    title: "凡骨",
                    link: "https://fanqienovel.com/page/7077516958534470656",
                    author: "幽十七",
                    words: "338.4万字",
                    readers: "108.3万人在读",
                    note: "世间灵骨，共分四品。 一品，天灵骨。二品，金灵骨。三品，玄灵骨。四品，白灵骨。 余者，皆为凡骨，无缘修行。 一介凡骨许太平，誓要向这修行界证明，凡骨亦能斩妖，凡骨亦能除魔，凡骨亦能登仙！"
                },
            ],
        ]
      };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.books.length / 6);
        },
        displayedBooks() {
            const startIndex = (this.currentPage - 1) * 6;
            const endIndex = startIndex + 6;
            return this.books.slice(startIndex, endIndex);
        },
    },
    methods: {
        handlePageChange(page) {
        // 根据页码和每页显示的数据条数计算当前页应该显示的数据
            this.currentPage = page;
        },
    },
    // created() {
    //     this.handlePageChange(this.currentPage); // 初始化显示当前页的书籍数据
    // },
};
</script>
  

<style scoped>

.text {
    margin-left: 10px; /* 调整文字与图片之间的间距 */
    flex: 1; /* 让文字部分占据剩余的空间 */
}

.title a{
    font-weight: bold;
    text-decoration: none; /* 取消下划线 */
    color: #333333; /* 设置标题颜色 */
}

.title {
    display: -webkit-box;
    -webkit-line-clamp: 1; /* 设置最大行数为1 */
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.desc {
    font-size: 12px;
    color: #00000066;
    margin-top: 5px; /* 调整每个描述之间的间距 */
    display: -webkit-box;
    -webkit-line-clamp: 3; /* 设置最大行数为3 */
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>

