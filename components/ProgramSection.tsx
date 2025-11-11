'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import { CheckCircle2 } from 'lucide-react';

export default function ProgramSection() {
    return (
        <section
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
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-24"
                        style={{ color: '#3b2415' }}
                    >
                        Program
                    </h2>

                    {/* First Text Block */}
                    <div className="mb-4 md:mb-16">
                        <p
                            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold inline-block"
                            style={{ color: '#3b2415' }}
                        >
                            도안재는 당신의 몸을 <br />이해하는 것부터 시작합니다.
                        </p>

                    </div>

                    {/* Vertical Separator */}
                    <div
                        className="w-px h-8 md:h-12 mx-auto mb-4 md:mb-16"
                        style={{ backgroundColor: '#3b2415' }}
                    />

                    {/* Second Text Block */}
                    <div className="mb-6 md:mb-24">
                        <p
                            className="text-lg sm:text-xl md:text-2xl lg:text-3xl inline-block"
                            style={{ color: '#3b2415' }}
                        >
                            개인의 체질과 체성분은 물론 <br /> 라이프스타일까지 모두 고려한 <br /> <strong> 맞춤형 테라피 솔루션 </strong>
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
                                    className="text-lg sm:text-xl md:text-2xl font-bold mb-2"
                                    style={{ color: '#3b2415' }}
                                >
                                    한의학을 접목한 1:1 컨설팅
                                </h3>
                                <p
                                    className="text-base sm:text-lg leading-relaxed"
                                    style={{ color: '#3b2415' }}
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
                                className="text-base sm:text-lg md:text-xl font-medium"
                                style={{ color: '#ffffff' }}
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
                                className="text-base sm:text-lg md:text-xl font-medium"
                                style={{ color: '#ffffff' }}
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
                                className="text-lg sm:text-xl md:text-2xl font-bold mb-2"
                                style={{ color: '#3b2415' }}
                            >
                                데이터 기반의 체계적인 분석
                            </h3>
                            <p
                                className="text-base sm:text-lg leading-relaxed"
                                style={{ color: '#3b2415' }}
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
                                className="text-base sm:text-lg md:text-xl font-medium"
                                style={{ color: '#ffffff' }}
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
                                className="text-base sm:text-lg md:text-xl font-medium"
                                style={{ color: '#ffffff' }}
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
                        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center leading-relaxed"
                        style={{ color: '#3b2415' }}
                    >
                        "<br />
                        천년의 지혜와 현대의 기술을 접목한<br />
                        가장 이상적인 다이어트 솔루션<br />
                        "
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

