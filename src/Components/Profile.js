import React from 'react'
import './Profile.css'

const Profile = () => {
return (

<div className='content'>
<div>
<img src="data:image/jpeg;base64,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"/>
</div>

<div>
  ava+description
</div>
<div>
  My posts
</div>
<div>
  Mew post
</div>
<div>
  post 1
</div>
<div>
  post 2
</div>
</div>
 )
}

export default Profile