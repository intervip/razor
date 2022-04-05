using Intervip.Razor.StyleAttributes;

using Microsoft.AspNetCore.Components;

using System.Linq.Expressions;

namespace Intervip.Razor.Components;

public partial class TableColumn<TItem> : ComponentBase
{
	private Func<TItem, object>? compiledExpression;

	[CascadingParameter]
	public Table<TItem>? ParentTable { get; set; }

	[Parameter]
	public string? Header { get; set; }

	[Parameter]
	public int? Width { get; set; }

	[Parameter, EditorRequired]
	public Expression<Func<TItem, object>?>? Expression { get; set; }

	protected override void OnInitialized()
	{
		ParentTable?.AddTableRow(this);
		base.OnInitialized();
	}

	protected override void OnParametersSet()
	{
		compiledExpression = Expression?.Compile();
		base.OnParametersSet();
	}

	internal object GetCellValue(TItem item)
	{
		ArgumentNullException.ThrowIfNull(compiledExpression);
		return compiledExpression(item);
	}
}
