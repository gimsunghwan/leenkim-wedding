<style lang="scss">
  .info-wrap {
    padding-top: 42px;
  }

  .ic {
    &-bride,
    &-groom {
      display: block;
      width: 30vw;
      min-width: 90px;
      max-width: 150px;
      height: 30vw;
      min-height: 90px;
      max-height: 150px;
      margin: 0 auto;
      border-radius: 50%;
      background-repeat: no-repeat;
      background-image: url('/assets/images/photo-08.jpg');
    }
    &-bride {
      background-size: 25em;
      background-position: 29% 37%;
    }
    &-groom {
      background-size: 25em;
      background-position: 70% 30%;
    }
    &-rings {
      width: 10vw;
      height: 10vw;
      min-width: 15px;
      min-height: 15px;
      max-width: 42px;
      max-height: 42px;
      margin-top: -57px;
    }

    &-call,
    &-message {
      display: inline-block;
      vertical-align: middle;
      width: 25px;
      height: 25px;
    }
    &-call {
      margin-right: 20px;
    }
  }

  .couple {
    margin-bottom: 42px;
    .couple-info {
      padding: 0 20px;
      > div {
        width: 43%;
        &:nth-of-type(2) {
          width: 14%;
        }
      }
    }

    .relation {
      margin-top: 20px;
      justify-content: center;
      font-size: 16px;
      > strong {
        font-size: 18px;
      }
    }

    .tel-wrap {
      margin-top: 10px;
    }
  }

  .parents {
    background-color: #f7f7f7;
    > .flex {
      padding: 42px 20px;
      box-sizing: border-box;
      > div {
        width: 50%;
      }
    }

    .parent-title {
      font-size: 18px;
      text-align: center;
      color: #333;
      margin-bottom: 20px;
    }

    .tel-wrap {
      text-align: center;
      &.father {
        margin-bottom: 20px;
      }
      .name {
        display: block;
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 1rem;
        > em {
          font-size: 16px;
          font-weight: normal;
          margin-right: 5px;
        }
      }
    }
  }

  @media (max-width: 411px) {
    .couple {
      .relation {
        font-size: 14px;
        > strong {
          font-size: 15px;
        }
      }
    }

    .parents {
      .parent-title {
        font-size: 15px;
      }
      .tel-wrap {
        .name {
          font-size: 15px;
          > em {
            font-size: 14px;
          }
        }
      }
    }
  }
</style>

<div id="id-information" class="info-wrap">
  <!-- 신부, 신랑 연락처 -->
  <div class="section couple">
    <div class="grid">
      <p class="sub-title align-center">축하인사 건네실 곳</p>
      <div class="couple-info flex">
        <!-- 신랑 -->
        <div class="groom-wrap align-center">
          <div>
            <i class="ic-groom" />
          </div>
          <div class="relation">
            신랑
            <strong>김성환</strong>
          </div>
          <div class="tel-wrap">
            <a href="tel:010-4583-3564" class="ic-call">
              <img src="/assets/images/ic-call.png" alt="신랑에게 전화하기" />
            </a>
            <a href="sms:010-4583-3564" class="ic-message">
              <img
                src="/assets/images/ic-message.png"
                alt="신랑에게 문자하기" />
            </a>
          </div>
        </div>
        <div class="align-center">
          <img
            class="ic-rings"
            src="/assets/images/ic-rings.png"
            alt="웨딩반지" />
        </div>
        <!-- 신부 -->
        <div class="bride-wrap align-center">
          <div>
            <i class="ic-bride" />
          </div>
          <div class="relation">
            신부
            <strong>이현주</strong>
          </div>
          <div class="tel-wrap">
            <a href="tel:010-9797-4388" class="ic-call">
              <img src="/assets/images/ic-call.png" alt="신부에게 전화하기" />
            </a>
            <a href="sms:010-9797-4388" class="ic-message">
              <img
                src="/assets/images/ic-message.png"
                alt="신부에게 문자하기" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 신부, 신랑 연락처 끝 -->
  <div class="section parents">
    <div class="grid flex">
      <!-- 신랑측 혼주 연락처 -->
      <div class="groom">
        <p class="parent-title">신랑측 혼주</p>
        <div class="tel-wrap father">
          <div>
            <span class="name">
              <em>아버지</em>
              김남걸
            </span>
          </div>
          <div>
            <a href="tel:010-4535-6619" class="ic-call">
              <img
                src="/assets/images/ic-call.png"
                alt="신랑 측 아버지께 전화하기" />
            </a>
            <a href="sms:010-4535-6619" class="ic-message">
              <img
                src="/assets/images/ic-message.png"
                alt="신랑 측 아버지께 문자하기" />
            </a>
          </div>
        </div>
        <div class="tel-wrap">
          <div>
            <span class="name">
              <em>어머니</em>
              김백수
            </span>
          </div>
          <div>
            <a href="tel:010-9668-3564" class="ic-call">
              <img
                src="/assets/images/ic-call.png"
                alt="신랑 측 어머니께 전화하기" />
            </a>
            <a href="sms:010-9668-3564" class="ic-message">
              <img
                src="/assets/images/ic-message.png"
                alt="신랑 측 어머니께 문자하기" />
            </a>
          </div>
        </div>
      </div>
      <!-- 신부측 혼주 연락처 -->
      <div class="bride">
        <p class="parent-title">신부측 혼주</p>
        <div class="tel-wrap father">
          <div>
            <span class="name">
              <em>아버지</em>
              이수송
            </span>
          </div>
          <div>
            <a href="tel:010-4582-4388" class="ic-call">
              <img
                src="/assets/images/ic-call.png"
                alt="신부 측 아버지께 전화하기" />
            </a>
            <a href="sms:010-4582-4388" class="ic-message">
              <img
                src="/assets/images/ic-message.png"
                alt="신부 측 아버지께 문자하기" />
            </a>
          </div>
        </div>
        <div class="tel-wrap">
          <div>
            <span class="name">
              <em>어머니</em>
              박정자
            </span>
          </div>
          <div>
            <a href="tel:010-4721-4388" class="ic-call">
              <img
                src="/assets/images/ic-call.png"
                alt="신부 측 어머니께 전화하기" />
            </a>
            <a href="sms:010-4721-4388" class="ic-message">
              <img
                src="/assets/images/ic-message.png"
                alt="신부 측 어머니께 문자하기" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- 혼주 연락처 끝 -->
  </div>
  <!-- 연락처 끝 -->
</div>
