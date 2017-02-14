const buildInvite = (from, to) => ({
  type: 'Invite',
  from,
  to,
})

export default buildInvite
