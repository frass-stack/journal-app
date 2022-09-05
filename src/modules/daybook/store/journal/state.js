//El state es reactivo.
export default () => ({
    isLoading: true,
    entries:[
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Lorem hic pitata ipsum dolor sit amet consectetur adipisicing elit. Sint dolor accusantium delectus officia dolorem incidunt reiciendis libero iste atque consectetur pariatur, obcaecati architecto cupiditate? Cum mollitia at neque et vero.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus provident dolores aliquam laudantium facilis. Omnis porro est accusamus in, provident vero. Et unde nostrum quos, eaque similique iure aut rerum?',
            picture: null
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Lorem ipsum, malavado dolor sit amet consectetur adipisicing elit. Incidunt nam iusto officia, corrupti harum totam, suscipit ducimus eum iste et reprehenderit pariatur voluptate tempore illo blanditiis necessitatibus culpa consequuntur quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis alias molestias esse quis, laboriosam at. Possimus explicabo qui blanditiis laboriosam. Eligendi error exercitationem officiis in laudantium repellendus similique incidunt quasi.',
            picture: null
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Lorem ipsum, wingardium levioza dolor sit amet consectetur adipisicing elit. Fugiat animi ea officiis dolor? Doloribus reiciendis nisi dolore quod quaerat. At quo consectetur veritatis, provident necessitatibus quia nesciunt in magnam iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eaque quos ipsum quaerat reiciendis eius magnam necessitatibus maxime. Harum at eius placeat, deserunt earum in accusantium perspiciatis consectetur adipisci mollitia.',
            picture: null
        }
    ]
})