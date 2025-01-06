export default function MenuItem({item}) {
    return (
        <div className='d-flex my-2'>
            <div className="menu-item-icon" style={{ width: 30, height: 30 }}>
                {item.icon}
            </div>
            <p className='menu-item-text mx-3' style={{ fontSize: 18, }}> {item.name}</p>
        </div>
    )
}