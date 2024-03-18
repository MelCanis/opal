import { useEffect, useState } from "react"
import "./index.sass"
import { sessionSecondary } from "../../../data/session/secondary"
import { getFilters } from "../../../data/session/secondary/tags"
import { Filter } from "../../../data/classes"
import { notempty } from "../../../utils/useful"
import BasicNavMenu from "./basic-nav-menu"

function FilterAdd(data) {
    const { id, filter } = data
    const { getPossibleAttributes, changeTag } = sessionSecondary(s => s)
    const [attributes, setattributes] = useState(getPossibleAttributes().map((i, n) =>  //filter data is not set by default because the possible attributes change each function call
        (filter && filter.attribute) ?
            (filter.attribute.title == i.title && filter.attribute.type == i.type ? { ...i, selected: true } : i)
            : (n == 0 ? { ...i, selected: true } : i)
    ))
    const [filteroptions, setfilters] = useState(filter.filter ? getFilters(filter.attribute.type).map(i => ({ title: i, selected: i == filter.filter })) : null)

    useEffect(_ => {
        const selected = attributes.find(({ selected }) => selected)
        if (selected.type != filter.attribute?.type) {
            changeTag(id, { filter: { ...filter, attribute: { title: selected.title, type: selected.type }, filter: getFilters(selected.type)[0], value: undefined } })
            setfilters(getFilters(selected.type).map((i, n) => ({ title: i, selected: n == 0 })))
        }
    }, [attributes])
    useEffect(_ => {
        if (!filteroptions) return
        const { title } = filteroptions.find(({ selected }) => selected)
        changeTag(id, { filter: { ...filter, filter: title } })
    }, [filteroptions])

    function updateValue({ target }) {
        if (!notempty(target.value)) return;
        changeTag(id, { filter: { ...filter, value: target.value } });
        target.blur()
    }

    return (
        <div className="FilterAdd">
            <BasicNavMenu key={0} options={[attributes, setattributes]} />
            {filteroptions && <div className="entry">
                <BasicNavMenu key={1} options={[filteroptions, setfilters]} />
                {
                    attributes.find(({ selected }) => selected).type == "checkbox" ? <input type="checkbox" defaultChecked={filter.value} onChange={e => changeTag(id, { filter: { ...filter, value: e.target.checked } })} /> :
                        <input type={attributes.find(({ selected }) => selected).type} defaultValue={filter.value} onBlur={updateValue} onKeyDown={e => e.key.toLowerCase() == "enter" && updateValue(e)} />
                }
            </div>}
        </div>
    )
}

export default function TagOptions(data) {
    const { id, title, filter } = data
    const { changeTag, deleteTag } = sessionSecondary(s => s)
    const updateTitle = ({ target }) => { if (!notempty(target.value)) return; changeTag(id, { title: target.value }); target.blur() }
    return (
        <div className="TagOptions">
            <div className="top">
                <input type="text" className="tag-title-editor" defaultValue={title} onBlur={updateTitle} onKeyDown={e => e.key.toLowerCase() == "enter" && updateTitle(e)} />
                <button onClick={_ => deleteTag(id)}>Delete Tag</button>
            </div>
            {!filter ? <button onClick={_ => changeTag(id, { filter: new Filter() })}>Add Filter</button>
                : <button onClick={_ => changeTag(id, { filter: null })}>Remove Filter</button>}
            {filter && <FilterAdd {...data} />}
        </div>
    )
}