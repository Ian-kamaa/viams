import clsx from 'clsx'

function Office({
  name,
  children,
  invert = false,
}: {
  name: string
  children: React.ReactNode
  invert?: boolean
}) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Westlands" invert={invert}>
          Maddona House 2nd floor suite 208
          <br />
          Westlands Road,Nairobi
          <br/>
          phone Number:  <span>0746629419</span>
        </Office>
      </li>
      <li>
        <Office name="Email" invert={invert}>
          viamsinternational@gmail.com
          <br />
          inquiries@viamsinternational.com
        </Office>
      </li>
    </ul>
  )
}
