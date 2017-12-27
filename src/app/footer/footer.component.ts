import { Component } from "@angular/core";

@Component({
  selector: 'otcgo-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <footer class="otcgo-layout-footer">
      <div class="otcgo-layout-footer__container">
        <div class="otcgo-layout-footer__content-wrapper">
          <a href="//www.otcgo.cn" class="otcgo-layout-footer__logo">
            <img src="../../assets/img/logo--white.png" alt="" width="125px"
                 height="45px">
          </a>

          <div class="otcgo-layout-footer__links-container">
            <div class="otcgo-layout-footer__links-items partnership">
              <div class="otcgo-layout-footer__links-item-title">商业合作</div>
              <div class="otcgo-layout-footer__links-item">合作伙伴</div>
              <div class="otcgo-layout-footer__links-item">友情链接</div>
              <div class="otcgo-layout-footer__links-item">加入社群</div>
              <div class="otcgo-layout-footer__links-item">广告投放</div>
            </div>
            <div class="otcgo-layout-footer__links-items about">
              <div class="otcgo-layout-footer__links-item-title">关于蓝鲸淘</div>
              <div class="otcgo-layout-footer__links-item">申一科技</div>
              <div class="otcgo-layout-footer__links-item">媒体报道</div>
              <div class="otcgo-layout-footer__links-item">计划白皮书</div>
              <div class="otcgo-layout-footer__links-item">蓝鲸淘APP&lt;暂未开放&gt;
              </div>
            </div>
            <div class="otcgo-layout-footer__links-items help">
              <div class="otcgo-layout-footer__links-item-title">帮助中心</div>
              <div class="otcgo-layout-footer__links-item">使用教程</div>
              <div class="otcgo-layout-footer__links-item">意见反馈</div>
              <div class="otcgo-layout-footer__links-item">资费介绍</div>
              <div class="otcgo-layout-footer__links-item">服务条款</div>
            </div>
            <div class="otcgo-layout-footer__links-items contact">
              <div class="otcgo-layout-footer__links-item-title">联系我们</div>
              <div class="otcgo-layout-footer__links-item">业务合作</div>
              <div class="otcgo-layout-footer__links-item">服务热线</div>
              <div class="otcgo-layout-footer__links-item">举报电话</div>
              <div class="otcgo-layout-footer__links-item">微信订阅号</div>
            </div>
          </div>

          <div class="otcgo-layout__focus-us-container">
            <div class="otcgo-layout__focus-us__title">
              Focus on us
            </div>
            <div class="otcgo-layout__focus-us__cards">
              <a href="//shang.qq.com/wpa/qunwpa?idkey=5f3e197cd2343ba8a56e933064d86ddaf218ecbe837a3e7e0603a7c8c6bf6139"
                 target="_blank"
                 class="otcgo-layout__focus-us__card">
                <img src="../../assets/img/focus-qq.png" alt="">
              </a>
              <a href="//t.me/joinchat/Go046A-C4aW__p4e_bqItw"
                 target="_blank"
                 class="otcgo-layout__focus-us__card">
                <img src="../../assets/img/focus-telegram.png" alt="">
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="otcgo-layout-footer__shade"></div>
      <div class="otcgo-layout-footer__copyright">
        Copyright © 2017 otcgo.cn 版权所有 湘ICP备16019051号-1
      </div>
    </footer>
  `
})
export class FooterComponent {

}