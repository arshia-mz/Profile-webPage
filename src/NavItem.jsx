export default function NavItem({children,active})
{
    return <a href={`#${children.toLowerCase()}`}><li className={` ${active ? 'active' : 'nav-item'}`}>
        {children}
    {active && <div className='active-line'></div>}
    </li></a>
}