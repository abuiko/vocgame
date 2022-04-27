import { Form, Text, Button } from './InputElements'

const AddVocabulary = ({ word, translation, handleKeyDown, handleText, handleTranslation, addResult }) => {
    return (
        <Form>
            <Text
                type="text"
                name="word"
                value={word}
                id="word"
                onChange={(e) => handleText(e)}
                onKeyDown={handleKeyDown}
                placeholder="Word"
                required />
            <Text
                type="text"
                name="translation"
                value={translation}
                id="translation"
                onChange={(e) => handleTranslation(e)}
                onKeyDown={handleKeyDown}
                placeholder="Translation"
                required />
            <Button onClick={addResult}>Add</Button>
        </Form>
    )
}

export default AddVocabulary