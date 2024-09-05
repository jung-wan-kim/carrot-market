This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

# 당근마켓 클론 코딩 프로젝트

이 프로젝트는 인기 있는 중고거래 플랫폼인 당근마켓의 주요 기능을 모방한 클론 코딩 프로젝트입니다. Next.js를 사용하여 개발되었으며, 사용자들이 지역 기반으로 물건을 사고팔 수 있는 플랫폼을 구현하는 것을 목표로 합니다.

## 상세 기능 명세

1. 사용자 인증 및 관리
   - 이메일/비밀번호를 통한 회원가입 및 로그인
   - 카카오, 네이버 등 소셜 미디어를 통한 간편 로그인
   - 사용자 프로필 생성 및 수정 (프로필 사진, 닉네임, 자기소개 등)
   - 비밀번호 재설정 및 계정 복구 기능

2. 상품 관리 시스템
   - 상품 등록: 제목, 카테고리, 가격, 설명, 사진(최대 10장) 업로드
   - 상품 수정 및 삭제 기능
   - 상품 상태 관리 (판매중, 예약중, 판매완료)
   - 상품 검색 기능 (키워드, 카테고리별)
   - 상품 정렬 기능 (최신순, 인기순, 저가순, 고가순)
   - 관심 상품 등록 및 관리

3. 위치 기반 서비스
   - 사용자 위치 설정 및 동네 인증
   - GPS 기반 현재 위치 자동 설정
   - 설정된 동네 반경 내 상품 표시
   - 다중 동네 설정 기능 (최대 2개)

4. 거래 및 채팅 시스템
   - 실시간 1:1 채팅 기능
   - 채팅방 내 이미지 전송 기능
   - 거래 약속 잡기 및 캘린더 연동
   - 채팅방 내 가격 제안 기능
   - 거래 완료 후 후기 및 평점 시스템

5. 커뮤니티 기능
   - 동네생활 게시판 (일상, 질문, 분실/실종 등 카테고리)
   - 게시글 작성, 수정, 삭제 기능
   - 댓글 및 대댓글 시스템
   - 게시글/댓글 좋아요 기능
   - 인기 게시글 노출 기능

6. 알림 시스템
   - 실시간 푸시 알림 (새 메시지, 관심 상품 가격 변동 등)
   - 알림 설정 관리 (알림 종류별 on/off)
   - 알림 히스토리 조회

7. 사용자 활동 관리
   - 판매/구매 내역 조회
   - 관심 상품 목록 관리
   - 차단 사용자 관리
   - 최근 본 상품 목록

8. 보안 및 신고 시스템
   - 부적절한 컨텐츠 신고 기능
   - 사용자 차단 기능
   - 안전거래 가이드라인 제공

9. 관리자 기능
   - 사용자 관리 (정지, 삭제 등)
   - 신고된 컨텐츠 검토 및 조치
   - 전체 거래 통계 및 분석 대시보드

10. 추가 기능
    - 다국어 지원 (한국어, 영어)
    - 다크 모드 지원
    - 접근성 고려한 UI/UX 설계

이 프로젝트를 통해 실제 서비스와 유사한 복잡한 기능들을 구현하며, Next.js, React, 그리고 관련 기술들을 심도 있게 학습할 수 있습니다. 또한, 실시간 데이터 처리, 위치 기반 서비스, 사용자 인증 등 다양한 웹 개발 기술을 종합적으로 적용해볼 수 있는 기회가 될 것입니다.


First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
