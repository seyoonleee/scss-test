import "./Main.css";

const Main = () => {
  return (
    <>
      <nav>
        <div class='left'>
          <img
            class='icon-logo height-20px nav-icon'
            src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png'
            alt=''
          />
          <span class='text-logo'>Westagram</span>
        </div>
        <div class='center ele-wrap'>
          <input class='search' type='text' />
        </div>
        <div class='right'>
          <i class='bi bi-brightness-high-fill' id='toggleDark'></i>
          <img
            class='icon-logo height-20px nav-icon'
            src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png'
            alt=''
          />
          <img
            class='icon-logo height-20px nav-icon'
            src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png'
            alt=''
          />
          <img
            class='icon-logo height-20px nav-icon'
            src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png'
            alt=''
          />
        </div>
      </nav>
      <main>
        <section class='feed-container'></section>
        <section class='main-right-wrap'>
          <div class='main-right'>
            <div class='profile-wrap'>
              <div class='profile-box'>
                <img id='profile-img' />
              </div>
              <div class='name-wrap'>
                <div class='nickname font-size-18 font-weight-600'>
                  seyoonleee
                </div>
                <div class='name font-size-18 aacy'>이세윤</div>
              </div>
            </div>
            <div class='container-wrap'>
              <div class='story-container'>
                <div class='space-between font-weight-600'>
                  <span class='aacy'>스토리</span>
                  <span>모두 보기</span>
                </div>

                {/* <!-- 스토리 리스트 --> */}
                <div class='story-list scroll-hide'>
                  <div class='new-story-list-wrap'>
                    <div class='new-story-img-box'>
                      <img id='new-story-img' />
                    </div>
                    <div class='nickname-time'>
                      <div class='txt-line font-weight-600'>닉네임1</div>
                      <div class='aacy'>15분 전</div>
                    </div>
                  </div>
                  <div class='new-story-list-wrap'>
                    <div class='new-story-img-box'>
                      <img
                        class='new-story-img'
                        src='https://images.unsplash.com/photo-1671311576479-21411c2ddfb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                      />
                    </div>
                    <div class='nickname-time'>
                      <div class='txt-line font-weight-600'>닉네임</div>
                      <div class='aacy'>15분 전</div>
                    </div>
                  </div>
                  <div class='new-story-list-wrap'>
                    <div class='new-story-img-box'>
                      <img
                        class='new-story-img'
                        src='https://images.unsplash.com/photo-1671129299578-6a364fb3acd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60'
                      />
                    </div>
                    <div class='nickname-time'>
                      <div class='txt-line font-weight-600'>닉네임</div>
                      <div class='aacy'>15분 전</div>
                    </div>
                  </div>
                  <div class='new-story-list-wrap'>
                    <div class='new-story-img-box'>
                      <img
                        class='new-story-img'
                        src='https://images.unsplash.com/photo-1671212041181-b54a69ea66e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60'
                      />
                    </div>
                    <div class='nickname-time'>
                      <div class='txt-line font-weight-600'>닉네임</div>
                      <div class='aacy'>15분 전</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class='recommended-container'>
                <div class='space-between font-weight-600'>
                  <span class='aacy'>회원님을 위한 추천</span>
                  <span>모두 보기</span>
                </div>

                {/* <!-- 추천 리스트 --> */}
                <div class='recommended-list scroll-hide'>
                  <div class='space-between'>
                    <div class='new-story-list-wrap'>
                      <div class='new-recommended-img-box'>
                        <img
                          class='new-story-img'
                          src='https://images.unsplash.com/photo-1603258849049-b89ebe66c994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60'
                        />
                      </div>
                      <div class='nickname-time'>
                        <div class='txt-line font-weight-600'>
                          닉네임1asdasd
                        </div>
                        <div class='txt-line aacy'>
                          asdasdasdfasdfasdfasdfasdfasdfaasdasd
                        </div>
                      </div>
                    </div>
                    <div class='font-bluefont-weight-600'>팔로우</div>
                  </div>
                  <div class='space-between'>
                    <div class='new-story-list-wrap'>
                      <div class='new-recommended-img-box'>
                        <img
                          class='new-story-img'
                          src='https://images.unsplash.com/photo-1671287415149-e68a44697373?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OXx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60'
                        />
                      </div>
                      <div class='nickname-time'>
                        <div class='txt-line font-weight-600'>
                          닉네임1asdasd
                        </div>
                        <div class='txt-line aacy'>
                          asdasdasdfasdfasdfasdfasdfasdfaasdasd
                        </div>
                      </div>
                    </div>
                    <div class='font-blue font-weight-600'>팔로우</div>
                  </div>
                  <div class='space-between'>
                    <div class='new-story-list-wrap'>
                      <div class='new-recommended-img-box'>
                        <img
                          class='new-story-img'
                          src='https://images.unsplash.com/photo-1671212041183-305f7f92ad1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60'
                        />
                      </div>
                      <div class='nickname-time'>
                        <div class='txt-line font-weight-600'>
                          닉네임1asdasd
                        </div>
                        <div class='txt-line aacy'>
                          asdasdasdfasdfasdfasdfasdfasdfaasdasd
                        </div>
                      </div>
                    </div>
                    <div class='font-blue font-weight-600'>팔로우</div>
                  </div>
                  <div class='space-between'>
                    <div class='new-story-list-wrap'>
                      <div class='new-recommended-img-box'>
                        <img
                          class='new-story-img'
                          src='https://images.unsplash.com/photo-1671229381042-0d157ad8f459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5MHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60'
                        />
                      </div>
                      <div class='nickname-time'>
                        <div class='txt-line font-weight-600'>
                          닉네임1asdasd
                        </div>
                        <div class='txt-line aacy'>
                          asdasdasdfasdfasdfasdfasdfasdfaasdasd
                        </div>
                      </div>
                    </div>
                    <div class='font-blue font-weight-600'>팔로우</div>
                  </div>
                  <div class='space-between'>
                    <div class='new-story-list-wrap'>
                      <div class='new-recommended-img-box'>
                        <img
                          class='new-story-img'
                          src='https://images.unsplash.com/photo-1671212041181-bf00314b1864?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60'
                        />
                      </div>
                      <div class='nickname-time'>
                        <div class='txt-line font-weight-600'>
                          닉네임1asdasd
                        </div>
                        <div class='txt-line aacy'>
                          asdasdasdfasdfasdfasdfasdfasdfaasdasd
                        </div>
                      </div>
                    </div>
                    <div class='font-blue font-weight-600'>팔로우</div>
                  </div>
                </div>
              </div>
            </div>
            <footer class='footer-wrap'>
              <ul>
                <li>
                  <a href=''>Instagram 정보</a>
                </li>
                &nbsp·&nbsp
                <li>
                  <a href=''>지원</a>
                </li>
                &nbsp·&nbsp
                <li>
                  <a href=''>홍보 센터</a>
                </li>
                &nbsp·&nbsp
                <li>
                  <a href=''>API</a>
                </li>
                &nbsp·&nbsp
                <li>
                  <a href=''>채용 정보</a>
                </li>
                &nbsp·&nbsp
                <li>
                  <a href=''>개인정보처리방침</a>
                </li>
                &nbsp·&nbsp
                <li>
                  <a href=''>약관</a>
                </li>
                &nbsp·&nbsp
                <li>
                  <a href=''>디렉터리</a>
                </li>
                &nbsp·&nbsp
                <li>
                  <a href=''>프로필</a>
                </li>
                &nbsp·&nbsp
                <li>
                  <a href=''>해시태그</a>
                </li>
                &nbsp·&nbsp
                <li>
                  <a href=''>언어</a>
                </li>
              </ul>
              <div>2022 INSTAGRAM</div>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
