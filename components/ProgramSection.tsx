'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import { CheckCircle2 } from 'lucide-react';

export default function ProgramSection() {
    return (
        <section
            id="program"
            className="py-8 md:py-32 px-4 sm:px-6 lg:px-8"
            style={{ backgroundColor: '#dbcfbf' }}
        >
            <div className="container mx-auto max-w-7xl">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="text-center mb-8"
                >
                    <h2
                        className="mb-6 md:mb-24 text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
                        style={{
                            fontFamily: 'Belleza-Regular, sans-serif',
                            fontWeight: 400,
                            lineHeight: '100%',
                            letterSpacing: '0%',
                            textAlign: 'center',
                            color: '#3B2415',
                        }}
                    >
                        Program
                    </h2>

                    {/* First Text Block */}
                    <div className="mb-4 md:mb-16">
                        <p
                            className="text-lg md:text-xl lg:text-2xl xl:text-3xl"
                            style={{
                                fontFamily: 'Pretendard, sans-serif',
                                fontWeight: 800,
                                lineHeight: '40px',
                                letterSpacing: '0%',
                                textAlign: 'center',
                                color: '#3B2415',
                            }}
                        >
                            도안재는 당신의 몸을 <br />이해하는 것부터 시작합니다.
                        </p>

                    </div>

                    {/* Vertical Separator */}
                    <div
                        className="h-8 md:h-12 mx-auto mb-4 md:mb-16"
                        style={{ 
                            backgroundColor: '#3b2415',
                            width: '2px',
                        }}
                    />

                    {/* Second Text Block */}
                    <div className="mb-6 md:mb-24">
                        <p
                            className="text-base md:text-lg lg:text-xl"
                            style={{
                                fontFamily: 'Pretendard, sans-serif',
                                fontWeight: 500,
                                lineHeight: '26px',
                                letterSpacing: '0%',
                                textAlign: 'center',
                                color: '#3B2415',
                            }}
                        >
                            개인의 체질과 체성분은 물론 <br /> 라이프스타일까지 모두 고려한 <br />{' '}
                            <span
                                className="text-base md:text-lg lg:text-xl"
                                style={{
                                    fontFamily: 'Pretendard, sans-serif',
                                    fontWeight: 700,
                                    lineHeight: '26px',
                                    letterSpacing: '0%',
                                    textAlign: 'center',
                                    color: '#3B2415',
                                }}
                            >
                                맞춤형 테라피 솔루션
                            </span>
                        </p>
                    </div>

                    {/* Consultation Section */}
                    <div className="text-center max-w-3xl mx-auto space-y-4">
                        <div className="flex flex-col items-center gap-4">
                            <CheckCircle2
                                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                                style={{ color: '#3b2415' }}
                            // fill="#3b2415"
                            />
                            <div>
                                <h3
                                    className="mb-2 text-lg md:text-xl lg:text-2xl xl:text-3xl"
                                    style={{
                                        fontFamily: 'Pretendard, sans-serif',
                                        fontWeight: 700,
                                        lineHeight: '100%',
                                        letterSpacing: '0%',
                                        textAlign: 'center',
                                        color: '#3B2415',
                                    }}
                                >
                                    한의학을 접목한 1:1 컨설팅
                                </h3>
                                <p
                                    className="text-base md:text-lg lg:text-xl"
                                    style={{
                                        fontFamily: 'Pretendard, sans-serif',
                                        fontWeight: 500,
                                        lineHeight: '26px',
                                        letterSpacing: '0%',
                                        textAlign: 'center',
                                        color: '#3B2415',
                                    }}
                                >
                                    인바디 체성분 분석은 물론, 한의사와 공동 개발한 <br />
                                    자가 체질 테스트를 통해 내 몸의 균형을 찾고<br />
                                    올바른 솔루션을 제공합니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* First Pair: Images 5 and 6 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-16">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="relative w-full"
                    >
                        <Image
                            src="/images/landing/image5.png"
                            alt="상담사와 함께 하는 맞춤형 1:1컨설팅"
                            width={1200}
                            height={800}
                            className="w-full h-auto"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                            quality={90}
                        />
                        <div
                            className="absolute bottom-0 left-0 right-0 p-16 text-center"
                            style={{ backgroundColor: 'rgba(57, 38, 24, 0.8)' }}
                        >
                            <p
                                className="text-base md:text-lg lg:text-xl"
                                style={{
                                    fontFamily: 'Pretendard, sans-serif',
                                    fontWeight: 700,
                                    lineHeight: '26px',
                                    letterSpacing: '0%',
                                    textAlign: 'center',
                                    verticalAlign: 'middle',
                                    color: '#FFFFFF',
                                }}
                            >
                                상담사와 함께 하는 맞춤형 1:1컨설팅
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="relative w-full"
                    >
                        <Image
                            src="/images/landing/image6.png"
                            alt="꼼꼼한 인바디 체성분 분석"
                            width={1200}
                            height={800}
                            className="w-full h-auto"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                            quality={90}
                        />
                        <div
                            className="absolute bottom-0 left-0 right-0 p-16 text-center"
                            style={{ backgroundColor: 'rgba(57, 38, 24, 0.8)' }}
                        >
                            <p
                                className="text-base md:text-lg lg:text-xl"
                                style={{
                                    fontFamily: 'Pretendard, sans-serif',
                                    fontWeight: 700,
                                    lineHeight: '26px',
                                    letterSpacing: '0%',
                                    textAlign: 'center',
                                    verticalAlign: 'middle',
                                    color: '#FFFFFF',
                                }}
                            >
                                꼼꼼한 인바디 체성분 분석
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Consultation Section 2 */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="text-center max-w-3xl mx-auto space-y-4 mb-8"
                >
                    <div className="flex flex-col items-center gap-4">
                        <CheckCircle2
                            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                            style={{ color: '#3b2415' }}
                        />
                        <div>
                            <h3
                                className="mb-2 text-lg md:text-xl lg:text-2xl xl:text-3xl"
                                style={{
                                    fontFamily: 'Pretendard, sans-serif',
                                    fontWeight: 700,
                                    lineHeight: '100%',
                                    letterSpacing: '0%',
                                    textAlign: 'center',
                                    color: '#3B2415',
                                }}
                            >
                                데이터 기반의 체계적인 분석
                            </h3>
                            <p
                                className="text-base md:text-lg lg:text-xl"
                                style={{
                                    fontFamily: 'Pretendard, sans-serif',
                                    fontWeight: 400,
                                    lineHeight: '26px',
                                    letterSpacing: '0%',
                                    textAlign: 'center',
                                    color: '#3B2415',
                                }}
                            >
                                개인별 라이프스타일 정보와 디지털 체질 테스트의 결과를 <br />
                                과학적으로 분석하여 맞춤형 솔루션을 제공합니다.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Second Pair: Images 7 and 8 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="relative w-full"
                    >
                        <Image
                            src="/images/landing/image7.png"
                            alt="개인별 라이프 스타일 정보"
                            width={1200}
                            height={800}
                            className="w-full h-auto"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                            quality={90}
                        />
                        <div
                            className="absolute bottom-0 left-0 right-0 p-16 text-center"
                            style={{ backgroundColor: 'rgba(57, 38, 24, 0.8)' }}
                        >
                            <p
                                className="text-base md:text-lg lg:text-xl"
                                style={{
                                    fontFamily: 'Pretendard, sans-serif',
                                    fontWeight: 700,
                                    lineHeight: '26px',
                                    letterSpacing: '0%',
                                    textAlign: 'center',
                                    verticalAlign: 'middle',
                                    color: '#FFFFFF',
                                }}
                            >
                                개인별 라이프 스타일 정보
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="relative w-full"
                    >
                        <Image
                            src="/images/landing/image8.png"
                            alt="디지털 체질 테스트 분석 결과"
                            width={1200}
                            height={800}
                            className="w-full h-auto"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                            quality={90}
                        />
                        <div
                            className="absolute bottom-0 left-0 right-0 p-16 text-center"
                            style={{ backgroundColor: 'rgba(57, 38, 24, 0.8)' }}
                        >
                            <p
                                className="text-base md:text-lg lg:text-xl"
                                style={{
                                    fontFamily: 'Pretendard, sans-serif',
                                    fontWeight: 700,
                                    lineHeight: '26px',
                                    letterSpacing: '0%',
                                    textAlign: 'center',
                                    verticalAlign: 'middle',
                                    color: '#FFFFFF',
                                }}
                            >
                                디지털 체질 테스트 분석 결과
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Text */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="text-center mt-8 md:mt-24 space-y-2"
                >
                    <p
                        style={{
                            textAlign: 'center',
                            color: '#3B2415',
                        }}
                    >
                        <span
                            className="text-lg md:text-xl lg:text-2xl xl:text-3xl"
                            style={{
                                fontFamily: 'Daehan, sans-serif',
                                fontWeight: 700,
                                lineHeight: '100%',
                                letterSpacing: '0%',
                                textAlign: 'center',
                            }}
                        >
                            "
                        </span>
                        <br />
                        <span
                            className="text-lg md:text-xl lg:text-2xl xl:text-3xl"
                            style={{
                                fontFamily: 'Pretendard, sans-serif',
                                fontWeight: 700,
                                lineHeight: '100%',
                                letterSpacing: '0%',
                                textAlign: 'center',
                            }}
                        >
                            천년의 지혜와 현대의 기술을 접목한
                        </span>
                        <br />
                        <span
                            className="text-lg md:text-xl lg:text-2xl xl:text-3xl"
                            style={{
                                fontFamily: 'Pretendard, sans-serif',
                                fontWeight: 700,
                                lineHeight: '100%',
                                letterSpacing: '0%',
                                textAlign: 'center',
                            }}
                        >
                            가장 이상적인 다이어트 솔루션
                        </span>
                        <br />
                        <span
                            className="text-lg md:text-xl lg:text-2xl xl:text-3xl"
                            style={{
                                fontFamily: 'Daehan, sans-serif',
                                fontWeight: 700,
                                lineHeight: '100%',
                                letterSpacing: '0%',
                                textAlign: 'center',
                            }}
                        >
                            "
                        </span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

