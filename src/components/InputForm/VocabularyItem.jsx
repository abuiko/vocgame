
import { AiOutlineDelete } from 'react-icons/ai'
import { Row, Left, Right, Icons } from './InputElements'

const VocabularyItem = ({ item, handleDelete }) => {
    return (
        <Row key={item.id}>
            <Left>{item.word}</Left>
            <Right>{item.translation}</Right>
            <Icons>
                <AiOutlineDelete style={{ cursor: "pointer", color: "#8E3FFF" }} onClick={(e) => handleDelete(e, item.id)} />
            </Icons>
        </Row>
    )
}

export default VocabularyItem