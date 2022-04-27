import { FiEdit } from 'react-icons/fi'
import { AiOutlineDelete } from 'react-icons/ai'
import { Row, Left, Right, Icons } from './InputElements'

const VocabularyItem = ({ item, handleDelete, handleEdit }) => {
    return (
        <Row key={item.id}>
            <Left>{item.word}</Left>
            <Right>{item.translation}</Right>
            <Icons>
                <FiEdit onClick={(e) => handleEdit(e, item)} style={{ marginRight: "20px", cursor: "pointer", color: "#8E3FFF" }} />
                <AiOutlineDelete style={{ cursor: "pointer", color: "#8E3FFF" }} onClick={(e) => handleDelete(e, item.id)} />
            </Icons>
        </Row>
    )
}

export default VocabularyItem