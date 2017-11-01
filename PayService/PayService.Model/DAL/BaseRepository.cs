namespace PayService.Model.DAL
{
	public abstract class BaseRepository<T>
	{
		protected readonly PayServiceDbContext DbContext;

		protected BaseRepository(PayServiceDbContext dbContext)
		{
			DbContext = dbContext;
		}
	}
}