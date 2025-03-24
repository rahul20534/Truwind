  import React, { useState, useEffect } from 'react'
  import styles from './ConfirmUsers.module.css'

  const API_BASE_URL = window.location.hostname === 'localhost' 
      ? 'http://localhost:8080' 
      : 'https://truward-server.onrender.com';


  const ConfirmUsers = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await fetch(`${API_BASE_URL}/api/membership`)
          const data = await response.json()
          console.log(data.confirmedMembers)
          if (data.confirmedMembers) {
            setUsers(data.confirmedMembers)
          } else {
            console.error('No confirmed members data found:', data)
          }
        } catch (error) {
          console.error('Error fetching users:', error)
          setError(error)
        } finally {
          setLoading(false)
        }
      }
      
      fetchUsers()
    }, [])

    if (loading) {
      return <div className={styles.loadingContainer}>Loading...</div>
    }

    if (error) {
      return <div className={styles.errorContainer}>Error: {error.message}</div>
    }

    const handleDownloadCSV = () => {
      if (!users || users.length === 0) {
        alert('No data available to download.')
        return
      }
    
      // Define CSV headers
      const headers = ['Name', 'Email', 'Work Profile', 'Phone', 'Location', 'LinkedIn', 'Created At']
    
      // Create CSV content
      const csvData = [
        headers.join(','), // Add headers to the first row
        ...users.map((user) =>
          [
            user.name,
            user.email,
            user.workProfile,
            user.phone,
            user.cityState,
            user.linkedinUrl,
            new Date(user.createdAt).toLocaleDateString(), // Format date if needed
          ]
            .map((value) => `"${value || ''}"`) // Handle empty/null values gracefully
            .join(',')
        ),
      ].join('\n')
    
      // Create blob and download link
      const blob = new Blob([csvData], { type: 'text/csv' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `users_${new Date().toISOString().slice(0, 10)}.csv`
      a.click()
    
      // Clean up blob URL to prevent memory leak
      URL.revokeObjectURL(url)
    }
    

    return (
      <div className={styles.confirmUsersContainer}>
        <div className={styles.headerContainer}>
          <h1 className={styles.confirmUsersTitle}>Confirmed Users</h1>
          <button className={styles.downloadButton} onClick={handleDownloadCSV}>Download CSV</button>
        </div>
          <div className={styles.usersContainer}>
            {users.length === 0 ? (
              <div className={styles.noUsersMessage}>No confirmed users found.</div>
            ) : (
              <table className={styles.usersTable}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Location</th>
                    <th>Work Profile</th>
                    <th>LinkedIn</th>
                    <th>Created At</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user._id}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>{user.cityState || user.location}</td>
                      <td>{user.workProfile}</td>
                      <td>{user.linkedinUrl ? <a href={user.linkedinUrl} target="_blank" rel="noopener noreferrer">View Profile</a> : 'N/A'}</td>
                      <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
      </div>
    )
  }

  export default ConfirmUsers