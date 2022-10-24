import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() =>
  import('./DynamicallyLoadedComponent').catch(() => {
    return () => null
  })
)

const Component = () => {
  return <div style={{border: '1px solid #0c0', padding: '16px'}}>
    Dynamic component:
    <DynamicComponent />
    </div>
}

export default Component
