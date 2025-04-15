"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import {
  Check,
  ArrowRight,
  Quote,
  MessageCircle,
  Brain,
  Shield,
  Lock,
  Users,
  Clock,
  Zap,
  Puzzle,
  Compass,
  Anchor,
  Sparkles,
  Frown,
  Smile,
  Layers,
  Shuffle,
  Facebook,
  Instagram,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import CookieConsent from "@/components/cookie-consent"
import LaunchAlert from "@/components/launch-alert"

export default function Home() {
  const [isAlertOpen, setIsAlertOpen] = useState(false)

  const openAlert = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsAlertOpen(true)
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* 헤더 부분 수정 */}
      <header className="sticky top-0 z-40 w-full border-b bg-white shadow-sm">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="TTM LOVE AI Relationship Coaching Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="text-2xl font-playfair font-bold gradient-heading">TTM LOVE AI</span>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* 히어로 섹션 수정 */}
        <section className="relative py-24 md:py-36 bg-gradient-to-b from-white to-rose-50">
          <div className="container max-w-4xl mx-auto text-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold tracking-tight leading-tight">
                Dating Skills That Make You More Attractive
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We offer free relationship columns before you sign up. We recommend reading our free content before
                making a decision.
              </p>
              <div className="flex justify-center mt-10">
                <Link href="/column">
                  <Button
                    size="lg"
                    className="bg-rose-500 hover:bg-rose-600 rounded-full px-8 py-7 h-auto font-medium text-lg shadow-md"
                  >
                    Get Free Columns
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Do any of these sound familiar?</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* 카드 스타일 수정 (문제 섹션) */}
              <Card className="card-hover shadow-card border-0">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                    <Image
                      src="/images/logo.png"
                      alt="TTM LOVE AI Dating Difficulties Solution"
                      width={28}
                      height={28}
                      className="h-7 w-auto"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Dating Difficulties</h3>
                  <p className="text-gray-600">
                    Finding it hard to make meaningful connections on dating apps and lacking confidence in first
                    meetings?
                  </p>
                </CardContent>
              </Card>
              <Card className="card-hover shadow-card border-0">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                    <MessageCircle className="h-6 w-6 text-rose-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Communication Issues</h3>
                  <p className="text-gray-600">
                    Do conversations with your partner often lead to misunderstandings and conflict?
                  </p>
                </CardContent>
              </Card>
              <Card className="card-hover shadow-card border-0">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                    <Frown className="h-6 w-6 text-rose-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Post-Breakup Pain</h3>
                  <p className="text-gray-600">
                    Struggling to process emotions after a breakup and finding it difficult to regain confidence for a
                    new start?
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Additional 12 relationship challenges */}
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="card-hover shadow-card border-0">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                    <Lock className="h-6 w-6 text-rose-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Trust Issues</h3>
                  <p className="text-gray-600">
                    Past betrayals making it difficult to trust your current partner, even when they've done nothing
                    wrong?
                  </p>
                </CardContent>
              </Card>
              <Card className="card-hover shadow-card border-0">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                    <Anchor className="h-6 w-6 text-rose-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Commitment Fears</h3>
                  <p className="text-gray-600">
                    Feeling anxious when relationships get serious, and finding yourself pulling away when things
                    progress?
                  </p>
                </CardContent>
              </Card>
              <Card className="card-hover shadow-card border-0">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                    <Layers className="h-6 w-6 text-rose-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Emotional Walls</h3>
                  <p className="text-gray-600">
                    Struggling to open up emotionally and share your true feelings, even with someone you care about?
                  </p>
                </CardContent>
              </Card>
              <Card className="card-hover shadow-card border-0">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                    <Zap className="h-6 w-6 text-rose-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Fading Spark</h3>
                  <p className="text-gray-600">
                    Noticing the excitement and passion in your relationship has diminished, leaving you wondering if
                    it's normal?
                  </p>
                </CardContent>
              </Card>
              <Card className="card-hover shadow-card border-0">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                    <Clock className="h-6 w-6 text-rose-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Long-Distance Struggles</h3>
                  <p className="text-gray-600">
                    Finding it challenging to maintain connection and intimacy when physical distance separates you?
                  </p>
                </CardContent>
              </Card>
              <Card className="card-hover shadow-card border-0">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                    <Puzzle className="h-6 w-6 text-rose-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Compatibility Concerns</h3>
                  <p className="text-gray-600">
                    Wondering if differences in values, goals, or lifestyles mean you're not right for each other?
                  </p>
                </CardContent>
              </Card>
              <Card className="card-hover shadow-card border-0">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                    <Users className="h-6 w-6 text-rose-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Different Love Languages</h3>
                  <p className="text-gray-600">
                    Feeling unloved despite your partner's efforts because you express and receive love in different
                    ways?
                  </p>
                </CardContent>
              </Card>
              <Card className="card-hover shadow-card border-0">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                    <Compass className="h-6 w-6 text-rose-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Lost Identity</h3>
                  <p className="text-gray-600">
                    Feeling like you've lost yourself in your relationship and struggling to maintain your independence?
                  </p>
                </CardContent>
              </Card>
              <Card className="card-hover shadow-card border-0">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                    <Shuffle className="h-6 w-6 text-rose-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Repeating Patterns</h3>
                  <p className="text-gray-600">
                    Finding yourself in the same relationship problems over and over, despite changing partners?
                  </p>
                </CardContent>
              </Card>
              <Card className="card-hover shadow-card border-0">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                    <Sparkles className="h-6 w-6 text-rose-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Unrealistic Expectations</h3>
                  <p className="text-gray-600">
                    Comparing your relationship to idealized versions in media and feeling disappointed with reality?
                  </p>
                </CardContent>
              </Card>
              <Card className="card-hover shadow-card border-0">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                    <Smile className="h-6 w-6 text-rose-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">People-Pleasing</h3>
                  <p className="text-gray-600">
                    Constantly prioritizing your partner's needs over your own and struggling to set healthy boundaries?
                  </p>
                </CardContent>
              </Card>
              <Card className="card-hover shadow-card border-0">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                    <Shield className="h-6 w-6 text-rose-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Past Trauma Impact</h3>
                  <p className="text-gray-600">
                    Finding that past relationship wounds or childhood experiences are affecting your current
                    relationship?
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Founder Story Section */}
        <section id="story" className="py-20 bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Love Story</h2>

            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-lg italic text-gray-700">Hello, I'm the founder of TTM Love AI.</p>
              </div>

              {/* 1. 마음의 여정 */}
              <div className="mb-16">
                <div className="flex items-center mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 mr-4">
                    <span className="font-bold text-rose-500">1</span>
                  </div>
                  <h3 className="text-2xl font-bold">The Journey of the Heart</h3>
                </div>

                <div className="mb-8">
                  <p className="text-gray-600 mb-4">
                    At 18, I experienced my first relationship, but it didn't go as planned and eventually ended. When
                    we broke up, I felt like I had lost my world.
                  </p>
                  <p className="text-gray-600">
                    At that point, I began to wonder: How can I have a successful relationship? If I meet someone
                    special again, what should I do? Is there a way to become someone who is truly loved by their
                    partner?
                  </p>
                </div>

                <div className="bg-rose-50 p-6 rounded-lg border-l-4 border-rose-500 mb-8">
                  <h4 className="font-bold text-lg mb-4">Key Questions</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-rose-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>How can I avoid failure in my next relationship?</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-rose-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>When I meet someone special, how can I make sure not to miss the opportunity?</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-rose-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Is there a way to be 100% loved by someone?</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* 2. 사랑의 진정한 길 찾기 */}
              <div className="mb-16">
                <div className="flex items-center mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 mr-4">
                    <span className="font-bold text-rose-500">2</span>
                  </div>
                  <h3 className="text-2xl font-bold">Finding the True Path to Love</h3>
                </div>

                <div className="mb-8">
                  <p className="text-gray-600 mb-4">
                    After the breakup, I searched the internet for "how to date." I wondered if there was a way to
                    become someone who is truly loved.
                  </p>
                  <p className="text-gray-600 mb-4">
                    When I couldn't find the answers I was looking for, I tried a different approach. Thinking that
                    complete dedication was the answer, I gave everything to my next partner. But I was wrong, and I
                    failed again.
                  </p>
                  <p className="text-gray-600">
                    It was painful, but through this experience, I learned an important lesson: approaching
                    relationships without proper knowledge doesn't work.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-rose-50 to-white p-6 rounded-lg mb-8">
                  <h4 className="font-bold text-lg mb-4">Realization</h4>
                  <p className="text-gray-600 mb-4">
                    This realization led me to study relationship psychology more deeply. I discovered that successful
                    relationships aren't about blind dedication or following generic advice from the internet, but about
                    understanding human psychology, communicating effectively, and developing the right skills.
                  </p>
                  <div className="flex">
                    <Quote className="h-8 w-8 text-rose-300 mr-3 flex-shrink-0" />
                    <p className="italic text-gray-700">
                      "The key is not just finding the right person, but becoming the right person and understanding the
                      principles that make relationships successful."
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. 사랑의 변화 */}
              <div className="mb-16">
                <div className="flex items-center mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 mr-4">
                    <span className="font-bold text-rose-500">3</span>
                  </div>
                  <h3 className="text-2xl font-bold">The Transformation of Love</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-bold text-lg mb-4">A Changed Life</h4>
                    <p className="text-gray-600 mb-4">
                      After that, my life changed. I gained confidence and certainty that I could have successful
                      relationships.
                    </p>
                    <p className="text-gray-600">
                      I established a comprehensive relationship psychology theory. Love was no longer something to fear
                      but a gift that made me happy. After establishing the theory, I applied it to myself, and my life
                      completely transformed.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-4">Amazing Results</h4>
                    <p className="text-gray-600 mb-4">
                      It may be hard to believe, but since then, I haven't experienced a failed relationship.
                    </p>
                    <p className="text-gray-600">
                      The principles I discovered have consistently led to healthy and satisfying relationships not only
                      for me but for everyone who has applied them correctly. This is why I'm passionate about sharing
                      these insights through TTM LOVE AI.
                    </p>
                  </div>
                </div>
              </div>

              {/* 4. 사랑의 예술 */}
              <div className="mb-16">
                <div className="flex items-center mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 mr-4">
                    <span className="font-bold text-rose-500">4</span>
                  </div>
                  <h3 className="text-2xl font-bold">The Art of Love</h3>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-lg mb-4">Research and Discovery</h4>
                  <p className="text-gray-600 mb-4">
                    After finding the answers, I began researching the "right way" to approach relationships. I tried to
                    understand how people fall in love and maintain that love.
                  </p>
                  <p className="text-gray-600">
                    I focused not just on finding the right person, but on becoming the right person. I discovered that
                    there are patterns and principles that can greatly enhance your chances of building successful
                    relationships.
                  </p>
                </div>

                <div className="bg-rose-50 p-6 rounded-lg mb-8">
                  <h4 className="font-bold text-lg mb-4">Our Mission</h4>
                  <p className="text-gray-600 mb-4">
                    TTM LOVE AI was created to share these insights and help others avoid the pain of failed
                    relationships.
                  </p>
                  <p className="text-gray-600 mb-4">
                    We combine relationship psychology and artificial intelligence to provide personalized counseling
                    services tailored to your specific situation.
                  </p>
                  <p className="text-gray-600">
                    Our goal is to help you develop the skills and understanding needed to build healthy, loving
                    relationships where you are truly valued by your partner.
                  </p>
                </div>
              </div>

              {/* 5. 당신의 사랑 이야기 시작하기 */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 mr-4">
                    <span className="font-bold text-rose-500">5</span>
                  </div>
                  <h3 className="text-2xl font-bold">Start Your Love Story</h3>
                </div>

                <div className="bg-gradient-to-r from-rose-100 to-rose-50 p-6 rounded-lg mb-8">
                  <h4 className="font-bold text-lg mb-4">Our Recommendations</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-rose-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Before signing up for paid counseling, read our free relationship columns. Most relationship
                        concerns are already addressed in these columns.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-rose-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        The free columns alone can provide insights and solutions to many relationship issues.
                        Experience TTM LOVE AI's approach through these columns.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-rose-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Follow TTM LOVE AI on Facebook and Instagram. You can gain more insights through various
                        relationship advice and real case analyses.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-rose-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        We regularly share relationship tips and success stories on social media, so following us will
                        help with continuous relationship improvement.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <Link href="/column">
                  <Button size="lg" className="bg-rose-500 hover:bg-rose-600">
                    Get Free Relationship Columns
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Service Introduction Section */}
        <section id="services" className="py-20 bg-gradient-to-b from-white to-rose-50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">TTM LOVE AI Services (Coming in April)</h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
              TTM LOVE AI is developing relationship improvement services based on scientific methodology and
              relationship psychology. Currently, we only offer free relationship columns.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <Card className="card-hover shadow-card border-0">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                    <Brain className="h-6 w-6 text-rose-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">AI-Based Analysis</h3>
                  <p className="text-gray-600">
                    We use the latest AI technology to deeply analyze your relationship patterns and situations.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover shadow-card border-0">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                    <MessageCircle className="h-6 w-6 text-rose-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Personalized Counseling</h3>
                  <p className="text-gray-600">
                    We provide personalized relationship counseling tailored to your unique situation and goals.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover shadow-card border-0">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                    <Shield className="h-6 w-6 text-rose-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Scientific Approach</h3>
                  <p className="text-gray-600">
                    We provide advice based on proven relationship psychology theories and research findings.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-center mb-8">How to Use AI Counseling Services</h3>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-rose-100">
                    <span className="text-2xl font-bold text-rose-500">1</span>
                  </div>
                  <h4 className="text-lg font-bold mb-2">Get Free Columns</h4>
                  <p className="text-gray-600">
                    First, experience TTM LOVE AI's approach through our free relationship columns.
                  </p>
                </div>
                <div className="text-center">
                  <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-rose-100">
                    <span className="text-2xl font-bold text-rose-500">2</span>
                  </div>
                  <h4 className="text-lg font-bold mb-2">Request Counseling</h4>
                  <p className="text-gray-600">
                    After receiving the columns, get information about AI counseling services via email.
                  </p>
                </div>
                <div className="text-center">
                  <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-rose-100">
                    <span className="text-2xl font-bold text-rose-500">3</span>
                  </div>
                  <h4 className="text-lg font-bold mb-2">Personalized Counseling</h4>
                  <p className="text-gray-600">AI analyzes your situation and provides tailored relationship advice.</p>
                </div>
                <div className="text-center">
                  <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-rose-100">
                    <span className="text-2xl font-bold text-rose-500">4</span>
                  </div>
                  <h4 className="text-lg font-bold mb-2">Relationship Improvement</h4>
                  <p className="text-gray-600">
                    Implement the provided strategies to improve your relationships and find happiness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA 섹션 수정 */}
        <section className="py-24 bg-gradient-to-r from-rose-500 to-indigo-500 text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Get Your Free Columns Now</h2>
            <p className="max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
              Improve your relationships with valuable advice based on relationship psychology. Register your email now
              to receive personalized relationship columns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/column">
                <Button
                  size="lg"
                  className="bg-white text-rose-500 hover:bg-gray-100 rounded-full px-8 py-6 h-auto font-medium text-base shadow-md"
                >
                  Get Free Columns
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is TTM LOVE AI service?</AccordionTrigger>
                  <AccordionContent>
                    TTM LOVE AI currently provides free relationship columns and is developing personalized relationship
                    counseling services that combine relationship psychology and AI technology. The official service is
                    scheduled to launch in April 2025.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How can I receive free columns?</AccordionTrigger>
                  <AccordionContent>
                    When you register your email address, a relationship column will be sent to your email once. The
                    column is customized according to the relationship status you select.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Are the columns really free?</AccordionTrigger>
                  <AccordionContent>
                    Yes, TTM LOVE AI columns are completely free. Just register your email address to receive columns
                    with valuable relationship advice. AI counseling services will be provided as a separate paid
                    service.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>When will the AI counseling service be launched?</AccordionTrigger>
                  <AccordionContent>
                    The AI counseling service is scheduled to officially launch in April 2025. To be the first to
                    receive launch news, please sign up for our free relationship columns.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/images/logo.png"
                  alt="TTM LOVE AI Footer Logo"
                  width={32}
                  height={32}
                  className="h-6 w-auto"
                />
                <span className="text-xl font-bold bg-gradient-to-r from-rose-600 to-rose-800 bg-clip-text text-transparent">
                  TTM LOVE AI
                </span>
              </div>
              <p className="text-gray-400">AI-based personalized relationship counseling service</p>
              {/* 푸터 소셜 아이콘 수정 */}
              <div className="flex items-center gap-4 mt-5">
                <a
                  href="https://www.facebook.com/share/18hWcMxFH9/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn w-10 h-10"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5 text-white" />
                </a>
                <a
                  href="https://www.instagram.com/ttmloveai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn w-10 h-10"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/column" className="text-gray-400 hover:text-white transition-colors">
                    Free Relationship Columns
                  </Link>
                </li>
                <li>
                  <a href="#" onClick={openAlert} className="text-gray-400 hover:text-white transition-colors">
                    AI Relationship Counseling
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Legal Information</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/legal/terms" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/legal/privacy" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/legal/cookies" className="text-gray-400 hover:text-white transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2025 TTM AI LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <CookieConsent />
      <LaunchAlert isOpen={isAlertOpen} onClose={() => setIsAlertOpen(false)} />
    </div>
  )
}
