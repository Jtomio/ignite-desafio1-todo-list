import {BsTrash } from 'react-icons/bs'
import styles from './TrashButton.module.css'
import { ButtonHTMLAttributes } from 'react'

export function TrashButton({...rest}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <div>
      <button className={styles.trashButton} {...rest}>
      <BsTrash size={16} />
      </button>
    </div>
  )
}