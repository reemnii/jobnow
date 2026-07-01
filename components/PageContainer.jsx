export default function PageContainer({ children, className = '' }) {
  return (
    <div className={`mx-auto w-full max-w-[1280px] px-6 md:px-8 ${className}`}>
      {children}
    </div>
  )
}
