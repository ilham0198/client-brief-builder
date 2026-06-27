'use client'
import { useState, useRef, useEffect } from 'react'

interface Option {
  value: string
  label: string
}

interface CustomDropdownProps {
  value: string
  onChange: (value: string) => void
  options: Option[]
  placeholder?: string
  className?: string
}

export default function CustomDropdown({ value, onChange, options, placeholder = 'Pilih...', className = '' }: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const selectedOption = options.find(opt => opt.value === value)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (optionValue: string) => {
    onChange(optionValue)
    setIsOpen(false)
  }

  return (
    <div className={`glass-dropdown-list ${className}`} ref={dropdownRef}>
      <div className="glass-dropdown">
        <input
          type="checkbox"
          className="dropdown-toggle"
          checked={isOpen}
          onChange={(e) => setIsOpen(e.target.checked)}
          id={`dropdown-${Math.random().toString(36).substr(2, 9)}`}
        />
        
        <label className="dropdown-header" htmlFor={`dropdown-${Math.random().toString(36).substr(2, 9)}`}>
          <div className="glass-filter"></div>
          <div className="glass-overlay"></div>
          <div className="glass-specular"></div>
          <div className="glass-content">
            <span className="flex-1 truncate">
              {selectedOption ? selectedOption.label : placeholder}
            </span>
            <svg
              className="dropdown-arrow"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </label>

        <div className="dropdown-content">
          <div className="glass-filter"></div>
          <div className="glass-overlay"></div>
          <div className="glass-specular"></div>
          <ul>
            {options.map((option) => (
              <li key={option.value}>
                <div
                  className={`glass-content ${value === option.value ? 'selected' : ''}`}
                  onClick={() => handleSelect(option.value)}
                >
                  <span className="flex-1">{option.label}</span>
                  {value === option.value && (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}