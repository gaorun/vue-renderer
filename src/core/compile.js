/**
 * schema 编译
 */
import { h, emit } from './helper'
import { trim } from 'lodash'

export function compile(schema) {
  let type = typeOf(schema)

  switch (type) {
    case 'array':
      return schema.map((n) => compile(n))
    case 'object':
      return _render(schema)
    default:
      return schema
  }
}

function _render(schema) {
  let props = {}
  let scopedSlots = {}
  let listeners = {}
  let computed = {
    _props() {}
  }

  Object.keys(schema).forEach((key) => {
    const value = schema[key]
    // 插槽
    if (key.startsWith('#')) {
      let name = trim(key, '#')
      scopedSlots[name] = (_, ...args) => compile(value, ...args)
    }

    // 事件
    else if (key.startsWith('@')) {
      let name = trim(key, '@')
      listeners[name] = () => {
        emit()
      }
    }

    // 其他属性
    else {
      props[key] = value
    }
  })

  let wrapper = {
    computed,
    render() {
      return h(schema.as, {
        props: this._props
      })
    }
  }

  return h(wrapper, {
    props,
    scopedSlots,
    listeners
  })
}

function typeOf(obj) {
  const maps = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  }
  return maps[toString.call(obj)]
}
