import { useViewportScroll } from 'framer-motion';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import InView from 'react-intersection-observer';
import { useRecoilState } from 'recoil';
import {
	isDeliveryCollapseAtom,
	isInquiryCollapseAtom,
	productSpecAtom,
} from '../atoms';
import MobileUserGallery from './MobileUserGallery';
import ProductSlider from './ProductSlider';
import TabletUserGallery from './TabletUserGallery';
import { Helmet } from 'react-helmet';

function MainProduct() {
	const [productSpecState, setProductSpecState] =
		useRecoilState(productSpecAtom);
	const [productTabOrder, setProductTabOrder] = useState(0);
	const [observerArr, setObserverArr] = useState<HTMLElement[]>([]);

	const [isInquiryCollapse, setisInquiryCollapse] = useRecoilState(
		isInquiryCollapseAtom
	);

	const [isDeliveryCollapse, setIsDeliveryCollapse] = useRecoilState(
		isDeliveryCollapseAtom
	);

	useLayoutEffect(() => {
		const productSpec: HTMLElement = document.querySelector('#spec')!;
		const productReview: HTMLElement = document.querySelector('#review')!;
		const productInquiry: HTMLElement = document.querySelector('#inquiry')!;
		const productDelivery: HTMLElement = document.querySelector('#delivery')!;
		const productRecommendation: HTMLElement =
			document.querySelector('#recommendation')!;

		setObserverArr([
			productSpec,
			productReview,
			productInquiry,
			productDelivery,
			productRecommendation,
		]);
	}, []);

	function returnNumberToTabName(order: number): HTMLElement {
		if (order === 0) {
			return document.querySelector('.product-tab-spec')?.parentElement!;
		} else if (order === 1) {
			return document.querySelector('.product-tab-review')?.parentElement!;
		} else if (order === 2) {
			return document.querySelector('.product-tab-inquiry')?.parentElement!;
		} else if (order === 3) {
			return document.querySelector('.product-tab-delivery')?.parentElement!;
		} else if (order === 4) {
			return document.querySelector('.product-tab-recommendation')
				?.parentElement!;
		} else {
			return document.querySelector('.product-tab-spec')?.parentElement!;
		}
	}

	function addClassEvent(index: number) {
		observerArr.forEach((el, i) => {
			if (el !== observerArr[index]) {
				returnNumberToTabName(i).classList.remove('is-active');
			} else {
				returnNumberToTabName(i).classList.add('is-active');
			}
		});
	}

	const productTab: NodeListOf<Element> =
		document.querySelectorAll('.product-tab-item');

	productTab.forEach((el, index) => {
		el.addEventListener('click', () => {
			if (index === 0) {
				if (window.innerWidth <= 768) {
					console.log(
						document.querySelector<HTMLElement>(
							'.product-section.product-spec.sm-only'
						)?.offsetTop
					);
					window.scrollTo({
						top:
							Number(
								document.querySelector<HTMLElement>(
									'.product-section.product-spec.sm-only'
								)?.offsetTop
							) - 130,
						behavior: 'smooth',
					});
				} else {
					window.scrollTo({
						top:
							Number(
								document.querySelector<HTMLElement>(
									'.product-section.product-spec.sm-hidden.is-open'
								)?.offsetTop
							) - 184,
						behavior: 'smooth',
					});
				}
			} else {
				window.scrollTo({
					top: Number(observerArr[index].offsetTop) - 184,
					behavior: 'smooth',
				});
			}
		});
	});

	return (
		<>
			<Helmet>
				<title>
					??????????????? &#62; [???????????????] [????????????] 24???????????????! ?????????
					??????/??????????????? BEST ????????? | ???????????? ???????????? ???????????? ?????????
				</title>
			</Helmet>
			{/* <!-- main-product --> */}
			<div className="product-show">
				<div className="product-info-wrapper">
					<div className="container">
						{/* <!-- Breadcrumb --> */}
						<div className="row">
							<div className="col-sm-4">
								<div className="breadcrumb">
									<ol className="breadcrumb-list">
										<li className="breadcrumb-item">
											<a href="/">??????</a>
											<i className="ic-chevron" aria-hidden></i>
										</li>
										<li className="breadcrumb-item">
											<a href="/">????????????</a>
											<i className="ic-chevron" aria-hidden></i>
										</li>
										<li className="breadcrumb-item">
											<a href="/">????????????/?????????</a>
											<i className="ic-chevron" aria-hidden></i>
										</li>
										<li className="breadcrumb-item">
											<a href="/">????????????</a>
										</li>
									</ol>
								</div>
							</div>
						</div>

						<div className="row">
							{/* <!-- product-slider --> */}
							<ProductSlider />

							{/* <!-- product-info --> */}
							<div className="col-sm-4 col-md-6 col-lg-5">
								<div className="product-info">
									<a href="/" className="info-brand">
										?????????
									</a>
									<h1 className="info-title">
										??????/????????? 400W ????????? ???????????? VO-HT015 (????????????????????????)
									</h1>
									<div className="info-review">
										<div className="star-rating">
											<i className="ic-star is-active"></i>
											<i className="ic-star is-active"></i>
											<i className="ic-star is-active"></i>
											<i className="ic-star is-active"></i>
											<i className="ic-star is-active"></i>
										</div>
										<p>
											<strong>566</strong>
											<span className="sm-hidden">??? ??????</span>
										</p>
									</div>

									{/* <!-- ????????? info-price --> */}
									<div className="info-price sm-only">
										<div className="info-price-original">
											<span className="rate">34</span>
											<span className="percent">%</span>
											<div className="price-off">
												<strong className="amount">49,900</strong>
												<span className="currency sm-hidden">???</span>
											</div>
										</div>
										<div>
											<div className="info-price-off">
												<div className="price-20">
													<strong className="amount">32,900</strong>
													<span className="currency">???</span>
												</div>
												<div className="tag-red">??????</div>
											</div>
										</div>
									</div>

									{/* <!-- ????????? ????????? info-price --> */}
									<div className="info-price sm-hidden">
										<div className="info-price-original">
											<span className="rate">34</span>
											<span className="percent">%</span>
										</div>
										<div className="info-price-off-wrapper">
											<div className="price-off">
												<strong className="amount">49,900</strong>
												<span className="currency">???</span>
											</div>
											<div className="info-price-off">
												<div className="price-32">
													<strong className="amount">32,900</strong>
													<span className="currency">???</span>
												</div>
												<div className="tag-red">??????</div>
											</div>
										</div>
									</div>

									<p className="info-benefit">
										<strong>987P</strong>?????????????????????. (VIP 3??? ?????? ?????????)
									</p>

									<div className="info-delivery">
										<span>????????????</span>
										<div className="tag-gray">????????????</div>
									</div>
								</div>

								{/* <!-- product-selling-option-form --> */}
								<form
									className="product-selling-option-form lg-only"
									action="/"
									method="post"
								>
									<div className="select-group select-group01 is-active">
										<select
											className="form-select"
											defaultValue="default"
											required
										>
											<option value="default" disabled>
												??????
											</option>
											<option value="0">???????????? 1</option>
											<option value="1">???????????? 2</option>
											<option value="2">???????????? 3</option>
											<option value="3">???????????? 4</option>
											<option value="4">???????????? 5</option>
										</select>
										<i className="ic-caret" aria-hidden></i>
									</div>

									<div className="select-group select-group02">
										<select className="form-select" defaultValue="default">
											<option value="default" disabled>
												????????????(??????)
											</option>
											<option value="0">???????????? 1</option>
											<option value="1">???????????? 2</option>
											<option value="2">???????????? 3</option>
											<option value="3">???????????? 4</option>
											<option value="4">???????????? 5</option>
										</select>
										<i className="ic-caret" aria-hidden></i>
									</div>

									<div className="selling-option-form-price">
										<span className="order-price">????????????</span>
										<div className="price-20">
											<strong className="amount">0</strong>
											<span className="currency">???</span>
										</div>
									</div>

									<div className="selling-option-form-button-group">
										<button className="btn-55 btn-outlined" type="button">
											????????????
										</button>
										<button className="btn-55 btn-primary" type="submit">
											????????????
										</button>
									</div>
								</form>
								<div
									className="product-section-divider sm-only"
									aria-hidden
								></div>
							</div>
						</div>

						<MobileUserGallery />
					</div>
				</div>

				{/* <!-- product-tab --> */}
				<div className="product-tab">
					<div className="container">
						<div className="row">
							<div className="col-sm-4 col-lg-8">
								<ul className="product-tab-list">
									<li
										className={`product-tab-item ${
											productTabOrder === 0 ? 'is-active' : ''
										}`}
									>
										<button className="product-tab-spec" type="button">
											????????????
										</button>
									</li>
									<li
										className={`product-tab-item ${
											productTabOrder === 1 ? 'is-active' : ''
										}`}
									>
										<button className="product-tab-review" type="button">
											??????<strong>466</strong>
										</button>
									</li>
									<li
										className={`product-tab-item ${
											productTabOrder === 2 ? 'is-active' : ''
										}`}
									>
										<button className="product-tab-inquiry" type="button">
											??????<strong>96</strong>
										</button>
									</li>
									<li
										className={`product-tab-item ${
											productTabOrder === 3 ? 'is-active' : ''
										}`}
									>
										<button className="product-tab-delivery" type="button">
											??????/??????
										</button>
									</li>
									<li
										className={`product-tab-item ${
											productTabOrder === 4 ? 'is-active' : ''
										}`}
									>
										<button
											className="product-tab-recommendation"
											type="button"
										>
											??????
										</button>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div className="container">
					<div className="row">
						<div className="col-sm-4 col-lg-8">
							{/* <!-- product-user-gallery tablet/desktop --> */}
							<TabletUserGallery />

							{/* <!-- product-spec --> */}
							<InView>
								{({ ref, entry, inView }) => {
									if (entry && window.innerWidth <= 768) {
										// ????????? if?????? ????????? ??? ???
										if (!entry.isIntersecting && entry.intersectionRatio > 0) {
											//????????? ????????????
											if (entry?.boundingClientRect.y < 0) {
												addClassEvent(1);
											} else {
												addClassEvent(0);
											}
										}
										// ????????? ?????? ??? ???
										if (!inView && entry?.boundingClientRect.y < 0) {
											addClassEvent(1);
										}
									}

									return (
										<div
											className={`product-section product-spec sm-only ${
												productSpecState ? 'is-open' : ''
											}`}
											data-product="spec"
											id="spec-mobile"
											ref={ref}
										>
											<div className="product-spec-content">
												<header className="product-section-header sm-hidden">
													<h1 className="title">????????????</h1>
												</header>

												<div className="button-wrapper sm-only">
													<button
														onClick={() => {
															setProductSpecState(true);
														}}
														className="btn-55 btn-primary"
														type="button"
													>
														?????????
													</button>
												</div>

												<figure>
													<img src="./assets/images/img-detail-01.jpg" alt="" />
													<figcaption className="visually-hidden">
														?????? ?????? ?????????1
													</figcaption>
												</figure>
												<figure>
													<img src="./assets/images/img-detail-02.jpg" alt="" />
													<figcaption className="visually-hidden">
														?????? ?????? ?????????2
													</figcaption>
												</figure>
												<figure>
													<img src="./assets/images/img-detail-03.jpg" alt="" />
													<figcaption className="visually-hidden">
														?????? ?????? ?????????3
													</figcaption>
												</figure>
												<figure>
													<img src="./assets/images/img-detail-04.jpg" alt="" />
													<figcaption className="visually-hidden">
														?????? ?????? ?????????4
													</figcaption>
												</figure>
												<figure>
													<img src="./assets/images/img-detail-05.jpg" alt="" />
													<figcaption className="visually-hidden">
														?????? ?????? ?????????5
													</figcaption>
												</figure>
												<figure>
													<img src="./assets/images/img-detail-06.jpg" alt="" />
													<figcaption className="visually-hidden">
														?????? ?????? ?????????6
													</figcaption>
												</figure>

												<table className="product-table">
													<tbody>
														<tr>
															<th>?????? ??? ?????????</th>
															<td>VO-HT015</td>
														</tr>
														<tr>
															<th>KC ?????? ??? ??????</th>
															<td>SU071586-19003</td>
														</tr>
														<tr>
															<th>????????????, ????????????</th>
															<td>AC220V, 60Hz, 400W</td>
														</tr>
														<tr>
															<th>???????????????????????????</th>
															<td>??????????????????</td>
														</tr>
														<tr>
															<th>??????????????? ????????????</th>
															<td>2019.11</td>
														</tr>
														<tr>
															<th>?????????, ???????????? ?????? ???????????? ?????? ??????</th>
															<td>VO-HT015</td>
														</tr>
														<tr>
															<th>?????????</th>
															<td>??????</td>
														</tr>
														<tr>
															<th>??????</th>
															<td>338*122*300 mm</td>
														</tr>
														<tr>
															<th>???????????????</th>
															<td>?????????</td>
														</tr>
														<tr>
															<th>??????????????????</th>
															<td>??????????????????</td>
														</tr>
														<tr>
															<th>??????????????????</th>
															<td>?????????????????? 1??? ?????? ?????? A/S??????</td>
														</tr>
														<tr>
															<th>A/S ???????????? ????????????</th>
															<td>1661-4555</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									);
								}}
							</InView>
							<InView threshold={0.4}>
								{({ ref, entry, inView }) => {
									if (entry) {
										if (
											!entry.isIntersecting &&
											entry.intersectionRatio > 0 &&
											window.innerWidth > 768
										) {
											if (entry?.boundingClientRect.y < 0) {
												addClassEvent(1);
											} else {
												addClassEvent(0);
											}
										}
										if (!inView && entry?.boundingClientRect.y < 0) {
											addClassEvent(1);
										}
									}

									return (
										<div className="product-section product-spec sm-hidden is-open">
											<div className="product-spec-content">
												<header
													className="product-section-header sm-hidden"
													id="spec"
												>
													<h1 className="title">????????????</h1>
												</header>

												<div className="button-wrapper sm-only">
													<button className="btn-55 btn-primary" type="button">
														?????????
													</button>
												</div>

												<figure>
													<img src="./assets/images/img-detail-01.jpg" alt="" />
													<figcaption className="visually-hidden">
														?????? ?????? ?????????1
													</figcaption>
												</figure>
												<figure>
													<img src="./assets/images/img-detail-02.jpg" alt="" />
													<figcaption className="visually-hidden">
														?????? ?????? ?????????2
													</figcaption>
												</figure>
												<figure>
													<img src="./assets/images/img-detail-03.jpg" alt="" />
													<figcaption className="visually-hidden">
														?????? ?????? ?????????3
													</figcaption>
												</figure>
												<figure>
													<img src="./assets/images/img-detail-04.jpg" alt="" />
													<figcaption className="visually-hidden">
														?????? ?????? ?????????4
													</figcaption>
												</figure>
												<figure>
													<img src="./assets/images/img-detail-05.jpg" alt="" />
													<figcaption className="visually-hidden">
														?????? ?????? ?????????5
													</figcaption>
												</figure>
												<figure>
													<img src="./assets/images/img-detail-06.jpg" alt="" />
													<figcaption className="visually-hidden">
														?????? ?????? ?????????6
													</figcaption>
												</figure>

												<table className="product-table" ref={ref}>
													<tbody>
														<tr>
															<th>?????? ??? ?????????</th>
															<td>VO-HT015</td>
														</tr>
														<tr>
															<th>KC ?????? ??? ??????</th>
															<td>SU071586-19003</td>
														</tr>
														<tr>
															<th>????????????, ????????????</th>
															<td>AC220V, 60Hz, 400W</td>
														</tr>
														<tr>
															<th>???????????????????????????</th>
															<td>??????????????????</td>
														</tr>
														<tr>
															<th>??????????????? ????????????</th>
															<td>2019.11</td>
														</tr>
														<tr>
															<th>?????????, ???????????? ?????? ???????????? ?????? ??????</th>
															<td>VO-HT015</td>
														</tr>
														<tr>
															<th>?????????</th>
															<td>??????</td>
														</tr>
														<tr>
															<th>??????</th>
															<td>338*122*300 mm</td>
														</tr>
														<tr>
															<th>???????????????</th>
															<td>?????????</td>
														</tr>
														<tr>
															<th>??????????????????</th>
															<td>??????????????????</td>
														</tr>
														<tr>
															<th>??????????????????</th>
															<td>?????????????????? 1??? ?????? ?????? A/S??????</td>
														</tr>
														<tr>
															<th>A/S ???????????? ????????????</th>
															<td>1661-4555</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									);
								}}
							</InView>
							<div
								className="product-section-divider sm-only"
								aria-hidden
							></div>

							{/* <!-- product-review --> */}
							<InView threshold={0.4}>
								{({ ref, entry, inView }) => {
									if (entry) {
										if (!entry.isIntersecting && entry.intersectionRatio > 0) {
											if (entry?.boundingClientRect.y < 0) {
												addClassEvent(2);
											} else {
												addClassEvent(0);
											}
										}
									}

									return (
										<div
											className="product-section product-review"
											data-product="review"
											id="review"
											ref={ref}
										>
											<header className="product-section-header">
												<h1 className="title">??????</h1>
												<strong className="badge" aria-label="?????? 566???">
													566
												</strong>
												<button className="icon-button" type="button">
													????????????
												</button>
											</header>

											<div className="product-review-content">
												<div className="product-review-summary">
													<div className="summary-score">
														<strong aria-label="?????? 4.8???">4.8</strong>
														<div className="star-rating">
															<i className="ic-star is-active"></i>
															<i className="ic-star is-active"></i>
															<i className="ic-star is-active"></i>
															<i className="ic-star is-active"></i>
															<i className="ic-star is-active"></i>
														</div>
													</div>

													<div className="summary-detail">
														<ul className="summary-detail-list">
															<li className="summary-detail-item">
																<strong>5???</strong>
																<div className="summary-detail-bar-wrapper">
																	<div className="summary-detail-bar"></div>
																</div>
																<span
																	className="badge"
																	aria-label="5??? ?????? 467???"
																>
																	467
																</span>
															</li>
															<li className="summary-detail-item">
																<strong>4???</strong>
																<div className="summary-detail-bar-wrapper">
																	<div className="summary-detail-bar"></div>
																</div>
																<span
																	className="badge"
																	aria-label="4??? ?????? 87???"
																>
																	87
																</span>
															</li>
															<li className="summary-detail-item">
																<strong>3???</strong>
																<div className="summary-detail-bar-wrapper">
																	<div className="summary-detail-bar"></div>
																</div>
																<span
																	className="badge"
																	aria-label="3??? ?????? 13"
																>
																	13
																</span>
															</li>
															<li className="summary-detail-item">
																<strong>2???</strong>
																<div className="summary-detail-bar-wrapper">
																	<div className="summary-detail-bar"></div>
																</div>
																<span
																	className="badge"
																	aria-label="2??? ?????? 0???"
																>
																	0
																</span>
															</li>
															<li className="summary-detail-item">
																<strong>1???</strong>
																<div className="summary-detail-bar-wrapper">
																	<div className="summary-detail-bar"></div>
																</div>
																<span
																	className="badge"
																	aria-label="1??? ?????? 0???"
																>
																	0
																</span>
															</li>
														</ul>
													</div>
												</div>

												<ol className="review-list">
													{/* <!-- ???????????? ??????, ????????? ????????? ???????????? ????????? ??? --> */}
													<li className="review-item">
														<article className="review-card">
															<header className="review-card-header">
																<h1 className="visually-hidden">
																	??????1?????? ???????????? ??????
																</h1>
																<a href="/" className="avatar-24">
																	<img
																		src="./assets/images/img-user-01.jpg"
																		alt="?????? ?????????"
																	/>
																</a>
																<div className="info">
																	<h2 className="username">??????1</h2>
																	<div className="detail">
																		<div className="star-rating-13">
																			<i className="ic-star is-active"></i>
																			<i className="ic-star is-active"></i>
																			<i className="ic-star is-active"></i>
																			<i className="ic-star is-active"></i>
																			<i className="ic-star is-active"></i>
																		</div>
																		<time dateTime="2021-01-01">
																			2021.01.01
																		</time>
																		<span>???????????? ??????</span>
																	</div>
																</div>
															</header>
															<div className="review-card-body">
																<p>
																	??? ????????? ????????????????????? ???????????? ??????
																	??????????????? ??????????????? ????????????. ??? ????????? ??????
																	?????? ?????? ?????? ?????? ?????? ????????? ?????? ?????????.
																	???????????? ????????????
																</p>
															</div>
															<footer className="review-card-footer">
																<button
																	className="btn-32 btn-outlined"
																	type="button"
																>
																	????????? ??????
																</button>
																<p>
																	<strong aria-label="7???">7</strong>?????????
																	????????? ???????????????.
																</p>
															</footer>
														</article>
													</li>

													{/* <!-- ???????????? ??????, ????????? ????????? ???????????? ??? --> */}
													<li className="review-item">
														<article className="review-card">
															<header className="review-card-header">
																<h1 className="visually-hidden">
																	??????2?????? ???????????? ??????
																</h1>
																<a href="/" className="avatar-24">
																	<img
																		src="./assets/images/img-user-01.jpg"
																		alt="?????? ?????????"
																	/>
																</a>
																<div className="info">
																	<h2 className="username">??????2</h2>
																	<div className="detail">
																		<div className="star-rating-13">
																			<i className="ic-star is-active"></i>
																			<i className="ic-star is-active"></i>
																			<i className="ic-star is-active"></i>
																			<i className="ic-star is-active"></i>
																			<i className="ic-star is-active"></i>
																		</div>
																		<time dateTime="2021-01-01">
																			2021.01.01
																		</time>
																		<span>???????????? ??????</span>
																	</div>
																</div>
															</header>
															<div className="review-card-body">
																<div className="review-image">
																	<img
																		src="./assets/images/img-review-03.jpg"
																		alt=""
																	/>
																</div>
																<p>
																	????????? ????????? ???????????? ??? ????????? ??? ?????????
																	???????????? ???????????? ?????????! ????????? ?????????!
																</p>
															</div>
															<footer className="review-card-footer">
																<button
																	className="btn-32 btn-primary"
																	type="button"
																>
																	<i className="ic-check"></i>?????????
																</button>
																<p>
																	<strong aria-label="7???">3</strong>?????????
																	????????? ???????????????.
																</p>
															</footer>
														</article>
													</li>

													<li className="review-item">
														<article className="review-card">
															<header className="review-card-header">
																<h1 className="visually-hidden">
																	??????3?????? ???????????? ??????
																</h1>
																<a
																	href="/"
																	className="avatar-24"
																	target="_blank"
																	rel="noreferrer noopener"
																>
																	1
																</a>
																<div className="info">
																	<h2 className="username">??????3</h2>
																	<div className="detail">
																		<div className="star-rating-13">
																			<i className="ic-star is-active"></i>
																			<i className="ic-star is-active"></i>
																			<i className="ic-star is-active"></i>
																			<i className="ic-star is-active"></i>
																			<i className="ic-star is-active"></i>
																		</div>
																		<time dateTime="2021-01-01">
																			2021.01.01
																		</time>
																		<span>???????????? ??????</span>
																	</div>
																</div>
															</header>
															<div className="review-card-body">
																<p>
																	??????????????? ?????? ???????????? ?????? ?????? ?????????
																	????????? ???????????????! ???????????? ???????????? ?????????
																	???????????? ?????? ?????????????????? ?????? ??????
																</p>
															</div>
															<footer className="review-card-footer">
																<button
																	className="btn-32 btn-outlined"
																	type="button"
																>
																	????????? ??????
																</button>
																<p>
																	<strong aria-label="7???">7</strong>?????????
																	????????? ???????????????.
																</p>
															</footer>
														</article>
													</li>
												</ol>

												<div className="pagination">
													<button
														className="page-control page-prev"
														type="button"
													>
														<i className="ic-chevron"></i>
													</button>
													<ol className="page-list">
														<li className="page-item is-active">
															<a href="/">1</a>
														</li>
														<li className="page-item">
															<a href="/">2</a>
														</li>
														<li className="page-item">
															<a href="/">3</a>
														</li>
														<li className="page-item">
															<a href="/">4</a>
														</li>
														<li className="page-item">
															<a href="/">5</a>
														</li>
													</ol>
													<button
														className="page-control page-next"
														type="button"
													>
														<i className="ic-chevron"></i>
													</button>
												</div>
											</div>
										</div>
									);
								}}
							</InView>
							<div
								className="product-section-divider sm-only"
								aria-hidden
							></div>

							{/* <!-- product-inquiry --> */}
							<header
								onClick={() => {
									setisInquiryCollapse(true);
								}}
								className={`product-section-header product-inquiry-collapse sm-only ${
									isInquiryCollapse ? 'visually-hidden' : 'visually-hidden'
								}`}
							>
								<h1 className="title">??????</h1>
								<strong className="badge" aria-label="?????? 96???">
									96
								</strong>
								<button className="icon-button" type="button">
									<i className="ic-chevron"></i>
								</button>
							</header>
							<InView threshold={0.4}>
								{({ ref, entry, inView }) => {
									if (entry) {
										if (!entry.isIntersecting && entry.intersectionRatio > 0) {
											if (entry?.boundingClientRect.y < 0) {
												addClassEvent(3);
											} else {
												addClassEvent(1);
											}
										}
									}

									return (
										<div
											className={`product-section product-inquiry ${
												isInquiryCollapse ? '' : '' // ????????? ?????? is-collapse
											} `}
											data-product="inquiry"
											id="inquiry"
											ref={ref}
										>
											<header className="product-section-header">
												<h1 className="title">??????</h1>
												<strong className="badge" aria-label="?????? 96???">
													96
												</strong>
												<button className="icon-button" type="button">
													????????????
												</button>
											</header>

											<div className="product-inquiry-content">
												<ol className="inquiry-list">
													{/* <!-- ?????? + ????????? --> */}
													<li className="inquiry-item">
														<div className="inquiry-card">
															<dl className="inquiry-card-detail">
																<dt className="visually-hidden">?????? ??????</dt>
																<dd>??????</dd>
																<dt className="visually-hidden">?????? ??????</dt>
																<dd>??????</dd>
																<dt className="visually-hidden">?????? ??????</dt>
																<dd>?????????</dd>
															</dl>

															<div className="inquiry-card-date">
																<h2>??????*</h2>
																<time dateTime="2021-01-01 12:34">
																	2021??? 1??? 1??? 12??? 34???
																</time>
															</div>

															<div className="inquiry-card-body">
																<div className="question-content">
																	<h2 aria-label="?????? ??????">Q</h2>
																	<p>
																		?????????????????? ??????????????? ????????? ??????????????????
																		?????? ?????? ????????? ???????????? ??????????????????
																		???????????????...? ??????????????? ?????????? ????????????
																		?????????????????? ??? ????????? ??? ????????????!
																		???????????????????????? ???????????? ???????????? ??????
																		?????????????????????
																	</p>
																</div>
															</div>
														</div>
													</li>

													{/* <!-- ?????? + ?????? --> */}
													<li className="inquiry-item">
														<div className="inquiry-card">
															<dl className="inquiry-card-detail">
																<dt className="visually-hidden">?????? ??????</dt>
																<dd>??????</dd>
																<dt className="visually-hidden">?????? ??????</dt>
																<dd>??????</dd>
																<dt className="visually-hidden">?????? ??????</dt>
																<dd className="is-answered">????????????</dd>
															</dl>

															<div className="inquiry-card-date">
																<h2>??????*</h2>
																<time dateTime="2021-01-01 12:34">
																	2021??? 1??? 1??? 12??? 34???
																</time>
															</div>

															<div className="inquiry-card-body">
																<div className="question-content">
																	<h2 aria-label="?????? ??????">Q</h2>
																	<p>
																		?????????????????? ??????????????? ????????? ??????????????????
																		?????? ?????? ????????? ???????????? ??????????????????
																		???????????????...? ??????????????? ?????????? ????????????
																		?????????????????? ??? ????????? ??? ????????????!
																		???????????????????????? ???????????? ???????????? ??????
																		?????????????????????
																	</p>
																</div>

																<div className="answer-card">
																	<h2 aria-label="?????? ??????">A</h2>
																	<div className="answer-info">
																		<div className="answer-header">
																			<h2>OA</h2>
																			<time dateTime="2021-01-04 09:03">
																				2021??? 1??? 4??? 09??? 03???
																			</time>
																		</div>
																		<p>
																			??????????????? ?????????, ??????????????????:) ??????
																			???????????? ?????? ????????? ???????????? ?????? ??????
																			??????????????? ????????? ??? ?????? ??????????????????.
																			???????????? ????????? ?????? ?????? ??????????????? ??????
																			?????? ??????????????? ?????? ?????? ????????????
																			????????????. ?????? ??? ????????? ?????? ?????? ?????????
																			??? ????????? ?????????????????????. ???????????????.
																		</p>
																	</div>
																</div>
															</div>
														</div>
													</li>

													{/* <!-- ????????? + ????????? --> */}
													<li className="inquiry-item">
														<div className="inquiry-card">
															<dl className="inquiry-card-detail">
																<dt className="visually-hidden">?????? ??????</dt>
																<dd>??????</dd>
																<dt className="visually-hidden">?????? ??????</dt>
																<dd>??????</dd>
																<dt className="visually-hidden">?????? ??????</dt>
																<dd>?????????</dd>
															</dl>

															<div className="inquiry-card-date">
																<h2>??????*</h2>
																<time dateTime="2021-01-01 12:34">
																	2021??? 1??? 1??? 12??? 34???
																</time>
															</div>

															<div className="inquiry-card-body">
																<div className="question-content">
																	<h2 aria-label="?????? ??????">Q</h2>
																	<p>
																		<i className="ic-lock"></i>??????????????????.
																	</p>
																</div>
															</div>
														</div>
													</li>

													{/* <!-- ????????? + ????????? --> */}
													<li className="inquiry-item">
														<div className="inquiry-card">
															<dl className="inquiry-card-detail">
																<dt className="visually-hidden">?????? ??????</dt>
																<dd>??????</dd>
																<dt className="visually-hidden">?????? ??????</dt>
																<dd>??????</dd>
																<dt className="visually-hidden">?????? ??????</dt>
																<dd className="is-answered">?????? ??????</dd>
															</dl>

															<div className="inquiry-card-date">
																<h2>??????*</h2>
																<time dateTime="2021-01-01 12:34">
																	2021??? 1??? 1??? 12??? 34???
																</time>
															</div>

															<div className="inquiry-card-body">
																<div className="question-content">
																	<h2 aria-label="?????? ??????">Q</h2>
																	<p>
																		<i className="ic-lock"></i>??????????????????.
																	</p>
																</div>
															</div>
														</div>
													</li>
												</ol>

												<div className="pagination">
													<button
														className="page-control page-prev"
														type="button"
													>
														<i className="ic-chevron"></i>
													</button>
													<ol className="page-list">
														<li className="page-item is-active">
															<a href="/">1</a>
														</li>
														<li className="page-item">
															<a href="/">2</a>
														</li>
														<li className="page-item">
															<a href="/">3</a>
														</li>
														<li className="page-item">
															<a href="/">4</a>
														</li>
														<li className="page-item">
															<a href="/">5</a>
														</li>
													</ol>
													<button
														className="page-control page-next"
														type="button"
													>
														<i className="ic-chevron"></i>
													</button>
												</div>
											</div>
										</div>
									);
								}}
							</InView>
							<div
								className="product-section-divider sm-only"
								aria-hidden
							></div>

							{/* <!-- product-deliver/refund --> */}
							<header
								onClick={() => {
									setIsDeliveryCollapse(true);
								}}
								className={`product-section-header product-deliver-collapse sm-only ${
									isDeliveryCollapse ? 'visually-hidden' : 'visually-hidden'
								}`}
								data-product="delivery-mobile"
								id="delivery-mobile"
							>
								<h1 className="title">??????/??????/??????</h1>
								<button className="icon-button" type="button">
									<i className="ic-chevron"></i>
								</button>
							</header>
							{/* <!-- product-deliver --> */}
							<InView threshold={0.4}>
								{({ ref, entry, inView }) => {
									if (entry) {
										if (!entry.isIntersecting && entry.intersectionRatio > 0) {
											if (entry?.boundingClientRect.y < 0) {
												addClassEvent(4);
											} else {
												addClassEvent(2);
											}
										}
										if (!inView && entry?.boundingClientRect.y < 0) {
											addClassEvent(4);
										}
									}

									return (
										<div
											className={`product-section product-delivery ${
												isDeliveryCollapse ? '' : '' // ????????? ?????? is-collapse
											} `}
											data-product="delivery"
											id="delivery"
											ref={ref}
										>
											<header className="product-section-header">
												<h1 className="title">??????</h1>
											</header>

											<table className="product-table">
												<tbody>
													<tr>
														<th>??????</th>
														<td>????????????</td>
													</tr>
													<tr>
														<th>?????????</th>
														<td>?????? ??????</td>
													</tr>
													<tr>
														<th>???????????? ??????</th>
														<td>???????????? ????????? ????????????</td>
													</tr>
												</tbody>
											</table>
										</div>
									);
								}}
							</InView>
							<div
								className="product-section-divider sm-only product-deliver-divider"
								aria-hidden
							></div>

							{/* <!-- product-refund --> */}
							<div
								className={`product-section product-refund ${
									isDeliveryCollapse ? '' : '' // ????????? ?????? is-collapse
								}`}
								data-product="refund"
								id="refund"
							>
								<header className="product-section-header">
									<h1 className="title">??????/??????</h1>
								</header>

								<table className="product-table">
									<tbody>
										<tr>
											<th>???????????????</th>
											<td>2,500??? (?????? ???????????? ????????? ?????? 5,000??? ??????)</td>
										</tr>
										<tr>
											<th>???????????????</th>
											<td>5,000???</td>
										</tr>
										<tr>
											<th>????????? ???</th>
											<td>(00000) ?????? ????????? ?????????</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div
								className="product-section-divider sm-only"
								aria-hidden
							></div>

							{/* <!-- product-recommendation --> */}
							<InView threshold={0.4}>
								{({ ref, entry, inView }) => {
									if (entry) {
										if (!entry.isIntersecting && entry.intersectionRatio > 0) {
											if (entry?.boundingClientRect.y < 0) {
												addClassEvent(4);
											} else {
												addClassEvent(3);
											}
										}
										if (inView) {
											addClassEvent(4);
										}
									}

									return (
										<div
											className="product-section product-recommendation"
											data-product="recommendation"
											id="recommendation"
											ref={ref}
										>
											<header className="product-section-header">
												<h1 className="title">????????? ??????</h1>
											</header>
											<div className="recommendation-content">
												<ol className="product-list">
													<li className="product-item">
														<a href="/">
															<div className="product-card">
																<div className="product-card-image">
																	<img
																		src="./assets/images/img-recommendation-01.jpg"
																		alt="?????? ?????? 01"
																	/>
																</div>
																<strong className="product-card-brand">
																	emk
																</strong>
																<h2 className="product-card-title">
																	?????????! ?????? ????????? ???????????? EQH-S161 3??????
																	??????!
																</h2>
																<div className="product-card-price">
																	<span className="rate">72</span>
																	<span className="percent">%</span>
																	<strong className="amount">49,000</strong>
																</div>
																<div className="product-card-summary">
																	<div className="star-rating">
																		<i className="ic-star is-active"></i>
																	</div>
																	<strong aria-label="?????? 4.8???">4.8</strong>
																	<span>?????? 3,605</span>
																</div>
																<div className="tag-gray sm-only">????????????</div>
															</div>
														</a>
													</li>
													<li className="product-item">
														<a href="/">
															<div className="product-card">
																<div className="product-card-image">
																	<img
																		src="./assets/images/img-recommendation-02.jpg"
																		alt="?????? ?????? 01"
																	/>
																</div>
																<strong className="product-card-brand">
																	???????????????????????????{' '}
																</strong>
																<h2 className="product-card-title">
																	???????????? 2??? ?????? XHS-Y010
																</h2>
																<div className="product-card-price">
																	<span className="rate">10</span>
																	<span className="percent">%</span>
																	<strong className="amount">88,200</strong>
																</div>
																<div className="product-card-summary">
																	<div className="star-rating">
																		<i className="ic-star is-active"></i>
																	</div>
																	<strong aria-label="?????? 4.5???">4.5</strong>
																	<span>?????? 28</span>
																</div>
																<div className="tag-gray sm-only">????????????</div>
															</div>
														</a>
													</li>
													<li className="product-item">
														<a href="/">
															<div className="product-card">
																<div className="product-card-image">
																	<img
																		src="./assets/images/img-recommendation-03.jpg"
																		alt="?????? ?????? 01"
																	/>
																</div>
																<strong className="product-card-brand">
																	???????????????????????????{' '}
																</strong>
																<h2 className="product-card-title">
																	???????????? ???????????? 4colors{' '}
																</h2>
																<div className="product-card-price">
																	<span className="rate">23</span>
																	<span className="percent">%</span>
																	<strong className="amount">129,000</strong>
																</div>
																<div className="product-card-summary">
																	<div className="star-rating">
																		<i className="ic-star is-active"></i>
																	</div>
																	<strong aria-label="?????? 4.6???">4.6</strong>
																	<span>?????? 605</span>
																</div>
																<div className="tag-gray sm-only">????????????</div>
															</div>
														</a>
													</li>
													<li className="product-item">
														<a href="/">
															<div className="product-card">
																<div className="product-card-image">
																	<img
																		src="./assets/images/img-recommendation-04.jpg"
																		alt="?????? ?????? 01"
																	/>
																</div>
																<strong className="product-card-brand">
																	?????????
																</strong>
																<h2 className="product-card-title">
																	???????????? ?????? 6??? ?????????
																</h2>
																<div className="product-card-price">
																	<span className="rate">52</span>
																	<span className="percent">%</span>
																	<strong className="amount">56,900</strong>
																</div>
																<div className="product-card-summary">
																	<div className="star-rating">
																		<i className="ic-star is-active"></i>
																	</div>
																	<strong aria-label="?????? 4.6???">4.6</strong>
																	<span>?????? 250</span>
																</div>
																<div className="tag-gray sm-only">????????????</div>
															</div>
														</a>
													</li>
												</ol>
											</div>
										</div>
									);
								}}
							</InView>
							<div
								className="product-section-divider sm-only"
								aria-hidden
							></div>
						</div>

						{/* <!-- floating-order-form --> */}
						<div className="col-lg-4">
							<div className="floating-order-form lg-only">
								<form
									className="product-selling-option-form"
									action="/"
									method="post"
								>
									<div className="floating-order-form-header">
										<div className="select-group select-group01 is-active">
											<select
												className="form-select"
												defaultValue="default"
												required
											>
												<option value="default" disabled>
													??????
												</option>
												<option value="0">???????????? 1</option>
												<option value="1">???????????? 2</option>
												<option value="2">???????????? 3</option>
												<option value="3">???????????? 4</option>
												<option value="4">???????????? 5</option>
											</select>
											<i className="ic-caret" aria-hidden></i>
										</div>

										<div className="select-group select-group02">
											<select className="form-select" defaultValue="default">
												<option value="default" disabled>
													????????????(??????)
												</option>
												<option value="0">???????????? 1</option>
												<option value="1">???????????? 2</option>
												<option value="2">???????????? 3</option>
												<option value="3">???????????? 4</option>
												<option value="4">???????????? 5</option>
											</select>
											<i className="ic-caret" aria-hidden></i>
										</div>
									</div>

									<div className="floating-order-form-footer">
										<div className="selling-option-form-price">
											<span className="order-price">????????????</span>
											<div className="price-20">
												<strong className="amount">0</strong>
												<span className="currency">???</span>
											</div>
										</div>

										<div className="selling-option-form-button-group">
											<button className="btn-48 btn-secondary" type="button">
												????????????
											</button>
											<button className="btn-48 btn-primary" type="submit">
												????????????
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default MainProduct;
